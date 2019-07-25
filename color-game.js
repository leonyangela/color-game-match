
//track the easy square number so when you clicked
//play again button, it will generate 3 random number
var numberSquares = 6;
// var colors = generateRandomColors(numberSquares);
var colors = [];
// var pickedColor = pickColor();
var pickedColor;

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
			// if(this.textContent === "easy"){
			// 	numberSquares = 3;
			// } else {
			// 	numberSquares = 6;
			// }	
			reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		// squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			// alert("clicked a square");
			// grab color of clicked squares
			var clickedColor = this.style.backgroundColor;
			
			console.log(clickedColor, pickedColor);
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				// alert("Correct");
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "New Colors";
	//reset message empty kalo di klik resetBtn
	messageDisplay.textContent = "";
	//change colors of squares

	//simpen warna ada 6, loop kalo warna nya ga ada
	//atau null/undefined di array urutan ke 4-6 maka
	//display nya di hide -> none, block buat visible lg
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";
}

//colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color){
	//loop through all the squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//math.floor buat pembulatan
	// Math.floor(Math.random() * 6 + 1);
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);

	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);

	//pick a "blue" from 0 - 255	
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	numberSquares = 3;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();

// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	numberSquares = 6;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();

// 	colorDisplay.textContent = pickedColor;

// 	for(var i = 0; i < squares.length; i++){
// 		// if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		// } else {
// 			squares[i].style.display = "block";
// 		// }
// 	}

// });