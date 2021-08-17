// Toogle navigation menu
const navMenu = document.getElementById("navigation-menu");
const toggler = document.getElementById("toggle-btn");
toggler.addEventListener("click", function () {
    navMenu.classList.toggle("toggle")
})

// Youtube Video Player
const youtubePlay = document.getElementById("ytplay");
const frame = document.getElementById("ytframe");
const cancel = document.getElementById("cancel")
youtubePlay.addEventListener("click", function () {
    frame.classList.add("youtube-toggle")
})
cancel.addEventListener("click", function () {
    frame.classList.remove("youtube-toggle")
})