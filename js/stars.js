function createStars(count=100){
  const container = document.getElementById("stars-container");
  for(let i=0;i<count;i++){
    const star = document.createElement("div");
    star.className="star";
    star.style.left = Math.random()*window.innerWidth + "px";
    star.style.top = Math.random()*window.innerHeight + "px";
    star.style.width = star.style.height = Math.random()*2+1 + "px";
    star.style.animationDuration = (Math.random()*2+1) + "s";
    container.appendChild(star);
  }
}

createStars();
