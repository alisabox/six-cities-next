'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Header from '@/components/header';
import { loginAction } from '@/lib/actions/login';
import { AppRoute, getRandomCity, LoginRegexp } from '@/lib/const';
import { loginSchema } from '@/lib/schemas/login';
import { LoginForm } from '@/lib/types/login';
import '@/public/css/main.css';

export default function Login() {
  const router = useRouter();
  const [randomCity, setRandomCity] = React.useState('');

  React.useEffect(() => {
    setRandomCity(getRandomCity());
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  });

  const onSubmit = async (data: LoginForm) => {
    const { successMsg } = await loginAction(data);
    if (successMsg) {
      toast.success(successMsg);
      router.push(AppRoute.ROOT);
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit(onSubmit)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="text"
                  data-testid="email"
                  placeholder="Email"
                  aria-required
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: {
                      value: LoginRegexp.EMAIL,
                      message: 'Must be a valid email address.'
                    }
                  })}
                />
                {errors?.email && (
                  <small className="form__input-error">{errors.email?.message}</small>
                )}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  data-testid="password"
                  placeholder="Password"
                  aria-required
                  {...register('password', {
                    required: 'Password is required.',
                    pattern: {
                      value: LoginRegexp.PASSWORD,
                      message: 'Password must contain only letters and numbers.'
                    }
                  })}
                />
                {errors?.password && (
                  <small className="form__input-error">{errors.password?.message}</small>
                )}
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                data-testid="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" href={AppRoute.ROOT + `?city=${randomCity.toLowerCase()}`}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
