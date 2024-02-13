import mysql from 'mysql2/promise';
import { PUBLIC_DATABASE_HOST, PUBLIC_DATABASE_PASSWORD, PUBLIC_DATABASE, PUBLIC_DATABASE_USER } from '$env/static/public';

const mysqlconn = await mysql.createConnection({ 
    host: PUBLIC_DATABASE_HOST,
    user: PUBLIC_DATABASE_USER,
    password: PUBLIC_DATABASE_PASSWORD,
    database: PUBLIC_DATABASE,
	multipleStatements: true
});

export async function GET({ url }) {
	let data = {};
	const username = url.searchParams.get('username');

	await mysqlconn.query("SELECT uuid FROM luckperms_players WHERE username='"+username+"'")
	.then(async function([rows,fields]) {
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