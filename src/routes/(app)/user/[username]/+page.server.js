import { redirect } from "@sveltejs/kit";

export async function load({params, url, locals}) {

	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/auth');
	}

	// Define meta tags for this specific child page.
	const metaTags = Object.freeze({
		title: params.username, // Page-specific title.
		description: "Cuenta de "+params.username+" que esta registrado en VillerosMC", // This description will override the default.
		robots: false,
	})

	return {
		user: locals.pb.authStore.baseModel,
		metaTagsChild: metaTags
	};
}