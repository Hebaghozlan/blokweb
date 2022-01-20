//HAMBURGER MENU
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

//SCROLL ANIMATIE
//CREDIT VAN DEZE CODE NAAR SAM SLOTEMAKER

//ELEMENTEN DIE JE WILT LATEN FADEN!
const allSections = document.querySelectorAll('.animatie');

//DE OPTIES
const options = {
    rootMargin: "20px",
    threshold: 0.5
};

//ELEMENT GAAT IN OF UIT HET BEELD?
function callbackFunction(entries) {
    //DOOR ALLE ELEMENTEN HEENLOPEN
    entries.forEach(entry => {
        //IS HET ELEMENT IN BEELD?
        if (entry.isIntersecting) {
          //DAN VOEG CLASS TOE
            entry.target.classList.add('fade');
        }
    });
}

const observer = new IntersectionObserver(callbackFunction, options);

allSections.forEach(item => {
    observer.observe(item);
});

// RESPONSIVE DISSCLOSUE
// ROEP ALLE ELEMENTEN AAN
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var input = document.querySelector(".input");


// ZIET WANNEER RADIO3 IS GESELECTEERD
radio3.addEventListener("click", function(){

    // VOEGT DE CLASS "VISIBLE" TOE AAN HET INPUT FIELD
    input.classList.add("visible");
});

// ZIET WANNEER RADIO1 EN RADIO 2 ZIJN GESELECTEERD
radio2.addEventListener("click", function(){
    input.classList.remove("visible");
});
radio1.addEventListener("click", function(){
    input.classList.remove("visible");
});

// REFRESH PAGINA, KRIJG JE EEN ANDER PLAATJE
//ROEP ALLE IMAGES DIE JE WILT LATE RANDOMIZEN
var images = [
    "images/code.png",
    "images/code1.png",
    "images/code2.png",
    "images/code3.png"];

//REKEN WELKE RANDOM IMG AAN HET BEURT IS
var x = Math.floor(Math.random() * images.length);

//RANDOM IMG FUNCTIE
function randImg() {
    document.getElementById('image').src = images[x];
}

randImg();
