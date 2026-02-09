let pages = document.querySelectorAll(".page");
let heartRain = document.getElementById("heartRain");

/* PAGE SWITCH */
function go(id){
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
function back(){ go('menu'); }

/* HEART RAIN */
function rain(){
  let h = document.createElement("span");
  h.innerHTML="💗";
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (Math.random()*20+15)+"px";
  heartRain.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(rain,400);

/* MUSIC */
function play(i){
  document.querySelectorAll("audio").forEach(a=>a.pause());
  document.querySelectorAll("audio")[i].play();
}

/* MINI GAMES */
function heartGame(){
  let area=document.getElementById("gameArea");
  area.innerHTML="";
  for(let i=0;i<6;i++){
    let h=document.createElement("span");
    h.innerHTML="💗";
    h.style.fontSize="40px"; h.style.margin="10px";
    h.onclick=()=>{ h.remove(); alert("Love grows in tiny moments 💗"); }
    area.appendChild(h);
  }
}
function startPuzzle(){
  let area=document.getElementById("gameArea");
  area.innerHTML=`<img src="assets/images/puzzle-image.jpg" width="200">`;
  alert("Complete the puzzle mentally 😌💗");
}

/* QUIZ */
let q=[
["Where did we first start talking?","Instagram DMs","WhatsApp","Discord","Snapchat","Instagram DMs"],
["Who confessed feelings first?","You","Ashraf","Both together","Still confused 😋","You"],
["Our favourite thing to do together is?","Talking endlessly","Watching stuff together","Sending reels/memes","All of the above","All of the above"],
["What best describes our relationship vibe?","Chaotic but cute","Soft & comforting","Funny & dramatic","All of the above","All of the above"],
["What reminds me of Ashraf instantly?","Songs","Late night talks","Random cute messages","All of the above","All of the above"],
["What do we do after small fights?","Ignore each other","Talk it out","Send memes","Hug virtually","Talk it out"],
["My favourite thing about Ashraf?","Personality","Caring nature","Smile & humour","Everything","Everything"],
["Which emoji represents us best?","🫂","💗","😋✨","All of them","All of them"],
["Our relationship feels like?","Best friendship","Safe home","Adventure","All of the above","All of the above"],
["Future plans?","Travelling together","Building a cozy life","Creating memories daily","All of the above","All of the above"]
];
let qi=0, score=0;
function loadQ(){
  if(qi>=q.length){
    document.getElementById("quizBox").innerHTML=`
      Score ${score}/10 💗 <br>
      <button onclick="go('letter1')">
      ${score>=9?'Okay wow Ashraf… certified soulmate 😋💗':score>=7?'Not bad… you notice me 😌✨':score>=5?'Hmm… improvement needed 😏':'Seriously? Extra hugs owed 🫂'}
      </button>`;
    return;
  }
  let d=q[qi];
  document.getElementById("quizBox").innerHTML=`
   

