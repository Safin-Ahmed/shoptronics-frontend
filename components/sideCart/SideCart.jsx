import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Divider, ListItem, Typography } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box } from '@mui/system';
import Image from 'next/image';

function SideCart({ cart, removeItem }) {
  return (
    <Box sx={{ width: '100%' }}>
      <ListItem
        button
        disableRipple
        sx={{ '&:hover': { background: 'transparent' } }}
      >
        <ListItemIcon
          sx={{
            minWidth: '30px',
            fontWeight: '100',
            '&:hover': { color: '#ff0000' },
          }}
          onClick={() => removeItem(cart.id)}
        >
          <HighlightOffIcon />
        </ListItemIcon>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={cart.imgUrl} alt="img" width={'45'} height="45" />
          <Box sx={{ ml: 1, width: '100%' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', fontSize: '17px', color: '#444' }}
            >
              {cart?.title}
            </Typography>
            <Box />
            <Box sx={{ display: 'flex' }}>
              <Typography variant="text" sx={{ fontSize: '16px' }}>
                {cart?.discountPrice ? (
                  <span>${cart?.discountPrice}</span>
                ) : (
                  <span>${cart?.price}</span>
                )}
              </Typography>
              <Typography variant="div" sx={{ mx: 1 }}>
                x
              </Typography>
              <Box> {cart?.quantity}</Box>
            </Box>
          </Box>
        </Box>
      </ListItem>
      <Divider sx={{ width: '95%', m: 'auto' }} />
    </Box>
  );
}
export default SideCart;
