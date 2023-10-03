export async function load() {
	let items = [];

	const response1 = await fetch('http://134.65.234.251:23333/data/availableData.json');
	const itemsServer = await response1.json();

	const response2 = await fetch('https://minecraft-api.vercel.app/api/items');
	const data = await response2.json();

	itemsServer.forEach(e => {
		let item = data.find(o => o.namespacedId === e.toLowerCase());
		items.push({name: item.name, img: item.image, namespacedId: item.namespacedId })
	});

	return{
		items
	}
}