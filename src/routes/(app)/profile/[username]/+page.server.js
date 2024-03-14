export async function load({params, url}) {

	// Define meta tags for this specific child page.
	const metaTags = Object.freeze({
		title: params.username, // Page-specific title.
		description: "Cuenta de "+params.username+" que esta registrado en VillerosMC", // This description will override the default.
		openGraph: {
			// OpenGraph meta tags specific to this page.
			type: "website",
			url: new URL(url.pathname, url.origin).href,
			locale: "es_ES",
			title: ""+params.username+" | VillerosMC",
			description: "Cuenta de "+params.username+" que esta registrado en VillerosMC"
		}
	})
	
    const response = await fetch(url.origin+'/api/profile?username='+params.username+'');
    let stats = await response.json();

	return {
		stats,
		username: params.username,
		metaTagsChild: metaTags
	};
}