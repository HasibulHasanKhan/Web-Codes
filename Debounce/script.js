function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(), delay);
  };
}

// Example Usage: Debouncing Button Click Event
const handleClick = debounce(() => {
  console.log("Button clicked!");
}, 1000);

document
  .getElementById("debounceButton")
  .addEventListener("click", handleClick);
