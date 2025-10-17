// Get URL parameter
function getNameFromURL(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Show greeting for receiver
function showGreeting(sender, receiver) {
  document.getElementById("namePopup").style.display = "none";
  document.getElementById("sharePopup").style.display = "none";

  const greetingContainer = document.getElementById("greeting");

  greetingContainer.innerHTML = `
    <h2>✨ Happy Diwali, <span class="receiver-name">${receiver}</span>! ✨</h2>
    <p class="message">
      Dear ${receiver},<br>
      ${sender} sends you warm wishes on the festival of lights! 🪔<br>
      Diwali is celebrated to honor the victory of light over darkness and knowledge over ignorance.<br>
      May your life be filled with joy, prosperity, and happiness.
    </p>
    <p class="sender-name">From: ${sender}</p>
    <button id="shareBtn" class="share-btn">Share this Greeting 🎉</button>
  `;

  if(typeof launchFireworks === "function") launchFireworks();
  if(typeof launchGroundFireworks === "function") launchGroundFireworks();

  // Attach share button
  document.getElementById("shareBtn").addEventListener("click", () => {
    copyGreetingLink(sender, receiver);
  });
}

// Copy greeting link to clipboard
function copyGreetingLink(sender, receiver) {
  const url = new URL(window.location);
  url.searchParams.set('sender', sender);
  url.searchParams.set('receiver', receiver);

  navigator.clipboard.writeText(url.href)
    .then(() => alert("🎉 Link copied! Share with your friends 😊"))
    .catch(() => alert("Failed to copy link. Try manually."));
}

// Initialize page
function init() {
  const sender = getNameFromURL("sender");
  const receiver = getNameFromURL("receiver");

  const namePopup = document.getElementById("namePopup");

  if (sender && receiver) {
    // Directly show greeting if URL has names
    showGreeting(sender, receiver);
  } else {
    // Show initial name popup
    namePopup.style.display = "flex";
  }

  // Initial submit button
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (!nameInput) {
      alert("Please enter your name!");
      return;
    }
    // Open share popup for sender & receiver names
    document.getElementById("sharePopup").style.display = "flex";
    namePopup.style.display = "none";
  });

  // Share popup submit
  const shareSubmitBtn = document.getElementById("shareSubmitBtn");
  shareSubmitBtn.addEventListener("click", () => {
    const senderInput = document.getElementById("senderName").value.trim();
    const receiverInput = document.getElementById("receiverName").value.trim();
    if (!senderInput || !receiverInput) {
      alert("Please enter both names!");
      return;
    }
    showGreeting(senderInput, receiverInput);
    copyGreetingLink(senderInput, receiverInput);
  });
}

// Run init
init();
