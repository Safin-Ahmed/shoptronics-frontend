import "./BreadcrumbsCom.module.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

function BreadcrumbsCom({ breadcrumbs }) {
  const router = useRouter();
  const pathsArr = router.asPath.split("/");
  const paths = pathsArr.map((item, i) => {
    if (i === pathsArr.length - 1) {
      if (item.includes("?")) {
        return item.split("?")[0];
      } else {
        return item;
      }
    }
    return item;
  });
  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <Box
      sx={{
        backgroundColor: "#3C1FF4",
        padding: "60px 0 70px 0",
        color: "#fff",
        zIndex: -9,
        marginTop: "140.98px",
      }}
    >
      <Container>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            {paths.map((path, i) => {
              if (i === 0) {
                return (
                  <Link
                    key={i}
                    underline="hover"
                    style={{ color: "#fff !important" }}
                    href="/"
                  >
                    Home
                  </Link>
                );
              }
              return (
                <Typography key={i} underline="hover" color="#fff">
                  {path}
                </Typography>
              );
            })}
          </Breadcrumbs>
        </div>
      </Container>
    </Box>
  );
}

export default BreadcrumbsCom;
