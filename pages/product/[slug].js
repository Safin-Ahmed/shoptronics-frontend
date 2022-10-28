import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import BreadcrumbsCom from '../../components/breadcrumbs/BreadcrumbsCom';
import ProductStyle from './product.module.css'
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SingleProduct from '../../components/SingleProduct';
import productImage1 from "../../public/static/productg1.jpg";
import productImage2 from "../../public/static/productg2.jpg";
import productImage3 from "../../public/static/productg3.jpg";
import productImage4 from "../../public/static/productg4.jpg";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Image from "next/image";
import HomeHeader from '../../components/Shared/HomeHeader';
import ProductCard from '../../components/Shared/ProductCard';

const Product = () => {

  const productImages =[
    {
      mainProduct: productImage1,
      galleryProduct:[productImage1,productImage2,productImage3,productImage4 ]
    },
  ]
  
  const img = productImages[0].mainProduct
  const [mainImage,setMainImage] = useState(img);
  const [counter,setCounter] = useState(1);

  
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
        "RAM - 16GB",
        "Processor Type - Apple M1 Chip",
        "Graphics Memory - Shared",
        "Display Size (Inch) - 13.3"
      ]
      
    }
   ]

   const changeTheImage= (item)=>{
      return setMainImage(item)
   }

  return (
    <Box>
      <BreadcrumbsCom breadcrumbs="Flexible WareLess Head Phone" />
        
        {/* <Container>
          <Grid container style={{boxShadow: "1px 3px 5px #0000003c",margin:"40px 0"}}>
            <Grid item xs="12" md="12" lg="6">
              <Box style={{textAlign:"center",padding: "40px"}} className={ProductStyle.productLeft}>
              
                <Image width={300} height={300} objectFit="contain" src={mainImage} alt="Name"/>
                <p>N.B. Image may differ with actual product's layout, color, size & dimension. No claim will be accepted for image mismatch.</p>

                <div className={ProductStyle.productGallery}>
                {
                  productImages[0].galleryProduct.map((item,i)=> <Image key={i} src={item} onClick={()=> changeTheImage(item)}  alt="Product Image" width={80}height={80} objectFit="contain" className={ProductStyle.productGalleryImage}/>)
                }
                </div>
              
              </Box>
            </Grid>
            <Grid item xs="12" md="12" lg="6">
              <Box className={ProductStyle.productRight} style={{padding: "40px"}}>
                <div className={ProductStyle.productRightHeader} sx={{display:'flex'}}>
                    <Box className={ProductStyle.productRightHeaderReview} sx={{display:"flex"}}>
                      <Typography variant='span' component="legend">Review:</Typography>
                      <Rating name="read-only" value={3} readOnly /> 
                      <Typography>(99)</Typography>
                    </Box>
                    <Box className={ProductStyle.productRightHeaderIcons} spacing={2} sx={{marginBottom:"10px",display:'flex',gap:"10px"}}>
                      <FavoriteBorderIcon style={{cursor:"pointer"}}/>
                      <ShareOutlinedIcon style={{cursor:"pointer"}}/>
                    </Box>
                </div>
                
                  {ProductInfo.map((product,index)=>{
                    return(
                      <div key="index" className={ProductStyle.productRightInfo}>
                        <Typography variant='h4'>{product.productTitle}</Typography>
                        <Typography variant='h5'>Product Id: <span>{product.productId}</span></Typography>
                        <Typography variant='span' className={ProductStyle.productRightInfoDec}>{product.productDesc}</Typography>
                        <Typography variant='h5'>Product Brand: <span>{product.productBrand}</span></Typography>
                        <Typography variant='h5'>Quick Overview</Typography>
                        
                        {
                          product.productQuickOverview.map((pq,index)=>{
                            return(
                                <div key={index} className={ProductStyle.quickOverview}>
                                 <ul>
                                 <li>{pq}</li>
                                 </ul>
                                </div>
                            )
                          })
                        }
                          <Typography variant='h3'>{product.productPrice}</Typography>
                          <div className={ProductStyle.deviderLine}></div>
                          <Typography variant='h3' ><span className={ProductStyle.productRightPriceDiscount}> {product.productDiscountPrice}</span> <sup className={ProductStyle.productPriceSub}>20%</sup></Typography>
                         <div className={ProductStyle.productRightFooter}> 
                           <div className={ProductStyle.productInputIncre}> 
                              <ArrowBackIosIcon onClick={()=> counter < 1 ? setCounter(0) : setCounter(counter-1)} fontSize='small' style={{color:"rgb(85 79 79)", cursor:"pointer"}}/>
                              <span style={{alignSelf:"center"}}>{counter}</span>
                              <ArrowForwardIosIcon onClick={()=>setCounter(counter+1)} fontSize='small' style={{color:"rgb(85 79 79)",cursor:"pointer"}}/>
                            </div>
                            <Button className={ProductStyle.productbtn}  variant="contained" startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</Button> 
                          </div>
                            
                      </div>
                    );
                  })}
                
              </Box>
            </Grid>
          </Grid>
        </Container> */}

        <Container >
          <Grid container style={{boxShadow: "1px 3px 5px #0000003c",margin:"40px 0 60px 0"}}>
            <Grid item xs="12" md="12" lg="6" style={{alignSelf:"center"}}>
              <Box style={{textAlign:"center",padding: "40px"}} className={ProductStyle.productLeft}>
              
              <Grid container>
                <Grid item xs="3">
                <div className={ProductStyle.productGallery} style={{flexDirection:"column"}}>
                {
                  productImages[0].galleryProduct.map((item,i)=> <Image key={i} src={item} onClick={()=> changeTheImage(item)}  alt="Product Image" width={80}height={80} objectFit="contain" className={ProductStyle.productGalleryImage}/>)
                }
                </div>
                </Grid>
                <Grid item xs="9">
                <Image width={300} height={300} objectFit="contain" src={mainImage} alt="Name"/>
               
                </Grid>
                
              </Grid>
               
              </Box>
            </Grid>
            <Grid item xs="12" md="12" lg="6">
              <Box className={ProductStyle.productRight} style={{padding: "40px"}}>
                <div className={ProductStyle.productRightHeader} sx={{display:'flex'}}>
                    <Box className={ProductStyle.productRightHeaderReview} sx={{display:"flex"}}>
                      <Typography variant='span' component="legend">Review:</Typography>
                      <Rating name="read-only" value={3} readOnly /> 
                      <Typography>(99)</Typography>
                    </Box>
                    <Box className={ProductStyle.productRightHeaderIcons} spacing={2} sx={{marginBottom:"10px",display:'flex',gap:"10px"}}>
                      <FavoriteBorderIcon style={{cursor:"pointer"}}/>
                      <ShareOutlinedIcon style={{cursor:"pointer"}}/>
                    </Box>
                </div>
                
                  {ProductInfo.map((product,index)=>{
                    return(
                      <div key="index" className={ProductStyle.productRightInfo}>
                        <Typography variant='h4'>{product.productTitle}</Typography>
                        <Typography variant='h5'>Product Id: <span>{product.productId}</span></Typography>
                        <Typography variant='span' className={ProductStyle.productRightInfoDec}>{product.productDesc}</Typography>
                        <Typography variant='h5'>Product Brand: <span>{product.productBrand}</span></Typography>
                        <Typography variant='h5'>Quick Overview</Typography>
                        
                        {
                          product.productQuickOverview.map((pq,index)=>{
                            return(
                                <div key={index} className={ProductStyle.quickOverview}>
                                 <ul>
                                 <li>{pq}</li>
                                 </ul>
                                </div>
                            )
                          })
                        }
                         <div className={ProductStyle.productRightPriceBox}>
                         <Typography variant='h3'>{product.productPrice}</Typography>
                          <div className={ProductStyle.deviderLine}></div>
                          <Typography variant='h3' ><span className={ProductStyle.productRightPriceDiscount}> {product.productDiscountPrice}</span> <sup className={ProductStyle.productPriceSub}>20%</sup></Typography>
                         </div>
                         <div className={ProductStyle.productRightFooter}> 
                           <div className={ProductStyle.productInputIncre}> 
                              <ArrowBackIosIcon onClick={()=> counter < 1 ? setCounter(0) : setCounter(counter-1)} fontSize='small' style={{color:"rgb(85 79 79)", cursor:"pointer"}}/>
                              <span style={{alignSelf:"center"}}>{counter}</span>
                              <ArrowForwardIosIcon onClick={()=>setCounter(counter+1)} fontSize='small' style={{color:"rgb(85 79 79)",cursor:"pointer"}}/>
                            </div>
                            <Button className={ProductStyle.productbtn}  variant="contained" startIcon={<ShoppingCartOutlinedIcon />}>Add to Cart</Button> 
                          </div>
                            
                      </div>
                    );
                  })}
                
              </Box>
            </Grid>
          </Grid>

          <HomeHeader subHomeHeader="Related" homeHeader="Related"/>
          <Grid container>
                  {/* [1,2,3,4].map((item)=>{
                    return  <ProductCard/>
                  })
                  <Grid item></Grid> */}
                  {
                    [1,2,3,4].map((i)=>{
                      return (
                          <Grid key={i} item xs="12" md="3" lg="3">
                          <ProductCard/>
                          </Grid>
                        
                      );
                    })
                  }
          </Grid>

         

          
        </Container>

    </Box>
  );
};

export default Product;
