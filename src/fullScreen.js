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

button.classList.add("zsg-button");
button.classList.add("save-search-button");
button.innerHTML = "BIG MAP";
button.style.maxWidth = "200px";
button.style.marginRight = "1rem";

parent.appendChild(button);
button.addEventListener("click", clearScreen);
