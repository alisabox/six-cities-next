import { z } from 'zod';
import { LoginRegexp } from '@/lib/const';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email('Must be a valid email address.'),
  password: z.string().min(1, { message: 'Password is required.' }).regex(LoginRegexp.PASSWORD, { message: 'Password must contain both letters and numbers.' }),
});
