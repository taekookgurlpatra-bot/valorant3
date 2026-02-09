let pages=document.querySelectorAll(".page")
let current=0

function go(n){
  pages[current].classList.remove("active")
  current=n
  pages[current].classList.add("active")
}

/* Intro auto move */
setTimeout(()=>{
  go(1)
},3000)

/* Heart rain */
setInterval(()=>{
  let heart=document.createElement("span")
  heart.innerText="💗"
  heart.style.left=Math.random()*100+"vw"
  heart.style.fontSize=18+Math.random()*20+"px"

  document.getElementById("heartRain").appendChild(heart)

  setTimeout(()=>heart.remove(),6000)
},400)

