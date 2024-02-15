import React from "react";
import { Form } from "react-bootstrap";

interface InputType {
  title?: string;
  errorMessage?: string;
  value?: string | number;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, title, errorMessage, onChangeValue }: InputType) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{title}:</Form.Label>
      <Form.Control
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e)}
        value={value}
        type="text"
      />
      {errorMessage && (
        <Form.Text className="text-muted">{errorMessage}</Form.Text>
      )}
    </Form.Group>
  );
};

export default Input;
