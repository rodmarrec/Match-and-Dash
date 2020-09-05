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
    √   (1) start game at click
    √   (1) - have max. 2 tiles be face-up at once
    √   (1) end game when timer reaches 0 (focus on this to start)
    √   (1) create game play area in browser

    √   (2) create one array that matches up with the font awesome icons used in 
    √   (2) MakeTiles function that will take array as argument and duplicate it(pairs)
    √   (2) -   join arrays into one
    (2) compare tiles to test and find Match.
    (2) -   apply conditional class from css to indicate tiles have been matched
    √   (2) flipTile function to add event listener for click to each tile
    √   (2) add grid of tiles and columns 

    √   (3) -   randmoize values 
    √   (3) add animations to cards with css animate
    √   (3) click# total counter

    (-) round # on browser (stretch goal)
    (-) - increase round # (stretch goal)
    (-) assign tiles to have corresponding graphic... somehow (stretch goal)
    (-) score on browser (stretch goal)
    (-) - count up (stretch goal)
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
    startTimer();
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
// √

//combines two arrays
const combinedArr = tilesArr.concat(tilesArrCopy);
    // console.log(combinedArr);
// √

//container holding tdCell <td> and its child <i>
const $tdCellIcon = $(".tdCell"); 
    // console.log({$tdCellIcon});
// √


$tdCellIcon.each(function(index,eachTiles) {

    let randomClass = []

    randomClass = combinedArr.splice(Math.floor(Math.random() * combinedArr.length -1),1)[0];
    // console.log(randomClass)
    // √

    console.log($(eachTiles))

    $(eachTiles).find("i").addClass(randomClass);
    // console.log(combinedArr);
    
  
    // adds event click to each icon
    $(eachTiles).on("click",flipTile)
     

    $(eachTiles).attr('alt',randomClass)
        // √
    

});



let target1 = null;
let target2 = null;

//Flip tiles and test match
// const allTiles = document.querySelectorAll('.tdCell');

let hasFlippedTile = false;
let lockTileBoard = false;

// let points = 0;

let $firstTile;
let $secondTile;


function flipTile(event) {
    // this.classList.toggle('flipped');
    event.stopPropagation()
    if (lockTileBoard) return;
    // if (this === $firstTile) return;
    
    // $(event.target).addClass('flipped'); 
    if(!$firstTile) {
        $firstTile = $(event.target)
        $(event.target).addClass('flipped'); 
    }else if(!$secondTile) {
        $secondTile = $(event.target)
        $(event.target).addClass('flipped'); 
        lockTileBoard = true;
        testPair();
    // }else {
        // $firstTile = "";
        // $secondTile = "";
        // lockTileBoard = true;
        // testPair();


    }

    // let $firstTile = $(".tdCell").find(".fab") //path not working for comparing strings
    console.log($firstTile);
    
    // let $secondTile = $(".tdCell").find(".fab") //path not working comparing strings
    console.log($secondTile)
    
    
    
        // if(target2 !== target1){
        //     target2 =event.target.id
        //     console.log("target 2",target2)
        // }else{
        //     target1=event.target.id
        //     console.log("target 1",target1)
        // }

        
        // if(!hasFlippedTile) {
        //     hasFlippedTile = true;
        //     $firstTile = this;
        //     return;
        // }
        
        // $secondTile = this;
        
        // testPair(); //compare tiles flipped
    }
    
    function testPair(event) {
       console.log($firstTile.attr("alt") , $secondTile.attr("alt") )
       console.log($firstTile.attr("alt")  === $secondTile.attr("alt") )
      

        if ($firstTile.attr("alt") === $secondTile.attr("alt")) {
            tilesDisabled(target1,target2);
            
            // points + 15
            return;
        }else {
            unFlipTiles();
        }
    }

    // function matchFound() {///=----------- may not need
    //     this.classList.addClass('matched');
    // }

    function tilesDisabled(tile1,tile2) {
        
        // tile1.removeClass('tdCell');
        // tile2.removeClass('tdCell');
        $firstTile.off('.tdCell')
        $secondTile.off('.tdCell')
        $firstTile.addClass('matched');
        $secondTile.addClass('matched');

        // $secondTile.classList.remove('flipped');
        // $secondTitle.classList.addClass('matched');

        resetBoard();
    }

    function unFlipTiles() {

        setTimeout(() => {
            $firstTile.removeClass('flipped');
            

            $secondTile.removeClass('flipped');
            

            // lockTileBoard = false; //unflips tiles by removing .flipped and enables clicking on tile board //delete
            resetBoard();
        }, 1300);
    }

    function resetBoard() {
        [hasFlippedTile, lockTileBoard] = [false, false];
        [$firstTile, $secondTile] = [null, null];
    }

 

    


// allTiles.forEach(tile => tile.addEventListener('click', flipTile));



//counting clicks function  
function startCounter() {
    let count = 0;
    $(".tdRow").on('click',function() {

    count += 1;
    $("#counter").text(`Total Clicks: ${count}`);

    // points -= 1;
    $()
    }); 
}
startCounter()
// console.log(startCounter());



} //------------------ end of generateTile function






//timer function    /////////////////////////////////////
let timer = 30;

//NOTE startTimer()
function startTimer() {
    interval = setInterval(function(){
        $("#timer").text(`Seconds left: ${timer}`)
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


