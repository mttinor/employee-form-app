import React, { HTMLInputTypeAttribute } from "react";
import { Form } from "react-bootstrap";

interface InputType {
  type?: HTMLInputTypeAttribute;
  title?: string;
  required?: boolean;
  value?: number | string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  value,
  title,
  type,
  required,

  onChangeValue,
}: InputType) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{title}:</Form.Label>
    <Form.Control
      required={required}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e)}
      value={value}
      type={type}
    />
    <Form.Control.Feedback type="invalid">
      {`لطفا فیلد ${title} را پر کنید`}
    </Form.Control.Feedback>
    {/* {errorMessage && (
      <Form.Text className="text-muted">{errorMessage}</Form.Text>
    )} */}
  </Form.Group>
);

const defaultProps: Partial<InputType> = {
  type: "text",
  required: false,
};

Input.defaultProps = defaultProps;

export default Input;
