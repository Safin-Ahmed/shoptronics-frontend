import BestSellingSection from '../components/Section/BestSellingSection';
import TrendingProductSection from '../components/Section/TrendingProductSection';

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      <TrendingProductSection />
      <BestSellingSection />
    </div>
  );
}
