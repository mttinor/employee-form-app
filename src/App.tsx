import { useMultiStepForm } from "./useMultiStepForm";

import EducationForm from "./components/EducationForm";
import JobFrom from "./components/JobFrom";
import UserInfoFrom from "./components/UserInfoFrom";
import CertificateForm from "./components/CertificateForm";

function App() {
  const { steps, currentStepIndex, isFirstStep, step, back, next, isLastStep } =
    useMultiStepForm([
      <UserInfoFrom />,
      <EducationForm />,
      <JobFrom />,
      <CertificateForm />,
    ]);
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
      }}
    >
      <form>
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
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
