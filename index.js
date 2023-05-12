
var numofdrumbuttons = document.querySelectorAll(".drumbutton").length;

for (var i = 0; i < numofdrumbuttons; i++) {



    document.querySelectorAll(".drumbutton")[i].addEventListener("click", function () {

        var buttoninnerhtml = this.innerHTML;

        makesound(buttoninnerhtml);

        buttonanimation(buttoninnerhtml);

    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonanimation(event.key);
});




function makesound(key) {
    switch (key) {
        case "W":
            var a1 = new Audio("sound1.wav");
            a1.play();
            break;

        case "D":
            var a2 = new Audio("sound2.wav");
            a2.play();
            break;

        case "A":
            var a2 = new Audio("sound3.wav");
            a2.play();
            break;

        case "U":
            var a3 = new Audio("sound4.wav");
            a3.play();
            break;

        case "C":
            var a4 = new Audio("sound5.wav");
            a4.play();
            break;

        case "T":
            var a5 = new Audio("sound6.wav");
            a5.play();
            break;

        default:
            console.log(buttoninnerhtml);

    }
}

function buttonanimation(key) {

    var activebutton = document.querySelector("." + key);

    activebutton.classList.add("pressed");

    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}







