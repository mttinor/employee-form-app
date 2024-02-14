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
    currentStepIndex,
    step: steps[currentStepIndex],
    goto,
    back,
    next,
  };
}
