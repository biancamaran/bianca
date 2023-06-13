let menuMobile = document.getElementById("menuMobile")
let menu = document.getElementById("menu")
menuMobile.addEventListener("click", () => {
    if (menuMobile.classList.contains("fa-bars")) {
        menuMobile.classList.remove("fa-bars")
        menuMobile.classList.add("fa-x")
        menu.style.left = "0px"
    }
    else {
        menuMobile.classList.remove("fa-x")
        menuMobile.classList.add("fa-bars")
        menu.style.left = "-1000px"
    }
})