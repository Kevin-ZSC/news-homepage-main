const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#closed-menu");
const btn = document.querySelector("button");
const nav = document.querySelector(".nav1")
menuOpen.addEventListener("click", ()=> {
    nav.style.display=("block");
    menuClose.style.display=("block");
})
menuClose.addEventListener("click", ()=> {
    nav.style.display=("none");
    menuClose.style.display=("none");
})