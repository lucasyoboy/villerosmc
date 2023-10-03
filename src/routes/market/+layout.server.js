import { serializeNonPOJOs } from '$lib/utils';

export async function load() {
	let items = [];

    const res = await fetch(`http://134.65.234.251:23333/data/availableData.json`);
	let data = serializeNonPOJOs(await res.json());
	const response = await fetch('https://minecraft-api.vercel.app/api/items');
	const data2 = await response.json();

	data.forEach((e) => {
		let item = data2.find(o => o.namespacedId === e.toLowerCase());
		items.push({name: item.name, id: item.namespacedId, image: item.image})
	});

	return {
		items
	};
}
