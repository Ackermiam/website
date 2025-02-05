import { ref, watch } from "vue";

// CLASSIC PORTFOLIO
const isLoading = ref(true);
const showSummary = ref(false);

//MANAGE 3D SCENE
const currentStep = ref(0);
const steps = [
  { first: "Acker'", second: "Prod." },
  { first: "French", second: "Dev" },
  { first: "Web", second: "&3D" },
  {},
];
const worlds: Record<string, boolean> = {
  lavaPlanet: false,
  grassPlanet: false,
  planet: false,
}
const displayWorlds = ref(false);

const newTextEvent = new CustomEvent("nextText", { detail: "nexttext" });
const displayPlanetEvent = new CustomEvent("displayPlanets", { detail: "nexttext" });

watch(displayWorlds, async (newQuestion, oldQuestion) => {
  if (newQuestion === true) {
    window.dispatchEvent(displayPlanetEvent)
  }
})

export const useSettings = () => {
  const manageSteps = () => {
    if(currentStep.value < steps.length - 1) {
      nextText()
    }
    if(currentStep.value === steps.length - 1) {
      handleDisplayWorlds();
    }
    if(displayWorlds.value) {
      console.log('suite');
    }
  }

  const nextText = () => {
    window.dispatchEvent(newTextEvent);
  };

  const handleSummary = () => {
    showSummary.value = !showSummary.value;
  };

  const handleDisplayWorlds = () => {
    displayWorlds.value = !displayWorlds.value;
  }

  return {
    steps,
    currentStep,
    showSummary,
    isLoading,
    displayWorlds,
    worlds,
    nextText,
    handleSummary,
    handleDisplayWorlds,
    manageSteps
  };
};
