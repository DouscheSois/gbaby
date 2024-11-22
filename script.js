// Detect when coins "land" and create a splash effect
const coins = document.querySelectorAll(".coin");

// A container for splashes to prevent clutter
const splashContainer = document.createElement("div");
splashContainer.style.position = "absolute";
splashContainer.style.top = "0";
splashContainer.style.left = "0";
splashContainer.style.width = "100%";
splashContainer.style.height = "100%";
splashContainer.style.pointerEvents = "none";
document.body.appendChild(splashContainer);

coins.forEach((coin) => {
  coin.addEventListener("animationiteration", () => {
    // Create a splash element
    const splash = document.createElement("div");
    splash.classList.add("splash");

    // Randomize splash size for variety
    const splashSize = Math.random() * 20 + 40; // Between 40px and 60px
    splash.style.width = `${splashSize}px`;
    splash.style.height = `${splashSize}px`;

    // Position the splash where the coin "lands"
    const coinRect = coin.getBoundingClientRect();
    splash.style.position = "absolute";
    splash.style.left = `${
      coinRect.left + coinRect.width / 2 - splashSize / 2
    }px`;
    splash.style.top = `calc(100vh - ${splashSize}px)`; // Near bottom of viewport

    // Add the splash to the splash container
    splashContainer.appendChild(splash);

    // Remove splash after animation
    setTimeout(() => {
      splash.remove();
    }, 500);
  });
});
