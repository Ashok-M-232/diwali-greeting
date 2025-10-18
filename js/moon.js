// function createMoon(){
//   const container = document.getElementById("moon-container");
//   const moon = document.createElement("div");
//   moon.className="moon";
//   container.appendChild(moon);
// }

// createMoon();

function createMoon(){
  const container = document.getElementById("moon-container");
  container.innerHTML = ''; // clear previous moon
  const moon = document.createElement("div");
  moon.className = "moon";
  container.appendChild(moon);
}

createMoon();
