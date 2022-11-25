import {
  Box,
  Button,
  Card,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import BottomPagination from "../pagination/BottomPagination";
import ReviewCard from "./ReviewCard";
import classes from './ReviewCard.module.css';

const ReviewsCard = ({
  pagination,
  reviews,
  averageRating,
  addReviewHandler,
  onClickHandler,
}) => {
  return (
    <>
      <Card sx={{ py: 5, mb: 10 }}>
        <Container>
          <Box
            sx={{ borderBottom: "1px solid #ecedef", pb: 5 }}
            display="flex"
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column" gap="1rem">
              <Typography fontWeight={700} variant="h6" className={classes.reviewsTitle}>
                Reviews ({reviews.length})
              </Typography>
              <Typography variant="body1" className={classes.reviews}>
                Get specific details about this product from customers who own
                it.
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Rating
                  size="large"
                  name="read-only"
                  value={averageRating}
                  readOnly
                />
                <Typography variant="h6" className={classes.averageRatingText}>
                  <strong>{averageRating}</strong> out of 5
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                sx={{
                  border: "2px solid #3C1FF4",
                  color: "#3C1FF4",
                  fontWeight: 600,
                  fontFamily: "Rubik",
                  textTransform: "capitalize",
                }}
                className={classes.reviewButton}
                variant="outline"
                onClick={addReviewHandler}
              >
                Write a Review
              </Button>
            </Box>
          </Box>
          {reviews.map((review) => (
            <ReviewCard key={review.id} singleReview={review} />
          ))}
          {pagination.page < pagination.pageCount && (
            <Button variant="contained" onClick={onClickHandler}>
              Show More
            </Button>
          )}
        </Container>
      </Card>
    </>
  );
};

export default ReviewsCard;
