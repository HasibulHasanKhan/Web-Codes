function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);

  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

document.getElementById("toggleButton").addEventListener("click", function () {
  toggleVisibility("toggleText");
});
