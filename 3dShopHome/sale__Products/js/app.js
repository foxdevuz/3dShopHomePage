"use strict";

// variable 
let minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    son = document.getElementById("son"),
    narx = document.getElementById("narx"),
    free = document.getElementById("free"),
    cupon = document.getElementById("cupon"),
    total = document.getElementById("total"),
    narxMin = document.querySelector(".cost"),
    narxmax= document.querySelector(".cost2");

// functions
let num = 0;
let cost = 0
minus.addEventListener("click", ()=> {
    num -= 1;
    cost -= 33
    son.innerHTML = num;
    narxMin.innerHTML = cost - 10;
    narxmax.innerHTML = cost
    narx.innerHTML = cost;
    free.innerHTML = cost - 11
    total.innerHTML = cost + (cost-11)
})
plus.addEventListener("click", ()=> {
    num += 1;
    cost += 33
    son.innerHTML = num;
    narxMin.innerHTML = cost - 10;
    narxmax.innerHTML = cost;
    narx.innerHTML = cost;
    free.innerHTML = cost - 11
    total.innerHTML = cost + (cost-11)

})

// for modal variable
let modal_1 = document.getElementById("modal1"),
    modal2 = document.getElementById("modal2"),
    modalDone= document.querySelector(".modalDone"),
    openModal = document.getElementById("openModal"),
    payment = document.getElementById("payment"),
    confirm = document.getElementById("confirm"),
    closeModal = document.getElementById("closeModal"),
    remove1 = document.getElementById("remove"),
    remove2 = document.getElementById("remove2"),
    body = document.querySelector("body");
// functions
remove1.addEventListener("click",()=> {
    modal_1.classList.remove("modal1show")
    body.classList.remove("bodyOverflow")
})
remove2.addEventListener("click", ()=> {
    modal_1.classList.add("modal1show")
    modal2.classList.remove("modal1show")
})

openModal.addEventListener("click", ()=> {
    modal_1.classList.add("modal1show")
    body.classList.add("bodyOverflow")
})
payment.addEventListener("click", ()=> {
    event.preventDefault()
    modal_1.classList.remove("modal1show")
    modal2.classList.add("modal1show")
})
confirm.addEventListener("click",()=> {
    event.preventDefault()
    modal2.classList.remove("modal1show")
    modalDone.classList.add("modal1show")
})
closeModal.addEventListener("click",()=>{
    modalDone.classList.remove("modal1show")
    body.classList.remove("bodyOverflow")
})