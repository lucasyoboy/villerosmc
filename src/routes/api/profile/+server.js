import { mysqlconn } from '../mysql';

export async function GET({ url }) {
	let data = {};
	const username = url.searchParams.get('username');

	await mysqlconn.query("SELECT uuid FROM luckperms_players WHERE username='"+username+"'")
	.then(async function([rows]) {
		if(rows.length){
			await mysqlconn.query("SELECT * FROM stats WHERE player_uuid='"+rows[0].uuid+"'; SELECT money FROM eco_accounts WHERE player_uuid='"+rows[0].uuid+"'; SELECT lastlogin,isLogged FROM authme WHERE username='"+username+"'; SELECT primary_group FROM luckperms_players WHERE uuid='"+rows[0].uuid+"';")
			.then(async function([rows],) {
				for (const row of rows) {
				Object.assign(data, ...row, {error: false});
			}
		});
		}else{
			Object.assign(data, {error: true});
		}
	});

return new Response(JSON.stringify(data));
}