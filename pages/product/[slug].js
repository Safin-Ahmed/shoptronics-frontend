import { Box, Container, Grid, Typography } from '@mui/material';
import BreadcrumbsCom from '../../components/breadcrumbs/BreadcrumbsCom';
import ProductStyle from './product.module.css'
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Product = () => {
  
  const ProductInfo = [
    {
      productTitle : "GIGABYTE H110 Processor I5 6th GEN RAM ",
      productPrice : "$14.00",
      productDiscountPrice : "$23.00",
      // productImage : Product,
      productId : "Shoptronics",
      productDesc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or",
      productBrand : "HP",
      productQuickOverview : [
        {
          pq:{
            RAM : "16GB",
            ProcessorType : "Apple M1 Chip",
            GraphicsMemory : "Shared",
            DisplaySize  : "13.3 "
            }
        }
      ]
      
    }
   ]
  return (
    <Grid>
      <BreadcrumbsCom breadcrumbs="Flexible WareLess Head Phone"/>
        <Grid container>
          <Grid item xs="12" md="6" lg="6"></Grid>
          <Grid item xs="12" md="6" lg="6"></Grid>
        </Grid>
        <Container>
          <Grid container>
            <Grid item xs="6" md="6" lg="6">Hello</Grid>
            <Grid item xs="6" md="6" lg="6">
              <Box className={ProductStyle.product}>
                <div className={ProductStyle.productheader} sx={{display:'flex'}}>
                    <Box className={ProductStyle.productheaderReview} sx={{display:"flex"}}>
                      <Typography variant='span' component="legend">Review</Typography>
                      <Rating name="read-only" value={3} readOnly /> 
                      <Typography>(99)</Typography>
                    </Box>
                    <Box className={ProductStyle.productheaderIcons} spacing={2} sx={{display:'flex'}}>
                      <FavoriteBorderIcon/>
                      <ShareOutlinedIcon/>
                    </Box>
                </div>
                
                  {ProductInfo.map((product,index)=>{
                    return(
                      <div key="index" className={ProductStyle.productInfo}>
                        <Typography variant='h4'>{product.productTitle}</Typography>
                        <Typography variant='h5'>Product Id: {product.productId}</Typography>
                        <Typography variant='span'>{product.productDesc}</Typography>
                        <Typography variant='h6'>Product Brand: {product.productBrand}</Typography>
                        <Typography variant='p'>{product.productPrice}</Typography>
                        <Typography variant='p'>{product.productDiscountPrice}</Typography>
                        
                        {

                          product.productQuickOverview.map((pq,index)=>{
                            return(
                                <div key={index}>
                                  {/* <li>{pd.pq}</li> */}
                                  {console.log(pq)}
                                </div>
                            )
                          })
                        }
                        
                      </div>
                    );
                  })}
                
              </Box>
            </Grid>
          </Grid>
        </Container>

    </Grid>
  );
};

export default Product;
