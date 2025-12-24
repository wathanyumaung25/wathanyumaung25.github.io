/* Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💙";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

/* Floating Bubbles */
function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  bubble.style.left = Math.random() * 100 + "vw";
  const size = 10 + Math.random()
}