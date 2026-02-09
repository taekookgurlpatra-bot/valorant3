let pages = document.querySelectorAll(".page");
let currentPage = 0;
let heartRain = document.getElementById("heartRain");

/* Show page by index */
function showPage(index){
  pages.forEach(p => p.classList.remove("active"));
  pages[index].classList.add("active");
  currentPage = index;
}

/* Next / Previous buttons */
function nextPage(id){
  if(id){showPage([...pages].findIndex(p=>p.id===id));}
  else if(currentPage < pages.length-1){showPage(currentPage+1);}
}
function prevPage(){if(currentPage>0) showPage(currentPage-1);}

/* Hearts raining */
function rain(){
  let h=document.createElement("span");
  h.innerHTML="💗";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(Math.random()*20+15)+"px";
  heartRain.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(rain,400);

/* Mini games */
function startPuzzle(){
  let area=document.getElementById("gameArea");
  area.innerHTML=`<img src="assets/images/puzzle.png" width="200">`;
  alert("Complete the puzzle mentally 😌💗");
}
function heartGame(){
  let area=document.getElementById("gameArea");
  area.innerHTML="";
  for(let i=0;i<6;i++){
    let h=document.createElement("span");
    h.innerHTML="💗";h.style.fontSize="40px";h.style.margin="10px";
    h.onclick=()=>{h.remove();alert("Love grows in tiny moments 💗");};
    area.appendChild(h);
  }
}

/* Music */
function play(i){
  let audios=document.querySelectorAll("audio");
  audios.forEach(a=>a.pause());
  audios[i].play();
}

/* Letters */
function openLetter(id){
  document.querySelector(`#${id} .closed`).style.display="none";
  document.getElementById(`${id}-open`).style.display="block";
  let text=id=="letter1" ? 
`Hii Ashraf jaanu 💗✨
Happy Valentine’s Day meri jaan…🤭💗
Kabhi kabhi lagta hai ki life ne mujhe sabse unexpected but sabse beautiful surprise diya… aur woh aap ho 🫵🏻✨
Door rehna thoda mushkil hota hai.. but distance ne sirf ek cheez prove ki hai ki aap mere liye kitne important ho 🫂🎀
Tum sirf mere boyfriend nahi ho Ashraf… tum meri comfort ho… meri safe place ho.. aur meri har din ki happiness ho… 🥹🫵🏻💗
Tumhare saath baat karna itna natural lagta hai jaise tum hamesha se meri life ka part the…😭✨
Thank you for loving me…🫂
Thank you for understanding me…💗
Aur thank you for staying… even on days jab main thodi complicated ho jaati hoon 😋💗
I love you endlessly Ashraf… aur ek din main tumhe woh saare hugs aur kisses dungi jo abhi pending hai 🫂✨💋
I love you the most jaanuu 🥹✨🫵🏻`
  :`Ashraf 💗
Kabhi kabhi main sochti hoon… ki main itni lucky kaise ho gayi ki tum meri life mein aaye.. 🫂🫵🏻
Thank you mujhe choose karne ke liye…🥹✨
Thank you mere mood swings handle karne ke liye…💗✨
Thank you meri bakwaas sunne ke liye…🤭🥀
Aur thank you best boyfriend hone ke liye..😉🫵🏻
Tumhare saath future imagine karna itna easy lagta hai… jaise life automatically sundar ho jaati hai..🤭💗
Main promise karti hoon… chahe life mein kitni bhi problems aaye… main hamesha tumhare saath khadi rahungi..🫂🎀
I’m proud to call you mine Ashraf 😋✨💗`;
  document.getElementById(id=="letter1"?"l1":"l2").innerText=text;
}

/* Quiz */
let quizQ=[
["Where did we first start talking?","Instagram DMs","WhatsApp","Discord","Snapchat","A"],
["Who confessed feelings first?","Debasmita","Ashraf","Both together","Still confused 😋","A"],
["Our favourite thing to do together is?","Talking endlessly","Watching stuff together","Sending reels/memes","All of the above","D"],
["What best describes our relationship vibe?","Chaotic but cute","Soft & comforting","Funny & dramatic","All of the above","D"],
["What is something that reminds me of Ashraf instantly?","Songs","Late night talks","Random cute messages","All of the above","D"],
["What do we usually do after small fights?","Ignore each other","Talk it out","Send memes","Hug virtually","B"],
["What is my favourite thing about Ashraf?","Personality","Caring nature","Smile & humour","Everything","D"],
["Which emoji represents us best?","🫂","💗","😋✨","All of them","D"],
["Our relationship feels like?","Best friendship","Safe home","Adventure","All of the above","D"],
["What do I want our future to look like?","Travelling together","Building a cozy life","Creating memories daily","All of the above","D"]
];
let qi=0,score=0;
function loadQ(){
  if(qi>=quizQ.length){
    document.getElementById("quizBox").innerHTML=`Score ${score}/10 💗 <br><button onclick="nextPage('letter1')">Continue</button>`;
    return;
  }
  let d=quizQ[qi];
  document.getElementById("quizBox").innerHTML=`<p>${d[0]}</p>
  <button onclick="ans('${d[1]}','${d[5]}')">${d[1]}</button>
  <button onclick="ans('${d[2]}','${d[5]}')">${d[2]}</button>
  <button onclick="ans('${d[3]}','${d[5]}')">${d[3]}</button>
  <button onclick="ans('${d[4]}','${d[5]}')">${d[4]}</button>`;
}
function ans(ansGiven,correct){
  if(ansGiven==correct) score++;
  qi++;
  loadQ();
}
loadQ();

/* Optional: swipe support */
let startY=null;
document.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;});
document.addEventListener('touchend',e=>{
  if(!startY) return;
  let diff=e.changedTouches[0].clientY-startY;
  if(diff>50) prevPage();
  else if(diff<-50) nextPage();
  startY=null;
});
