//js sanity check
console.log("It's here, inside your mind...");
// √

// focus on bare bones first. Finesse in later sprint.
// √    button and sanity check

/*DYNAMIC CHECK LIST
    components to mvp game(broken down by Sequence of creation: 1,2,3...etc)-- Think MVP
    √   (1) name of game
    √   (1) timer on browser
    √   (1) - count down
    √   (1) create tiles on browser
    √   (1) score on browser
    (1) - count up       
    √   (1) start game at click
    (1) have tiles be able to match up in a pair (creating value pairs)-- start with 1 color only
    (1) - have 2 or more tiles match up
    √   (1) end game when timer reaches 0 (focus on this to start)
    (1) create game play area in browser

    (2) create one array that matches up with the font awesome icons used in 
    (2) MakeTiles function that will take array as argument and duplicate it(pairs)
    (2) -   for loop that will pass both arrays
    (2) -   join arrays into one
    (2) -   and append elements in those array to <td> in html
    (2) flipTile function to add event listener for click to each tile
    √   (2) add grid of tiles and columns 

    √   (3) -   randmoize values 
    √   (3) add animations to cards with css animate
    (3) click# total counter

    (-) round # on browser (stretch goal)
    (-) - increase round # (stretch goal)
    (-) assign tiles to have corresponding graphic... somehow (stretch goal)
 */   

// first create array with images - 12 images for 24 cards total

const tilesArr = [ //8 tiles
    {
        value: ".fa-maxcdn"
    }, {
        value: ".fa-mastodon"
    }, {
        value: ".fa-monero"
    }, {
        value: ".fa-medium"
    }, {
        value: ".fa-markdown"
    }, {
        value: ".fa-mendeley"
    }, {
        value: ".fa-meetup"
    }, {
        value: ".fa-magento"
    },
];
console.log(tilesArr);
// √

//NOTE btn GO event
$("button").on('click', function(){
    console.log("==== Get Set, Match! Dash! ======");
    startTimer();
    setTiles();
}); 
// √


/**
 * creates duplicate of tileArr to create pairings. calls on internal shuffle method
 */
const setTiles = function(){


tilesArrCopy = [...tilesArr]
console.log(tilesArrCopy);
// √

const combinedArr = tilesArr.concat(tilesArrCopy);
console.log(combinedArr);
// √
shuffle(combinedArr);
// √

/**
 * the Fisher Yates shuffle randomizes the internal cards array (this.cards)
 *  @author  Mike Bostock  https://bost.ocks.org/mike/shuffle/
 */
function shuffle() {
    let length = combinedArr.length; 
    let element; //variable declared for function
    let index; //variable declared for function

    while (length) {
        index = Math.floor(Math.random() * length--);
        element = combinedArr[length];
        combinedArr[length] = combinedArr[index];
        combinedArr[index] = element;
    }
    }
}










// let $round = $("#round");
// $round = 0; //
// √
let timer = 30;

//NOTE startTimer()
function startTimer() {
    interval = setInterval(function(){
        $("#timer").text(`Yous have: ${timer} seconds left.`)
        if(timer === 0){
            clearInterval(interval);
        }
            // $round++;
            // $("#round").text(`Round ${$round}`);
            // timer = 20 - ($round*2); 
        
        console.log(timer);
        timer--
    }, 1000)
}
// √
