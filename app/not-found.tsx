import Footer from '@/components/footer';
import '@/public/css/main.css';

export default function NotFound() {
  return (
    <div className="page page--favorites-empty">
      <main className="page__main page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 style={{ textAlign: 'center' }}>404 Page Not Found</h1>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
