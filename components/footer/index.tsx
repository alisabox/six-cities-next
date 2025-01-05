import Image from 'next/image';
import Link from 'next/link';
import { AppRoute } from '@/lib/const';
import '@/public/css/main.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Link className="footer__logo-link" href={AppRoute.ROOT}>
        <Image
          className="footer__logo"
          src="/img/logo.svg"
          alt="6 cities logo"
          width={64}
          height={33}
          priority
        />
      </Link>
    </footer>
  );
}
