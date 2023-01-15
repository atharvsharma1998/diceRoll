let images = [
    "assets/dice-01.svg",
    "assets/dice-02.svg",
    "assets/dice-03.svg",
    "assets/dice-04.svg",
    "assets/dice-05.svg",
    "assets/dice-06.svg"
];
let dice = document.querySelectorAll("img");
// console.log(dice);
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    document.querySelector('#roll').disabled = true;
    setTimeout(
        function(){
            dice.forEach(
                function(die){
                    die.classList.remove("shake");
                }
            );
            let dieOneValue = Math.floor(Math.random()*6);
            let dieTwoValue = Math.floor(Math.random()*6);
            console.log(dieOneValue,dieTwoValue);
            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
            document.querySelector("#total").innerHTML = "Your Roll is: " + ((dieOneValue+1)+(dieTwoValue+1));
            document.querySelector('#roll').disabled = false;
        },
        1000
    );
}