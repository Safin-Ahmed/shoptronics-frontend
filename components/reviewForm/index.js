import { useMutation } from "@apollo/client";
import {
  Box,
  Button,
  Card,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { addReviewQuery } from "../../lib/queries";
import Loader from "../UI/Loader";

const ReviewForm = ({ title, customerOrderedProduct, productId }) => {
  const auth = useStoreState((state) => state.auth);
  const [value, setValue] = useState(0);
  const [review, setReview] = useState("");
  const [formError, setFormError] = useState("");
  const notify = useStoreActions((action) => action.snackbar.setMessage);
  const router = useRouter();
  const reviewObject = {
    user: auth.user.id,
    review,
    rating: value,
    product: productId,
  };
  const [addReview, { data, loading, error }] = useMutation(addReviewQuery, {
    variables: {
      data: reviewObject,
    },
  });
  const goBackHandler = () => {
    return router.back();
  };
  const submitHandler = async () => {
    if (!review || !value) {
      return setFormError("Please fill all the required fields");
    }

    if (review.length < 20) {
      return setFormError("Review text must be at least 20 characters long!");
    }
    setFormError("");
    setReview("");
    setValue(0);
    const response = await addReview();

    const { id } = response.data.createReview.data;
    if (id) {
      notify({
        message: "Review added successfully!",
        type: "success",
      });
    } else {
      notify({
        message: "Error occurred while adding review",
        type: "error",
      });
    }

    router.back();
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        {customerOrderedProduct.length > 0 && (
          <Card sx={{ maxWidth: "60%", m: "auto", p: 4 }}>
            <Typography sx={{ color: "#3c1ff4" }} variant="h5">
              Write a Review
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Typography fontWeight={600} sx={{ mb: 1 }} component="legend">
                Product
              </Typography>
              <TextField
                disabled
                id="review-form-product-title"
                defaultValue={title}
                size="medium"
                fullWidth
              />
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography fontWeight={600} sx={{ mb: 1 }} component="legend">
                Rating*
              </Typography>
              <Rating
                name="product-rating"
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
                precision={0.5}
                size="large"
              />
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography fontWeight={600} sx={{ mb: 1 }} component="legend">
                Review*
              </Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                value={review}
                placeholder="Your Review"
                onChange={(e) => setReview(e.target.value)}
                fullWidth
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  background: "#3c1ff4",
                  mt: 3,
                  color: "#fff",
                  "&:hover": { background: "#3c1ff4" },
                }}
                fullWidth
                onClick={submitHandler}
              >
                Submit
              </Button>
              {formError && (
                <Typography sx={{ color: "red", mt: 2 }} variant="body1">
                  {formError}
                </Typography>
              )}
              <Button
                sx={{
                  mt: 2,
                  border: "3px solid #3c1ff4",
                  "&:hover": {
                    background: "transparent",
                    border: "3px solid #3c1ff4",
                  },
                }}
                variant="outlined"
                fullWidth
                onClick={goBackHandler}
              >
                Go Back
              </Button>
            </Box>
          </Card>
        )}
        {customerOrderedProduct.length === 0 && (
          <>
            <Typography sx={{ mt: 5, mb: 5 }} align="center" variant="h5">
              You have not purchased the product yet. Reviews can be added only
              by the owners of the product.
            </Typography>

            <Button
              sx={{
                mt: 2,
                border: "3px solid #3c1ff4",
                "&:hover": {
                  background: "transparent",
                  border: "3px solid #3c1ff4",
                },
              }}
              variant="outlined"
              fullWidth
              onClick={goBackHandler}
            >
              Go Back
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
};

export default ReviewForm;
