function addClickEventListener(buttonId, callback) {
  const button = document.getElementById(buttonId);

  if (button) {
    button.addEventListener("click", callback);
  } else {
    console.error("Button not found!");
  }
}

const addEventListeners = function Hasib() {
  alert("Button Clicked");
};
addClickEventListener("myButton", addEventListeners);
