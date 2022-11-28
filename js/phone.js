const phone = document.querySelector(".header__phone");
const link = document.querySelector(".header__phone--link")

link.addEventListener("click", (e) => {
   e.preventDefault()
   phone.classList.toggle("open")
})