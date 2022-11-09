import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import BreadcrumbsCom from "../../../components/breadcrumbs/BreadcrumbsCom";
import { getOrderById } from "../../../lib/queries";
import module from "../../../public/Styles/thank-you.module.css";
import { dateTime } from "../../../utils/helper";

const ThankYou = () => {
  const router = useRouter();
  const { orderNumber = null } = router.query;

  const { data, loading, error } = useQuery(getOrderById, {
    variables: {
      id: orderNumber,
    },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!data?.order.data || !data) {
    router.replace("/");
    return (
      <>
        <BreadcrumbsCom />
        <div>
          <div className={module.thank_you}>
            <div className={module.thank_title}>
              <Typography fontWeight={700} variant="h4">
                No Order Found! redirecting to home page
              </Typography>
            </div>
          </div>
        </div>
      </>
    );
  }
  const { createdAt, email, paymentMethod, total } =
    data?.order?.data?.attributes;

  console.log(data);

  return (
    <>
      <BreadcrumbsCom />
      <div>
        <div className={module.thank_you}>
          <div className={module.thank_title}>
            <Typography fontWeight={700} variant="h4">
              Thank you. Your order has been received.
            </Typography>
          </div>
          <div className={module.order_info}>
            <div className={module.child_span_1}>
              <span>Order Number: {orderNumber}</span>
              <span>Date: {dateTime(createdAt, 2)}</span>
              <span>Total: ${total}</span>
            </div>
            <div className={module.child_span_2}>
              <span>Email: {email}</span>
              <span>Payment Method: {paymentMethod}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
