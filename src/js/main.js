const defaultView = document.getElementById("default_view");
const rulesModal = document.getElementById("rules_modal");
const rulesModalBtn = document.getElementById("rules_modal_btn");
const closeBtn = document.getElementById("close_btn");

rulesModalBtn.addEventListener("click", () => {
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
});

closeBtn.addEventListener("click", () => {
  defaultView.classList.remove("hidden");
  rulesModal.classList.add("hidden");
});
