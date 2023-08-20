
//This is only for Standard mode👍!!

//This all Id and class!!
const standardmodeBtn = document.getElementById('standardBtn');
const colorchosser = document.querySelector('.colorchosser');
const remindingTime = document.querySelector('#remindingTime');
const playersorce = document.querySelector('#playersorce');
const pronounce = document.querySelector('#pronounce');
const colorName = document.querySelector('#colorName');
const mistake = document.querySelector('#mistake');
const blursurface = document.querySelector('#blursurface');
let totalsorce = document.querySelector('#totalsorce');
const totalpoint = document.querySelector('.fourthBackground_popbox');
const fourthBackground = document.querySelector('.fourthBackground');
const backtothemenu = document.querySelector('#backtothemenu');
const resetThegame = document.querySelector('#resetThegame');
const mistakebox = document.querySelector('.mistakebox');
const yourpercent = document.querySelector('.yourpercent');

//How many times user click on standard mode!!
let gameClickNum = 0;

//This is Number for showing time!!
let remindTime = [30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,0];

//This is Index for remindTime!!
let remindIndex = 0;

//This is time function Which manufacture time in display!!
function time(){
setInterval(function() {
  remindIndex++;
  remindingTime.innerHTML = remindTime[remindIndex];
  if(remindIndex === 31){
    blursurface.style.display = "flex";
    totalpoint.style.display= "flex"
  }
}, 1000);
}
let mistakenumber = 0;
//This is index for alldataupload!!
let dataIndex = 0;
//This is all data like of answer and color!!
let alldataupload = [
{
  pronounce:"color",
  colorName:"blue",
  color:"red",
  box1:"pink",
  box2:"blue",
  box3:"yellow",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"liman",
  color:"blue",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"blue"
},
{
  pronounce:"color",
  colorName:"shisher",
  color:"purple",
  box1:"orange",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"purple"
},
{
  pronounce:"color",
  colorName:"milan",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"sashi",
  color:"red",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"sonu",
  color:"pink",
  box1:"purple",
  box2:"skyblue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"pink"
},
{
  pronounce:"color",
  colorName:"aasha",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"sumina",
  color:"brown",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"brown",
  box5:"red",
  box6:"green",
  answer:"brown"
},
{
  pronounce:"color",
  colorName:"rabina",
  color:"orange",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"orange",
  box5:"red",
  box6:"green",
  answer:"orange"
},
{
  pronounce:"color",
  colorName:"sabina",
  color:"red",
  box1:"pink",
  box2:"blue",
  box3:"yellow",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"green",
  color:"blue",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"blue"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"purple",
  box1:"orange",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"purple"
},
{
  pronounce:"color",
  colorName:"green",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green blue",
  color:"red",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"dark pink",
  color:"pink",
  box1:"purple",
  box2:"skyblue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"pink"
},
{
  pronounce:"color",
  colorName:"yellow",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green",
  color:"brown",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"brown",
  box5:"red",
  box6:"green",
  answer:"brown"
},
{
  pronounce:"color",
  colorName:"orange",
  color:"orange",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"orange",
  box5:"red",
  box6:"green",
  answer:"orange"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"red",
  box1:"pink",
  box2:"blue",
  box3:"yellow",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"green",
  color:"blue",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"blue"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"purple",
  box1:"orange",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"purple"
},
{
  pronounce:"color",
  colorName:"green",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green blue",
  color:"red",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"dark pink",
  color:"pink",
  box1:"purple",
  box2:"skyblue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"pink"
},
{
  pronounce:"color",
  colorName:"yellow",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green",
  color:"brown",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"brown",
  box5:"red",
  box6:"green",
  answer:"brown"
},
{
  pronounce:"color",
  colorName:"orange",
  color:"orange",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"orange",
  box5:"red",
  box6:"green",
  answer:"orange"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"red",
  box1:"pink",
  box2:"blue",
  box3:"yellow",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"green",
  color:"blue",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"blue"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"purple",
  box1:"orange",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"purple"
},
{
  pronounce:"color",
  colorName:"green",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green blue",
  color:"red",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"dark pink",
  color:"pink",
  box1:"purple",
  box2:"skyblue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"pink"
},
{
  pronounce:"color",
  colorName:"yellow",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green",
  color:"brown",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"brown",
  box5:"red",
  box6:"green",
  answer:"brown"
},
{
  pronounce:"color",
  colorName:"orange",
  color:"orange",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"orange",
  box5:"red",
  box6:"green",
  answer:"orange"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"red",
  box1:"pink",
  box2:"blue",
  box3:"yellow",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"green",
  color:"blue",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"blue"
},
{
  pronounce:"color",
  colorName:"blue",
  color:"purple",
  box1:"orange",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"purple"
},
{
  pronounce:"color",
  colorName:"green",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green blue",
  color:"red",
  box1:"yellow",
  box2:"blue",
  box3:"pink",
  box4:"purple",
  box5:"red",
  box6:"green",
  answer:"red"
},
{
  pronounce:"color",
  colorName:"dark pink",
  color:"pink",
  box1:"purple",
  box2:"skyblue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"pink"
},
{
  pronounce:"color",
  colorName:"yellow",
  color:"yellow",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"yellow",
  box5:"red",
  box6:"green",
  answer:"yellow"
},
{
  pronounce:"color",
  colorName:"green",
  color:"brown",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"brown",
  box5:"red",
  box6:"green",
  answer:"brown"
},
{
  pronounce:"color",
  colorName:"orange",
  color:"orange",
  box1:"purple",
  box2:"blue",
  box3:"pink",
  box4:"orange",
  box5:"red",
  box6:"green",
  answer:"orange"
},
];

