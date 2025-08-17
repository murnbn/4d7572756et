const welcome = document.getElementById("welcome");
const cv = document.getElementById("cv");
const bgMusic = document.getElementById("bg-music");
const murun = document.getElementById("murun");
const nameSection = document.getElementById("name-section");
const usernameInput = document.getElementById("username");
const submitButton = document.getElementById("submit-name");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn")
const goofy = document.getElementById("goofydog");
const greeting = document.getElementById("greeting");

document.body.addEventListener("click", startMusic, { once: true });

function startMusic() {
  bgMusic.play();
}

welcome.addEventListener("click", () => {
  welcome.classList.add("hidden");
  murun.classList.remove("hidden");
});

welcome.addEventListener("click", () => {
  welcome.classList.add("hidden");
  nameSection.classList.remove("hidden");
});

// Update greeting with user's name when submitted
welcome.addEventListener("click", () => {
  welcome.classList.add("hidden");
  murun.classList.remove("hidden");
});

// Step 2: show name input after clicking "This is Murun!"
murun.addEventListener("click", () => {
  murun.classList.add("hidden");
  cv.classList.remove("hidden");
});

// Step 3: update greeting after user submits name
submitButton.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  nameSection.classList.add("hidden");

  if (name) {
    // User provided name
    greeting.textContent = `Huurhun hun  ymaa, ${name} <3 `;
    cv.classList.remove("hidden");
  } else {
    // No name → show crying GIF
    goofy.classList.remove("hidden");
    ahh.classList.remove("hidden")
    broken.classList.remove("hidden")
    setTimeout(() => {
      goofy.classList.add("hidden");
      ahh.classList.add("hidden")
      broken.classList.add("hidden")
      greeting.textContent = `YAJIGAN!`;
      cv.classList.remove("hidden");
    }, 4000); // show crying for 3 seconds
    greeting.textContent = `zaaz`;
  }
});

noBtn.addEventListener("mouseenter", () => {
  // Get random position within the viewport
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
yesBtn.addEventListener("click", () => {
  window.location.href = "duu.html";
});

function goToCV() {
  window.location.href = "duu.html";
}