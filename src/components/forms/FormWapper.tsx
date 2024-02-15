import { ReactNode } from "react";
import { Row } from "react-bootstrap";

interface FormWapperProps {
  title: String;
  children: ReactNode;
}

export default function FormWapper({ title, children }: FormWapperProps) {
  return (
    <>
      <h2
        style={{
          textAlign: "right",
          margin: 0,
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      <Row
      >
        {children}
      </Row>
    </>
  );
}
