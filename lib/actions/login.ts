'use server';

import bcrypt from 'bcrypt';
import { createSession, deleteSession } from '@/lib/auth';
import { getUserByEmail } from '@/lib/data';
import { loginSchema } from '@/lib/schemas/login';
import { LoginForm, FormState } from '@/lib/types/login';
import { convertZodErrors } from '@/lib/utils';

export const loginAction = async (data: LoginForm): Promise<FormState<LoginForm>> => {
  const { success, error } = loginSchema.safeParse(data);

  if (!success) {
    const errors = convertZodErrors(error);
    return {
      errors,
    };
  }

  const loginErrorRes = { errors: { loginError: 'Invalid login credentials.' } };
  const user = await getUserByEmail(data.email);

  if (!user) {
    return loginErrorRes;
  }

  const passwordMatch = await bcrypt.compare(
    data.password,
    user?.password || '',
  );

  if (!passwordMatch) {
    return loginErrorRes;
  }

  const userId = user.id.toString();
  await createSession(userId);
  return { data };
};

export async function logout() {
  return deleteSession();
}
