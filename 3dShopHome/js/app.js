// variable
let showmenu = document.querySelector(".showleftMenu")
let leftMenu = document.querySelector(".leftMenu");
let backdrop = document.querySelector(".backDrop")
let brand = document.querySelector(".brand")
showmenu.addEventListener("click", ()=> {
    leftMenu.classList.toggle("show__")
    backdrop.classList.toggle("showBackdrop")
    brand.classList.toggle("forBrand")
})