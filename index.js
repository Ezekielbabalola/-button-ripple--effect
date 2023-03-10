const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover", (event)=>{
  const x = (event.pagex - btnEL.offsetLeft);
  const y = (event.pageY - btnEL.offsetTop);
  
btnEL.style.setProperty("--xpos", x + "px");
btnEL.style.setProperty("--ypos", y + "px");
});


