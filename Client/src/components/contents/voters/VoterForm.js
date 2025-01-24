import React from "react";
import { Form, Input, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const RegisterVoterForm = () => {
  const handleFormSubmit = (values) => {
    console.log("Form Values:", values);
  };

  
  return (
    <Form
      name="register_candidate"
      layout="vertical"
      onFinish={handleFormSubmit}
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      {/* Candidate Name */}
      <Form.Item
        label="Voter Name"
        name="name"
        rules={[{ required: true, message: "Please enter the voter's name!" }]}
      >
        <Input placeholder="e.g . John Doe" />
      </Form.Item>

      
      <Form.Item
        label="Class"
        name="class"
        rules={[{ required: true, message: "Please select the class!" }]}
      >
        <Select placeholder="Select class">
          <Option value="classA">Class A</Option>
          <Option value="classB">Class B</Option>
          <Option value="classC">Class C</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Register Voter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterVoterForm;
