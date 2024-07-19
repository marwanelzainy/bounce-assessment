import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
const PersonalDetails = ({ form }) => {
  const [personalDetailsDisabled, setPersonalDetailsDisabled] = useState(false);
  const togglePersonalDetailsDisabled = () => {
    setPersonalDetailsDisabled((prev) => !prev);
  };

  const onFinish = (values) => {
    togglePersonalDetailsDisabled();
    console.log("Form values:", values);
    // TODO: send form values to backend
    // e.g. fetch('/api/users', { method: 'POST', body: JSON.stringify(values) })
    // response user ID save it in state
  };

  return (
    <div
      style={{
        padding: 20,
        borderBottom: "1px solid lightgrey",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        Personal Details:
        {personalDetailsDisabled && (
          <Button
            icon={<EditOutlined />}
            type="text"
            onClick={togglePersonalDetailsDisabled}
          >
            Edit
          </Button>
        )}
      </div>
      <Form
        form={form}
        name="basic"
        disabled={personalDetailsDisabled}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          required={false}
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          required={false}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetails;
