import { serializeNonPOJOs } from '$lib/utils';
export async function load() {
    let status = [];
    const res = await fetch(`https://api.mcsrvstat.us/3/play.villerosmc.net`);
	status = serializeNonPOJOs(await res.json());
	return {
		status: status,
	};
}