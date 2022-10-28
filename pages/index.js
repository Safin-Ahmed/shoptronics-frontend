import { getTrendingProducts } from "../api/api";
import CarouselBanner from "../components/carouselBanner/carouselBanner";
import PromotionalBanner from "../components/promotionalBanner/PromotionalBanner";
import BestSellingSection from "../components/Section/BestSellingSection";
import TrendingProductSection from "../components/Section/TrendingProductSection";

export default function Home({ trendingProducts }) {
  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <CarouselBanner />
      <TrendingProductSection products={trendingProducts} />
      <PromotionalBanner />
      <BestSellingSection />
      <BrandSection/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    data: { data: trendingProducts },
  } = await getTrendingProducts();
  return {
    props: {
      trendingProducts,
    },
  };
}
