import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceforStripe = price * 100;
  const publishablekey =
    "pk_test_51J0NhzSG8Gdj87ZbL4KnjLnyfyOgoSw6jsboU3dlNIoXyiug1UYIhMkwuehBbK9BqdyBe3HXWzsP03k0tSlfWBtI00ekxsRp7H";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ec Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceforStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    ></StripeCheckout>
  );
};

export default StripCheckoutButton;
