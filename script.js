let pages=document.querySelectorAll(".page")
let current=0

function go(n){
pages[current].classList.remove("active")
current=n
pages[current].classList.add("active")
}

/* intro auto */
setTimeout(()=>go(1),3000)

/* hearts */
setInterval(()=>{
let h=document.createElement("span")
h.innerText="💗"
h.style.left=Math.random()*100+"vw"
h.style.fontSize=15+Math.random()*20+"px"
document.getElementById("heartRain").appendChild(h)
setTimeout(()=>h.remove(),6000)
},400)

/* SONGS */
let songs=[
new Audio("assets/song1.mp3"),
new Audio("assets/song2.mp3"),
new Audio("assets/song3.mp3")
]

function playSong(i){
songs.forEach(s=>s.pause())
songs[i].play()
}

/* MINI GAMES */

function tapGame(){
document.getElementById("gameOutput").innerText=
"Tap my heart faster next time Ashraf 😋💗"
}

function memoryGame(){
let n=Math.floor(Math.random()*100)
document.getElementById("gameOutput").innerText=
"Remember this number: "+n
}

function emojiGame(){
let arr=["💗","🫂","😋","✨"]
let r=arr[Math.floor(Math.random()*arr.length)]
document.getElementById("gameOutput").innerText=
"Your emoji is "+r
}

function numberGame(){
let n=Math.floor(Math.random()*10)
document.getElementById("gameOutput").innerText=
"Lucky number is "+n
}

function complimentGame(){
let arr=[
"You make my world softer 💗",
"You are my comfort person 🫂",
"Your smile heals me 😋"
]
let r=arr[Math.floor(Math.random()*arr.length)]
document.getElementById("gameOutput").innerText=r
}
