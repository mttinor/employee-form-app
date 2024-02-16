import React, { HTMLInputTypeAttribute } from "react";
import { Form } from "react-bootstrap";

interface InputType {
  type?: HTMLInputTypeAttribute;
  title?: string;
  errorMessage?: string;
  value?: number | string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  value,
  title,
  type,
  errorMessage,
  onChangeValue,
}: InputType) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{title}:</Form.Label>
    <Form.Control
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e)}
      value={value}
      type={type}
    />
    {errorMessage && (
      <Form.Text className="text-muted">{errorMessage}</Form.Text>
    )}
  </Form.Group>
);

const defaultProps: Partial<InputType> = {
  type: "text",
};

Input.defaultProps = defaultProps;

export default Input;
