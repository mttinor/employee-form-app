import React, { HTMLInputTypeAttribute } from "react";
import { Form } from "react-bootstrap";

interface InputType {
  type?: HTMLInputTypeAttribute;
  title?: string;
  required?: boolean ;
  value?: number | string;
  isInvalid?: boolean;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  value,
  title,
  type,
  required,
  isInvalid,
  onChangeValue,
}: InputType) => (
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{title}:</Form.Label>
    <Form.Control
      isInvalid={isInvalid}
      required={required}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e)}
      value={value}
      type={type}
    />
    <Form.Control.Feedback type="invalid">
      <p className="mb-1">{`لطفا فیلد ${title} را پر کنید`}</p>
      <p className="mb-1">{isInvalid && `فرمت ${title} وارد شده صحیح نیست`}</p>
    </Form.Control.Feedback>
  </Form.Group>
);

const defaultProps: Partial<InputType> = {
  type: "text",
  required: false,
  isInvalid: false,
};

Input.defaultProps = defaultProps;

export default Input;
