import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import Image from 'next/image';
import img from '../../public/static/headphone.png';
import classes from './PromotionalBanner.module.css';

const PromotionalBanner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: '#F9F3F0',
        borderRadius: 2,
        width: '80%',
        margin: '0 auto',
      }}
    >
      <Box sx={{ p: 5 }}>
        <Card
          sx={{
            display: 'flex',
            bgcolor: '#F9F3F0',
            boxShadow: '0',
            flexDirection: {xs: 'column', md: 'row'},
            width: '100%',
            alignItems: 'center',
            // justifyContent: 'space-between'
            
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', order: {xs: 2, md: '0'} }}>
            <CardContent sx={{ p: 0, }}>
              <Typography variant="text" color="text.secondary" component="p" sx={{fontSize: {xs: '13px', sm: '16px'}}} >
                Enhance Your Music Experience
              </Typography>
              <Typography component="div" variant="h3" className={classes.heading} sx={{fontSize: {xs: '22px', sm: '30px', md: '45px'}}}>
                Enhance Your Music <Box>Experience</Box>
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, mt: 5 }}>
              <Button
                disableRipple
                sx={{ boxShadow: '0', p: '10px', bgcolor: '#3C1FF4' }}
                variant='contained'
              >
                Check it Out!
              </Button>
            </Box>
          </Box>
          <Box sx={{m: 'auto'}} >
          <Image src={img} alt="Live from space album cover" className={classes.img} />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default PromotionalBanner;
