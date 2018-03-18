window.onload = function() {
    
    function getRandomInteger(min, max) {
        return Math.floor((Math.random() * max) + min);
    }
    
    var randomNumber = getRandomInteger(1,10);
    
    function compareNumbers(first, second) {
        return (first == second);
    }
    
       
    function guessTheNumber() {
        var number = parseInt(document.getElementById("number").value);
        console.log(randomNumber);
        if (Number.isInteger(number) && number > 0 && number <= 10) {
            if (compareNumbers(guess,randomNumber)) {
                window.alert("Your guess was right, congratulations :D");
                randomNumber = getRandomInteger(1,10);
            }
            else window.alert("Your guess was wrong :D");
        }
        else window.alert("You must guess number between 1 and 10!");
    } 

    
    document.getElementById("button").onclick = function(){guessTheNumber()};
    
    
}