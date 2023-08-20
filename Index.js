
let firstbackground = document.querySelector(".firstbackground");
let secondBackground = document.querySelector(".secondBackground");
let thirdBackground = document.querySelector(".thirdBackground");
let backgroundaudio = document.querySelector("#backgroundaudio");
let threeBtn = document.querySelectorAll(".threebox button");
let menuBtn = document.querySelector("#menuBtn");
let popbox1 = document.querySelector(".popbox1");



threeBtn.forEach(button => {
button.addEventListener("click", (e) => {
  if(e.target.id == 1){
    popbox1.style.display = "flex";
    popbox1.style.height = "92.1vh";
  }
})
})
function backgrounddisplay(){
  setTimeout(function() {
    firstbackground.style.display = "none"
    secondBackground.style.display = "flex"
  }, 1500);
  setTimeout(function() {
    secondBackground.style.display = "none"
    thirdBackground.style.display = "flex"
  }, 3000);
}
backgrounddisplay()
menuBtn.addEventListener("click",() => {
popbox1.style.display = "none"
})
