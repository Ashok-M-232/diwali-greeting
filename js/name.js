// // Get sender name from URL
// function getNameFromURL() {
//   const params = new URLSearchParams(window.location.search);
//   return params.get('name');
// }

// // Show Diwali greeting
// function showGreeting(name) {
//   document.getElementById("namePopup").style.display = "none";

//   const greetingContainer = document.getElementById("greeting");
//   greetingContainer.innerHTML = `
//     <h2>🪔 Happy Diwali! 🪔</h2>
//     <p class="message">
//       Diwali is the festival that celebrates the victory of good over evil and light over darkness. 
//       It marks the return of Lord Rama and Sita to Ayodhya after defeating the demon king Ravana.<br><br>
//       This day reminds us that no matter how strong evil may seem, 
//       <b>ధర్మం (Dharma)</b>, <b>న్యాయం (Justice)</b>, and <b>సత్యం (Truth)</b> will always win in the end. 
//       When Lord Rama returned home after 14 years of exile, the people of Ayodhya lit diyas (lamps) to welcome him 
//       and celebrate the triumph of righteousness.<br><br>
//       That’s why even today, we light lamps, decorate our homes, and share sweets — 
//       to fill our lives with light, love, and positivity, and to remember the power of 
//       ధర్మం, న్యాయం, సత్యం in our daily lives.
//     </p>
//     <p class="sender-name">From: ${name ? name : "________"}</p>
//     <button id="shareBtn" class="share-btn">Share this Greeting 🎉</button>
//   `;

//   // Launch fireworks if available
//   if (typeof launchFireworks === "function") launchFireworks();
//   if (typeof launchGroundFireworks === "function") launchGroundFireworks();

//   // Attach share button
//   document.getElementById("shareBtn").addEventListener("click", () => {
//     openNamePopup();
//   });
// }

// // Open popup to enter name before sharing
// function openNamePopup() {
//   const popup = document.getElementById("namePopup");
//   popup.style.display = "flex";

//   const message = document.getElementById("popupMessage");
//   message.innerHTML = `
//     Enter your name — it will appear as <b>" Example From : Ashok"</b> 
//     when you share this Diwali greeting with your friends 🌟
//   `;
// }

// // Copy greeting link to clipboard
// function copyGreetingLink(name) {
//   const url = new URL(window.location);
//   url.searchParams.set('name', name);

//   navigator.clipboard.writeText(url.href)
//     .then(() => alert("🎉 Link copied! Share this greeting with your friends!"))
//     .catch(() => alert("Failed to copy link. Try manually."));
// }

// // Initialize page
// function init() {
//   const urlName = getNameFromURL();

//   if (urlName) {
//     showGreeting(urlName);
//   } else {
//     showGreeting(null);
//   }

//   // Handle popup submit
//   const submitBtn = document.getElementById("submitBtn");
//   submitBtn.addEventListener("click", () => {
//     const nameInput = document.getElementById("nameInput").value.trim();
//     if (!nameInput) {
//       alert("Please enter your name!");
//       return;
//     }
//     document.getElementById("namePopup").style.display = "none";
//     showGreeting(nameInput);
//     copyGreetingLink(nameInput);
//   });
// }

// // Run
// init();


// -------------------------------
// Get name from URL
// -------------------------------
// function getNameFromURL() {
//   const params = new URLSearchParams(window.location.search);
//   return params.get('name');
// }

// // -------------------------------
// // Greeting content (English + Telugu)
// // -------------------------------
// const greetings = {
//   en: `
//     <h2>🪔 Happy Diwali! 🪔</h2>
//     <p class="message">
//       Diwali is the festival that celebrates the victory of good over evil and light over darkness. 
//       It marks the return of Lord Rama and Sita to Ayodhya after defeating the demon king Ravana.<br><br>
//       This day reminds us that no matter how strong evil may seem, 
//       <b>ధర్మం (Dharma)</b>, <b>న్యాయం (Justice)</b>, and <b>సత్యం (Truth)</b> will always win in the end. 
//       When Lord Rama returned home after 14 years of exile, the people of Ayodhya lit diyas (lamps) to welcome him 
//       and celebrate the triumph of righteousness.<br><br>
//       That’s why even today, we light lamps, decorate our homes, and share sweets — 
//       to fill our lives with light, love, and positivity, and to remember the power of 
//       ధర్మం, న్యాయం, సత్యం in our daily lives.
//     </p>
//   `,
//   te: `
//     <h2>🪔 శుభ దీపావళి! 🪔</h2>
//     <p class="message">
//       దీపావళి అనేది చెడుపై మంచిది, చీకటిపై వెలుగు గెలిచిన పండుగ 🌟<br><br>
//       ఇది శ్రీరాముడు మరియు సీతమ్మలు రావణుడిపై విజయాన్ని సాధించి అయోధ్యకు తిరిగి వచ్చిన సందర్భాన్ని గుర్తు చేస్తుంది.<br><br>
//       ఈ రోజు మనకు గుర్తు చేస్తుంది — ఎంత బలమైన చెడు ఉన్నా, 
//       <b>ధర్మం</b>, <b>న్యాయం</b>, మరియు <b>సత్యం</b> ఎప్పుడూ గెలుస్తాయి!<br><br>
//       శ్రీరాముడు 14 సంవత్సరాల వనవాసం తర్వాత తిరిగి వచ్చినప్పుడు, 
//       అయోధ్య ప్రజలు ఆయనను స్వాగతించడానికి దీపాలను వెలిగించి, నీతిపరమైన విజయాన్ని జరుపుకున్నారు.<br><br>
//       అందుకే మనం ఈరోజు కూడా దీపాలు వెలిగించి, ఇళ్లు అలంకరించి, తీపి పంచుకుంటాము — 
//       మన జీవితాలను వెలుగు, ప్రేమ, ఆనందంతో నింపుకునేందుకు 🪔
//     </p>
//   `
// };

