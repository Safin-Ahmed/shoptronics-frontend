import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { categoryQuery } from "../../lib/queries";
import DepartmentCard from "../departmentCard/DepartmentCard";
import classes from "./DepartmentSection.module.css";
import Loader from "../../components/UI/Loader";

const DepartmentSection = ({ mouseEnter, mouseLeave, isShow }) => {
  const { loading, error, data } = useQuery(categoryQuery);

  if (loading) {
    return <Loader />;
  }

  const categoryData = data?.categories?.data;

  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={classes.DepartmentSection}
      sx={{ display: { xs: "none", md: "block" } }}
      style={{
        transform: isShow ? "translateY(0)" : "translateY(100px)",
        opacity: isShow ? "1" : "0",
        zIndex: isShow ? "6000" : "-1",
      }}
    >
      <div className={classes.cardContainer}>
        {categoryData?.map((category) => (
          <DepartmentCard key={category.id} category={category} />
        ))}
      </div>
    </Box>
  );
};
export default DepartmentSection;
