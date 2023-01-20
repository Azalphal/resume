// window.addEventListener('load', () => {
//     const menu = document.getElementById("menu")
//     const text = document.querySelectorAll(".menu__link");

//     console.log(menu, text)

//     Array.from(text)
//         .forEach((item, index) => {
//             item.onmouseover = () => {
//                 menu.style.setProperty("--active-index", index)
//                 console.log(`Hovered over item ${index}`)
//             }
//         });
// });

window.addEventListener('load', () => {
    // const menu = document.getElementById("menu");
    const text = document.querySelectorAll(".menu__link");
    const menuBackground = document.querySelector("#menu--background");
    const menuBackgroundImage = document.querySelector("#menu--background--image");

    console.log(menuBackground, menuBackgroundImage, text)

    Array.from(text)
        .forEach((item, index) => {
            item.onmouseover = () => {
                menuBackground.style.setProperty("--active-index", index)
                menuBackgroundImage.style.setProperty("--active-index", index)
                console.log(`Hovered over item ${index}`)
            }
        });
});
