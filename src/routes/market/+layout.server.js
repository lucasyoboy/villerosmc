import { serializeNonPOJOs } from '$lib/utils';

export async function load({url}) {
	let items = [];

    const res = await fetch(`http://134.65.234.251:23333/data/availableData.json`);
	let data = serializeNonPOJOs(await res.json());
	const response = await fetch('https://minecraft-api.vercel.app/api/items');
	const data2 = await response.json();

	data.forEach((e) => {
		let item = data2.find(o => o.namespacedId === e.toLowerCase());
		items.push({name: item.name, id: item.namespacedId, image: item.image})
	});

	// Define meta tags for this specific child page.
	const metaTags = Object.freeze({
		title: "Mercado Negro", // Page-specific title.
		description: "El Mercado Negro es una tienda en línea que ofrece informacion y graficos sobre ítems", // This description will override the default.
		openGraph: {
			// OpenGraph meta tags specific to this page.
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "es_ES",
			title: "Mercado Negro | VillerosMC",
			description: "El Mercado Negro es una tienda en línea que ofrece informacion y graficos sobre ítems"
		}
	})

	return {
		metaTagsChild: metaTags, // Return meta tags so they can be consumed by layout.svelte.
		items
	};
}
