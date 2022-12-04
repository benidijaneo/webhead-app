"use strict";

//#region ----- Variables -----
// Elements
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
const htmlParagraphContainerEl = document.querySelector(".html__paragraph");
const htmlCommentsContainerEl = document.querySelector(".html__comments");

// Anser input
const answerInput = document.querySelector(".answer-input");

const attQuestion1El = document.querySelector(".att-q--1");

// Submit buttons
const btnSubmitAnsEl = document.querySelectorAll(".submit-answer__btn");

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

//#region ----- Challenges Objects -----

// HTML
const answersHtml = {
  htmlAttribute: {
    1: { a: "title" },
    2: { a: "250px", b: "400px" },
    3: { a: "href" },
    4: { a: "alt" },
  },
};

const answers = [answersHtml];
//#endregion
//#endregion

//#region ----- Functions -----
const smoothScroll = (element) =>
  element.scrollIntoView({ behavior: "smooth" });

const switchMode = (mode, opt1, opt2) => (mode === opt1 ? opt2 : opt1);

const hideContentToggle = function (topic, e) {
  e.preventDefault();
  const clicked = e.target.closest(".exercise-links");

  if (!clicked) return;

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
htmlParagraphContainerEl.addEventListener("click", (e) => {
  hideContentToggle("paragraphs", e);
});

// Comments
htmlCommentsContainerEl.addEventListener("click", (e) => {
  hideContentToggle("comments", e);
});
//#endregion

// Submit button event handler

//#endregion

// PUTANGINAMO
/*
btnSubmitAnsEl.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    let obj = clicked.dataset.tab;

    let input = answerInput.value;
    if (
      input === answers[0].htmlAttribute[obj].a ||
      answers[0].htmlAttribute[obj].b
    ) {
      clicked.style.backgroundColor = "green";
      clicked.textContent = "Proceed";

      // Proceed button
      clicked.addEventListener("click", () => {
        questionBoxContainerAllEl.forEach((c) =>
          c.classList.add("hide-content")
        );
        document
          .querySelector(`.h-attributes-q--${Number(clicked.dataset.tab) + 1}`)
          .classList.remove("hide-content");
        input = answerInput.value = "";
      });
      obj++;
    } else {
      clicked.style.backgroundColor = "red";
      clicked.textContent = "Try again!";
    }
    console.log(input);
  })
);
*/
const btnAtt1 = document.querySelector(".att-submit--1");
const btnAtt2 = document.querySelector(".att-submit--2");

btnAtt1.addEventListener("click", (e) => {
  e.preventDefault();

  const clicked = e.target;
  const answer1 = document.querySelector(".att-1--a");

  if (answer1.value === answers[0].htmlAttribute[1].a) {
    btnAtt1.style.backgroundColor = "green";
    btnAtt1.textContent = "Mark as done";
  } else {
    btnAtt1.style.backgroundColor = "red";
    btnAtt1.textContent = "Try again";
  }
});

btnAtt2.addEventListener("click", (e) => {
  e.preventDefault();

  const clicked = e.target;
  const answer1 = document.querySelector(".att-2--a");
  const answer2 = document.querySelector(".att-2--b");

  if (
    answer1.value === answers[0].htmlAttribute[2].a &&
    answer2.value === answers[0].htmlAttribute[2].b
  ) {
    btnAtt2.style.backgroundColor = "green";
    btnAtt2.textContent = "Mark as done";
  } else {
    btnAtt2.style.backgroundColor = "red";
    btnAtt2.textContent = "Try again";
  }
});
