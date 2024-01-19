let value = 0
let Counter = document.getElementById("counter")
let Dec = document.getElementById("Dec")
let Inc = document.getElementById("Inc")
let Reset = document.getElementById("Reset")
Reset.innerText = "reset"

Counter.innerHTML = value;

function Increment() {
    value++
}
function Decrement() {
    if (value > 0) {
        value--
        } else {
            alert('Value must be greater than zero')
            }
}

let zero = () =>{
    value=0
}

        
Inc.addEventListener("click", function () {
    Increment();
    Counter.innerHTML = value;
});
            
Dec.addEventListener("click", function () {
    Decrement();
    Counter.innerHTML = value;
})


Reset.addEventListener("click", ()=>{
    zero()
    Counter.innerHTML = value
})