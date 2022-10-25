import { useRouter } from "next/router";
import React from "react";

const FilterPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>This is Filter Page</h1>
    </div>
  );
};

export default FilterPage;
