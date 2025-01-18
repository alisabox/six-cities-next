import { StringMap } from './global';

export interface FormState<T> {
  errors?: StringMap;
  successMsg?: string;
  data?: T;
  blurs?: StringToBooleanMap;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface StringToBooleanMap {
  [key: string]: boolean;
}

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