// // -------------------------------
// // Show greeting (with toggle button)
// // -------------------------------
// let currentLang = "en";

// function showGreeting(name) {
//   document.getElementById("namePopup").style.display = "none";

//   const greetingContainer = document.getElementById("greeting");
//   greetingContainer.innerHTML = `
//     <div class="lang-toggle">
//       <button id="langBtn" class="translate-btn">🌐 Telugu</button>
//     </div>
//     <div id="greetContent">${greetings[currentLang]}</div>
//     <p class="sender-name">From: ${name ? name : "________"}</p>
//     <button id="shareBtn" class="share-btn">Share this Greeting 🎉</button>
//   `;

//   // Fireworks
//   if (typeof launchFireworks === "function") launchFireworks();
//   if (typeof launchGroundFireworks === "function") launchGroundFireworks();

//   // Share button
//   document.getElementById("shareBtn").addEventListener("click", openNamePopup);

//   // Translate button
//   document.getElementById("langBtn").addEventListener("click", toggleLanguage);
// }

// // -------------------------------
// // Toggle language
// // -------------------------------
// function toggleLanguage() {
//   currentLang = currentLang === "en" ? "te" : "en";
//   const btn = document.getElementById("langBtn");
//   btn.textContent = currentLang === "en" ? "🌐 Telugu" : "🌐 English";
//   document.getElementById("greetContent").innerHTML = greetings[currentLang];
// }

// // -------------------------------
// // Open popup for name before sharing
// // -------------------------------
// function openNamePopup() {
//   const popup = document.getElementById("namePopup");
//   popup.style.display = "flex";

//   const message = document.getElementById("popupMessage");
//   message.innerHTML = `
//     Enter your name — it will appear as <b>"From: Ashok"</b> 
//     when you share this Diwali greeting with your friends 🌟
//   `;
// }

// // -------------------------------
// // Copy greeting link
// // -------------------------------
// function copyGreetingLink(name) {
//   const url = new URL(window.location);
//   url.searchParams.set('name', name);

//   navigator.clipboard.writeText(url.href)
//     .then(() => alert("🎉 Link copied! Share with your friends!"))
//     .catch(() => alert("Failed to copy link. Try manually."));
// }

// // -------------------------------
// // Initialize page
// // -------------------------------
// function init() {
//   const urlName = getNameFromURL();

//   if (urlName) {
//     showGreeting(urlName);
//   } else {
//     showGreeting(null);
//   }

//   // Submit button inside popup
//   const submitBtn = document.getElementById("submitBtn");
//   submitBtn.addEventListener("click", () => {
//     const nameInput = document.getElementById("nameInput").value.trim();
//     if (!nameInput) {
//       alert("Please enter your name!");
//       return;
//     }
//     document.getElementById("namePopup").style.display = "none";
//     showGreeting(nameInput);
//     copyGreetingLink(nameInput);
//   });
// }

// // -------------------------------
// // Run
// // -------------------------------
// init();


// -------------------------------
// Google Form URL and field
// -------------------------------
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfd4uN8lNk49PruMn-SN1daxFDsq_D5zPL6BoYRVm1IHCch6Q/formResponse";
const nameField = "entry.641290821"; // replace with your Name field ID

function submitNameToForm(name) {
  const formData = new FormData();
  formData.append(nameField, name);

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData
  }).then(() => console.log("Name submitted to Google Form:", name));
}

// -------------------------------
// Get name from URL
// -------------------------------
function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('name');
}

