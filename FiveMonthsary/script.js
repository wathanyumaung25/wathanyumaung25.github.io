/* 💙 FLOATING HEARTS (AUTO) - INDEX.HTML */
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💙";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.opacity = Math.random() * 0.5 + 0.5; // random opacity
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

// Only run on index.html
if (document.body.classList.contains('page1')) {
  setInterval(createFloatingHeart, 700);
}

/* 💙 TIKTOK-STYLE AUTO FLOATING HEARTS - VIDEO.HTML */
if (document.body.classList.contains('page2')) {
  const video = document.querySelector("video");

  function spawnHeart() {
    if (!video) return;

    const rect = video.getBoundingClientRect();
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💙";

    // Random horizontal position at bottom of video
    heart.style.left = rect.left + Math.random() * rect.width + "px";
    heart.style.top = rect.bottom - 30 + "px"; // bottom start

    // Random size and opacity
    const size = 18 + Math.random() * 20;
    heart.style.fontSize = size + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    // Random float speed
    const duration = 2 + Math.random() * 2; // 2-4s
    heart.style.animation = `floatUp ${duration}s linear, wiggle ${duration}s ease-in-out infinite`;

    document.body.appendChild(heart);

    // Remove after float
    setTimeout(() => heart.remove(), duration * 1000);
  }

  // Spawn more hearts for fuller effect
  setInterval(spawnHeart, 300);
}
