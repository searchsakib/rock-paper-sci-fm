import { defaultView, rulesModal } from "./selectors.js";

// toggling the modal
export const toggleRulesModal = () => {
  if (
    !defaultView.classList.contains("hidden") &&
    rulesModal.classList.contains("hidden")
  ) {
    defaultView.classList.add("hidden");
    rulesModal.classList.remove("hidden");
    console.log("button clicked");
  } else {
    defaultView.classList.remove("hidden");
    rulesModal.classList.add("hidden");
  }
};

// close modal btn
export const closeModalBtn = () => {
  defaultView.classList.remove("hidden");
  rulesModal.classList.add("hidden");
};
