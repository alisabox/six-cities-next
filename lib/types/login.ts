import { StringMap } from './global';

export interface FormState<T> {
  errors?: StringMap;
  data?: T;
}

export interface LoginForm {
  email: string;
  password: string;
}

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
