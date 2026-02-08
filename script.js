console.log("Hello")

// global variable

// let board = []
let winner = false
let timer = 60
let timeStore = false
let score = 0
// let order = []

let renderC = 40
let randomizer
let timing

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

const scoreClick = document.querySelector("#scoring")

// functions
function start() {
  refresh()

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

  stopRandomize()
  render()
  // stopTime()
  // time()
  // console.log(board)
}
function scoreCookie(event) {
  const selectCookie = event.currentTarget // currentTarget used for event listener where target used for child elemnt ex: img , p , h
  if (selectCookie.classList.contains("cookies")) {
    score += 30
    scoreClick.innerHTML = score
    selectCookie.innerHTML = ""
    selectCookie.classList.remove("cookies")
    if (score >= 100) {
      // userWin()
      // winner = true
      scoreClick.textContent = "100"
      window.location.href = "./win.html"
    }
  } else if (selectCookie.classList.contains("angryCookies")) {
    selectCookie.innerHTML = ""
    selectCookie.classList.remove("angryCookies")
    timer -= 5
  }

  console.log(score)
}

function time() {
  timing = setInterval(() => {
    const changeTime = document.querySelector("#times")
    if (timer <= 0) {
      changeTime.innerHTML = "Time is Up"
      setTimeout(() => {
        window.location.href = "./loss.html"
      }, 1000)

      if (initTimeOut === true && init.addEventListener("click", init_C)) {
        resetCookies()
      }
    } else {
      changeTime.innerHTML = `${timer} Sec`
      timer--
      console.log(timeStore)
    }
    console.log(timer)
  }, 1000)
}

// function userWin() {
//   alert("You win")
//   for (let i = 0; i < div_1.length; i++) {
//     div_1[i].innerHTML = ""
//     div_1[i].classList.remove("cookies")
//     div_1[i].classList.remove("angryCookies")
//   }
//   timer = 60
//   score = 0
// }

function refresh() {
  for (let i = 0; i < div_1.length; i++) {
    div_1[i].innerHTML = ""
    div_1[i].classList.remove("cookies")
    div_1[i].classList.remove("angryCookies")
  }
}

function init_C() {
  start()
  time()
}

// function stopTime() {
//   clearInterval(timing)
// }
function stopRandomize() {
  clearInterval(randomizer)
}

function render() {
  randomizer = setInterval(() => {
    start()
  }, 1000)
}

// event Listener

for (let i = 0; i < div_1.length; i++) {
  div_1[i].addEventListener("click", scoreCookie)
}

init.addEventListener("click", init_C)
