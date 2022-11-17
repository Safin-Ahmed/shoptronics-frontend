import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { categoryQuery } from "../../../../lib/queries";
import Loader from "../../Loader";
import CategoryCard from "./categoryCard/categoryCard";

const BottomCategory = ({ setOpen }) => {
  const { loading, error, data } = useQuery(categoryQuery);

  if (loading) {
    return <Loader />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        m: "auto",
        mt: 10,
        overflowY: "auto",
      }}
    >
      {data?.categories?.data?.map((data) => (
        <CategoryCard setOpen={setOpen} key={data.id} category={data} />
      ))}
    </Box>
  );
};
export default BottomCategory;
