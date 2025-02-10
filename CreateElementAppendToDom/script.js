function createAndAppendElemet(tag, text, parentId) {
  const newElement = document.createElement(tag);

  if (text) {
    newElement.textContent = text;
  }

  const parent = document.getElementById(parentId);
  if (parent) {
    parent.appendChild(newElement);
  } else {
    console.error("Parent element not found.");
  }
}
const newElementAdds = function newElementAdd() {
  createAndAppendElemet("p", "This is a new paragraph!", "container");
};

document.getElementById("addButton").addEventListener("click", newElementAdds);
