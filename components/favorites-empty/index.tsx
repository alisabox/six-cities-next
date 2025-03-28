import Footer from '@/components/footer';
import Header from '@/components/header';
import { verifySession } from '@/lib/auth';

export default async function FavoritesScreenEmpty() {
  const { userId } = await verifySession();
  return (
    <div className="page page--favorites-empty">
      <Header isWithUserNavigation={ true } userId={userId} />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
