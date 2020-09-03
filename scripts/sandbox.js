
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



////////////////////////////////
//shuffle after objects have been appended to <td> tags
const shuffledArr = shuffle(combinedArr);
console.log(shuffledArr)
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


/* 
//////////DRY CODE FOR FLIPPING AND TESTING TILE MATCH using ternary operator
if($firstTile === $secondTile) {
    tilesDisabled();
    return;
}
unFlipTiles();

let isMatch = $firstTile === $secondTile;
isMatch ? tilesDisabled() : unFlipTiles

function tilesDisabled() {
    $firstTile.on('click', flipTile);
    $secondTile.on('click',flipTile);
}

function unFlipTiles() {
    setTimeout(() => {
        $firstTile.classList.remove('flipped');
        $secondTile.classList.remove('flipped');
    }, 1200);
}
///////////////////////////////////////////////////////////// 
*/