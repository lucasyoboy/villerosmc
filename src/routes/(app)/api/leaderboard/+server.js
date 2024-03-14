import { mysqlconn } from '../mysql';
let data = {};

export async function GET() {

	try {
		await mysqlconn.query("SELECT * FROM stats LIMIT 10;")
		.then(async function([rows]) {
			data = rows;
		});
	  } catch (err) {
		Object.assign(data, { error: true });
	  }

	return new Response(JSON.stringify(data));
}