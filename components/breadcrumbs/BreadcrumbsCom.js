import "./BreadcrumbsCom.module.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

function BreadcrumbsCom({ breadcrumbs }) {
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
      }}
    >
      <Container>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="#fff" href="/">
              Home
            </Link>
            {/* <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
                >
                Core
                </Link> */}
            <Typography color="#fff">{breadcrumbs}</Typography>
          </Breadcrumbs>
        </div>
      </Container>
    </Box>
  );
}

export default BreadcrumbsCom;
