import { mysqlconn } from '../mysql';


export async function GET() {
	let data;
    const connection = await mysqlconn.getConnection();

	await connection.query("SELECT * FROM stats LIMIT 50;")
	.then(async function([rows]) {
		data = rows;
	});
    connection.release()
return new Response(JSON.stringify(data));
}