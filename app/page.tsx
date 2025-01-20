import Header from '@/components/header';
import MainScreen from '@/components/main';
import { verifySession } from '@/lib/auth';
import { cities } from '@/lib/const';
import { SearchParams } from '@/lib/types/global';
import { capitalize } from '@/lib/utils';
import '@/public/css/main.css';

export default async function Home({ searchParams }: { searchParams?: Promise<SearchParams> }) {
  const { userId } = await verifySession();
  const cityParam = (await searchParams)?.city;
  const selectedCity = cityParam && !Array.isArray(cityParam) ? capitalize(cityParam) : cities[0];

  return (
    <div className="page page--gray page--main">
      <Header isWithUserNavigation={true} userId={userId} />
      <MainScreen selectedCity={selectedCity}/>
    </div>
  );
}
