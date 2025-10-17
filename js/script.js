// Get URL parameter
function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('name');
}

// Show greeting
function showGreeting(name) {
  document.getElementById("namePopup").style.display = "none";
  const greeting = document.getElementById("greeting");
  greeting.innerText = `✨ Happy Diwali, ${name}! ✨`;
  launchFireworks();
}

// Popup submit
function submitName() {
  const name = document.getElementById("nameInput").value.trim();
  if(name === "") return;

  // Update URL parameter for sharing
  const url = new URL(window.location);
  url.searchParams.set('name', name);
  window.history.replaceState({}, '', url);

  showGreeting(name);
}

// Share button
function shareGreeting() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("Greeting URL copied! Share with your friend 😊");
  });
}

// Fireworks
function launchFireworks() {
  const container = document.getElementById("fireworks");

  const rocket = document.createElement("div");
  rocket.className = "rocket";
  const xPos = Math.random() * window.innerWidth;
  rocket.style.left = xPos + "px";
  container.appendChild(rocket);

  let pos = 0;
  const height = Math.random() * (window.innerHeight/2) + 100;
  const rocketInterval = setInterval(() => {
    if(pos >= height) {
      clearInterval(rocketInterval);
      container.removeChild(rocket);
      explodeRocket(xPos, window.innerHeight - pos);
    } else {
      pos += 5;
      rocket.style.bottom = pos + "px";
    }
  }, 20);

  setTimeout(launchFireworks, Math.random() * 1000 + 500);
}

function explodeRocket(x, y) {
  const container = document.getElementById("fireworks");
  for(let i=0;i<20;i++){
    const spark = document.createElement("div");
    spark.className = "spark";
    const angle = Math.random()*2*Math.PI;
    const distance = Math.random()*80 + 30;
    const xMove = Math.cos(angle)*distance + "px";
    const yMove = Math.sin(angle)*distance + "px";
    spark.style.setProperty('--x', xMove);
    spark.style.setProperty('--y', yMove);
    spark.style.left = x + "px";
    spark.style.bottom = y + "px";
    container.appendChild(spark);
    setTimeout(()=>container.removeChild(spark),2000);
  }
}

// Stars
function createStars(count=100){
  const body = document.body;
  for(let i=0;i<count;i++){
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random()*window.innerWidth + "px";
    star.style.top = Math.random()*window.innerHeight + "px";
    star.style.animationDuration = (Math.random()*2+1) + "s";
    star.style.width = star.style.height = Math.random()*2+1 + "px";
    body.appendChild(star);
  }
}

// Initialize
createStars();
const urlName = getNameFromURL();
if(urlName){
  showGreeting(urlName);
} else {
  document.getElementById("namePopup").style.display = "flex";
}
