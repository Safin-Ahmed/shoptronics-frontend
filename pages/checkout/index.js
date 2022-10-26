import { Button,FormControl,FormControlLabel,Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Classes from './checkout.module.css';
import TextFieldMUI from '@mui/material/TextField';
import BreadcrumbsCom from "../../components/breadcrumbs/BreadcrumbsCom";
import img from '../../public/static/product-4.png'
import Image from "next/image";

const Checkout = () => {
  return (
    <div>
      <BreadcrumbsCom sx={{zIndex:"-9"}} breadcrumbs= "Cart" />
      <Box>
        <Container>
        <Grid container columnGap={1} sx={{justifyContent:"space-around",marginBottom:"50px" }}>
          <Grid sx={{backgroundColor:"#fff",zIndex:"999", marginTop:"-30px",}} item  xs="12" md="8" lg="6" className={Classes.checkoutLeft} >
          <form>
            <Grid container>
             
                <Grid item xs="12" md="6" lg="6">
                <TextFieldMUI id="outlined-basic" label="First Name" size="medium" variant="outlined" className={Classes.formCheckout}/>
                </Grid>
                <Grid item xs="12" md="6" lg="6">
                <TextFieldMUI id="outlined-basic" label="Last Name" size="medium" variant="outlined" className={Classes.formCheckout}/>
                </Grid>
                <Grid item xs="12" md="6" lg="6">
                <TextFieldMUI id="outlined-basic" label="Email" size="medium" variant="outlined" className={Classes.formCheckout}/>
                </Grid>
                <Grid item xs="12" md="6" lg="6">
                <TextFieldMUI id="outlined-basic" type="text" label="Phone Number" size="medium" variant="outlined" className={Classes.formCheckout}/>
                </Grid>
                <Grid item xs="12" md="12" lg="12">
                <TextFieldMUI id="outlined-basic" label="Street Address" size="medium" variant="outlined" className={Classes.formCheckout}/>
                </Grid>
                <Grid item xs="12" md="12" lg="12">
                <TextFieldMUI type="textarea" id="outlined-basic" label="Note" size="medium" variant="outlined" className={Classes.formCheckout}/>
                </Grid>
              
            </Grid>
            </form>
          </Grid>
          
          <Grid item xs="12" md="6" lg="5" sx={{backgroundColor:"#fff",zIndex:"999", marginTop:"-30px",borderRadius:"3px"}}>
             <Box className={Classes.checkoutRight}>
               
                <div>
                  <Typography variant="h3">Your order</Typography>
                  <div className={Classes.checkoutRightProduct}>
                    <Grid container  spacing={2}   className={Classes.checkoutRightProductitem}>
                      <Grid item xs="3">
                          <Image src={img} alt="Image Product"></Image>
                      </Grid>
                      <Grid item xs="9" sx={{alignSelf:"center"}} className={Classes.checkoutRightProductInfo}>
                        <Typography variant="h5">Flexible WareLess Head Phone</Typography>
                        <Typography> <span className={Classes.checkoutRightProductInfoPrice}></span>$234 X <span className={Classes.checkoutRightProductInfoQuntity}></span>2</Typography>
                      </Grid>
                    </Grid>
                  </div>
                  <ul>
                    <li><span>Subtotal (2 items)</span> <span>$698</span></li>
                    {/* <li><span>Shipping Fee</span> <span>$20</span></li> */}
                  </ul>
                </div>
                <div>
                  <Typography variant="h3">Shipping</Typography>
                  <div className={Classes.checkoutRightinfo}>
                  <FormControl>
                 
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                    
                      <FormControlLabel value="female" control={<Radio />} label="Shipping Free" className={Classes.checkoutRightRadio}/>
                      <FormControlLabel value="male" control={<Radio />} label="Shipping fee $20" className={Classes.checkoutRightRadio}/>

                    </RadioGroup>
                  </FormControl>
                  </div>
                  <ul>
                    <li><span>Subtotal (2 items)</span> <span>$698</span></li>
                    {/* <li><span>Shipping Fee</span> <span>$20</span></li> */}
                  </ul>
                </div>
                <div>
                  <Typography variant="h3">Shipping</Typography>
                  <div className={Classes.checkoutRightinfo}>
                  <FormControl>
                 
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Stripe" className={Classes.checkoutRightRadio}/>
                      <FormControlLabel value="male" control={<Radio />} label="Bkash" className={Classes.checkoutRightRadio}/>
                    </RadioGroup>
                  </FormControl>
                  </div>
                  <ul>
                      <li><span>Total</span> <span>$698</span></li>
                  </ul>
                </div>
                

                
                <div className={Classes.cartRightbtnn}>
                <Button className={Classes.cartRightbtn} variant="contained">Place Order</Button>
                </div>
             </Box>
          </Grid>
        </Grid>
         
        </Container>
      </Box>
    </div>
  );
};

export default Checkout;
