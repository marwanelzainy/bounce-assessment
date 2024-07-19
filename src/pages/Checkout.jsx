import React, { useState } from "react";

import CheckoutLayout from "../components/CheckoutLayout";
import PaymentInformation from "../components/PaymentInformation";
import PersonalDetails from "../components/PersonalDetails";

import { Form } from "antd";

export default function Checkout() {
  const [step, setStep] = useState(0);
  const [personalDetailsForm] = Form.useForm();
  const [paymentForm] = Form.useForm();
  const [bookingStatus, setBookingStatus] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <>
      {/* Add a loading indicator while the booking status is "booking" */}
      {bookingStatus === "booking" && (
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            height: "780px",
            width: "375px",
            textAlign: "center",
            alignContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          Placing <br /> booking <br /> ...
        </div>
      )}
      <CheckoutLayout
        personalDetailsForm={personalDetailsForm}
        paymentForm={paymentForm}
        step={step}
        nextStep={nextStep}
        bookingStatus={bookingStatus}
        setBookingStatus={setBookingStatus}
      >
        <section
          style={{
            height: "53%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {step > 0 && <PersonalDetails form={personalDetailsForm} />}
          {step > 1 && (
            <PaymentInformation
              form={paymentForm}
              setBookingStatus={setBookingStatus}
            />
          )}
        </section>
      </CheckoutLayout>
    </>
  );
}
