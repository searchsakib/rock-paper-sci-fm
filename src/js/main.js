import { closeModalBtn, showVsMode, toggleRulesModal } from "./handlers.js";
import { gameBtn, modalCloseBtn, rulesModalBtn } from "./selectors.js";

rulesModalBtn.addEventListener("click", toggleRulesModal);
modalCloseBtn.addEventListener("click", closeModalBtn);

gameBtn.forEach((singleBtn) => {
  singleBtn.addEventListener("click", showVsMode);
  // singleBtn.addEventListener("click", computerAI);
});
