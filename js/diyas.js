function createDiyas(count=5){
  const container = document.getElementById("diyas-container");
  for(let i=0;i<count;i++){
    const diya = document.createElement("div");
    diya.className = "diya";
    diya.style.left = (i*15 + 10) + "%";
    diya.style.animationDuration = (2+Math.random()*2) + "s";
    container.appendChild(diya);
  }
}
createDiyas();
