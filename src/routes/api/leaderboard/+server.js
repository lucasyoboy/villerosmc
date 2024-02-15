import { mysqlconn } from '../mysql';


export async function GET({ url }) {
	let data;

	await mysqlconn.query("SELECT * FROM stats LIMIT 50;")
	.then(async function([rows]) {
		data = rows;
	});

return new Response(JSON.stringify(data));
}