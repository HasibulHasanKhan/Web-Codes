function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example Usage: Debouncing Input Event
const handleInput = debounce((event) => {
  console.log(`User input: ${event.target.value}`);
}, 2500);

document.getElementById("searchBox").addEventListener("input", handleInput);
