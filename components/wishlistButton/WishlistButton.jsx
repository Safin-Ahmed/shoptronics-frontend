import { useMutation, useQuery } from '@apollo/client';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Badge } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
import { addToWishlist, deleteFromWishlist, deleteWishlist, getWishlist, getWishlistByPagination, getWishlists } from '../../lib/queries';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const WishlistButton = ({ productId }) => {
  const { isAuthenticated } = useStoreState((state) => state.auth);
  const auth = useStoreState((state) => state.auth);
  const notify = useStoreActions((action) => action.snackbar.setMessage);
  const router = useRouter();

  const wishlistObject = {
    users_permissions_user: +auth.user.id,
    product: +productId,
  };

  const [addWishlist, { data, loading, error }] = useMutation(addToWishlist, {
    refetchQueries: () => [
      {
        query: getWishlists,
        variables: { id: +auth.user.id },
      },
    ],
  });

  //!Delete using product Id
  const [removeWishlist] = useMutation(deleteFromWishlist, {
    refetchQueries: () => [
      {
        query: getWishlists,
        variables: {id: +auth.user.id},
      }
    ]
  })


  const {
    loading: load,
    error: err,
    data: wishlistData,
  } = useQuery(getWishlists, {
    variables: { id: +auth.user.id },
  });


  const {loading: wishlistLoading , data: wishData} = useQuery(getWishlist, {
    variables: {id: +auth.user.id, productId: +productId}
  })



  const wishlistInfo = wishlistData?.wishlists?.data?.map((products) => {
    return products.attributes.product.data;
  });




  const wishlistChecked = wishlistInfo?.filter(
    (wishlist) => wishlist.id === productId
    ).length > 0;


    if (wishlistLoading || load) {
      return null;
    }

  

  const addWishlistHandler = async () => {
    if (isAuthenticated) {
    
      if ( wishlistInfo?.filter((wishlist) => wishlist.id === productId).length < 1) {
        const response = await addWishlist({
          variables: {
            data: wishlistObject,
          },
        });

        const { id } = response.data.createWishlist.data;

        if (id) {
          notify({
            message: 'successfully Added to wishlist',
            type: 'success',
          });
        } else {
          notify({
            message: 'Error occurred while adding Wishlist',
            type: 'error',
          });
        }
      } else {

          const response = await removeWishlist({variables: {productId: +productId}});
          
          const {id} = response?.data?.deleteWishlistByProductId?.data;
          if (id) {
            notify({
              message: 'Removed Successfully',
              type: 'success'
            })
          } else {
            notify({
              message: 'Operation Failed',
              type: 'warning'
            })
          }
      
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <div>
      
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checked={wishlistChecked}
        // checked={checked}
        checkedIcon={<Favorite sx={{ color: '#ff1111' }} />}
        onClick={addWishlistHandler}
        
      />
   
    </div>
  );
};

export default WishlistButton;
