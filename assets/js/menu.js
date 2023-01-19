const menu = document.getElementById("menu")
const text = document.getElementsByClassName("menu__link")

Array.from(text)
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.style.setProperty("--active-index", index)
        }
    });