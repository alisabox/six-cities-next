'use client';

import React from 'react';

type AuthType = {
  isAuth: boolean;
  userId?: number;
};

export const AuthContext = React.createContext<AuthType>({ isAuth: false, userId: undefined });

export default function AuthContextProvider({
  children,
  cookie,
}: Readonly<{
  children: React.ReactNode;
  cookie: AuthType;
}>) {
  return (
    <AuthContext.Provider value={cookie}>
      {children}
    </AuthContext.Provider>
  );
}