//Mistake numbers
let mistakeNum = 0;
// console.log(alldataupload.length)

//This function helps to rebuild construction of box color and index increase!!
function loadbox() {
  colorName.style.color = `${alldataupload[dataIndex].color}`;
  pronounce.innerHTML = alldataupload[dataIndex].pronounce;
  colorName.innerHTML = alldataupload[dataIndex].colorName;
  colorchosser.innerHTML = `
    <div onclick="checkAnswer(this)" index=${dataIndex} class="square" id="${alldataupload[dataIndex].box1}"></div>
    <div onclick="checkAnswer(this)" index=${dataIndex} class="square" id="${alldataupload[dataIndex].box2}"></div>
    <div onclick="checkAnswer(this)" index=${dataIndex} class="square" id="${alldataupload[dataIndex].box3}"></div>
    <div onclick="checkAnswer(this)" index=${dataIndex} class="square" id="${alldataupload[dataIndex].box4}"></div>
    <div onclick="checkAnswer(this)" index=${dataIndex} class="square" id="${alldataupload[dataIndex].box5}"></div>
    <div onclick="checkAnswer(this)" index=${dataIndex} class="square" id="${alldataupload[dataIndex].box6}"></div>
  `;
  console.log(dataIndex);
}
loadbox();



//According this function it create for checking answer with traget id!!
function checkAnswer(box) {
  // Get the correct answer for the curren data index
  const correctAnswer = alldataupload[dataIndex].answer;

  // Compare the clicked box's id with the correct answer
  if (box.id === correctAnswer) {
  // Increment player score by 10
    playersorce.innerHTML = parseInt(playersorce.innerHTML) + 100;
    totalsorce.innerHTML = parseInt(playersorce.innerHTML);
  } else {
    mistake.play();
    mistakenumber++;
    mistakebox.innerHTML = `You mistake ${mistakenumber}/45`;
  }
dataIndex++;
  // Move to the next data index and load the next set of boxes
  
  if (dataIndex < alldataupload.length) {
    loadbox();
  } else {
    
    // Reset data index and reload the game
    dataIndex = 0;
    loadbox();
  }
}
 
//Going to back to menu by clicking Button!!
backtothemenu.addEventListener("click", () => {
  thirdBackground.style.display = "flex";
  fourthBackground.style.display = "none";
 })

//when someone choose to play standard mode the blur and popupbox will disable!!
standardmodeBtn.addEventListener("click", () => {
gameClickNum += 1;
if(gameClickNum == 1 ){
 time() 
}
  thirdBackground.style.display = "none";
  fourthBackground.style.display = "flex";

totalsorce.innerHTML = 0;
    playersorce.innerHTML = 0;
  blursurface.style.display = "none";
    totalpoint.style.display= "none"
    remindIndex = 0;
 })
 
 //This btn help to reset overall points,index etc just clicking to this button!!
resetThegame.addEventListener("click",()=> {
remindIndex = 0;
    totalsorce.innerHTML = 0;
    playersorce.innerHTML = 0;
  blursurface.style.display = "none";
    totalpoint.style.display= "none"
})
