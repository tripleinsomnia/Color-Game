var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#displayMessage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    numSquares = 3;
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});


hardBtn.addEventListener("click", function(){
    numSquares = 6;
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";  
    //generate new random colors
    colors = generateRandomColors(numSquares);
    //pick a random color
    pickedColor = pickColor();
    //change the display color of title
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
    }
    h1.style.backgroundColor = "steelblue";
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add init colors
    squares[i].style.backgroundColor = colors[i];

    //add clickListener to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor =  this.style.backgroundColor;
        //compare color to pickedcolor
        if(pickedColor === clickedColor){
            messageDisplay.textContent = "Correct !";
            resetButton.textContent = "Play Again ?"
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again !!";
        }
    });
}

function changeColor(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make an array
    var arr = []
    for(var i = 0; i < num; i++){
        //get random color and push to array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}