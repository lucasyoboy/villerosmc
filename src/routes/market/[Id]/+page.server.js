import request from 'request';
import Papa from 'papaparse';

let csv;
const papaParseConfigObj = {
	header: true,
	dynamicTyping: true
  }
export async function load({params}) {
		request.get(`http://134.65.234.251:23333/data/`+params.Id.toUpperCase()+`.csv`, async function (error, response, body) {
			if (!error && response.statusCode == 200) {
				csv =  Papa.parse(body, papaParseConfigObj);
			}
		});
		const response = await fetch('https://minecraft-api.vercel.app/api/items');
		const data = await response.json();
		let item = data.find(o => o.namespacedId === params.Id);

		return{
			csv,
			item

		}
}