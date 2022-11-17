import Head from "next/head";
import { getBestSellingProducts, getTrendingProducts } from "../api/api";
import CarouselBanner from "../components/carouselBanner/CarouselBanner";
import PartnerBrand from "../components/partnerSection/PartnerBrand";
import PromotionalBanner from "../components/promotionalBanner/PromotionalBanner";
import BestSellingSection from "../components/Section/BestSellingSection";
import TrendingProductSection from "../components/Section/TrendingProductSection";

export default function Home({ trendingProducts, bestSellingProducts }) {
  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <Head>
        <title>Shoptronics - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="ShopTronics is an electronics niche based E-commerce Store , Where a customer can purchase various electronics product such as computers, phones, laptops, tablets, camera, monitors etc and place an order by various payment gateways."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

  return {
    props: {
      trendingProducts,
      bestSellingProducts,
    },
  };
}
