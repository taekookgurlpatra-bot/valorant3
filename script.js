let pages=document.querySelectorAll(".page")
let current=0

function go(num){
pages[current].classList.remove("active")
current=num
pages[current].classList.add("active")
}

setTimeout(()=>go(1),3500)

// Heart rain
setInterval(()=>{
let h=document.createElement("span")
h.innerHTML="💗"
h.className="heartDrop"
h.style.left=Math.random()*100+"vw"
h.style.fontSize=Math.random()*20+15+"px"
document.body.appendChild(h)
setTimeout(()=>h.remove(),6000)
},400)

// Music
let songs=[
new Audio("assets/song1.mp3"),
new Audio("assets/song2.mp3"),
new Audio("assets/song3.mp3")
]

function playSong(i){
songs.forEach(s=>s.pause())
songs[i].play()
}

// Quiz
let q=0
let score=0

let questions=[
["Where did we first start talking?",["Instagram DMs","WhatsApp","Discord","Snapchat"],0],
["Who confessed first?",["You","Ashraf","Both","Confused"],0],
["Fav thing together?",["Talk","Watch","Memes","All"],3],
["Relationship vibe?",["Chaotic","Soft","Funny","All"],3],
["Reminds of him?",["Songs","Talks","Msgs","All"],3],
["After fights?",["Ignore","Talk","Memes","Hug"],3],
["Fav thing about him?",["Personality","Caring","Smile","Everything"],3],
["Emoji us?",["🫂","💗","😋✨","All"],3],
["Relationship feels like?",["Friendship","Home","Adventure","All"],3],
["Future?",["Travel","Cozy life","Memories","All"],3]
]

function loadQ(){
let box=document.getElementById("quizBox")
let data=questions[q]

box.innerHTML=`<h2>${data[0]}</h2>`+
data[1].map((o,i)=>`<button onclick="ans(${i})">${o}</button>`).join("")
}

function ans(i){
if(i===questions[q][2]) score++
q++
if(q<questions.length) loadQ()
else finishQuiz()
}

function finishQuiz(){
let percent=score*10
let msg=""

if(percent>=90) msg="Certified soulmate 😋💗"
else if(percent>=70) msg="Not bad 😌✨"
else if(percent>=50) msg="Improve mister 😏"
else msg="Punishment = hugs owed 🫂"

document.getElementById("quizBox").innerHTML=
`<h2>${percent}%</h2><p>${msg}</p><button onclick="go(7)">Open Letters 💌</button>`
}

loadQ()

// Letters
function openLetter(id){
document.getElementById(id+"Open").style.display="block"

if(id==="l1"){
document.getElementById("l1").innerText=
`Happy Valentine’s Day Ashraf 💗
Tum meri comfort ho...`
}

if(id==="l2"){
document.getElementById("l2").innerText=
`Thank you mujhe choose karne ke liye 💗`
}
}
