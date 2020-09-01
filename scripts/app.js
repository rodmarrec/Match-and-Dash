//js sanity check
console.log("It's here, inside your mind...");
// √

// focus on bare bones first. Finesse in later sprint.
// √    button and sanity check

/*CHECK LIST
    components to mvp game(broken down by Sequence of creation: 1,2,3...etc)-- Think MVP
    √   (1) name of game
    √   (1) timer on browser
    √ (1) - count down
    (1) create tiles on browser
    √   (1) score on browser
    √   (1) - count up       
    √   (1) round # on browser
    √ (1) - increase round #
    √   (1) start game at click
    (1) have tiles be able to match up in a pair (creating value pairs)-- start with 1 color only
    (1) - have 2 or more colors match up
    (1) end game when timer reaches 0 (focus on this to start)
    (1) create game play area in browser

    (2) -   two factories: Deck A and Deck B-> Ref Pokemon OOP
    (2) -   perhaps DeckA and DeckB will have same values and only differentiator is whether it is productA or productB 
    (2) -   for loop with conditional statement. We want tiles(objects) to be ordered when using comparison value
    (2) after will figure out how to end round if all tiles have been matched
    √   (2) add grid of tiles and columns 
    (2) - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout

    (3) assign tiles to have corresponding graphic... somehow
    √   (3) -   randmoize values 
    (3) add animations to cards with css animate
    (3) click counter
 */   

//ANCHOR 1: event listener on button
//button sanity check - 1st easy thing to do
 $("button").on('click', function(){
    console.log("==== Get Set, Match! Dash! ======");
    $(".tiles").empty();
    setUpRound();
}); 
// √

// const $singleTile = $("<div class='tile' />"); //create tiles as div
//     console.log($singleTile); 
    //√
    const $tiles = $(".tiles");  //storing the div container to memory

//ANCHOR 2: create tiles (container in browser)
const createTiles = function (tilesAmount){
    console.log("creating tiles",tilesAmount);
  
    for(let i = 1; i <= tilesAmount; i++) {
        const $singleTile = $("<div class='tiles' />").css("background-color", applyRandomColor()) //ANCHOR  create square and applyRandomColor 
        $tiles.append($singleTile);
    }
}
// √

//ANCHOR 3: function to apply colorsArr randomly on browser
//REVIEW applyRandomColor fxn  & choose colors
const applyRandomColor = function(){
    const colorsArr = ["lightskyblue","rgb(255, 0, 0)"];
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    return colorsArr[randomIndex];   
} 
// console.log(applyRandomColor());
// √

//REVIEW once working this will need to change so only if matched, does a tile run through function doFlip
//ANCHOR 4: Flip tile --
const doFlip = function(event) {
    const hasBeenFlipped = $(event.target).hasClass("flipped") //returns true or false

    if(!hasBeenFlipped) {
        console.log(event.target); //this
        $(event.target).addClass("flipped").css("opacity","0.3") //FIXME may not need opacity
        realFlip($(event.target).css("background-color")); //identifies which color is flipped when being "flipped"
    }
}

// √
let $points = $("#points")
$points = 0; //
// √

//REVIEW once working this will need to change so only if matched are $points awarded
//ANCHOR 5: point system and values

const realFlip = function(tileGraphic){
    console.log(tileGraphic);

    if(tileGraphic === "rgb(255, 0, 0)"){ //we will need to assign some sort of value to both the custom cards(objects) to use here
        console.log("It's red!");
        $points++;
    }else {
        console.log("It's not red.");
        if($points > 0) $points--; //this line prevents score from dropping below zero
    }
    $("h2").text(`Total Points: ${$points}`);
}

$(".tiles").on("click", (".tiles"), doFlip); //REVIEW what does this do exactly?

let $round = $("#round")
$round = 0; //
// √
let timer;

//ANCHOR 6: Timer
const setTimer = function(){ //seTimer function not being invoked
    timer = setInterval(function(){
        if(timer === 0){ //FIXME introduce stop to round once timer reaches zero(pause game)
            clearInterval(timer); //clearInterval() also built into js. and will stop timer
            $round++;
            $("#round").text(`Round ${$round}`); //calls on id round in html
            timer = 20 - ($round*2); //subtract round number from time
 
            // if(round <= 4) {
            //     setUpRound(); //these 4 lines will countdown to zero, and when at zero, the round will increase, time will be reset to 10, setUpRound fxn will start
            // }
            // if(round < 5){
            //     return "game over"
            // }
        }
        console.log(timer);
        // √

        $("#timer").text(`Yous have: ${timer} seconds left.`) //calls on #timer in html in order to display setTimer())
        timer--
    }, 1000); //js works in milliseconds
}

// setTimer();//FIXME setTimer to only run on click event on button
// √

//ANCHOR Step 7: Functionality
//depending on the round, setUpRound() generates more tiles

const setUpRound = function() {
    $(".tiles").empty();
    setTimer();
    if($round === 1) {
        createTiles(24);
    }else if($round === 3) {
        createTiles(36);
    }else if($round === 5) {
        createTiles(48);
}else{
        createTiles(50);
        console.log("game stopped")
}
} 
