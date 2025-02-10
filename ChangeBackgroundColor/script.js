function changeBackgroundColor() {
  const colors = [
    "#gf5733",
    "#33ff57",
    "#57d3ff",
    "#ffd700",
    "#ff73a6",
    "#33a6ff",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
}
