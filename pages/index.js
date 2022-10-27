import CarouselBanner from '../components/carouselBanner/carouselBanner';
import PromotionalBanner from '../components/promotionalBanner/PromotionalBanner';
import BestSellingSection from '../components/Section/BestSellingSection';
import TrendingProductSection from '../components/Section/TrendingProductSection';

export default function Home() {
  return (
    <div style={{ position: 'relative', zIndex: '1' }}>
      <CarouselBanner/>
      <TrendingProductSection />
      <PromotionalBanner/>
      <BestSellingSection />
    </div>
  );
}
