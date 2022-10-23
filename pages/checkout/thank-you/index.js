import React from "react";
import module from "../../../public/Styles/thank-you.module.css"

const fakeData = [
  {
    title: "Thank you. Your order has been received.",
    orderNumber: '1979',
    date: 'OCT 21, 2022',
    amount: "$6522",
    email: "hasanmiaweb@gmail.com",
    paymentMethod: 'Bkash'
  }
]


const ThankYou = () => {
  return (
    <div>
      <div className={module.thank_you}>
        {
          fakeData.map((item) => <>
            <div className={module.thank_title}><h1>{item.title}</h1></div>
            <div className={module.order_info}>
              <div className={module.child_span_1}>
                <span >Order Number: {item.orderNumber}</span>
                <span >Date: {item.date}</span>
                <span >Total: {item.amount}</span>
              </div>
              <div className={module.child_span_2}>
                <span >Email: {item.email}</span>
                <span>Payment Method: {item.paymentMethod}</span>
              </div>
            </div>
          </>)
        }
      </div>
    </div>
  );
};

export default ThankYou;