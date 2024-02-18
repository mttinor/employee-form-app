import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "حداقل پسورد باید 8 رقم باشد ")
    .required("پسورد اجباری است"),
  email: Yup.string()
    .required("ایمیل اجباری است")
    .email("فرمت ایمیل نادرست است"),
});

interface FormData {
  password: string;
  email: string;
}

type componentProps = {
  next: (values: FormData) => void;
};

const Login: React.FC<componentProps> = ({ next }: componentProps) => {
  const handleSubmit = async (values: FormData) => {
    next(values);
  };
  return (
    <div
      style={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          borderRadius: "20px",
          border: "1px solid lightgray",
          padding: "20px",
        }}
      >
        <h1 className="text-center">پنل ادمین</h1>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div>
                <div className="mb-2 text-right">ایمیل</div>
                <Field className="w-100" name="email" type="email" />
                <div className="text-danger">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div>
                <div className="mb-2 text-right">پسورد</div>
                <Field type="password" className="w-100" name="password" />
                <div className="text-danger">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <Button type="submit" className="rounded-0 mt-3">
                ورود
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
