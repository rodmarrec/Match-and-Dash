//js sanity check
console.log("It's here, inside your mind...");
// √

// focus on bare bones first. Finesse in later sprint.
// √    button and sanity check

/*CHECK LIST
    components to mvp game(broken down by Sequence of creation: 1,2,3...etc)-- Think MVP
    √   (1) name of game
    √   (1) timer on browser
    (1) - count down
    (1) create tiles on browser
    √   (1) score on browser
    (1) - count up       
    √   (1) round # on browser
    (1) - increase round #
    √   (1) start game at click
    (1) have tiles be able to match up (creating value pairs)-- start with 1 color only
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
 */   

//NOTE 1: event listener on button
//button sanity check - 1st easy thing to do
$("button").on('click', function(){
    console.log("==== Get Set, Match! Dash! ======");
});
// √

// const $singleTile = $("<div class='tile' />"); //create tiles as div
//     console.log($singleTile); 
    //√


//NOTE 2: create tiles
const createTiles = function (tilesAmount){
    console.log(createTiles(10));
    const tiles = $(".tiles"); //storing the div container to memory

    for(let i = 1; i <= tilesAmount; i++) {
        const $singleTile = $("<div class='tiles' />").css("background-color", applyRandomColor()) //NOTE applyRandomColor 
        tiles.append($singleTile);
    }
}
// √

//NOTE 3: color
//REVIEW applyRandomColor fxn  & choose colors
const applyRandomColor = function(){
    const colorsArr = ["blue","rgb(20, 100, 100)","rgb(100, 150, 200)","lightskyblue"];
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    return colorsArr[randomIndex];   
} 
// console.log(applyRandomColor());
// √

//NOTE 4: Flip tile