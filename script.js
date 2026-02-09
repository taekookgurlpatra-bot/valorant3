function go(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function openLetter(img,newSrc){
  img.src = newSrc;
}

// auto intro → menu
setTimeout(()=>{
  go("menu");
},4000);
