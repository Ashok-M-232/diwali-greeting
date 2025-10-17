// ---------- BIG CRACKER ----------
function launchBigCracker() {
  const container = document.getElementById("fireworks-container");
  const startX = Math.random() * (window.innerWidth - 60) + 30;
  const rocket = document.createElement("div");
  rocket.className = "big-rocket";
  rocket.style.left = startX + "px";
  rocket.style.bottom = "0px";
  container.appendChild(rocket);

  const peak = Math.random() * (window.innerHeight * 0.35) + (window.innerHeight * 0.45);
  let pos = 0;
  const speed = 8 + Math.random() * 3;

  const interval = setInterval(() => {
    pos += speed;
    rocket.style.bottom = pos + "px";
    rocket.style.left = startX + Math.sin(pos / 40) * 8 + "px";
    if (pos >= peak) {
      clearInterval(interval);
      if (rocket.parentNode) container.removeChild(rocket);
      explodeBig(startX, pos);
    }
  }, 20);
}

function explodeBig(x, y) {
  const container = document.getElementById("fireworks-container");
  const colors = ["#ffd900ff", "#ff2f00ff", "#ff00c8ff", "#00ffeeff", "#51ff00ff", "#ff8c00", "#ff0000ff"];
  const count = 200;
  const maxDist = Math.max(window.innerWidth, window.innerHeight) * 0.45;

  for (let i = 0; i < count; i++) {
    const spark = document.createElement("div");
    spark.className = "big-spark";
    const size = Math.random() * 6 + 3;
    spark.style.width = spark.style.height = size + "px";
    spark.style.background = colors[Math.floor(Math.random() * colors.length)];
    spark.style.left = x + "px";
    spark.style.bottom = y + "px";

    const angle = Math.random() * 2 * Math.PI;
    const dist = Math.random() * (maxDist * 0.6) + (maxDist * 0.15);

    spark.style.transition = `transform ${800 + Math.random() * 800}ms cubic-bezier(.1,.6,.2,1), opacity ${800 + Math.random() * 800}ms linear`;
    container.appendChild(spark);

    requestAnimationFrame(() => {
      spark.style.transform = `translate(${Math.cos(angle) * dist}px, ${-Math.sin(angle) * dist}px) scale(0.5)`;
      spark.style.opacity = "0";
    });

    setTimeout(() => { if (spark.parentNode) container.removeChild(spark); }, 1800 + Math.random() * 800);
  }
}

// Button click
const bigBtn = document.getElementById("bigCrackerBtn");
if (bigBtn) {
  bigBtn.addEventListener("click", () => {
    bigBtn.disabled = true;
    launchBigCracker();
    setTimeout(() => { bigBtn.disabled = false; }, 1200);
  });
}
