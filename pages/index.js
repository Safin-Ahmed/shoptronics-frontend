// import { Divider } from "@material-ui/core";
import BestSellingSection from "../components/Section/BestSellingSection";
import TrendingProductSection from "../components/Section/TrendingProductSection";

export default function Home() {
  return (
    <div>
      <TrendingProductSection/>
      <BestSellingSection/>
    </div>
  );
}
