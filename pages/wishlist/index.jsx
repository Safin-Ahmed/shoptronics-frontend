import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { CancelOutlined, Co2Sharp, ConnectingAirportsOutlined, RemoveCircle } from '@mui/icons-material';
import {
  Alert,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import BottomPagination from '../../components/pagination/BottomPagination';
import Loader from '../../components/UI/Loader';
import { deleteFromWishlist, deleteWishlist, getWishlistByPagination, getWishlists } from '../../lib/queries';

const Wishlist = () => {
  const notify = useStoreActions((action) => action.snackbar.setMessage);
  const auth = useStoreState((state) => state.auth);
  const router = useRouter();

  // !Delete by product id
  const [removeWishlist] = useMutation(deleteFromWishlist, {
    refetchQueries: () => [
          {
            query:  getWishlistByPagination,
            variables: { 
              id: +auth.user.id, 
              pageNumber: parseInt(router.query.page, 10) || 1,
            },
          },
        ],
  })

  const [getWishlists, { loading, error, data }] = useLazyQuery(getWishlistByPagination, {
    variables: { 
      id: +auth.user.id,
      pageNumber: parseInt(router.query.page, 10) || 1,
    },

  });

  useEffect(() => {
    getWishlists()
  }, [])


  //!wishlist id
  const wishlistInfo = data?.wishlists?.data?.map((products) => {
    return products;
  });

  console.log(wishlistInfo)


 

  const deleteWishlistHandler = async (productId) => {
    console.log('product-id', productId)

    const response = await removeWishlist({ variables: { productId: +productId } });

    const { id } = response?.data?.deleteWishlistByProductId?.data;
    if (id) {
      notify({
        message: 'Removed successfully From your wishlist',
        type: 'success',
      });
    } else {
      notify({
        message: 'Operation not successful',
        type: 'warning',
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ m: '180px auto 50px', width: '80%' }}>
      {wishlistInfo?.length > 0 ? (
        <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton>
                  <RemoveCircle />
                </IconButton>
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlistInfo?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <IconButton
                    sx={{ '&:hover': { color: '#ff1111' } }}
                    onClick={() => deleteWishlistHandler(row?.attributes.product?.data?.id)}
                  >
                    <CancelOutlined />
                  </IconButton>
                </TableCell>
                <TableCell>
                  {row?.attributes?.product?.data?.attributes?.title}
                 
                </TableCell>
                <TableCell>
                  {row?.attributes?.product?.data?.attributes?.price}
                 
                </TableCell>
                <TableCell>
                  {row?.attributes?.product?.data?.attributes?.stockStatus === 'in_stock' ?
                  <span style={{color: 'green'}}>IN STOCK</span> :
                  <span style={{color: 'red'}}>STOCK OUT</span>
                }
                  
                </TableCell>
                <TableCell>
                  <Button variant="outlined">Add to cart</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
                 <BottomPagination pagination={{
                  page: data?.wishlists?.meta?.pagination?.page,
                  pageCount: data?.wishlists?.meta?.pagination?.pageCount
                }}/>
                </Box>
       ) : (
        <Alert
          sx={{
            width: '50%',
            m: 'auto',
            py: '10px',
            alignItems: 'center',
          }}
          severity="warning"
        >
          <Typography variant="h6">Your Wishlist in Empty</Typography>
        </Alert>
      )} 
    </Box>
  );
};

export default Wishlist;
