import {
  colorImg,
  computerPaper,
  computerRock,
  computerScissors,
  confetti,
  defaultView,
  paperImage,
  resultText,
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

// selecting from rock,papers,scissors and game logic
export const showVsMode = (e) => {
  // rng logic
  const rps = ["paper_btn", "scissors_btn", "rock_btn"];
  const randomNum = Math.floor(Math.random() * 3);
  const RNG = rps[randomNum];

  // dynamic ui based on computer pick(rng)
  if (RNG === "paper_btn") {
    computerPaper.classList.toggle("hidden");
    computerPaper.classList.add("flex");
  } else if (RNG === "scissors_btn") {
    computerScissors.classList.toggle("hidden");
    computerScissors.classList.add("flex");
  } else {
    computerRock.classList.toggle("hidden");
    computerRock.classList.add("flex");
  }

  console.log("Computers Pick: " + RNG);

  const btnSelect = e.target.closest(".game-btn");

  // dynamic ui based on players pick
  if (btnSelect.id === "paper_btn") {
    defaultView.classList.toggle("hidden");
    vsView.classList.toggle("hidden");
    paperImage.classList.toggle("hidden");
    colorImg.classList.add("border-[#526EF4]");
    if (btnSelect.id === RNG) {
      console.log("DRAW");
      resultText.innerText = "DRAW!";
    } else if (RNG === "scissors_btn") {
      console.log("YOU LOSE");
      resultText.innerText = "YOU LOSE!";
    } else {
      console.log("YOU WIN");
      confetti.classList.toggle("hidden");
      resultText.innerText = "YOU WIN!";
    }
  } else if (btnSelect.id === "scissors_btn") {
    defaultView.classList.toggle("hidden");
    vsView.classList.toggle("hidden");
    scissorsImage.classList.toggle("hidden");
    colorImg.classList.add("border-[#E9A51E]");
    if (btnSelect.id === RNG) {
      console.log("DRAW");
      resultText.innerText = "DRAW!";
    } else if (RNG === "paper_btn") {
      console.log("YOU WIN");
      confetti.classList.toggle("hidden");
      resultText.innerText = "YOU WIN!";
    } else {
      console.log("YOU LOSE");
      resultText.innerText = "YOU LOSE!";
    }
  } else {
    defaultView.classList.toggle("hidden");
    vsView.classList.toggle("hidden");
    rockImage.classList.toggle("hidden");
    colorImg.classList.add("border-[#DE3A55]");
    if (btnSelect.id === RNG) {
      console.log("DRAW");
      resultText.innerText = "DRAW!";
    } else if (RNG === "paper_btn") {
      console.log("YOU LOSE");
      resultText.innerText = "YOU LOSE!";
    } else {
      console.log("YOU WIN");
      confetti.classList.toggle("hidden");
      resultText.innerText = "YOU WIN!";
    }
  }
  console.log("My pick: " + e.target.closest(".game-btn").id);
  console.log(confetti);
};
