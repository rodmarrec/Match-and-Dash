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

    √   (2) create one array that matches up with the font awesome icons used in 
    √   (2) MakeTiles function that will take array as argument and duplicate it(pairs)
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
      "fa-maxcdn",
      "fa-mastodon",
      "fa-monero",
      "fa-medium",
      "fa-markdown",
      "fa-mendeley",
      "fa-meetup",
      "fa-magento", 
];

// console.log(tilesArr);
// √


const start = function(){
    // startTimer();
    generateTiles();
    $("#btn").hide();

}

//NOTE btn GO event
$("#btn").on('click', start)
    // console.log("==== Get Set, Match! Dash! ======");
    
// √


/**
 * creates duplicate of tileArr to create pairings. appends objects to <td> tags. calls on internal shuffle method
 */
const generateTiles = function(){

//duplicates array
tilesArrCopy = [...tilesArr]
// console.log(tilesArrCopy);
// // √

//combines two arrays
const combinedArr = tilesArr.concat(tilesArrCopy);
// console.log(combinedArr);
// // √

//container holding tileCell <td> and its child <i>
const $tileCell = $(".tileCell>.fab"); 
// console.log({$tileCell});
// // √

$tileCell.each(function(index,tiles) {

    const randomClass = combinedArr.splice(Math.floor(Math.random() * combinedArr.length -1),1)[0];

    $(tiles).addClass(randomClass);
    
    //adds event click to each icon
    $(tiles).on("click",function(){
        console.log("working");
    })

    ////////////////// working function adds event
    // $(tiles).on("click",function(){
    //     console.log("working");
    // })
    /////////////////

  

    
 


});

}














/////////////////////////////////////
let timer = 30;

// //NOTE startTimer()
// function startTimer() {
//     interval = setInterval(function(){
//         $("#timer").text(`Yous have: ${timer} seconds left.`)
//         if(timer === 0){
//             clearInterval(interval);
//         }
//             // $round++;
//             // $("#round").text(`Round ${$round}`);
//             // timer = 20 - ($round*2); 
        
//         console.log(timer);
//         timer--
//     }, 1000)
// }
// √


//=============================== matching
//add opened cards to OpenedCards list and check if cards are match or not
// function cardOpen() {
//     openedCards.push(this);
//     var len = openedCards.length;
//     if(len === 2){
//         moveCounter();
//         if(openedCards[0].type === openedCards[1].type){
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// };

// //for when cards match
// function matched(){
//     openedCards[0].classList.add("match");
//     openedCards[1].classList.add("match");
//     openedCards[0].classList.remove("show", "open");
//     openedCards[1].classList.remove("show", "open");
//     openedCards = [];
// }

// //for when cards don't match
// function unmatched(){
//     openedCards[0].classList.add("unmatched");
//     openedCards[1].classList.add("unmatched");
//     disable();
//     setTimeout(function(){
//         openedCards[0].classList.remove("show", "open", "unmatched");
//         openedCards[1].classList.remove("show", "open", "unmatched");
//         enable();
//         openedCards = [];
//     },1100);
// }

// //disable cards temporarily
// function disable(){
//     Array.prototype.filter.call(cards, function(card){
//         card.classList.add('disabled');
//     });
