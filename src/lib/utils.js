export const serializeNonPOJOs = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export function roundTo(n, place) {    
	return +(Math.round(n + "e+" + place) + "e-" + place);
}