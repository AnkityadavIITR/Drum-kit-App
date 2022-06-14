//to identify which button got pressed
var noOfButtons= document.querySelectorAll(".drum").length;

for (var i=0;i<noOfButtons;i++){
   
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnerText=this.innerText;
        makeSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
})
}

//to identify which key got tab

document.addEventListener("keypress" , function(kent){
   makeSound(kent.key);
   buttonAnimation(kent.key);
})


// to make sound according to key and buttons;
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play(); 
            break;
        case "a":
            var tom2= new Audio('sounds/tom-2.mp3');
            tom2.play();
        break
        case "s":
            var tom3= new Audio('sounds/tom-3.mp3');
            tom3.play();
        break
        case "d":
            var tom4= new Audio('sounds/tom-4.mp3');
            tom4.play();
        break
        case "j":
            var snare= new Audio('sounds/snare.mp3');
             snare.play();
        break
        case "k":
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
        break
        case "l":
            var kickBass= new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break        
}
}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");},300)
}



