let pages=document.querySelectorAll(".page");
let completed=new Set();

function restartGif(page){
let gifs=page.querySelectorAll("img");
gifs.forEach(g=>{
let src=g.src;
g.src="";
g.src=src;
});
}

function go(id){
pages.forEach(p=>p.classList.remove("active"));

let page=document.getElementById(id);
page.classList.add("active");

restartGif(page);

if(["polaroid","games","music","promises"].includes(id)){
completed.add(id);
}

if(completed.size===4){
document.getElementById("heartBtn").style.display="block";
}
}

setTimeout(()=>go("menu"),4000);

/* HEART RAIN */
setInterval(()=>{
let h=document.createElement("span");
h.innerHTML="💗";
h.style.left=Math.random()*100+"vw";
document.getElementById("heartRain").appendChild(h);
setTimeout(()=>h.remove(),6000);
},500);

/* MUSIC */
function playSong(i){
document.querySelectorAll("audio").forEach(a=>a.pause());
document.querySelectorAll("audio")[i].play();
}

/* GAMES */
function startGame(n){
document.getElementById("gameArea").innerHTML=
`<p>Game ${n} instructions coming soon 😋</p>`;
}

/* QUIZ */
let q=[
["Where did we first talk?","Instagram DMs","WhatsApp","Discord","Snapchat","Instagram DMs"],
["Who confessed first?","Debasmita","Ashraf","Both","Confused","You"],
["Fav thing together?","Talking","Watching","Memes","All","All"],
["Our vibe?","Chaotic","Comfort","Funny","All","All"],
["Reminds me of Ashraf?","Songs","Talks","Messages","All","All"],
["After fights?","Ignore","Talk","Memes","Both","Both"],
["Fav thing about him?","Personality","Care","Smile","Everything","Everything"],
["Emoji for us?","🫂","💗","😋✨","All","All"],
["Relationship feels like?","Friendship","Home","Adventure","All","All"],
["Future dream?","Travel","Cozy life","Memories","All","All"]
];

let qi=0,score=0;

function loadQ(){
if(qi>=q.length){
let msg="";

let percent=score*10;

if(percent>=90) msg="Certified soulmate 😋💗";
else if(percent>=70) msg="Not bad 😌✨";
else if(percent>=50) msg="Improve mister 😏";
else msg="Punishment = extra hugs 🫂";

quizBox.innerHTML=`Score ${score}/10 <br>${msg}
<br><button onclick="go('letter1')">Continue</button>`;
return;
}

let d=q[qi];

quizBox.innerHTML=`
<p>${d[0]}</p>
<button onclick="ans('${d[1]}')">${d[1]}</button>
<button onclick="ans('${d[2]}')">${d[2]}</button>
<button onclick="ans('${d[3]}')">${d[3]}</button>
<button onclick="ans('${d[4]}')">${d[4]}</button>
`;
}

function ans(a){
if(a===q[qi][5]) score++;
qi++;
loadQ();
}

loadQ();

/* LETTERS */
function openLetter1(){
letterContent1.innerHTML=
`<img src="assets/letter1-open.png" width="250">
<p>Hii Ashraf jaanu 💗✨<br><br>
Happy Valentine’s Day meri jaan…🤭💗<br>
Door rehna mushkil hota hai…<br>
I love you endlessly Ashraf 💗</p>
<button onclick="go('letter2')">Next</button>`;
}

function openLetter2(){
letterContent2.innerHTML=
`<img src="assets/letter2-open.png" width="250">
<p>Ashraf 💗<br><br>
Thank you mujhe choose karne ke liye…<br>
I’m proud to call you mine 😋✨💗</p>
<button onclick="go('final')">Finish</button>`;
}
