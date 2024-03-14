import { redirect } from "@sveltejs/kit";
import translate from "translate";
import { PUBLIC_DEEPL_KEY } from '$env/static/public';

translate.engine = "deepl";
translate.key = PUBLIC_DEEPL_KEY;

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try{
			const { token, user } = await locals.pb.collection('player_user').authWithPassword(data.username, data.password);
			return {
				error: false,
			};
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				error_msg: await translate(err.originalError.data.message, "es"),
			};
		}
	},
	reset: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			try {
				await locals.pb.collection('player_user').getFirstListItem('email="'+data.email+'"', {})
				await locals.pb.collection('player_user').requestPasswordReset(data.email);
				return {
					message: true,
					message_text: "Revisa tu correo para restablecer la contraseña de tu cuenta.",
					error: false,
				};

			} catch(err){
				return {
					error: true,
					error_msg: "Correo no existe. Verifica y vuelve a intentar.",
				};
			}

			return {
				error: false,
			};
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				error_msg: await translate(err.originalError.data.message, "es"),
			};
		}
	},
    register: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			await locals.pb.collection('player_user').create(data);
			await locals.pb.collection('player_user').requestVerification(data.email);
			return {
				message: true,
				message_text: "Verifica tu correo para iniciar sesión.",
				error: false,
			};
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				error_msg: await translate(err.originalError.data.message, "es"),
			};
		}
	},
    logout: async ({ locals }) => {
        locals.pb.authStore.clear();
        locals.user = undefined;
	},
	social: async ({ locals, request }) => {
        const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const result = await locals.pb.collection('player_user').listAuthMethods();
			console.log(result);
			return {
				error: false,
			};
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				error_msg: await translate(err.originalError.data.message, "es"),
			};
		}
	}
};

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};