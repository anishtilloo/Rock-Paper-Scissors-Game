const handOptions = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
}

let SCORE = 0;


// This is arrow function
const pickUserHand = (hand) => {
    console.log(hand);

    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    //show the next page with the hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pick 
    // if (hand == "rock") {
    //     document.getElementById("userPickImage").src = "/images/Rock.png";
    // }
    // else if (hand == "scissors") {
    //     document.getElementById("userPickImage").src = "/images/Scissors.png";
    // }
    // else {
    //     document.getElementById("userPickImage").src = "/images/Paper.png";
    // }
    document.getElementById("userPickImage").src =handOptions[hand];

    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];
    // Set the computer pick up 
    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {

    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    } 
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } 
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("DRAW!");
    } 
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("DRAW!");
    } 
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    } 
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } 
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } 
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("DRAW!");
    } 
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    }

}

const setDecision = (decision) => {
    // console.log(decision);
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    // console.log(score);
    SCORE = score;   
    document.querySelector(".score h1").innerText = score;
}

const restartGame = () => {
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    //show the next page to restart the game
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}


