// Get sender name from URL
function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('name');
}

// Show Diwali greeting
function showGreeting(name) {
  document.getElementById("namePopup").style.display = "none";

  const greetingContainer = document.getElementById("greeting");
  greetingContainer.innerHTML = `
    <h2>🪔 Happy Diwali! 🪔</h2>
    <p class="message">
      Diwali is the festival that celebrates the victory of good over evil and light over darkness. 
      It marks the return of Lord Rama and Sita to Ayodhya after defeating the demon king Ravana.<br><br>
      This day reminds us that no matter how strong evil may seem, 
      <b>ధర్మం (Dharma)</b>, <b>న్యాయం (Justice)</b>, and <b>సత్యం (Truth)</b> will always win in the end. 
      When Lord Rama returned home after 14 years of exile, the people of Ayodhya lit diyas (lamps) to welcome him 
      and celebrate the triumph of righteousness.<br><br>
      That’s why even today, we light lamps, decorate our homes, and share sweets — 
      to fill our lives with light, love, and positivity, and to remember the power of 
      ధర్మం, న్యాయం, సత్యం in our daily lives.
    </p>
    <p class="sender-name">From: ${name ? name : "________"}</p>
    <button id="shareBtn" class="share-btn">Share this Greeting 🎉</button>
  `;

  // Launch fireworks if available
  if (typeof launchFireworks === "function") launchFireworks();
  if (typeof launchGroundFireworks === "function") launchGroundFireworks();

  // Attach share button
  document.getElementById("shareBtn").addEventListener("click", () => {
    openNamePopup();
  });
}

// Open popup to enter name before sharing
function openNamePopup() {
  const popup = document.getElementById("namePopup");
  popup.style.display = "flex";

  const message = document.getElementById("popupMessage");
  message.innerHTML = `
    Enter your name — it will appear as <b>" Example From : Ashok"</b> 
    when you share this Diwali greeting with your friends 🌟
  `;
}

// Copy greeting link to clipboard
function copyGreetingLink(name) {
  const url = new URL(window.location);
  url.searchParams.set('name', name);

  navigator.clipboard.writeText(url.href)
    .then(() => alert("🎉 Link copied! Share this greeting with your friends!"))
    .catch(() => alert("Failed to copy link. Try manually."));
}

// Initialize page
function init() {
  const urlName = getNameFromURL();

  if (urlName) {
    showGreeting(urlName);
  } else {
    showGreeting(null);
  }

  // Handle popup submit
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (!nameInput) {
      alert("Please enter your name!");
      return;
    }
    document.getElementById("namePopup").style.display = "none";
    showGreeting(nameInput);
    copyGreetingLink(nameInput);
  });
}

// Run
init();
