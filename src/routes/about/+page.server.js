export async function load({url}) {

	// Define meta tags for this specific child page.
	const metaTags = Object.freeze({
		title: "Reglas", // Page-specific title.
		description: "Descubre las reglas de nuestro servidor de Minecraft en esta página. Juega de manera segura y respetuosa siguiendo nuestras directrices.", // This description will override the default.
		openGraph: {
			// OpenGraph meta tags specific to this page.
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "es_ES",
			title: "Reglas | VillerosMC",
			description: "Descubre las reglas de nuestro servidor de Minecraft en esta página. Juega de manera segura y respetuosa siguiendo nuestras directrices."
		}
	})
	const res = await fetch(`https://raw.githubusercontent.com/lucasyoboy/villerosmc/main/pages/about.md`);
	const content = await res.text();
	return {
		metaTagsChild: metaTags, // Return meta tags so they can be consumed by layout.svelte.
		content
	};
}