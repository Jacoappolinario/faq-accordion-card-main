const questions = document.querySelectorAll(".question button");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const clickedQuestion = event.currentTarget;
    const correspondingAnswer = getCorrespondingAnswer(clickedQuestion);

    toggleQuestionAndAnswerVisibility(clickedQuestion, correspondingAnswer);

    removeActiveClassFromElements(clickedQuestion, questions);
    removeActiveClassFromElements(correspondingAnswer, answers);
  });
});

function getCorrespondingAnswer(clickedQuestion) {
  const clickedQuestionControls = clickedQuestion.getAttribute("aria-controls");

  const correspondingAnswer = document.getElementById(clickedQuestionControls);

  return correspondingAnswer;
}

function toggleQuestionAndAnswerVisibility(
  clickedQuestion,
  correspondingAnswer
) {
  clickedQuestion.classList.toggle("active");
  correspondingAnswer.classList.toggle("active");

  const isAnswerActive = correspondingAnswer.classList.contains("active");

  clickedQuestion.setAttribute("aria-expanded", isAnswerActive);
}

function removeActiveClassFromElements(activeElement, elements) {
  elements.forEach((element) => {
    if (element !== activeElement) {
      element.classList.remove("active");
    }
  });
}
