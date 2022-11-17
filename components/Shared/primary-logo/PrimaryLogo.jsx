import { Box } from "@mui/system";
import Image from "next/image";

const PrimaryLogo = ({ alt, width, height }) => {
  return (
    <Box>
      <Image src={"/static/logo.png"} alt={alt} width={width} height={height} />
    </Box>
  );
};

export default PrimaryLogo;
