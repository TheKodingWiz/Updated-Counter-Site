let counterNum = document.getElementById('num')
let counter = 0

let addBtn = document.getElementById('add')
let subtractBtn = document.getElementById('subtract')
let resetBtn = document.getElementById('reset')

addBtn.addEventListener("click", function(){

    counterNum.innerHTML = ++counter


})

subtractBtn.addEventListener("click", function(){

    counterNum.innerHTML = --counter


})

resetBtn.addEventListener("click", function(){

    counter = 0
    counterNum.innerHTML = 0

})