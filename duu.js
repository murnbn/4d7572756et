const bgYT = document.getElementById("bg-yt");
document.body.addEventListener("click", () => {
  bgYT.src = bgYT.src.replace("mute=1", "mute=0");
}, { once: true });

const boxes = document.querySelectorAll(".music-box");
const playerContainer = document.getElementById("player-container");
const player = document.getElementById("player");
const spotifyBtn = document.getElementById("spotify-btn");
const appleBtn = document.getElementById("apple-btn");

let selectedBox = null;

boxes.forEach(box => {
  box.addEventListener("click", () => {
    selectedBox = box;
    playerContainer.classList.remove("hidden");

    // Play YouTube immediately
    let ytUrl = box.dataset.yt;
    if (ytUrl.includes("youtu.be")) {
      const videoId = ytUrl.split("/").pop().split("?")[0];
      ytUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    player.width = 300;
    player.height = 175;
    player.src = ytUrl + "?autoplay=1";

    // Spotify button
    spotifyBtn.onclick = () => {
      player.width = 300;
      player.height = 80;
      player.src = box.dataset.spotify;
    };

    // Apple Music button
    appleBtn.onclick = () => {
      player.width = 660; 
      player.height = 150;
      player.src = box.dataset.apple;
    };
  });
});

let suggestions = [];

document.getElementById("submitSong").addEventListener("click", () => {
  const userInput = document.getElementById("songInput").value.trim();

  if (userInput) {
    // Store in array
    suggestions.push(userInput);

    // Update list on screen
    const suggestionList = document.getElementById("suggestionList");
    const li = document.createElement("li");
    li.textContent = userInput;
    suggestionList.appendChild(li);

    // Show GIF
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.style.display = "block";

    // Hide after 5 seconds
    setTimeout(() => {
      gifContainer.style.display = "none";
    }, 5000);

    // Clear input
    document.getElementById("songInput").value = "";
  }
});


function reveal(box) {
  const hidden = box.querySelector(".hidden");
  if (!hidden) return;

  if (hidden.style.display === "block") {
    hidden.style.display = "none";
  } else {
    hidden.style.display = "block";
  }
}

