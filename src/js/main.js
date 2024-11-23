import { closeModalBtn, toggleRulesModal } from "./handlers.js";
import { modalCloseBtn, rulesModalBtn } from "./selectors.js";

rulesModalBtn.addEventListener("click", toggleRulesModal);

modalCloseBtn.addEventListener("click", closeModalBtn);
