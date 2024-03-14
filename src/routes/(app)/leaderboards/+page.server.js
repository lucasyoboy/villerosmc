export async function load({url}) {

	// Define meta tags for this specific child page.
	const metaTags = Object.freeze({
		title: "Clasificaciónes", // Page-specific title.
		description: "Descubre a los jugadores más sobresalientes que se han registrado en VillerosMC.", // This description will override the default.
		openGraph: {
			// OpenGraph meta tags specific to this page.
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "es_ES",
			title: "Clasificación | VillerosMC",
			description: "Descubre a los jugadores más sobresalientes que se han registrado en VillerosMC."
		}
	})

	const response = await fetch(url.origin+'/api/leaderboard');
    let leaderboard = await response.json();

	return {
		metaTagsChild: metaTags,
		leaderboard
	};
}