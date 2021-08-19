//alert('Hello');
//console.log('Hello');

//Challenge 1: Age in days
function ageInDays(){
    let birthYear = prompt("What year were you born?");
    var ageInDaysss = (2021 - birthYear) * 365;
    console.log(ageInDaysss);
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode('You are ' + ageInDaysss + ' days old.');
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h3);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateGoat(){
    var image = document.createElement('img');
    var div = document.getElementById("flex-goat-gen");
    image.src="messi.gif";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors

/* my try 
    
    function decideWinner(humanChoice, botChoice){
    var results;
    if(humanChoice=='rock'&&botChoice=='paper')
        results = -1;
    else if(humanChoice=='paper'&&botChoice=='scissors')
        results = -1;
    else if(humanChoice=='scissors'&&botChoice=='rock')
        results = -1;
    else if(humanChoice==botChoice) 
        results = 0;
    else
        results = 1;
    
    return results;
}

function finalMessage(results){
    if(results==-1)return 'You lost!';
    else if(results==0)return 'Its a tie!';
    else return 'You won!';
}

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id; //if user clicks on rock, humanChoice = "rock"
    var x = Math.floor(Math.random()*3);
    let choices = ['rock', 'paper', 'scissors'];
    botChoice = choices[x];
    console.log(botChoice);
    console.log(humanChoice);
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results); //'you won!'
    console.log(results);
    console.log(message);
    

    var RESULT = document.createElement('div');
    RESULT.innerHTML=message;
    document.getElementById('flex-box-rps-div').appendChild(RESULT);
}
*/

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;

    botChoice=numberToChoice(randToRpsInt());
    console.log("Computer Choice:",botChoice);

    results = decideWinner(humanChoice, botChoice); //(0,1) => human lost
    console.log(results);

    message = finalMessage(results); //
    console.log(message); //

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){ //returns [0,1] if we lose [0.5,0.5] if draw
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'scissors':0, 'rock':1, 'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0, 'paper':1}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice] //yourScore=0.5 if draw
    var ComputerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, ComputerScore];
}

function finalMessage([yourScore,ComputerScore]){
    if(yourScore === 0){
        return{'message':'You lost!', 'color':'red'};
    }

    if(yourScore === 0.5){
        return{'message':'Draw!', 'color':'yellow'};
    }

    if(yourScore === 1){
        return{'message':'You won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }

    //let's remove all images once you click on r/p/s
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] + "' style='box-shadow: 0px 10px 20px cyan'>" //this has to appended later for display
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    //this displays the image human/we clicked on

    messageDiv.innerHTML="<h2 style='color: " + finalMessage['color'] + "; font-size:300%; padding:10px; '>" + finalMessage['message'] + "</h2>"

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    //displays the result message

    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] + "' style='box-shadow: 0px 10px 20px violet'>"

    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    //thus displays image which computer clicked on


}