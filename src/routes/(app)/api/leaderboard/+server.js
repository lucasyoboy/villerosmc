import { mysqlconn } from '../mysql';

export async function GET() {
	let data = {};

	try {
		await mysqlconn.query("SELECT USERNAME, player_is_online, player_kills, player_deaths FROM stats LIMIT 10;")
		.then(async function([rows]) {
			data = rows;
		});
	  } catch (err) {
		Object.assign(data, { error: true });
	  }

	return new Response(JSON.stringify(data));
}