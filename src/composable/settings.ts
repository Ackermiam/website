import { ref } from "vue";

// CLASSIC PORTFOLIO
const isLoading = ref(true);
const showSummary = ref(false);
const selectedTopic = ref('pres')

//MANAGE 3D SCENE
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

  const handleSummary = () => {
    showSummary.value = !showSummary.value;
  }

  return {
    steps,
    currentStep,
    showSummary,
    selectedTopic,
    isLoading,
    nextText,
    handleSummary
  };
};
