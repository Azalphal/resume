const container = document.querySelector(`#CV__section--container`);
const sections = document.querySelectorAll(`.CV__section`);
let previousSection = 0;
let currentSection = 0;
let scrollCounter = 0;
let touchStartY = 0;

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

container.onwheel = e => {
    switchSection(e.deltaY > 0 ? 1 : -1);
};

document.addEventListener("keydown", e => {
    if (e.key === 'ArrowUp') {
        switchSection(-1)
    } else if (e.key === 'ArrowDown') {
        switchSection(1)
    }
});

document.addEventListener("touchstart", e => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;
    const threshold = 50;
    if (Math.abs(deltaY) > threshold) {
        if (deltaY > 0) {
          switchSection(-1)
        } else {
          switchSection(1)
        }
    }
});