// -------------------------------
// Moon creation with craters
// -------------------------------
function createMoon() {
  const container = document.getElementById("moon-container");

  // Remove previous moon if exists
  const existingMoon = container.querySelector(".moon");
  if (existingMoon) container.removeChild(existingMoon);

  // Create new moon
  const moon = document.createElement("div");
  moon.className = "moon";

  // Add craters randomly
  for (let i = 0; i < 6; i++) {
    const crater = document.createElement("div");
    crater.className = "crater";
    crater.style.width = `${Math.random() * 8 + 4}px`;
    crater.style.height = crater.style.width;
    crater.style.top = `${Math.random() * 80}%`;
    crater.style.left = `${Math.random() * 80}%`;
    crater.style.background = "#e0d7a1";
    crater.style.borderRadius = "50%";
    crater.style.position = "absolute";
    moon.appendChild(crater);
  }

  container.appendChild(moon);
}

// -------------------------------
// Greeting content
// -------------------------------
const greetings = {
  en: `
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
  `,
  te: `
    <h2>🪔 శుభ దీపావళి! 🪔</h2>
    <p class="message">
      దీపావళి అనేది చెడుపై మంచిది, చీకటిపై వెలుగు గెలిచిన పండుగ 🌟<br><br>
      ఇది శ్రీరాముడు మరియు సీతమ్మలు రావణుడిపై విజయాన్ని సాధించి అయోధ్యకు తిరిగి వచ్చిన సందర్భాన్ని గుర్తు చేస్తుంది.<br><br>
      ఈ రోజు మనకు గుర్తు చేస్తుంది — ఎంత బలమైన చెడు ఉన్నా, 
      <b>ధర్మం</b>, <b>న్యాయం</b>, మరియు <b>సత్యం</b> ఎప్పుడూ గెలుస్తాయి!<br><br>
      శ్రీరాముడు 14 సంవత్సరాల వనవాసం తర్వాత తిరిగి వచ్చినప్పుడు, 
      అయోధ్య ప్రజలు ఆయనను స్వాగతించడానికి దీపాలను వెలిగించి, నీతిపరమైన విజయాన్ని జరుపుకున్నారు.<br><br>
      అందుకే మనం ఈరోజు కూడా దీపాలు వెలిగించి, ఇళ్లు అలంకరించి, తీపి పంచుకుంటాము — 
      మన జీవితాలను వెలుగు, ప్రేమ, ఆనందంతో నింపుకునేందుకు 🪔
    </p>
  `
};

// -------------------------------
// Show greeting
// -------------------------------
let currentLang = "en";

function showGreeting(name) {
  document.getElementById("namePopup").style.display = "none";

  const greetingContainer = document.getElementById("greeting");
  greetingContainer.innerHTML = `
    <div class="lang-toggle">
      <button id="langBtn" class="translate-btn">🌐 Telugu</button>
    </div>
    <div id="greetContent">${greetings[currentLang]}</div>
    <p class="sender-name">From: ${name ? name : "________"}</p>
    <button id="shareBtn" class="share-btn">Share this Greeting 🎉</button>
  `;

  // Fireworks
  if (typeof launchFireworks === "function") launchFireworks();
  if (typeof launchGroundFireworks === "function") launchGroundFireworks();

  // Share button
  document.getElementById("shareBtn").addEventListener("click", openNamePopup);

  // Translate button
  document.getElementById("langBtn").addEventListener("click", toggleLanguage);
}

// -------------------------------
// Toggle language
// -------------------------------
function toggleLanguage() {
  currentLang = currentLang === "en" ? "te" : "en";
  const btn = document.getElementById("langBtn");
  btn.textContent = currentLang === "en" ? "🌐 Telugu" : "🌐 English";
  document.getElementById("greetContent").innerHTML = greetings[currentLang];
}

// -------------------------------
// Open popup for name
// -------------------------------
function openNamePopup() {
  const popup = document.getElementById("namePopup");
  popup.style.display = "flex";

  const message = document.getElementById("popupMessage");
  message.innerHTML = `
    Enter your name — it will appear as <b>"From: Ashok"</b> 
    when you share this Diwali greeting with your friends 🌟
  `;
}

// -------------------------------
// Copy greeting link
// -------------------------------
function copyGreetingLink(name) {
  const url = new URL(window.location);
  url.searchParams.set('name', name);

  navigator.clipboard.writeText(url.href)
    .then(() => alert("🎉 Link copied! Share with your friends!"))
    .catch(() => alert("Failed to copy link. Try manually."));
}

// -------------------------------
// Initialize page
// -------------------------------
function init() {
  createMoon(); // create moon with craters
  const urlName = getNameFromURL();

  if (urlName) {
    showGreeting(urlName);
    submitNameToForm(urlName);
  } else {
    showGreeting(null);
  }

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
    submitNameToForm(nameInput); // submit to Google Form
  });
}

// -------------------------------
// Run
// -------------------------------
init();
