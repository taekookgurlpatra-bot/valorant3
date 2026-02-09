let pages=document.querySelectorAll(".page");
let heartRain=document.getElementById("heartRain");

/* PAGE SWITCHING */
function go(id){pages.forEach(p=>p.classList.remove("active"));document.getElementById(id).classList.add("active");}
function back(){go('menu');}

/* HEART RAIN */
function rain(){let h=document.createElement("span");h.innerHTML="💗";h.style.left=Math.random()*100+"vw";h.style.fontSize=(Math.random()*20+15)+"px";heartRain.appendChild(h);setTimeout(()=>h.remove(),6000);}
setInterval(rain,400);

/* MINI GAMES */
function startPuzzle(){let area=document.getElementById("gameArea");area.innerHTML=`<img src="assets/images/puzzle-image.jpg" width="200">`;alert("Complete the puzzle mentally 😌💗");}
function heartGame(){let area=document.getElementById("gameArea");area.innerHTML="";for(let i=0;i<6;i++){let h=document.createElement("span");h.innerHTML="💗";h.style.fontSize="40px";h.style.margin="10px";h.onclick=()=>{h.remove();alert("Love grows in tiny moments 💗");};area.appendChild(h);}}

/* MUSIC */
function play(i){let audios=document.querySelectorAll("audio");audios.forEach(a=>a.pause());audios[i].play();}

/* LETTERS */
function openLetter(id){
  document.querySelector(`#${id} .closed`).style.display="none";
  document.getElementById(`${id}-open`).style.display="block";
  let text=id=="letter1" ? `Hii Ashraf jaanu 💗✨\nHappy Valentine’s Day meri jaan…🤭💗\nKabhi kabhi lagta hai ki life ne mujhe sabse unexpected but sabse beautiful surprise diya… aur woh aap ho 🫵🏻✨\nDoor rehna thoda mushkil hota hai.. but distance ne sirf ek cheez prove ki hai ki aap mere liye kitne important ho 🫂🎀\nTum sirf mere boyfriend nahi ho Ashraf… tum meri comfort ho… meri safe place ho.. aur meri har din ki happiness ho… 🥹🫵🏻💗\nTumhare saath baat karna itna natural lagta hai jaise tum hamesha se meri life ka part the…😭✨\nThank you for loving me…🫂\nThank you for understanding me…💗\nAur thank you for staying… even on days jab main thodi complicated ho jaati hoon 😋💗\nI love you endlessly Ashraf… aur ek din main tumhe woh saare hugs aur kisses dungi jo abhi pending hai 🫂✨💋\nI love you the most jaanuu 🥹✨🫵🏻`
  :`Ashraf 💗\nKabhi kabhi main sochti hoon… ki main itni lucky kaise ho gayi ki tum meri life mein aaye.. 🫂🫵🏻\nThank you mujhe choose karne ke liye…🥹✨\nThank you mere mood swings handle karne ke liye…💗✨\nThank you meri bakwaas sunne ke liye…🤭🥀\nAur thank you best boyfriend hone ke liye..😉🫵🏻\nTumhare saath future imagine karna itna easy lagta hai… jaise life automatically sundar ho jaati hai..🤭💗\nMain promise karti hoon… chahe life mein kitni bhi problems aaye… main hamesha tumhare saath khadi rahungi..🫂🎀\nI’m proud to call you mine Ashraf 😋✨💗`;
  document.getElementById(id=="letter1"?"l1":"l2").innerText=text;
}

/* QUIZ */
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
  if(qi>=quizQ.length){document.getElementById("quizBox").innerHTML=`Score ${score}/10 💗 <br><button onclick="go('letter1')">Continue</button>`;return;}
  let d=quizQ[qi];
  document.getElementById("quizBox").innerHTML=`<p>${d[0]}</p>
  <button onclick="ans('${d[1]}','${d[5]}')">${d[1]}</button>
  <button onclick="ans('${d[2]}','${d[5]}')">${d[2]}</button>
  <button onclick="ans('${d[3]}','${d[5]}')">${d[3]}</button>
  <button onclick="ans('${d[4]}','${d[5]}')">${d[4]}</button>`;
}
function ans(ansGiven,correct){if(ansGiven==correct) score++;qi++;loadQ();}
loadQ();

