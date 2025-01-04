'use server';

import { loginSchema } from '@/lib/schemas/login';
import { LoginForm, LoginFormState } from '@/lib/types/login';
import { convertZodErrors } from '@/lib/utils';

export const loginAction = async (data: LoginForm): Promise<LoginFormState<undefined>> => {
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
