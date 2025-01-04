import Header from '@/components/header';
import MainScreen from '@/components/main';
import '@/public/css/main.css';

export default function Home() {
  return (
    <div className="page page--gray page--main">
      <Header isWithUserNavigation/>
      <MainScreen />
    </div>
  );
}
