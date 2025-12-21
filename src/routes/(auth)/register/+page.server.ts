import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { regSchema } from '../schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		regForm: await superValidate(zod4(regSchema))
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(regSchema));

		if (!form.valid) return fail(400, { form });

		console.log(form.data);

		return { form, msg: 'Registration successful' };
	}
};
