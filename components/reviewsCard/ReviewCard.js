import { Rating, Typography } from "@mui/material";
import React from "react";
import { dateTime } from "../../utils/helper";
import classes from './ReviewCard.module.css';

const ReviewCard = ({ singleReview }) => {
  const { review, rating, createdAt } = singleReview.attributes;
  const { username } = singleReview.attributes.user.data.attributes;
  return (
    <div
      style={{
        borderBottom: "1px solid #ecedef",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Rating readOnly size="medium" value={rating} />
      <Typography sx={{fontSize: {xs: '15px', md: '1.25rem'}}} variant="h6" className={classes.reviews}>{review}</Typography>
      <Typography variant="body1">
        By <span style={{ color: "#3C1FF4" }}>{username}</span> on{" "}
        {dateTime(createdAt, 2)}
      </Typography>
    </div>
  );
};

export default ReviewCard;
