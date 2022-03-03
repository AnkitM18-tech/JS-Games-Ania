const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
]

cardArray.sort(() => 0.5 - Math.random());//sorts array randomly

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let chosenCardIDs = [];
const cardsMatched = [];

function createGrid() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard);
        gridDisplay.appendChild(card);
    }
}

createGrid();

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneID = chosenCardIDs[0];
    const optionTwoID = chosenCardIDs[1];

    if(cardsChosen[0] === cardsChosen[1]){
        if(optionOneID === optionTwoID){
            cards[optionOneID].setAttribute("src","images/blank.png");
            cards[optionTwoID].setAttribute("src","images/blank.png");
            chosenCardIDs = [];
            alert('you have clicked the same image!');
        } else {
            alert("You find a match!");
            cards[optionOneID].setAttribute("src","images/white.png");
            cards[optionTwoID].setAttribute("src","images/white.png");
            cards[optionOneID].removeEventListener("click", flipCard);
            cards[optionTwoID].removeEventListener("click", flipCard); 
            cardsMatched.push(cardsChosen);
        }
    } else {
        cards[optionOneID].setAttribute("src","images/blank.png");
        cards[optionTwoID].setAttribute("src","images/blank.png");
        alert("Sorry! try again");
    }
    resultDisplay.textContent = cardsMatched.length;
    cardsChosen = [];
    chosenCardIDs = [];

    if(cardsMatched.length === (cardArray.length/2)){
        resultDisplay.textContent = "Congratulations! You managed to match all the cards";
    }
}

function flipCard() {
    console.log(cardArray);
    const cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name)
    chosenCardIDs.push(cardID);
    // console.log(cardArray[cardID].name);
    // console.log(cardsChosen);
    this.setAttribute("src",cardArray[cardID].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500);
    }
}