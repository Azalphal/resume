window.addEventListener('load', () => {
    const text = document.querySelectorAll(".menu__link");
    const menuBackground = document.querySelector("#menu--background");
    const menuBackgroundImage = document.querySelector("#menu--background--image");

    Array.from(text)
        .forEach((item, index) => {
            item.onmouseover = () => {
                menuBackground.style.setProperty("--active-index", index)
                menuBackgroundImage.style.setProperty("--active-index", index)
            }
        });
});
