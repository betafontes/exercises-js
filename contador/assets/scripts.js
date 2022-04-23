const currentNumberWrapper = document.getElementById("currentNumber");
var count = 0;
const incrementBtn = document.getElementById("increment");
const decrement = document.getElementById("decrement");

decrement.addEventListener('click', function decrement() {
  currentNumberWrapper.innerHTML = --count;
  compareValues()
})

incrementBtn.addEventListener('click', function increment() {
  decrement.removeAttribute("disabled");
  currentNumberWrapper.innerHTML = ++count;
  compareValues()
})

function compareValues() {
  if (count < 0) {
    // currentNumberWrapper.innerHTML = 0
    decrement.setAttribute("disabled", "disabled")
    currentNumberWrapper.style.color = "red"
  }
  else {
    currentNumberWrapper.style.color = "black"
  }
  
  if (count === 10) {
    incrementBtn.setAttribute("disabled", "disabled")
  }
  if (count < 10) { incrementBtn.removeAttribute("disabled"); }
}
