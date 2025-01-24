import React from "react";
import { Form, Input, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const RegisterForm = () => {
  const handleFormSubmit = (values) => {
    console.log("Form Values:", values);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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
        label="Candidate Name"
        name="name"
        rules={[{ required: true, message: "Please enter the candidate's name!" }]}
      >
        <Input placeholder="Enter candidate name" />
      </Form.Item>

      {/* Class */}
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

      {/* Position */}
      <Form.Item
        label="Position"
        name="position"
        rules={[{ required: true, message: "Please enter the position!" }]}
      >
        <Input placeholder="Enter position (e.g., President)" />
      </Form.Item>

      {/* Position Type */}
      <Form.Item
        label="Position Type"
        name="positionType"
        rules={[{ required: true, message: "Please select the position type!" }]}
      >
        <Select placeholder="Select position type">
          <Option value="executive">Executive</Option>
          <Option value="nonExecutive">Non-Executive</Option>
        </Select>
      </Form.Item>

      {/* Candidate Picture */}
      <Form.Item
        label="Candidate Picture"
        name="candidatePicture"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "Please upload a candidate picture!" }]}
      >
        <Upload name="picture" listType="picture" beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Upload Picture</Button>
        </Upload>
      </Form.Item>

      {/* Ballot Number */}
      <Form.Item
        label="Ballot Number"
        name="ballotNumber"
        rules={[
          { required: true, message: "Please enter the ballot number!" },
          { pattern: /^\d+$/, message: "Ballot number must be a number!" },
        ]}
      >
        <Input placeholder="Enter ballot number" />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Register Candidate
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
