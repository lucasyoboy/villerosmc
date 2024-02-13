export async function load({params}) {
    const response = await fetch('http://localhost:5173/api/profile?username='+params.username+'');
    let stats = await response.json();

	return {
		stats,
		username: params.username
	};
}