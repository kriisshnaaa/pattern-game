var userPattern = [];
var pattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function next() {
    level++;
    $("h1").text("Level " + level);
    var randomColor = buttonColours[random()];
    pattern.push(randomColor);
       for (let i = 0; i < pattern.length; i++) {
        setTimeout(function () {
            var audio = new Audio('./' + pattern[i] + '.mp3');
            audio.play();
            $("#" + pattern[i]).fadeOut(100).fadeIn(100);
        }, i * 600); 
    }
}

$(".btn").on("click", function () {
    var chosenColour = this.id;
    $("#" + this.id).fadeOut(100).fadeIn(100);
    userPattern.push(chosenColour);
    var audio1 = new Audio('./' + this.id + '.mp3');
    audio1.play();
    checkAnswer(userPattern.length - 1)
})
var keypress = 0;
var level = 0;
$("body").on("keypress", function () {
    keypress++;
    if (keypress === 1) {
        pattern = [];
        userPattern = [];
        next();

    }
})
function checkAnswer(current) {
    if (pattern[current] == userPattern[current]) {
        if (pattern.length == userPattern.length) {
            userPattern = [];
            setTimeout(next, 1000);
        }
    }
    else {
        var wrong = new Audio('./wrong.mp3');
        wrong.play();
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart!!");
        startover()

    }
}
function startover() {
    pattern = [];
    userPattern = [];
    level = 0;
    keypress = 0;
}





function random() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber
}
