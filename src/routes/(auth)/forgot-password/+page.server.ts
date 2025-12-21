import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { resetPwdSchema } from '../schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		resetPwdForm: await superValidate(zod4(resetPwdSchema))
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(resetPwdSchema));
		if (!form.valid) return fail(400, { form });

		console.log(form.data);

		return { form, msg: 'Password reset email sent' };
	}
};
