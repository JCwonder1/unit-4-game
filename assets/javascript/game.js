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

//Declare Enemy Name Span
var $enemyName = $(".enemyName");

//Declare Enemy Left Block
var $enemyLeft = $(".enemyLeft");

//Declare attack block and game play
var $attackBlock = $(".attackBlock");
var $gamePlay = $(".gamePlay");

var $attackButton = $(".attackbutton");


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
    attack: 7,
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
var enemyDefeated = false;
var enemyButtonClicked;



$(".charButton").on("click", function(event){

    //Hide the Choose play block and title
    $choosePlayer.hide();
    $gameTitle.hide();

    //Get character that was chosen
    $charSelected = event.currentTarget.value;

    //Building Users Character Block
    $(".charName").text(window[$charSelected].name);
    $(".float-left").attr("src",window[$charSelected].image);
    $(".life").text(window[$charSelected].life);

    //Building Enemy's that Left to Fight Block
    for(i=0; i<charObjectsAsArray.length; i++){
        //console.log(charObjectsAsArray[i]);
        if($charSelected !== charObjectsAsArray[i]) {
            enemyLeft.push(charObjectsAsArray[i]);
            let name = charObjectsAsArray[i];
            $(".enemyLeft").append("<button class='enemyButtonClicked buttonFix "+ charObjectsAsArray[i] +"' value='" + charObjectsAsArray[i] + "'><img src='" + window[name].image + "' class='img' alt='image'></button>");
            enemyDefeated = true;
        }

    }


    //Once Enemys Left block is updated, show block
    $enemyLeft.show();


    //Once block has updated info, show block
    $charPicked.show();


    $(".enemyButtonClicked").on("click", function(event){

        if (enemyDefeated === true) {

            enemyButtonClicked = event.currentTarget.value;

            $(".enemyName").text(window[enemyButtonClicked].name);
            $(".float-right").attr("src", window[enemyButtonClicked].image);
            $(".enemyLife").text(window[enemyButtonClicked].life);



            for (i = 0; i < enemyLeft.length; i++) {

                //Using the enemy button value to match to a value in the array
                if (enemyButtonClicked === enemyLeft[i]) {
                    //console.log($enemyLeft);
                    let y = enemyLeft[i];

                    $("." + y).remove();

                    enemyLeft.splice(i, 1);


                    $(".attackPoints").empty();
                    $(".attackPoints").append("Please attack " + window[enemyButtonClicked].name);
                }
            enemyDefeated = false;

            }


        }

        else {
            alert("You are currently in battle.  Please attack " + window[enemyButtonClicked].name + ".");
        }


        $enemyPicked.show();
        $attackBlock.show();
        $gamePlay.show();

    });

    $attackButton.on("click", function(){

        if(window[enemyButtonClicked].life > 0 && window[$charSelected].life > 0){
            window[enemyButtonClicked].life = window[enemyButtonClicked].life - window[$charSelected].attack;
            window[$charSelected].life = window[$charSelected].life - window[enemyButtonClicked].attack;

            //Display attack and results
            $(".attackPoints").empty();
            $(".attackPoints").append("You attacked and reduced "+ window[enemyButtonClicked].name + "'s life by " + window[$charSelected].attack);

            $(".enemyPoints").empty();
            $(".enemyPoints").append(window[enemyButtonClicked].name + " attacked you and reduced your life by " + window[enemyButtonClicked].attack);
            //Increase player attack

            window[$charSelected].attack = Math.round(window[$charSelected].attack*1.30);

            //Life updated
            $(".life").empty();
            $(".life").text(window[$charSelected].life);

            $(".enemyLife").empty();
            $(".enemyLife").text(window[enemyButtonClicked].life);

            if(window[enemyButtonClicked].life <= 0){
                $(".enemyLife").empty();
                $(".enemyLife").text(0);

                $(".enemyPoints").empty();
                $(".attackPoints").empty();
                if(enemyLeft.length == 0){
                    $(".attackPoints").append("Congrats! You won!!!<br>You defeated all your enemies.");
                }else {
                    $(".attackPoints").append("You defeated " + window[enemyButtonClicked].name + "!<br> Please choose your next enemy.");

                }

                enemyDefeated = true;
            }

            if(window[$charSelected].life <= 0){
                $(".life").empty();
                $(".life").text(0);
                alert("You Lost!! Please Play Again")
                location.reload();

            }

        }




    });


});








