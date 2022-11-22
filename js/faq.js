const questions = document.querySelectorAll(".faq__question");
const items = document.querySelectorAll(".faq__item");
questions.forEach((question) => {
   question.addEventListener("click", () => {
      question.parentNode.classList.toggle("open")

   })
})