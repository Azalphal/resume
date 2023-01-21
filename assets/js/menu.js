window.addEventListener('load', () => {
    const text = document.querySelectorAll(".menu__link");
    const menuBackground = document.querySelector("#menu--background");
    const menuBackgroundImage = document.querySelector("#menu--background--image");

    console.log(`Correctly loaded the background pattern in "${menuBackground}"`,`Correctly loaded the background image in "${menuBackgroundImage}"`, `Correctly loaded the text elements in "${text}"`)

    Array.from(text)
        .forEach((item, index) => {
            item.onmouseover = () => {
                menuBackground.style.setProperty("--active-index", index)
                menuBackgroundImage.style.setProperty("--active-index", index)
                console.log(`Hovered over item ${index}`)
            }
        });
});
