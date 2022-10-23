import { Box } from '@mui/system';
import Image from 'next/image';
import Logo from '../../../public/static/logo.png';

const PrimaryLogo = ({alt, width, height}) => {
  return (
    <Box>
      <Image src={Logo} alt={alt} width={width} height={height} />
    </Box>
  );
};

export default PrimaryLogo;
