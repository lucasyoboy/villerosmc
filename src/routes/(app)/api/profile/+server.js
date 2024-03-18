import { mysqlconn } from '../mysql';

function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.flat(Infinity).length === 0;
}
export async function GET({ url }) {
	let data = {};
	let username = url.searchParams.get('username');

	try {
		await mysqlconn.query("SELECT * FROM stats WHERE USERNAME='" + username + "'; SELECT isLogged,lastlogin FROM authme WHERE USERNAME='" + username + "'; ")
			.then(async function ([rows]) {
				if(isEmptyArray(rows)){
					Object.assign(data, { error: true });
				}else{
					for (const row of rows) {
						Object.assign(data, ...row, { error: false });
					}
				}
			});
	} catch (err) {
		Object.assign(data, { error: true });
		console.log(err);
	}

	return new Response(JSON.stringify(data));
}