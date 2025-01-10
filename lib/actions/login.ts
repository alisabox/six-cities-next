'use server';

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
  } else {
    return { successMsg: 'Logged in successfully.' };
  }
};
