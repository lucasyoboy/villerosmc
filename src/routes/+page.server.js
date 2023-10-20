export async function load({url}) {

	// Define meta tags for this specific child page.
	const metaTags = Object.freeze({
		title: "Un Servidor de Minecraft", // Page-specific title.
		description: "Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores.", // This description will override the default.
		openGraph: {
			// OpenGraph meta tags specific to this page.
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "es_ES",
			title: "VillerosMC | Servidor de Minecraft",
			description: "Villerosmc es el servidor de Minecraft más popular, con diversas modalidades y una activa comunidad, la elección principal de los jugadores."
		}
	})

    const res = await fetch(`https://discord.com/api/v8/invites/H2dGwz8?with_counts=true`);
	const discord = await res.json();
	return {
		metaTagsChild: metaTags, // Return meta tags so they can be consumed by layout.svelte.
		discord
	};
}