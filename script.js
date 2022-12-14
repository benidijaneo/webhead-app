"use strict";

function init() {
  //#region ----- Variables -----
  // Elements
  const logosSectionEl = document.querySelector(".section-logos");
  const challengesSectionEl = document.querySelector(".challenge-section");
  const exerciseLinksEl = document.querySelectorAll(".exercise-links");
  const tabContentEl = document.querySelectorAll(".tab-content");

  // Accordion
  const accordionHtmlEl = document.querySelector(".accordion--html");
  const accordionCssEl = document.querySelector(".accordion--css");
  const accordionJsEl = document.querySelector(".accordion--js");

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
  const htmlFormattingContainerEl = document.querySelector(".html__formatting");

  // CSS Challenges
  const cssSelectorContainerEl = document.querySelector(".css__selector");
  const cssMarginContainerEl = document.querySelector(".css__margin");
  const cssPaddingContainerEl = document.querySelector(".css__padding");
  const cssHeightWidhtContainerEl = document.querySelector(".css__hw");

  // JS Challenges
  const jsVariableContainerEl = document.querySelector(".js__variable");
  const jsOperatorsContainerEl = document.querySelector(".js__operators");
  const jsDataTypesContainerEl = document.querySelector(".js__datatypes");
  const jsFunctionsContainerEl = document.querySelector(".js__functions");

  //#region ----- Exercises Selectors
  // HTML-----------------
  const btnAtt1 = document.querySelector(".att-submit--1");
  const btnAtt2 = document.querySelector(".att-submit--2");
  const btnAtt3 = document.querySelector(".att-submit--3");
  const btnAtt4 = document.querySelector(".att-submit--4");

  const btnHead1 = document.querySelector(".head-submit--1");
  const btnHead2 = document.querySelector(".head-submit--2");
  const btnHead3 = document.querySelector(".head-submit--3");

  const btnPar1 = document.querySelector(".par-submit--1");
  const btnPar2 = document.querySelector(".par-submit--2");
  const btnPar3 = document.querySelector(".par-submit--3");
  const btnPar4 = document.querySelector(".par-submit--4");

  const btnCom1 = document.querySelector(".com-submit--1");
  const btnCom2 = document.querySelector(".com-submit--2");

  const btnFor1 = document.querySelector(".for-submit--1");
  const btnFor2 = document.querySelector(".for-submit--2");
  const btnFor3 = document.querySelector(".for-submit--3");

  // CSS-----------------
  const btnSel1 = document.querySelector(".sel-submit--1");
  const btnSel2 = document.querySelector(".sel-submit--2");
  const btnSel3 = document.querySelector(".sel-submit--3");
  const btnSel4 = document.querySelector(".sel-submit--4");

  const btnMar1 = document.querySelector(".mar-submit--1");
  const btnMar2 = document.querySelector(".mar-submit--2");
  const btnMar3 = document.querySelector(".mar-submit--3");

  const btnPad1 = document.querySelector(".pad-submit--1");
  const btnPad2 = document.querySelector(".pad-submit--2");
  const btnPad3 = document.querySelector(".pad-submit--3");

  const btnHW1 = document.querySelector(".hw-submit--1");
  const btnHW2 = document.querySelector(".hw-submit--2");

  // JS-----------------
  const btnVar1 = document.querySelector(".var-submit--1");
  const btnVar2 = document.querySelector(".var-submit--2");
  const btnVar3 = document.querySelector(".var-submit--3");
  const btnVar4 = document.querySelector(".var-submit--4");
  const btnVar5 = document.querySelector(".var-submit--5");

  const btnOpe1 = document.querySelector(".ope-submit--1");
  const btnOpe2 = document.querySelector(".ope-submit--2");
  const btnOpe3 = document.querySelector(".ope-submit--3");
  const btnOpe4 = document.querySelector(".ope-submit--4");
  const btnOpe5 = document.querySelector(".ope-submit--5");

  const btnDat1 = document.querySelector(".dat-submit--1");

  const btnFun1 = document.querySelector(".fun-submit--1");
  const btnFun2 = document.querySelector(".fun-submit--2");
  const btnFun3 = document.querySelector(".fun-submit--3");
  const btnFun4 = document.querySelector(".fun-submit--4");

  const btnShowAnswer = document.querySelectorAll(".show-answer__btn");
  //#endregion

  // Question box container
  const questionBoxContainerAllEl = document.querySelectorAll(
    ".question-box-container"
  );

  // Mode
  let dark = "moon-sharp",
    light = "sunny-outline",
    mode = dark;

  let d1 = "d",
    w1 = "w",
    m1 = d1;

  let d2 = "d",
    w2 = "w",
    m2 = w2;

  //#region ----- Challenges Objects -----

  // HTML
  const answersHtml = {
    htmlAttribute: {
      1: { a: "title" },
      2: { a: "250px", b: "400px" },
      3: { a: "href=" },
      4: { a: "alt" },
    },
    htmlHeading: {
      1: { a: "<h1>Manila</h1>" },
      2: {
        a: "<h1>Manila</h1>",
        b: "<h2>Manila</h2>",
        c: "<h3>Manila</h3>",
        d: "<h4>Manila</h4>",
        e: "<h5>Manila</h5>",
        f: "<h6>Manila</h6>",
      },
      3: { a: "<hr>" },
    },
    htmlParagraph: {
      1: { a: "<p>Hello World!</p>" },
      2: { a: "</h1>", b: "</p>" },
      3: { a: "<br>" },
      4: { a: "<pre>", b: "</pre>" },
    },
    htmlComments: {
      1: { a: "<!--", b: "-->" },
      2: { a: "<!--", b: "-->" },
    },
    htmlFormatting: {
      1: { a: "<strong>", b: "</strong>" },
      2: { a: "<i>", b: "</i>" },
      3: { a: "<em>", b: "</em>" },
    },
  };

  // CSS
  const answerCss = {
    cssSelector: {
      1: { a: "p", b: "color:" },
      2: { a: "#parag-1", b: "color:" },
      3: { a: "colortext" },
      4: { a: "h1, p", b: "color:" },
    },
    cssMargin: {
      1: { a: "margin-left" },
      2: { a: "20px 40px" },
      3: { a: "auto" },
    },
    cssPadding: {
      1: { a: "padding-top" },
      2: { a: "padding" },
      3: { a: "40", b: "10" },
    },
    cssHeightWidth: {
      1: { a: "height" },
      2: { a: "width" },
    },
  };

  // JS
  const answerJs = {
    jsVariable: {
      1: { a: "carName", b: "Volvo" },
      2: { a: "x", b: "50" },
      3: { a: "x", b: "5", c: "+" },
      4: { a: "var", b: "z", c: "alert" },
      5: { a: "firstName", b: ",", c: `"Doe",`, d: "age", e: "35" },
    },
    jsOperator: {
      1: { a: "*" },
      2: { a: "/" },
      3: { a: "%" },
      4: { a: "+=" },
      5: { a: "*=" },
    },
    jsDataTypes: {
      1: { a: "Number", b: "String", c: "Object" },
    },
    jsFunctions: {
      1: { a: "myFunction()" },
      2: { a: "function", b: "myFunction()", c: "{", d: "}" },
      3: { a: "return", b: "Hello" },
      4: { a: "getElementById", b: "innerHTML" },
    },
  };

  const answers = [answersHtml, answerCss, answerJs];

  //#endregion

  //#endregion

  /////////////////////////////////////////////////////////////

  //#region ----- Functions -----
  const smoothScroll = (element) =>
    element.scrollIntoView({ behavior: "smooth" });

  const smoothScrollCallback = (section, topic, number) =>
    document.querySelector(`.${section}-${topic}-q--${number}`);

  const switchMode = (mode, opt1, opt2) => (mode === opt1 ? opt2 : opt1);

  const hideContentToggle = function (topic, chall, e, btn) {
    e.preventDefault();
    const clicked = e.target.closest(btn);

    if (!clicked) return;

    questionBoxContainerAllEl.forEach((c) => c.classList.add("hide-content"));

    document
      .querySelector(`.${topic}-${chall}-q--${clicked.dataset.tab}`)
      .classList.remove("hide-content");
  };

  const switchAccordion = (chall) => {
    document
      .querySelectorAll(".accordion")
      .forEach((c) => c.classList.add("hide-content"));

    document
      .querySelector(`.accordion--${chall}`)
      .classList.remove("hide-content");
  };

  //#region ----- Exercise Functionalities -----
  const markAsDone = (topic, btn, chalSec, click) => {
    btn.style.backgroundColor = "green";
    btn.textContent = "Mark as done";

    click.addEventListener("click", (e) => {
      document
        .querySelector(`.${topic}-${chalSec}-cm-${click.dataset.tab}`)
        .classList.remove("hide-content");
      smoothScroll(challengesSectionEl);
    });
  };

  const tryAgain = (btn) => {
    btn.style.backgroundColor = "red";
    btn.textContent = "Try again";
  };

  const obStyle = (chall, ans) => {
    if (chall === null) return;

    chall.value = `${ans}`;
    chall.style.backgroundColor = "#6a599a";
    chall.style.border = "1px solid #c6b8f2";
  };

  const showAnswer = (
    chall1,
    chall2 = null,
    chall3 = null,
    chall4 = null,
    chall5 = null,
    chall6 = null,
    ans1 = null,
    ans2 = null,
    ans3 = null,
    ans4 = null,
    ans5 = null,
    ans6 = null
  ) => {
    btnShowAnswer.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        chall1.value = `${ans1}`;
        chall1.style.backgroundColor = "#6a599a";
        chall1.style.border = "1px solid #c6b8f2";

        obStyle(chall2, ans2);
        obStyle(chall3, ans3);
        obStyle(chall4, ans4);
        obStyle(chall5, ans5);
        obStyle(chall6, ans6);
      })
    );
  };
  //#endregion

  //#endregion

  /////////////////////////////////////////////////////////////

  //#region ----- Event handlers -----
  btnModeToggleEl.addEventListener("click", (e) => {
    e.preventDefault();
    mode = switchMode(mode, light, dark);
    btnModeEl.name = mode;

    document.querySelector(".sub-heading").classList.toggle("s-h-clr-wm");
    document.querySelector("body").classList.toggle("p-bg-wm");
    document
      .querySelectorAll(".box")
      .forEach((b) => b.classList.toggle("s-b-clr-wm"));
    document
      .querySelectorAll(".desc")
      .forEach((t) => t.classList.toggle("g-t-clr-wm"));
    document
      .querySelectorAll(".tabs")
      .forEach((t) => t.classList.toggle("g-t-clr-wm"));
    btnModeEl.classList.toggle("g-t-clr-wm");
    document.querySelector(".primary-text").classList.toggle("s-h-clr-wm");
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
    switchAccordion("html");
    smoothScroll(btnHtmlEl);
  });

  btnLearnCssEl.addEventListener("click", (e) => {
    e.preventDefault();
    switchAccordion("css");
    smoothScroll(btnCssEl);
  });

  btnLearnJsEl.addEventListener("click", (e) => {
    e.preventDefault();
    switchAccordion("js");
    smoothScroll(btnJsEl);
  });

  // Challenges(btn) -> Accordion(content)
  btnHtmlEl.addEventListener("click", (e) => {
    e.preventDefault();

    questionBoxContainerAllEl.forEach((c) => c.classList.add("hide-content"));

    document
      .querySelector(`.h-attributes-q--1`)
      .classList.remove("hide-content");
    smoothScroll(challengesSectionEl);
    switchAccordion("html");
  });

  btnCssEl.addEventListener("click", (e) => {
    e.preventDefault();

    questionBoxContainerAllEl.forEach((c) => c.classList.add("hide-content"));

    document.querySelector(`.c-selector-q--1`).classList.remove("hide-content");
    smoothScroll(challengesSectionEl);
    switchAccordion("css");
  });

  btnJsEl.addEventListener("click", (e) => {
    e.preventDefault();

    questionBoxContainerAllEl.forEach((c) => c.classList.add("hide-content"));

    document
      .querySelector(`.j-variables-q--1`)
      .classList.remove("hide-content");
    smoothScroll(challengesSectionEl);
    switchAccordion("js");
  });

  //#region ----- HTML Challenges -----

  // Attributes
  htmlAttributesContainerEl.addEventListener("click", (e) => {
    hideContentToggle("h", "attributes", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("h", "attributes", e.target.dataset.tab));
  });

  // Headings
  htmlHeadingsContainerEl.addEventListener("click", (e) => {
    hideContentToggle("h", "headings", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("h", "headings", e.target.dataset.tab));
  });

  // Paragraph
  htmlParagraphContainerEl.addEventListener("click", (e) => {
    hideContentToggle("h", "paragraphs", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("h", "paragraphs", e.target.dataset.tab));
  });

  // Comments
  htmlCommentsContainerEl.addEventListener("click", (e) => {
    hideContentToggle("h", "comments", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("h", "comments", e.target.dataset.tab));
  });

  // Formatting
  htmlFormattingContainerEl.addEventListener("click", (e) => {
    hideContentToggle("h", "formatting", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("h", "formatting", e.target.dataset.tab));
  });
  //#endregion

  //#region ----- CSS Challenges -----

  // Selectors
  cssSelectorContainerEl.addEventListener("click", (e) => {
    hideContentToggle("c", "selector", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("c", "selector", e.target.dataset.tab));
  });

  // Margin
  cssMarginContainerEl.addEventListener("click", (e) => {
    hideContentToggle("c", "margin", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("c", "margin", e.target.dataset.tab));
  });

  // Padding
  cssPaddingContainerEl.addEventListener("click", (e) => {
    hideContentToggle("c", "padding", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("c", "padding", e.target.dataset.tab));
  });

  // Height/ Width
  cssHeightWidhtContainerEl.addEventListener("click", (e) => {
    hideContentToggle("c", "hw", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("c", "hw", e.target.dataset.tab));
  });
  //#endregion

  //#region ----- JS Challenges -----
  jsVariableContainerEl.addEventListener("click", (e) => {
    hideContentToggle("j", "variables", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("j", "variables", e.target.dataset.tab));
  });
  jsOperatorsContainerEl.addEventListener("click", (e) => {
    hideContentToggle("j", "operators", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("j", "operators", e.target.dataset.tab));
  });
  jsDataTypesContainerEl.addEventListener("click", (e) => {
    hideContentToggle("j", "datatypes", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("j", "datatypes", e.target.dataset.tab));
  });
  jsFunctionsContainerEl.addEventListener("click", (e) => {
    hideContentToggle("j", "functions", e, ".exercise-links");
    smoothScroll(smoothScrollCallback("j", "functions", e.target.dataset.tab));
  });
  //#endregion

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  //#region ----- Exercises event handlers -----

  //#region ----- HTML Attributes -----
  btnAtt1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".att-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlAttribute[1].a
    );

    answer1.value === answers[0].htmlAttribute[1].a
      ? markAsDone("h", btnAtt1, "att", clicked)
      : tryAgain(btnAtt1);
  });

  btnAtt2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".att-2--a");
    const answer2 = document.querySelector(".att-2--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlAttribute[2].a,
      answers[0].htmlAttribute[2].b
    );

    answer1.value === answers[0].htmlAttribute[2].a &&
    answer2.value === answers[0].htmlAttribute[2].b
      ? markAsDone("h", btnAtt2, "att", clicked)
      : tryAgain(btnAtt2);
  });

  btnAtt3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".att-3--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlAttribute[3].a
    );

    answer1.value === answers[0].htmlAttribute[3].a
      ? markAsDone("h", btnAtt3, "att", clicked)
      : tryAgain(btnAtt3);
  });

  btnAtt4.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".att-4--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlAttribute[4].a
    );

    answer1.value === answers[0].htmlAttribute[4].a
      ? markAsDone("h", btnAtt4, "att", clicked)
      : tryAgain(btnAtt4);
  });
  //#endregion

  //#region ----- HTML Headings -----
  btnHead1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".head-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlHeading[1].a
    );

    answer1.value === answers[0].htmlHeading[1].a
      ? markAsDone("h", btnHead1, "head", clicked)
      : tryAgain(btnHead1);
  });

  btnHead2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".head-2--a");
    const answer2 = document.querySelector(".head-2--b");
    const answer3 = document.querySelector(".head-2--c");
    const answer4 = document.querySelector(".head-2--d");
    const answer5 = document.querySelector(".head-2--e");
    const answer6 = document.querySelector(".head-2--f");

    showAnswer(
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answers[0].htmlHeading[2].a,
      answers[0].htmlHeading[2].b,
      answers[0].htmlHeading[2].c,
      answers[0].htmlHeading[2].d,
      answers[0].htmlHeading[2].e,
      answers[0].htmlHeading[2].f
    );

    answer1.value === answers[0].htmlHeading[2].a &&
    answer2.value === answers[0].htmlHeading[2].b &&
    answer3.value === answers[0].htmlHeading[2].c &&
    answer4.value === answers[0].htmlHeading[2].d &&
    answer5.value === answers[0].htmlHeading[2].e &&
    answer6.value === answers[0].htmlHeading[2].f
      ? markAsDone("h", btnHead2, "head", clicked)
      : tryAgain(btnHead2);
  });

  btnHead3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".head-3--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlHeading[3].a
    );

    answer1.value === answers[0].htmlHeading[3].a
      ? markAsDone("h", btnHead3, "head", clicked)
      : tryAgain(btnHead3);
  });
  //#endregion

  //#region ----- HTML Paragraph -----
  btnPar1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".par-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlParagraph[1].a
    );

    answer1.value === answers[0].htmlParagraph[1].a
      ? markAsDone("h", btnPar1, "par", clicked)
      : tryAgain(btnPar1);
  });

  btnPar2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".par-2--a");
    const answer2 = document.querySelector(".par-2--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlParagraph[2].a,
      answers[0].htmlParagraph[2].b
    );

    answer1.value === answers[0].htmlParagraph[2].a &&
    answer2.value === answers[0].htmlParagraph[2].b
      ? markAsDone("h", btnPar2, "par", clicked)
      : tryAgain(btnPar2);
  });

  btnPar3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".par-3--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[0].htmlParagraph[3].a
    );

    answer1.value === answers[0].htmlParagraph[3].a
      ? markAsDone("h", btnPar3, "par", clicked)
      : tryAgain(btnPar3);
  });

  btnPar4.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".par-4--a");
    const answer2 = document.querySelector(".par-4--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlParagraph[4].a,
      answers[0].htmlParagraph[4].b
    );

    answer1.value === answers[0].htmlParagraph[4].a &&
    answer2.value === answers[0].htmlParagraph[4].b
      ? markAsDone("h", btnPar4, "par", clicked)
      : tryAgain(btnPar4);
  });
  //#endregion

  //#region ----- HTML Comments -----
  btnCom1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".com-1--a");
    const answer2 = document.querySelector(".com-1--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlComments[1].a,
      answers[0].htmlComments[1].b
    );

    answer1.value === answers[0].htmlComments[1].a &&
    answer2.value === answers[0].htmlComments[1].b
      ? markAsDone("h", btnCom1, "com", clicked)
      : tryAgain(btnCom1);
  });

  btnCom2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".com-2--a");
    const answer2 = document.querySelector(".com-2--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlComments[2].a,
      answers[0].htmlComments[2].b
    );

    answer1.value === answers[0].htmlComments[2].a &&
    answer2.value === answers[0].htmlComments[2].b
      ? markAsDone("h", btnCom2, "com", clicked)
      : tryAgain(btnCom2);
  });
  //#endregion

  //#region ----- HTML Formatting -----
  btnFor1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".for-1--a");
    const answer2 = document.querySelector(".for-1--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlFormatting[1].a,
      answers[0].htmlFormatting[1].b
    );

    answer1.value === answers[0].htmlFormatting[1].a &&
    answer2.value === answers[0].htmlFormatting[1].b
      ? markAsDone("h", btnFor1, "for", clicked)
      : tryAgain(btnFor1);
  });

  btnFor2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".for-2--a");
    const answer2 = document.querySelector(".for-2--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlFormatting[2].a,
      answers[0].htmlFormatting[2].b
    );

    answer1.value === answers[0].htmlFormatting[2].a &&
    answer2.value === answers[0].htmlFormatting[2].b
      ? markAsDone("h", btnFor2, "for", clicked)
      : tryAgain(btnFor2);
  });

  btnFor3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".for-3--a");
    const answer2 = document.querySelector(".for-3--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[0].htmlFormatting[3].a,
      answers[0].htmlFormatting[3].b
    );

    answer1.value === answers[0].htmlFormatting[3].a &&
    answer2.value === answers[0].htmlFormatting[3].b
      ? markAsDone("h", btnFor3, "for", clicked)
      : tryAgain(btnFor3);
  });
  //#endregion

  //#region ----- CSS Selectors -----
  btnSel1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".sel-1--a");
    const answer2 = document.querySelector(".sel-1--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[1].cssSelector[1].a,
      answers[1].cssSelector[1].b
    );

    answer1.value === answers[1].cssSelector[1].a &&
    answer2.value === answers[1].cssSelector[1].b
      ? markAsDone("c", btnSel1, "sel", clicked)
      : tryAgain(btnSel1);
  });

  btnSel2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".sel-2--a");
    const answer2 = document.querySelector(".sel-2--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[1].cssSelector[2].a,
      answers[1].cssSelector[2].b
    );

    answer1.value === answers[1].cssSelector[2].a &&
    answer2.value === answers[1].cssSelector[2].b
      ? markAsDone("c", btnSel2, "sel", clicked)
      : tryAgain(btnSel2);
  });

  btnSel3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".sel-3--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssSelector[3].a
    );

    answer1.value === answers[1].cssSelector[3].a
      ? markAsDone("c", btnSel3, "sel", clicked)
      : tryAgain(btnSel3);
  });

  btnSel4.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".sel-4--a");
    const answer2 = document.querySelector(".sel-4--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[1].cssSelector[4].a,
      answers[1].cssSelector[4].b
    );

    answer1.value === answers[1].cssSelector[4].a &&
    answer2.value === answers[1].cssSelector[4].b
      ? markAsDone("c", btnSel4, "sel", clicked)
      : tryAgain(btnSel4);
  });
  //#endregion

  //#region ----- CSS Margin -----
  btnMar1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".mar-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssMargin[1].a
    );

    answer1.value === answers[1].cssMargin[1].a
      ? markAsDone("c", btnMar1, "mar", clicked)
      : tryAgain(btnMar1);
  });

  btnMar2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".mar-2--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssMargin[2].a
    );

    answer1.value === answers[1].cssMargin[2].a
      ? markAsDone("c", btnMar2, "mar", clicked)
      : tryAgain(btnMar2);
  });

  btnMar3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".mar-3--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssMargin[3].a
    );

    answer1.value === answers[1].cssMargin[3].a
      ? markAsDone("c", btnMar3, "mar", clicked)
      : tryAgain(btnMar3);
  });
  //#endregion

  //#region ----- CSS Padding -----
  btnPad1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".pad-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssPadding[1].a
    );

    answer1.value === answers[1].cssPadding[1].a
      ? markAsDone("c", btnPad1, "pad", clicked)
      : tryAgain(btnPad1);
  });

  btnPad2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".pad-2--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssPadding[2].a
    );

    answer1.value === answers[1].cssPadding[2].a
      ? markAsDone("c", btnPad2, "pad", clicked)
      : tryAgain(btnPad2);
  });

  btnPad3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".pad-3--a");
    const answer2 = document.querySelector(".pad-3--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[1].cssPadding[3].a,
      answers[1].cssPadding[3].b
    );

    answer1.value === answers[1].cssPadding[3].a &&
    answer2.value === answers[1].cssPadding[3].b
      ? markAsDone("c", btnPad3, "pad", clicked)
      : tryAgain(btnPad3);
  });
  //#endregion

  //#region ----- CSS Height/ Width -----
  btnHW1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".hw-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssHeightWidth[1].a
    );

    answer1.value === answers[1].cssHeightWidth[1].a
      ? markAsDone("c", btnHW1, "hw", clicked)
      : tryAgain(btnHW1);
  });

  btnHW2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".hw-2--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[1].cssHeightWidth[2].a
    );

    answer1.value === answers[1].cssHeightWidth[2].a
      ? markAsDone("c", btnHW2, "hw", clicked)
      : tryAgain(btnHW2);
  });
  //#endregion

  //#region ----- JS Variable -----
  btnVar1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".var-1--a");
    const answer2 = document.querySelector(".var-1--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[2].jsVariable[1].a,
      answers[2].jsVariable[1].b
    );

    answer1.value === answers[2].jsVariable[1].a &&
    answer2.value === answers[2].jsVariable[1].b
      ? markAsDone("j", btnVar1, "var", clicked)
      : tryAgain(btnVar1);
  });

  btnVar2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".var-2--a");
    const answer2 = document.querySelector(".var-2--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[2].jsVariable[2].a,
      answers[2].jsVariable[2].b
    );

    answer1.value === answers[2].jsVariable[2].a &&
    answer2.value === answers[2].jsVariable[2].b
      ? markAsDone("j", btnVar2, "var", clicked)
      : tryAgain(btnVar2);
  });

  btnVar3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".var-3--a");
    const answer2 = document.querySelector(".var-3--b");
    const answer3 = document.querySelector(".var-3--c");

    showAnswer(
      answer1,
      answer2,
      answer3,
      null,
      null,
      null,
      answers[2].jsVariable[3].a,
      answers[2].jsVariable[3].b,
      answers[2].jsVariable[3].c
    );

    answer1.value === answers[2].jsVariable[3].a &&
    answer2.value === answers[2].jsVariable[3].b &&
    answer3.value === answers[2].jsVariable[3].c
      ? markAsDone("j", btnVar3, "var", clicked)
      : tryAgain(btnVar3);
  });

  btnVar4.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".var-4--a");
    const answer2 = document.querySelector(".var-4--b");
    const answer3 = document.querySelector(".var-4--c");

    showAnswer(
      answer1,
      answer2,
      answer3,
      null,
      null,
      null,
      answers[2].jsVariable[4].a,
      answers[2].jsVariable[4].b,
      answers[2].jsVariable[4].c
    );

    answer1.value === answers[2].jsVariable[4].a &&
    answer2.value === answers[2].jsVariable[4].b &&
    answer3.value === answers[2].jsVariable[4].c
      ? markAsDone("j", btnVar4, "var", clicked)
      : tryAgain(btnVar4);
  });

  btnVar5.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".var-5--a");
    const answer2 = document.querySelector(".var-5--b");
    const answer3 = document.querySelector(".var-5--c");
    const answer4 = document.querySelector(".var-5--d");
    const answer5 = document.querySelector(".var-5--e");

    showAnswer(
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      null,
      answers[2].jsVariable[5].a,
      answers[2].jsVariable[5].b,
      answers[2].jsVariable[5].c,
      answers[2].jsVariable[5].d,
      answers[2].jsVariable[5].e
    );

    answer1.value === answers[2].jsVariable[5].a &&
    answer2.value === answers[2].jsVariable[5].b &&
    answer3.value === answers[2].jsVariable[5].c &&
    answer4.value === answers[2].jsVariable[5].d &&
    answer5.value === answers[2].jsVariable[5].e
      ? markAsDone("j", btnVar5, "var", clicked)
      : tryAgain(btnVar5);
  });
  //#endregion

  //#region ----- JS Operators -----
  btnOpe1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".ope-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[2].jsOperator[1].a
    );

    answer1.value === answers[2].jsOperator[1].a
      ? markAsDone("j", btnOpe1, "ope", clicked)
      : tryAgain(btnOpe1);
  });

  btnOpe2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".ope-2--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[2].jsOperator[2].a
    );

    answer1.value === answers[2].jsOperator[2].a
      ? markAsDone("j", btnOpe2, "ope", clicked)
      : tryAgain(btnOpe2);
  });

  btnOpe3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".ope-3--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[2].jsOperator[3].a
    );

    answer1.value === answers[2].jsOperator[3].a
      ? markAsDone("j", btnOpe3, "ope", clicked)
      : tryAgain(btnOpe3);
  });

  btnOpe4.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".ope-4--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[2].jsOperator[4].a
    );

    answer1.value === answers[2].jsOperator[4].a
      ? markAsDone("j", btnOpe4, "ope", clicked)
      : tryAgain(btnOpe4);
  });

  btnOpe5.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".ope-5--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[2].jsOperator[5].a
    );

    answer1.value === answers[2].jsOperator[5].a
      ? markAsDone("j", btnOpe5, "ope", clicked)
      : tryAgain(btnOpe5);
  });
  //#endregion

  //#region ----- JS Data Types -----
  btnDat1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".dat-1--a");
    const answer2 = document.querySelector(".dat-1--b");
    const answer3 = document.querySelector(".dat-1--c");

    showAnswer(
      answer1,
      answer2,
      answer3,
      null,
      null,
      null,
      answers[2].jsDataTypes[1].a,
      answers[2].jsDataTypes[1].b,
      answers[2].jsDataTypes[1].c
    );

    answer1.value === answers[2].jsDataTypes[1].a &&
    answer2.value === answers[2].jsDataTypes[1].b &&
    answer3.value === answers[2].jsDataTypes[1].c
      ? markAsDone("j", btnDat1, "dat", clicked)
      : tryAgain(btnDat1);
  });
  //#endregion

  //#region ----- JS Functions -----
  btnFun1.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".fun-1--a");

    showAnswer(
      answer1,
      null,
      null,
      null,
      null,
      null,
      answers[2].jsFunctions[1].a
    );

    answer1.value === answers[2].jsFunctions[1].a
      ? markAsDone("j", btnFun1, "fun", clicked)
      : tryAgain(btnFun1);
  });

  btnFun2.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".fun-2--a");
    const answer2 = document.querySelector(".fun-2--b");
    const answer3 = document.querySelector(".fun-2--c");
    const answer4 = document.querySelector(".fun-2--d");

    showAnswer(
      answer1,
      answer2,
      answer3,
      answer4,
      null,
      null,
      answers[2].jsFunctions[2].a,
      answers[2].jsFunctions[2].b,
      answers[2].jsFunctions[2].c,
      answers[2].jsFunctions[2].d
    );

    answer1.value === answers[2].jsFunctions[2].a &&
    answer2.value === answers[2].jsFunctions[2].b &&
    answer3.value === answers[2].jsFunctions[2].c &&
    answer4.value === answers[2].jsFunctions[2].d
      ? markAsDone("j", btnFun2, "fun", clicked)
      : tryAgain(btnFun2);
  });

  btnFun3.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".fun-3--a");
    const answer2 = document.querySelector(".fun-3--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[2].jsFunctions[3].a,
      answers[2].jsFunctions[3].b
    );

    answer1.value === answers[2].jsFunctions[3].a &&
    answer2.value === answers[2].jsFunctions[3].b
      ? markAsDone("j", btnFun3, "fun", clicked)
      : tryAgain(btnFun3);
  });

  btnFun4.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    const answer1 = document.querySelector(".fun-4--a");
    const answer2 = document.querySelector(".fun-4--b");

    showAnswer(
      answer1,
      answer2,
      null,
      null,
      null,
      null,
      answers[2].jsFunctions[4].a,
      answers[2].jsFunctions[4].b
    );

    answer1.value === answers[2].jsFunctions[4].a &&
    answer2.value === answers[2].jsFunctions[4].b
      ? markAsDone("j", btnFun4, "fun", clicked)
      : tryAgain(btnFun4);
  });
  //#endregion

  //#endregion
  //#endregion
}

init();
/////////////////////////////////////////////////////////////

// tilt
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
