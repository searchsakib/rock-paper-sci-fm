import { defaultView, rulesModal, vsView } from "./selectors.js";

// toggling the modal
export const toggleRulesModal = () => {
  rulesModal.classList.toggle("hidden");
  rulesModal.classList.add("flex");
};

// close modal btn
export const closeModalBtn = () => {
  rulesModal.classList.toggle("hidden");
};

// selecting from rock,papers,scissors
export const showVsMode = () => {
  defaultView.classList.toggle("hidden");
  vsView.classList.toggle("hidden");
};
