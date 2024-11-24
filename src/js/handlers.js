import {
  colorImg,
  defaultView,
  paperImage,
  rockImage,
  rulesModal,
  scissorsImage,
  vsView,
} from "./selectors.js";

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
export const showVsMode = (e) => {
  const btnSelect = e.target.closest(".game-btn");
  if (btnSelect.id === "paper_btn") {
    defaultView.classList.toggle("hidden");
    vsView.classList.toggle("hidden");
    paperImage.classList.toggle("hidden");
    colorImg.classList.add("border-[#526EF4]");
    console.log("PAPER");
  } else if (btnSelect.id === "scissors_btn") {
    defaultView.classList.toggle("hidden");
    vsView.classList.toggle("hidden");
    scissorsImage.classList.toggle("hidden");
    colorImg.classList.add("border-[#E9A51E]");
    console.log("SCISSORS");
  } else {
    defaultView.classList.toggle("hidden");
    vsView.classList.toggle("hidden");
    rockImage.classList.toggle("hidden");
    colorImg.classList.add("border-[#DE3A55]");
    console.log("ROCK");
  }
  console.log(e.target.closest(".game-btn").id);
};
