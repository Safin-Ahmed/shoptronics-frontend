import { getBestSellingProducts, getTrendingProducts } from "../api/api";
import CarouselBanner from "../components/carouselBanner/carouselBanner";
import PartnerBrand from "../components/partnerSection/PartnerBrand";
import PromotionalBanner from "../components/promotionalBanner/PromotionalBanner";
import BestSellingSection from "../components/Section/BestSellingSection";
import TrendingProductSection from "../components/Section/TrendingProductSection";

export default function Home({ trendingProducts, bestSellingProducts }) {
  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <CarouselBanner />
      <TrendingProductSection products={trendingProducts} />
      <PromotionalBanner />
      <BestSellingSection products={bestSellingProducts} />
      <PartnerBrand />
    </div>
  );
}

export async function getServerSideProps(context) {
  const {
    data: { data: trendingProducts },
  } = await getTrendingProducts();

  const {
    data: { data: bestSellingProducts },
  } = await getBestSellingProducts();

  console.log({ bestSellingProducts });
  return {
    props: {
      trendingProducts,
      bestSellingProducts,
    },
  };
}
