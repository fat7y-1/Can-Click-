console.log("Hello")

// global variable

// let board = []
let winner
let timer = 1
// let order = []

const cookie = document.createElement("img")
cookie.src = "./image/cookie.png"
// console.log(cookie)
const div_1 = document.querySelectorAll(".box")
// div_1.appendChild(cookie)
const angryCookie = document.createElement("img")
angryCookie.src = "./image/angry-cookie.png"
// console.log(angryCookie)

let boardRandom = ["", cookie, angryCookie]

// functions
function start() {
  for (let i = 0; i < 24; i++) {
    const random = boardRandom[Math.floor(boardRandom.length * Math.random())]
    if (random === cookie) {
      const cookie1 = document.createElement("img")
      cookie1.src = "./image/cookie.png"
      div_1[i].appendChild(cookie1)
    } else if (random === angryCookie) {
      const angryCookie1 = document.createElement("img")
      angryCookie1.src = "./image/angry-cookie.png"
      div_1[i].appendChild(angryCookie1)
      angryCookie1.classList.add("angryCookies")
    }
  }

  console.log(board)
}
start()
// event Listener
