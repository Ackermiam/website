import { ref } from "vue";

const currentStep = ref(0);
const steps = [
  { first: "Acker'", second: "Prod." },
  { first: "French", second: "Dev" },
  { first: "Web", second: "&3D" },
  {},
];
const displayWorlds = ref(false);

const newTextEvent = new CustomEvent("nextText", { detail: "nexttext" });

export const useSettings = () => {
  const nextText = () => {
    window.dispatchEvent(newTextEvent);
  };

  return {
    steps,
    currentStep,
    nextText
  };
};
