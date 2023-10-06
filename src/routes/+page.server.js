import { serializeNonPOJOs } from '$lib/utils';
export async function load() {
    const res = await fetch(`https://discord.com/api/v8/invites/H2dGwz8?with_counts=true`);
	const discord = serializeNonPOJOs(await res.json());
	return {
		discord
	};
}