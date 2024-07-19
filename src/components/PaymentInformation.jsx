import { Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentInformation = ({ form, setBookingStatus }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setBookingStatus("booking");

    try {
      const shouldFail = Math.random() < 0.8;
      await new Promise((resolve) => setTimeout(resolve, 2500));
      if (shouldFail) {
        throw new Error("Random error");
      }
      console.log("Form values:", values);
      // TODO: get user ID from state and create record for payment
      // if personal details were edited before payment, update record in database
      navigate("/booking-placed");
    } catch (error) {
      console.log("Error:", error);
      setBookingStatus("error");
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Payment Information:
      </div>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          name="cardDetails"
          label="Card Details"
          required={false}
          rules={[
            { required: true, message: "Please enter your card details" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default PaymentInformation;
