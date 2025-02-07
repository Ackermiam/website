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
};
const selectedWorld = ref("");
const displayInfos = ref(false);
const displayWorlds = ref(false);
const textToDisplay = ref("Continue");

const newTextEvent = new CustomEvent("nextText", { detail: "nexttext" });
const displayPlanetEvent = new CustomEvent("displayPlanets", {
  detail: "nexttext",
});

watch(displayWorlds, async (newQuestion, oldQuestion) => {
  window.dispatchEvent(displayPlanetEvent);
});

export const useSettings = () => {
  const manageSteps = (infoState) => {
    if (currentStep.value < steps.length - 1) {
      nextText();
      textToDisplay.value = "Continue";
    }
    if (
      currentStep.value === steps.length - 2 ||
      (currentStep.value === steps.length - 1 && displayWorlds.value)
    ) {
      textToDisplay.value = "Call the Planets";
      displayInfos.value = false;
      infoState.isBottom = false;
    }
    if (currentStep.value === steps.length - 1) {
      textToDisplay.value = "Click on one Planet";
      handleDisplayWorlds();
    }
    if (currentStep.value === steps.length - 1 && !displayWorlds.value) {
      textToDisplay.value = "Call the Planets";
      displayInfos.value = false;
      infoState.isBottom = false;
    }
    if(currentStep.value === 3) {
      displayInfos.value = false;
      infoState.isBottom = false;
    }
  };

  const nextText = () => {
    window.dispatchEvent(newTextEvent);
  };

  const handleSummary = () => {
    showSummary.value = !showSummary.value;
  };

  const handleDisplayWorlds = () => {
    displayWorlds.value = !displayWorlds.value;
  };

  return {
    steps,
    currentStep,
    showSummary,
    isLoading,
    displayWorlds,
    worlds,
    selectedWorld,
    textToDisplay,
    displayInfos,
    nextText,
    handleSummary,
    handleDisplayWorlds,
    manageSteps,
  };
};
