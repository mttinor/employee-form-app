import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCountStepIndex] = useState(0);

  function next() {
    setCountStepIndex((i: number) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCountStepIndex((i: number) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goto(index: number) {
    setCountStepIndex(index);
  }

  return {
    isFirstStep: currentStepIndex === 0,
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isLastStep: currentStepIndex === steps.length - 1,
    setCountStepIndex,
    goto,
    back,
    next,
  };
}
