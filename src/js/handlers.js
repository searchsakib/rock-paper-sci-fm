import { defaultView, rulesModal } from "./selectors.js";

// toggling the modal
export const toggleRulesModal = () => {
  defaultView.classList.toggle("hidden");
  rulesModal.classList.toggle("hidden");
};

// close modal btn
export const closeModalBtn = () => {
  defaultView.classList.toggle("hidden");
  rulesModal.classList.toggle("hidden");
};
