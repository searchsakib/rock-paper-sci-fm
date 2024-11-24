import { defaultView, rulesModal, vsView } from "./selectors.js";

// toggling the modal
export const toggleRulesModal = () => {
  // defaultView.classList.toggle("hidden");
  rulesModal.classList.toggle("hidden");
};

// close modal btn
export const closeModalBtn = () => {
  // defaultView.classList.toggle("hidden");
  rulesModal.classList.toggle("hidden");
};

// selecting from rock,papers,scissors
export const showVsMode = () => {
  defaultView.classList.toggle("hidden");
  vsView.classList.toggle("hidden");
};
