import "bootstrap/dist/css/bootstrap.min.css";
import { useMultiStepForm } from "./useMultiStepForm";
import { Button } from "react-bootstrap";
import EducationForm from "./components/EducationForm";
import JobFrom from "./components/JobFrom";
import UserInfoFrom from "./components/UserInfoFrom";
import CertificateForm from "./components/CertificateForm";
import { FormEvent, useState } from "react";
import { DateObject } from "react-multi-date-picker";

type FormData = {
  firstName: string;
  nationalCode: string;
  placeBirth: string;
  dateBirth: DateObject | DateObject[] | null;
  fatherName: string;
  maritalStatus: string;
  salary: string;
  companyName: string;
  position: string;
  workTime: string;
  satisfactionCompany: string;
  licence: object[];
};

const INITIAL_DATA: FormData = {
  firstName: "",
  maritalStatus: "",
  nationalCode: "",
  placeBirth: "",
  dateBirth: null,
  fatherName: "",
  salary: "",
  companyName: "",
  position: "",
  workTime: "",
  satisfactionCompany: "",
  licence: [],
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const { steps, currentStepIndex, isFirstStep, step, back, next, isLastStep } =
    useMultiStepForm([
      <UserInfoFrom {...data} updateFields={updateFields} />,
      <JobFrom {...data} updateFields={updateFields} />,
      <EducationForm {...data} updateFields={updateFields} />,
      <CertificateForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        ...fields,
      };
    });
    console.log(data);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(data);
    if (!isLastStep) return next();
    alert("finish");
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Areal",
        // maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "0.5rem",
          }}
        >
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <Button variant="danger" type="button" onClick={back}>
              مرحله قبلی
            </Button>
          )}
          <Button variant="success" type="submit">
            {isLastStep ? "پایان ثبت نام" : "مرحله بعدی"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
