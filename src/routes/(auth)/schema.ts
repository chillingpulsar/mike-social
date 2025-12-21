import { z } from 'zod';

export const loginSchema = z.object({
	email: z.email('Must enter a valid email address'),
	pwd: z.string().min(1, 'Must enter a password')
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const regSchema = z
	.object({
		email: z.email('Must enter a valid email address'),
		firstName: z.string().min(1, 'Must enter a first name'),
		middleName: z.string().min(1, 'Must enter a middle name'),
		lastName: z.string().min(1, 'Must enter a last name'),
		pwd: z.string().min(8, 'Must enter a strong password'),
		confirmPwd: z.string()
	})
	.superRefine((x, ctx) => {
		if (x.pwd !== x.confirmPwd) {
			ctx.addIssue({
				code: 'custom',
				message: 'Passwords do not match',
				path: ['confirmPwd']
			});
		}
	});

export type RegSchema = z.infer<typeof regSchema>;

export const resetPwdSchema = z.object({
	email: z.email('Must enter a valid email address')
});

export type ResetPwdSchema = z.infer<typeof resetPwdSchema>;
