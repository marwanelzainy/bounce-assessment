import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";

const FooterComponent = ({
  personalDetailsForm,
  paymentForm,
  bagsNumber,
  nextStep,
  step,
  bookingStatus,
}) => {
  const [isPersonalDetailsValid, setIsPersonalDetailsValid] = useState(false);
  const [isPaymentValid, setIsPaymentValid] = useState(false);
  const name = Form.useWatch("name", personalDetailsForm);
  const email = Form.useWatch("email", personalDetailsForm);
  const cardDetails = Form.useWatch("cardDetails", paymentForm);

  useEffect(() => {
    personalDetailsForm
      .validateFields({ validateOnly: true })
      .then(() => {
        setIsPersonalDetailsValid(true);
      })
      .catch(() => {
        setIsPersonalDetailsValid(false);
      });
  }, [name, email]);

  useEffect(() => {
    paymentForm
      .validateFields({ validateOnly: true })
      .then(() => {
        setIsPaymentValid(true);
      })
      .catch(() => {
        setIsPaymentValid(false);
      });
  }, [cardDetails]);

  const isNextButtonDisabled = !isPersonalDetailsValid;
  const isBookButtonDisabled = !isPaymentValid || !isPersonalDetailsValid;

  const personalDetailsFormSubmit = () => {
    personalDetailsForm.submit();
    nextStep();
  };

  const bookSubmit = () => {
    paymentForm.submit();
  };

  return (
    <section
      style={{
        height: "14%",
        borderTop: "2px solid black",
        padding: 20,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {bagsNumber > 1 ? bagsNumber + " bags" : "1 bag"} <br />
        <span style={{ fontWeight: "bold" }}>
          ${(bagsNumber * 5.9).toFixed(2)}
        </span>
      </div>
      {step === 0 && (
        <Button
          onClick={nextStep}
          type="primary"
          size="large"
          style={{ width: 120 }}
        >
          Next
        </Button>
      )}
      {step === 1 && (
        <Button
          onClick={personalDetailsFormSubmit}
          disabled={isNextButtonDisabled}
          type="primary"
          size="large"
          style={{ width: 120 }}
        >
          Next
        </Button>
      )}
      {step === 2 &&
        (bookingStatus !== "error" ? (
          <Button
            onClick={bookSubmit}
            type="primary"
            size="large"
            style={{ width: 120 }}
            disabled={isBookButtonDisabled}
          >
            {bookingStatus === "booking" ? "..." : "Book"}
          </Button>
        ) : (
          <Button
            onClick={bookSubmit}
            type="primary"
            size="large"
            danger
            style={{ width: 120 }}
            disabled={isBookButtonDisabled}
          >
            Retry
          </Button>
        ))}
    </section>
  );
};

export default FooterComponent;
