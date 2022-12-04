"use strict";

//#region ----- Elements -----
const logosSectionEl = document.querySelector(".section-logos");
const challengesSectionEl = document.querySelector(".challenge-section");
const exerciseLinksEl = document.querySelectorAll(".exercise-links");
const tabContentEl = document.querySelectorAll(".tab-content");

const btnModeToggleEl = document.querySelector(".btn-toggle--mode");
const btnModeEl = document.querySelector(".btn__mode");
const btnChallengesEl = document.querySelector(".nav-link");
const btnLearnMoreEl = document.querySelector(".learn-more--btn");

// Challenges buttons
const btnLearnHtmlEl = document.querySelector(".learn-html--btn");
const btnLearnCssEl = document.querySelector(".learn-css--btn");
const btnLearnJsEl = document.querySelector(".learn-js--btn");

const btnHtmlEl = document.querySelector(".html--btn");
const btnCssEl = document.querySelector(".css--btn");
const btnJsEl = document.querySelector(".js--btn");

// HTML Challenges
const htmlAttributesContainerEl = document.querySelector(".html__attributes");
const htmlHeadingsContainerEl = document.querySelector(".html__headings");

// Question box container
const questionBoxContainerAllEl = document.querySelectorAll(
  ".question-box-container"
);
const questionBoxContainerEl = document.querySelector(
  ".question-box-container"
);

let dark = "moon-sharp",
  light = "sunny-outline",
  mode = dark;
//#endregion

//#region ----- Functions -----
const smoothScroll = (element) =>
  element.scrollIntoView({ behavior: "smooth" });

const switchMode = (mode, opt1, opt2) => (mode === opt1 ? opt2 : opt1);

const hideContentToggle = function (topic, e) {
  e.preventDefault();
  const clicked = e.target.closest(".exercise-links");

  if (!clicked) return;
  smoothScroll(questionBoxContainerEl);

  questionBoxContainerAllEl.forEach((c) => c.classList.add("hide-content"));

  document
    .querySelector(`.h-${topic}-q--${clicked.dataset.tab}`)
    .classList.remove("hide-content");
};

//#endregion

//#region ----- Initialization -----

//#endregion

//#region ----- Event handlers -----
btnModeToggleEl.addEventListener("click", (e) => {
  e.preventDefault();
  mode = switchMode(mode, light, dark);
  btnModeEl.name = mode;
});

btnChallengesEl.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(challengesSectionEl);
});

btnLearnMoreEl.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(logosSectionEl);
});

// Learn(section) -> Challenges(section)
btnLearnHtmlEl.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(btnHtmlEl);
});
btnLearnCssEl.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(btnCssEl);
});
btnLearnJsEl.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(btnJsEl);
});

//#region ----- HTML Challenges -----

// Attributes
htmlAttributesContainerEl.addEventListener("click", (e) => {
  hideContentToggle("attributes", e);
});

// Headings
htmlHeadingsContainerEl.addEventListener("click", (e) => {
  hideContentToggle("headings", e);
});

// Paragraph
htmlAttributesContainerEl.addEventListener("click", (e) => {
  hideContentToggle("attributes", e);
});

// Comments
htmlAttributesContainerEl.addEventListener("click", (e) => {
  hideContentToggle("attributes", e);
});
//#endregion
//#endregion
