let cookie = document.querySelector(".test")

cookie.addEventListener("mouseover", () => {
  cookie.classList.remove("animate__swing")
  cookie.classList.add("animate__swing")
})
cookie.addEventListener("mouseleave", () => {
  cookie.classList.remove("animate__swing")
})

let button1 = document.querySelector(".level1")

button1.addEventListener("mouseover", () => {
  button1.classList.remove("animate__bounceIn")
  button1.classList.add("animate__shakeX")
})
button1.addEventListener("mouseleave", () => {
  button1.classList.remove("animate__shakeX")
})

let button2 = document.querySelector(".level2")

button2.addEventListener("mouseover", () => {
  button2.classList.add("animate__shakeX")
})
button2.addEventListener("mouseleave", () => {
  button2.classList.remove("animate__shakeX")
})
let button3 = document.querySelector(".level3")

button3.addEventListener("mouseover", () => {
  button3.classList.add("animate__shakeX")
})
button3.addEventListener("mouseleave", () => {
  button3.classList.remove("animate__shakeX")
})
