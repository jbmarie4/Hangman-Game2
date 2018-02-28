//create an array of words ***update this with better list of foods to avoid***
		
	var healthDx= ["obesity","cancer", "diabetes", "heart disease", "memory loss", "liver disease"];
	var hangmanImg=[
	"./assets/images/Hangman-1.png",
	"./assets/images/Hangman-2.png", 
	"./assets/images/Hangman-3.png" ,
	"./assets/images/Hangman-4.png" , 
	"./assets/images/Hangman-5.png" , 
	"./assets/images/Hangman-6.png" ,
	"./assets/images/Hangman-7.png"
	];
	var rightWord=[];								
	var wrongWord=[];
	var wrongGuess=0;
	var i=0;
	
	function showImage(){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[0]+ " >")
	}showImage();

//choose random word, logs random word in console
	var randomArrayIndex= [Math.floor(Math.random()*healthDx.length)];
	var randomWord= healthDx[randomArrayIndex];
	console.log (randomWord);

//create underscores based on length of word
	var underScore=[];
	var rowUnderscore;
	
	function generateUnderscore(){
		for (var i=0; i<randomWord.length; i++){
		underScore[i]="_";
		if(randomWord[i]==(" ")){underScore[i]=(" ")};
		rowUnderscore= underScore.join(" ");
		
	}
	}
		generateUnderscore();
	
	console.log(rowUnderscore);
	document.getElementById("underscores").innerHTML=(rowUnderscore);
	

//capture and display user's guess, using arrow function and eventListener, converting keycode into a string (a letter)

	document.addEventListener('keypress', (event) => {
	console.log(event);
	var keycode=event.keyCode;
	console.log(keycode);
//convert number to a string
	var keyword=String.fromCharCode(keycode);
	console.log(keyword);

//check if user's guess is right, if it matches with randomWord
//use indexOf() function which will tell you if the string you are looking for exists; if does not exist, it will return a number a -1
//if user's guess is right, if letter pressed matches letters in the randomWord, add letter to rightWord array; if guess is wrong, the letter pressed is not in the randomWord, add letter to wrongWord array
//keyword is the letter of the key typed
	
	if(randomWord.indexOf(keyword)>-1){
	console.log(true);
	rightWord.push(keyword);
	console.log(rightWord);
	document.getElementById("right").innerHTML=rightWord;
	}if(randomWord.indexOf(keyword)<0){
//change image if guess wrong
	wrongGuess=wrongGuess+1;
	console.log(wrongGuess);
	wrongWord.push(keyword);
	document.getElementById("wrong").innerHTML=wrongWord;
	if(wrongGuess==1){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[1]+ " >");
	}if(wrongGuess==2){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[2]+ " >");
	}if(wrongGuess==3){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[3]+ " >");
	}if(wrongGuess==4){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[4]+ " >");
	}if(wrongGuess==5){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[5]+ " >");
	alert("Only 1 guess left.");
	}if(wrongGuess==6){
	document.getElementById("hangman-image").innerHTML=("<img src=" +hangmanImg[6]+ " >");
	alert("You Lose!");
	location.reload();
	}
	}

//replace underscore with the right letter 
	function letter(){
	if(keyword.length>0){
		for (var i=0; i<randomWord.length; i++){
	if(randomWord[i] === keyword){
	underScore[i]=keyword};
	if(randomWord[i]==(" ")){
	underScore[i]=(" ")};
//replace html in underscores div with underScore

	document.getElementById("underscores").innerHTML=underScore.join(" ");
	
	}
	}
	}letter();
	

	
//if all underscores have been filled, display alert
	if(underScore.join('')==randomWord){
		alert("You Won!");
		//reload
		function restart(){
		location.reload();
		}
		setTimeout(restart, 1000);
	}
	})
	



