import { serializeNonPOJOs } from '$lib/utils';
export async function load() {
	let discord = [];
	let status = [];
	
	const res_discord = await fetch(`https://discord.com/api/v8/invites/H2dGwz8?with_counts=true`);
	discord = await res_discord.json();

    const res = await fetch(`https://api.mcsrvstat.us/3/play.villerosmc.net`);
	status = serializeNonPOJOs(await res.json());
	return {
		status,
		discord
	};
}