import React, { useState } from "react";

import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

const CheckoutLayout = ({
  children,
  personalDetailsForm,
  paymentForm,
  step,
  nextStep,
  bookingStatus,
}) => {
  const [bagsNumber, setBagsNumber] = useState(1);

  const incrementBagsNumber = () => {
    setBagsNumber(bagsNumber + 1);
  };

  const decrementBagsNumber = () => {
    setBagsNumber(bagsNumber - 1);
  };
  return (
    <>
      <HeaderComponent
        bagsNumber={bagsNumber}
        incrementBagsNumber={incrementBagsNumber}
        decrementBagsNumber={decrementBagsNumber}
      />
      {children}
      <FooterComponent
        personalDetailsForm={personalDetailsForm}
        paymentForm={paymentForm}
        bagsNumber={bagsNumber}
        step={step}
        nextStep={nextStep}
        bookingStatus={bookingStatus}
      />
    </>
  );
};

export default CheckoutLayout;
