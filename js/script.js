const questions = document.querySelectorAll(".question button");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    const clickedQuestion = event.currentTarget;

    const clickedQuestionControls =
      clickedQuestion.getAttribute("aria-controls");
    const correspondingAnswer = document.getElementById(
      clickedQuestionControls
    );

    correspondingAnswer.classList.toggle("active");

    const isAnswerActive = correspondingAnswer.classList.contains("active");

    clickedQuestion.setAttribute("aria-expanded", isAnswerActive);

    answers.forEach((answer) => {
      if (answer !== correspondingAnswer) {
        answer.classList.remove("active");
      }
    });
  });
});
