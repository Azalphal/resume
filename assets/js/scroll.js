// Choose how many scrolls you have to do before getting to the next section
const scrollTimes = 1;

const sections = document.querySelectorAll(`.CV__section`);
const container = document.querySelector(`#CV__section--container`);
let previousSection = 0;
let currentSection = 0;
let scrollCounter = 0;

function switchSection(direction) {
    sections[previousSection].classList.remove(`previous-section-up`);
    sections[previousSection].classList.remove(`previous-section-down`);
    sections[currentSection].classList.remove(`active-section-up`);
    sections[currentSection].classList.remove(`active-section-down`);
    

    previousSection = currentSection;
    currentSection += direction;

    // Check if currentSection is out of bounds
    if (currentSection < 0) {
        currentSection = 0;
    } else if (currentSection >= sections.length - 1) {
        currentSection = sections.length - 1;
    }


    if (direction > 0) {
        sections[currentSection].classList.add(`active-section-down`);
        sections[previousSection].classList.add(`previous-section-up`);
    } else {
        sections[currentSection].classList.add(`active-section-up`);
        sections[previousSection].classList.add(`previous-section-down`);
    }
}

container.addEventListener("wheel", e => {
    scrollCounter++;
    console.log(`--------------------------------------------`)
    console.log(`Scrolled ${scrollCounter} times.`)
    if (scrollCounter === scrollTimes) {
        switchSection(e.deltaY > 0 ? 1 : -1);
        scrollCounter = 0;
    }
});
