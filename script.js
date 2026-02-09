let pages=document.querySelectorAll(".page")
let current=0

function go(num){
pages[current].classList.remove("active")
current=num
pages[current].classList.add("active")
}

/* AUTO INTRO */
setTimeout(()=>go(1),3500)

/* HEART RAIN */
setInterval(()=>{
let h=document.createElement("span")
h.innerHTML="💗"
h.className="heartDrop"
h.style.left=Math.random()*100+"vw"
h.style.fontSize=Math.random()*20+15+"px"
document.body.appendChild(h)
setTimeout(()=>h.remove(),6000)
},400)

/* TRACK MENU VISITS */
let visited=new Set()

function openSection(num){
visited.add(num)
go(num)

if(visited.size===4){
setTimeout(showHeart,800)
}
}

function showHeart(){
let heart=document.getElementById("heartReveal")
heart.style.opacity=1
heart.style.pointerEvents="auto"
}

