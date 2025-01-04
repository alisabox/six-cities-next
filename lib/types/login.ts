import { StringMap } from './global';

export interface LoginFormState<T> {
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
