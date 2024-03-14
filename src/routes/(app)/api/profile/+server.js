import { mysqlconn } from '../mysql';
let data = {};

export async function GET({ url }) {
	const username = url.searchParams.get('username');

	try {
		await mysqlconn.query("SELECT uuid FROM luckperms_players WHERE username='" + username + "'")
		.then(async function ([rows]) {
			if (rows.length) {
				await mysqlconn.query("SELECT * FROM stats WHERE player_uuid='" + rows[0].uuid + "'; SELECT money FROM eco_accounts WHERE player_uuid='" + rows[0].uuid + "'; SELECT lastlogin,isLogged FROM authme WHERE username='" + username + "'; SELECT primary_group FROM luckperms_players WHERE uuid='" + rows[0].uuid + "';")
					.then(async function ([rows],) {
						for (const row of rows) {
							Object.assign(data, ...row, { error: false });
						}
					});
			} else {
				Object.assign(data, { error: true });
			}
		});
	  } catch (err) {
		Object.assign(data, { error: true });
	  }

	return new Response(JSON.stringify(data));
}