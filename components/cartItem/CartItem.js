import { Add, Remove } from '@mui/icons-material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useStoreActions } from 'easy-peasy';
import Image from 'next/image';
import React, { useState } from 'react';
import Classes from './cartItem.module.css';

function CartItem({ cartItem }) {
  const [counter, setCounter] = useState(1);
  const deleteItem = useStoreActions((action) => action.cart.deleteItem);
  const addItem = useStoreActions((action) => action.cart.addItem);
  const removeItem = useStoreActions((action) => action.cart.removeItem);


  return (
    <Box display="flex" className={Classes.cartBox}>
      <Grid xs="7" md="7" lg="7">
        <Grid display="flex" className={Classes.cartBoxLeft}>
          <Grid xs={3} md={3} lg={3}>
            <div className={Classes.cartBoxLeftImage}>
              <Image
                src={cartItem.imgUrl}
                alt="img"
                width={80}
                height={80}
                objectFit="contain"
              ></Image>
            </div>
          </Grid>
          <Grid xs={9} md={9} lg={9}>
            <div className={Classes.cartBoxLeftInfo}>
              <Typography variant="h6">{cartItem.title}</Typography>
              <Typography variant="span">
                ${' '}
                {cartItem?.discountPrice ? (
                  <span>{cartItem?.discountPrice}</span>
                ) : (
                  <span>{cartItem?.price}</span>
                )}
              </Typography>
              <CloseOutlinedIcon
                sx={{ fontSize: '10px', mx: '3px' }}
                size="small"
              />
              <Typography variant="span">{cartItem.quantity}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs="3" md="3" lg="3">
        <div className={Classes.cartInputBox}>
          <div className={Classes.cartInputIncre}>
            <Remove
              onClick={() => removeItem({ id: cartItem.id })}
              fontSize="small"
              style={{ color: 'rgb(85 79 79)', cursor: 'pointer' }}
            />
            <span style={{ alignSelf: 'center' }}>{cartItem.quantity}</span>
            <Add
              onClick={() =>
                addItem({ id: cartItem.id, variantId: cartItem.variantId })
              }
              fontSize="small"
              style={{ color: 'rgb(85 79 79)', cursor: 'pointer' }}
            />
          </div>

          <Button
            className={Classes.cartBoxRightbtn}
            sx={{ backgroundColor: '#0000ff0d' }}
            variant="outlined"
            startIcon={<CancelOutlinedIcon />}
            onClick={() => deleteItem({id: cartItem.id})}
          >
            Delete
          </Button>
        </div>
      </Grid>
    </Box>
  );
}

export default CartItem;
