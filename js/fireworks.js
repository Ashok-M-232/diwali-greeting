// ---------- FIREWORKS ----------

// Launch rockets from the bottom randomly
function launchFireworks() {
  const container = document.getElementById("fireworks-container");

  const rocket = document.createElement("div");
  rocket.className = "rocket";

  // Random horizontal position within viewport
  const xPos = Math.random() * (window.innerWidth - 20);
  rocket.style.left = xPos + "px";
  rocket.style.bottom = "0px";
  rocket.style.width = "4px";
  rocket.style.height = "15px";
  rocket.style.background = "#ff9f43";
  rocket.style.position = "absolute";
  rocket.style.borderRadius = "2px";

  container.appendChild(rocket);

  // Rocket height
  const height = Math.random() * (window.innerHeight / 2) + 100;
  let pos = 0;

  // Animate rocket upwards
  const rocketInterval = setInterval(() => {
    if (pos >= height) {
      clearInterval(rocketInterval);
      container.removeChild(rocket);
      explodeRocket(xPos, pos); // Explode at current position
    } else {
      pos += 6; // speed of rocket
      rocket.style.bottom = pos + "px";
    }
  }, 20);

  // Repeat rockets randomly
  setTimeout(launchFireworks, Math.random() * 1000 + 500);
}

// Explode rocket into sparks
function explodeRocket(x, y) {
  const container = document.getElementById("fireworks-container");

  for (let i = 0; i < 25; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";

    // Random direction and distance
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 100 + 50;
    const xMove = Math.cos(angle) * distance + "px";
    const yMove = Math.sin(angle) * distance + "px";

    spark.style.setProperty('--x', xMove);
    spark.style.setProperty('--y', yMove);
    spark.style.left = x + "px";
    spark.style.bottom = y + "px";

    // Spark styles
    spark.style.width = spark.style.height = Math.random() * 3 + 2 + "px";
    spark.style.background = ["#ff4d4d", "#ffcc33", "#33ffcc", "#ff66ff"][Math.floor(Math.random() * 4)];
    spark.style.position = "absolute";
    spark.style.borderRadius = "50%";
    spark.style.opacity = 1;
    spark.style.transition = "transform 0.8s ease-out, opacity 0.8s ease-out";

    container.appendChild(spark);

    // Animate spark
    setTimeout(() => {
      spark.style.transform = `translate(${xMove}, ${yMove}) scale(0.5)`;
      spark.style.opacity = 0;
    }, 10);

    // Remove spark after animation
    setTimeout(() => {
      if (spark.parentNode) container.removeChild(spark);
    }, 900);
  }
}

// Big cracker: launch a big rocket and explode into a large colorful burst
function launchBigCracker() {
  const container = document.getElementById("fireworks-container");
  if (!container) return;

  // Lock spacing to viewport
  const maxX = Math.max(0, window.innerWidth - 40);
  const startX = Math.random() * (maxX - 60) + 30; // margin from sides

  // Create big rocket
  const rocket = document.createElement("div");
  rocket.className = "big-rocket";
  rocket.style.left = startX + "px";
  rocket.style.bottom = "0px";
  container.appendChild(rocket);

  // Rocket flight params
  const peak = Math.random() * (window.innerHeight * 0.35) + (window.innerHeight * 0.45); // higher peak
  const speed = 8 + Math.random() * 3; // pixels per tick
  let pos = 0;

  const interval = setInterval(() => {
    pos += speed;
    rocket.style.bottom = pos + "px";

    // slight horizontal sway for realism
    const sway = Math.sin(pos / 40) * 8;
    rocket.style.left = (startX + sway) + "px";

    if (pos >= peak) {
      clearInterval(interval);
      // remove rocket element
      if (rocket.parentNode) container.removeChild(rocket);
      // explode big
      explodeBig(startX, pos);
    }
  }, 20);
}

// Explosion function for big cracker
function explodeBig(x, y) {
  const container = document.getElementById("fireworks-container");
  if (!container) return;

  const colors = ["#ffd700","#ff5733","#ff33d4","#33fff0","#7cff33","#ff8c00","#ff3366"];
  const bigCount = 140; // number of sparks
  const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.45;

  for (let i = 0; i < bigCount; i++) {
    const spark = document.createElement("div");
    spark.className = "big-spark";

    // random size and color
    const size = Math.random() * 6 + 3;
    spark.style.width = spark.style.height = size + "px";
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
    spark.style.left = x + "px";
    spark.style.bottom = y + "px";

    // pick random direction and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (maxDistance * 0.6) + (maxDistance * 0.15);
    const xMove = Math.cos(angle) * distance;
    const yMove = Math.sin(angle) * distance;

    // Movement + fade via transform + opacity
    spark.style.transition = `transform ${800 + Math.random()*800}ms cubic-bezier(.1,.6,.2,1), opacity ${800 + Math.random()*800}ms linear`;
    container.appendChild(spark);

    // cause layout/paint then animate
    requestAnimationFrame(() => {
      spark.style.transform = `translate(${xMove}px, ${-yMove}px) scale(0.5)`;
      spark.style.opacity = "0";
    });

    // cleanup after animation
    setTimeout(() => {
      if (spark.parentNode) container.removeChild(spark);
    }, 1800 + Math.random() * 800);
  }

  // small secondary ring (glow) — optional visual
  const ring = document.createElement("div");
  ring.style.position = "absolute";
  ring.style.left = (x - 6) + "px";
  ring.style.bottom = (y - 6) + "px";
  ring.style.width = "12px";
  ring.style.height = "12px";
  ring.style.borderRadius = "50%";
  ring.style.boxShadow = "0 0 40px 16px rgba(255,200,70,0.12)";
  ring.style.pointerEvents = "none";
  ring.style.zIndex = 780;
  container.appendChild(ring);
  setTimeout(()=>{ if(ring.parentNode) ring.parentNode.removeChild(ring); }, 650);
}

// Button click handler with short debounce/disable to avoid spam
const bigBtn = document.getElementById("bigCrackerBtn");
if (bigBtn) {
  bigBtn.addEventListener("click", () => {
    // disable for 1200ms to avoid overlapping spam
    bigBtn.disabled = true;
    launchBigCracker();
    setTimeout(() => { bigBtn.disabled = false; }, 1200);
  });
}

// (Optional) allow keyboard 'b' key to trigger big cracker for accessibility
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'b') {
    // mimic button press
    if (bigBtn && !bigBtn.disabled) {
      bigBtn.disabled = true;
      launchBigCracker();
      setTimeout(()=>bigBtn.disabled=false,1200);
    }
  }
});

// Initialize fireworks
launchFireworks();
