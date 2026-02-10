const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 200;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
