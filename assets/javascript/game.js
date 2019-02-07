//Declare Choose Block
var $choosePlayer = $(".choosePlayer");
$choosePlayer.show();


//Declare Game Title Block
var $gameTitle = $(".gameTitle");
$gameTitle.show();

//Declare Character Block
var $charPicked= $(".charPicked");
// $charPicked.addClass("hide");

//Declare Enemy Currently Fighting Block
var $enemyPicked = $(".enemyPicked");


//Define Character Object
// Emmet object
var emmet = {
    name: 'Emmet',
    life: 100,
    attack: 8,
    image: "assets/images/Emmet.png"
};

//Lord Business object
var lordBusiness = {
    name: 'Lord Business',
    life: 130,
    attack: 10,
    image: 'assets/images/Lordbusiness.png'
};

//Bad Cop object
var badCop = {
    name: 'Bad Cop',
    life: 150,
    attack: 2,
    image: 'assets/images/Badcop.png'
};

//Wild Lucy object
var wildLucy = {
    name: 'Wild Lucy',
    life: 200,
    attack: 7,
    image: 'assets/images/Wildlucy.png'
};

var charObjectsAsArray = ["emmet", "lordBusiness", "badCop", "wildLucy"];

var $charSelected;
var enemyLeft = [];

$(".charButton").on("click", function(event){

    //Hide the Choose play block and title
    $choosePlayer.hide();
    $gameTitle.hide();

    //Get character that was chosen
    $charSelected = event.currentTarget.value;

    //Building Users Character Block
    $(".float-left").attr("src",window[$charSelected].image);
    $(".life").text(window[$charSelected].life);

    //Building Enemys Left to Fight Block
    for(i=0; i<charObjectsAsArray.length; i++){
        if($charSelected !== charObjectsAsArray[i]) {
            enemyLeft.push(charObjectsAsArray[i])

        }

    }

    console.log(enemyLeft);

    //Once block has updated info, show block
    $charPicked.show();




});






