import { useMultiStepForm } from "../CustomHooks/useMultiStepForm";
import { Button } from "react-bootstrap";
import EducationForm from "./../forms/EducationForm";
import JobFrom from "./../forms/JobFrom";
import UserInfoFrom from "./../forms/UserInfoFrom";
import CertificateForm from "./../forms/CertificateForm";
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  nationalCode: string;
  placeBirth: string;
  dateBirth: string;
  fatherName: string;
  maritalStatus: string;
  salary: string;
  companyName: string;
  position: string;

  satisfactionCompany: string;
  licence: object[];
  grade: string;
  fieldOfStudy: string;
  academicOrientation: string;
  universityName: string;
  gradePoint: string;
  timeLicence: string;
  startPosition: string;
  endPosition: string;
  gender: string;
  address: string;
};

const INITIAL_DATA: FormData = {
  gender: "",
  address: "",
  endPosition: "",
  startPosition: "",
  firstName: "",
  lastName: "",
  maritalStatus: "",
  nationalCode: "",
  placeBirth: "",
  dateBirth: "",
  fatherName: "",
  salary: "",
  companyName: "",
  position: "",

  satisfactionCompany: "",
  licence: [],
  grade: "",
  fieldOfStudy: "",
  academicOrientation: "",
  universityName: "",
  gradePoint: "",
  timeLicence: "",
};

function Home() {
  const [data, setData] = useState(INITIAL_DATA);
  const [items, setItems] = useState<FormData[]>([]);
  const [textFinish, setFinished] = useState<String>("");
  const {
    steps,
    currentStepIndex,
    isFirstStep,
    step,
    back,
    next,
    isLastStep,
    setCountStepIndex,
  } = useMultiStepForm([
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
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();

    setItems((prev) => [...prev, { ...data }]);
    console.log(items);
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(items));
    setFinished(
      ` ثبت نام شما با موفقیت اتجام شد کد پیگیری شما ${Math.floor(
        Math.random() * 25659
      )}`
    );
  }

  function refresh() {
    setFinished("");
    setData(INITIAL_DATA);
    setCountStepIndex(0);
  }

  return (
    <>
      <div className="d-none d-md-block">
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "Center",
            alignItems: "center",
          }}
        >
          <h1>این طراحی فقط در نسخه های موبایل قابل نمایش است</h1>
        </div>
      </div>
      <div
        className="d-block d-md-none "
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
          {textFinish ? (
            <>
              <h1 className="text-center">{textFinish}</h1>
              <Button
                variant="info"
                className="w-100"
                type="button"
                onClick={refresh}
              >
                ثبت نام مجدد
              </Button>
            </>
          ) : (
            step
          )}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && !textFinish && (
              <Button variant="danger" type="button" onClick={back}>
                مرحله قبلی
              </Button>
            )}
            {!textFinish && (
              <Button variant="success" type="submit">
                {isLastStep ? "پایان ثبت نام" : "مرحله بعدی"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
