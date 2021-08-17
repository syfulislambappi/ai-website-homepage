function toggleQuestion(i) {
    const heading = document.querySelectorAll(".heading-container")[i];
    const answer = document.querySelectorAll(".answer")[i];
    const icon = heading.children[1];
    answer.classList.toggle("show-answer");
    icon.classList.toggle("q-rotate");
}