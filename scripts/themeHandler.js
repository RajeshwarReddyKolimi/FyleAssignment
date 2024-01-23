// Theme

let currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme == "light") {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
} else {
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
}
let toggleTheme = document.getElementById("toggle-theme");
let toggleButton = document.getElementById("toggle-button");
let moveToggleButton = document.getElementById("move-toggle-theme");

toggleButton.addEventListener("click", () => {
    if (currentTheme == "light") {
        document.body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
        currentTheme = "dark";
    } else {
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
        currentTheme = "light";
    }
});
moveToggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleButton.classList.toggle("move-toggle");
    moveToggleButton.classList.toggle("rotate-toggle");
});
