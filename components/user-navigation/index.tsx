import Link from 'next/link';
import { logout } from '@/lib/actions/login';
import { AppRoute } from '@/lib/const';
import { getUserById } from '@/lib/data';
import '@/public/css/main.css';

type Props = {
  userId?: number;
};

export default async function UserNavigation({ userId }: Props) {
  const user = userId ? await getUserById(userId) : null;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          !!user
            ?
            <>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" href={AppRoute.FAVORITE}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{user.email}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" href={AppRoute.ROOT}>
                  <span className="header__signout" onClick={logout}>Sign out</span>
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
