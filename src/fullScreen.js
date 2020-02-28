const parent = document.querySelector(".action-bar-right-content");
const button = document.createElement("button");
let clear = false;

const clearScreen = () => {
  if (clear === false) {
    document.getElementById("search-page-list-container").remove();
    document.querySelector("header").remove();
    document.getElementById(
      "search-page-react-content"
    ).parentNode.style.height = "100vh";
    button.innerHTML = "refresh for overlays";
    clear = true;
  } else {
    location.reload();
  }
};

console.log("getting classes to apply to new button...");
const sParent = document.querySelector(".action-bar-left-content");
let classes = sParent.childNodes[0].classList.value;
classes = classes.split(' ');
console.log(classes);

button.classList.add(...classes);
button.innerHTML = "BIG MAP";
button.style.maxWidth = "200px";
button.style.marginRight = "1rem";

parent.appendChild(button);
button.addEventListener("click", clearScreen);
console.log("button added!")
