import Image from 'next/image';
import Link from 'next/link';
import UserNavigation from '@/components/user-navigation';
import { AppRoute } from '@/lib/const';
// import '@/public/css/main.css';

type HeaderProps = {
  isWithUserNavigation?: boolean;
};

export default function Header({ isWithUserNavigation }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" href={AppRoute.ROOT}>
              <Image
                className="header__logo"
                src="/img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
                priority
              />
            </Link>
          </div>
          {
            isWithUserNavigation ? <UserNavigation/> : ''
          }
        </div>
      </div>
    </header>
  );
}
