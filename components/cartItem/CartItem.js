import { Button,Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Classes from './cartItem.module.css'
import Image from "next/image";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function CartItem({cartItem}) {
  return (
    <Box display="flex" className={Classes.cartBox}>
              <Grid xs="7" md="7" lg="7">
                <Grid display="flex" className={Classes.cartBoxLeft}> 
                    <Grid xs={3} md={3} lg={3}>
                    <div className={Classes.cartBoxLeftImage}><Image src={cartItem.productImage}   alt="img" width={80} height={80} objectFit="contain"></Image></div>
                    </Grid>
                    <Grid xs={9} md={9} lg={9}>
                        <div className={Classes.cartBoxLeftInfo}>
                        <Typography variant="h6">{cartItem.productTitle}</Typography>
                        <Typography variant="span">{cartItem.productPrice}</Typography>
                        </div>
                    </Grid>
                </Grid>
              </Grid>
              <Grid xs="3" md="3" lg="3">
                <div className={Classes.cartBoxRight}>
                  <TextField
                    id="demo-helper-text-aligned"
                    label="Quantity"
                    type="number"
                    size="small"
                  />
                  
                  <Button className={Classes.cartBoxRightbtn} sx={{backgroundColor:"#0000ff0d"}} variant="outlined" startIcon={<CancelOutlinedIcon />}>Delete</Button>
                </div>
              </Grid>
            </Box>
  )
}

export default CartItem