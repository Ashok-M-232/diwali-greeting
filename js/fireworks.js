// // function launchFireworks() {
// //   const container = document.getElementById("fireworks-container");

// //   const rocket = document.createElement("div");
// //   rocket.className = "rocket";
// //   const xPos = Math.random() * window.innerWidth;
// //   rocket.style.left = xPos + "px";
// //   container.appendChild(rocket);

// //   let pos = 0;
// //   const height = Math.random() * (window.innerHeight/2) + 100;
// //   const rocketInterval = setInterval(() => {
// //     if(pos >= height) {
// //       clearInterval(rocketInterval);
// //       container.removeChild(rocket);
// //       explodeRocket(xPos, window.innerHeight - pos);
// //     } else {
// //       pos += 8;
// //       rocket.style.bottom = pos + "px";
// //     }
// //   }, 22);

// //   setTimeout(launchFireworks, Math.random() * 100 + 500);
// // }

// // function explodeRocket(x, y) {
// //   const container = document.getElementById("fireworks-container");
// //   for(let i=0;i<50;i++){
// //     const spark = document.createElement("div");
// //     spark.className="spark";
// //     const angle=Math.random()*2*Math.PI;
// //     const distance=Math.random()*100 + 50;
// //     const xMove = Math.cos(angle)*distance + "px";
// //     const yMove = Math.sin(angle)*distance + "px";
// //     spark.style.setProperty('--x', xMove);
// //     spark.style.setProperty('--y', yMove);
// //     spark.style.left=x+"px";
// //     spark.style.bottom=y+"px";
// //     container.appendChild(spark);
// //     setTimeout(()=>container.removeChild(spark),1000);
// //   }
// // }

// function launchFireworks() {
//   const container = document.getElementById("fireworks-container");

//   // Launch multiple rockets at once for realism
//   const rocketsCount = Math.floor(Math.random() * 2) + 1; // 1-2 rockets each cycle
//   for (let r = 0; r < rocketsCount; r++) {
//     const rocket = document.createElement("div");
//     rocket.className = "rocket";

//     const xPos = Math.random() * window.innerWidth;
//     rocket.style.left = xPos + "px";
//     container.appendChild(rocket);

//     let pos = 0;
//     const height = Math.random() * (window.innerHeight / 2) + 150; // higher rockets
//     const speed = Math.random() * 4 + 4; // varied speed

//     const rocketInterval = setInterval(() => {
//       if (pos >= height) {
//         clearInterval(rocketInterval);
//         container.removeChild(rocket);
//         explodeRocket(xPos, window.innerHeight - pos);
//       } else {
//         pos += speed;
//         rocket.style.bottom = pos + "px";
//       }
//     }, 20);
//   }

//   // Launch rockets again after random delay
//   setTimeout(launchFireworks, Math.random() * 400 + 200);
// }

// function explodeRocket(x, y) {
//   const container = document.getElementById("fireworks-container");
//   const sparksCount = Math.floor(Math.random() * 30) + 30; // 30-60 sparks

//   const colors = ["#ffdd33", "#ff5c33", "#33ffec", "#ff33f6", "#33ff57"];

//   for (let i = 0; i < sparksCount; i++) {
//     const spark = document.createElement("div");
//     spark.className = "spark";

//     // Random spark color
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     spark.style.background = color;

//     // Random direction and distance
//     const angle = Math.random() * 2 * Math.PI;
//     const distance = Math.random() * 150 + 50;
//     const xMove = Math.cos(angle) * distance + "px";
//     const yMove = Math.sin(angle) * distance + "px";

//     spark.style.setProperty('--x', xMove);
//     spark.style.setProperty('--y', yMove);
//     spark.style.left = x + "px";
//     spark.style.bottom = y + "px";

//     // Random size for sparks
//     const size = Math.random() * 3 + 2;
//     spark.style.width = spark.style.height = size + "px";

//     container.appendChild(spark);

//     // Random lifespan for sparks
//     const lifespan = Math.random() * 800 + 700;
//     setTimeout(() => container.removeChild(spark), lifespan);
//   }
// }

// // Start fireworks when script loads
// launchFireworks();


let rocketCount = 0;

function launchFireworks() {
  const container = document.getElementById("fireworks-container");

  rocketCount++;

  const rocket = document.createElement("div");
  rocket.className = "rocket";

  // Check if this is a big rocket
  const isBig = (rocketCount % 20 === 0);

  // Big rocket styling
  if (isBig) {
    rocket.style.width = "6px";
    rocket.style.height = "18px";
    rocket.style.background = "linear-gradient(to top, #ffdd33, #ff5c33, #ffffff)";
    rocket.style.boxShadow = "0 0 10px #ffdd33, 0 0 20px #ff5c33";
  } else {
    rocket.style.width = "4px";
    rocket.style.height = "12px";
    rocket.style.background = "#ffdd33";
  }

  const startX = Math.random() * window.innerWidth;
  rocket.style.left = startX + "px";
  container.appendChild(rocket);

  let pos = 0;
  const maxHeight = Math.random() * (window.innerHeight / 2) + 150;
  const speed = Math.random() * 4 + 4;
  const curve = (Math.random() - 0.5) * 100;
  const startLeft = startX;

  const rocketInterval = setInterval(() => {
    if (pos >= maxHeight) {
      clearInterval(rocketInterval);
      container.removeChild(rocket);
      explodeRocket(startLeft, window.innerHeight - pos, isBig);
    } else {
      pos += speed;
      rocket.style.bottom = pos + "px";
      rocket.style.left = startLeft + (pos / maxHeight) * curve + "px";
    }
  }, 20);

  setTimeout(launchFireworks, Math.random() * 300 + 200);
}

function explodeRocket(x, y, big = false) {
  const container = document.getElementById("fireworks-container");

  const sparksCount = big ? 120 : Math.floor(Math.random() * 30) + 30;
  const colors = big 
    ? ["#ffd700", "#ff4500", "#ff69b4", "#00ffff", "#ff7f50"] 
    : ["#ffdd33", "#ff5c33", "#33ffec", "#ff33f6", "#33ff57"];

  for (let i = 0; i < sparksCount; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    spark.style.background = colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * (big ? 250 : 100) + (big ? 100 : 50);
    const xMove = Math.cos(angle) * distance + "px";
    const yMove = Math.sin(angle) * distance + "px";

    spark.style.setProperty('--x', xMove);
    spark.style.setProperty('--y', yMove);
    spark.style.left = x + "px";
    spark.style.bottom = y + "px";

    const size = Math.random() * (big ? 5 : 3) + 2;
    spark.style.width = spark.style.height = size + "px";

    container.appendChild(spark);

    const lifespan = Math.random() * (big ? 1500 : 1000) + 700;
    setTimeout(() => container.removeChild(spark), lifespan);
  }
}

// Start fireworks
launchFireworks();
