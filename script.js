console.log("Hello")

// global variable

// let board = []
let winner
let timer = 60
let score = 0
// let order = []
let init1 = false

const cookie = document.createElement("img")
cookie.src = "./image/cookie.png"
// console.log(cookie)
const div_1 = document.querySelectorAll(".box")
// div_1.appendChild(cookie)
const angryCookie = document.createElement("img")
angryCookie.src = "./image/angry-cookie.png"
// console.log(angryCookie)

let boardRandom = ["", cookie, angryCookie]

const init = document.querySelector("#startTheGame")

// functions
function start() {
  for (let i = 0; i < div_1.length; i++) {
    div_1[i].innerHTML = ""
    div_1[i].classList.remove("cookies")
    div_1[i].classList.remove("angryCookies")
  }

  for (let i = 0; i < div_1.length; i++) {
    const random = boardRandom[Math.floor(boardRandom.length * Math.random())]
    // board[i] = random
    if (random === cookie) {
      const cookie1 = document.createElement("img")
      cookie1.src = "./image/cookie.png"
      div_1[i].appendChild(cookie1)
      div_1[i].classList.add("cookies")
    } else if (random === angryCookie) {
      const angryCookie1 = document.createElement("img")
      angryCookie1.src = "./image/angry-cookie.png"
      div_1[i].appendChild(angryCookie1)
      div_1[i].classList.add("angryCookies")
    }
  }
  time()

  // console.log(board)
}
function scoreCookie(event) {
  const selectCookie = event.currentTarget // currentTarget used for event listener where target used for child elemnt ex: img , p , h
  if (selectCookie.classList.contains("cookies")) {
    const scoreClick = document.querySelector("#scoring")
    score += 10
    scoreClick.innerHTML = score
    selectCookie.innerHTML = ""
    selectCookie.classList.remove("cookies")
    if (score >= 100) {
      userWin()
      timer = 0
      score = 0
    }
  } else if (selectCookie.classList.contains("angryCookies")) {
    selectCookie.innerHTML = ""
    selectCookie.classList.remove("angryCookies")
    timer -= 5
  }

  console.log(score)
}

function time() {
  setInterval(() => {
    const changeTime = document.querySelector("#times")
    if (timer <= 0) {
      changeTime.innerHTML = "Time is Up"
      return //Exit
    } else {
      changeTime.innerHTML = `${timer} Sec`
      timer--
    }
    console.log(timer)
  }, 1000)
}

function userWin() {
  alert("You win")
  for (let i = 0; i < div_1.length; i++) {
    div_1[i].innerHTML = ""
    div_1[i].classList.remove("cookies")
    div_1[i].classList.remove("angryCookies")
  }
}

// function refresh() {
//   setInterval(() => {
//     start()
//   }, 3000)
// }

// why it write over again not clear
function init_C() {
  start()
}

// event Listener
for (let i = 0; i < div_1.length; i++) {
  div_1[i].addEventListener("click", scoreCookie)
}

init.addEventListener("click", init_C)
