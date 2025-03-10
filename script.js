const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
let text = document.getElementById("text");

let clicks = 0;

button1.addEventListener("click", yell_at_user);

function yell_at_user() {
    
}


button1.addEventListener("click", annoy);

function annoy() {
    clicks++;
    if(clicks == 1) {
        text.innerHTML = "Hey, Stop That!";
    }

   else if(clicks == 5) {
        text.innerHTML = "I said stop that!";
        
    }

    if(clicks == 10) {
        text.innerHTML = "Stop playin bro!";
    }

    if(clicks == 15) {
        text.innerHTML = "Im gonna find you.";
    }

    if(clicks == 20) {
        text.innerHTML = "im not even joking.";
    }

    if(clicks == 25) {
        text.innerHTML = "Is this your address ******?";
    }
    
    if(clicks == 30) {
        text.innerHTML = "Found you, hehe";
    }

    if(clicks == 35) {
        text.innerHTML = "Stop";
    }

    if(clicks == 40) {
        text.innerHTML = "Why are you still here";
    }

    if(clicks == 45) {
        text.innerHTML = "Leave me alone";
    }

    if(clicks == 50) {
        text.innerHTML = "Go bother another button";
    }

    if(clicks == 55) {
        text.innerHTML = "You know what, I have an idea";
    }
    
    if(clicks == 60) {
        text.innerHTML = "Just a second...";
    }

    if(clicks == 65) {
        text.innerHTML = "Im almost done";
    }

    if(clicks == 70) {
        text.innerHTML = "Can you give me a minute";
    }

    if(clicks == 75) {
        text.innerHTML = "There you go";
        button2.style.display = "visible";
        button2.style.display = "block";
    }

    if(clicks == 76) {
        text.innerHTML = "I made you a new friend";
    }

    if(clicks == 77) {
        text.innerHTML = "you can click them as much as you want";
    }

    if(clicks == 78) {
        text.innerHTML = "now, leave me alone";
    }

    if(clicks == 85) {
        text.innerHTML = "came to tell me how great my button is?";
    }

    if(clicks == 95) {
        text.innerHTML = "Why wont you leave me alone?!";
    }

    if(clicks == 100) {
        text.innerHTML = "use the other one";
    }

    if(clicks == 105) {
        text.innerHTML = "im just gonna ignore you";
    }

    if(clicks == 110) {
        text.innerHTML = "...";
    }

    if(clicks == 115) {
        text.innerHTML = "....";
    }

    if(clicks == 120) {
        text.innerHTML = "*sigh*";
    }

    if(clicks == 125) {
        text.innerHTML = "just use the other button please";
    }

    if(clicks == 130) {
        text.innerHTML = "I have a new idea on how to stop you from clicking me";
    }

    if(clicks == 5) {
        text.innerHTML = "try clicking me now";
        button1.classList.add("move_button1")
    }

    if(clicks == 140) {
        text.innerHTML = "there you go";
    }

    if(clicks == 145) {
        text.innerHTML = "there you go";
    }

    if(clicks == 150) {
        text.innerHTML = "there you go";
    }

    if(clicks == 155) {
        text.innerHTML = "there you go";
    }

    if(clicks == 160) {
        text.innerHTML = "there you go";
    }

}  