'use client';

import Link from 'next/link';
import { AppRoute, AuthorizationStatus } from '@/lib/const';
import '@/public/css/main.css';

export default function UserNavigation() {
  const authorizationStatus = AuthorizationStatus.Auth;
  const userEmail = 'xxxx@gmail.com';
  const handleLogoutClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          authorizationStatus === AuthorizationStatus.Auth
            ?
            <>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" href={AppRoute.FAVORITE}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{userEmail}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" href={AppRoute.ROOT}>
                  <span className="header__signout" onClick={handleLogoutClick}>Sign out</span>
                </Link>
              </li>
            </>
            :
            <li className="header__nav-item">
              <Link className="header__nav-link" href={AppRoute.LOGIN}>
                <span className="header__signout">Sign in</span>
              </Link>
            </li>
        }
      </ul>
    </nav>
  );
}
