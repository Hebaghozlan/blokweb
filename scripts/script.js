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
const allSections = document.querySelectorAll('.animatie')

//DE OPTIES
const options = {
    rootMargin: "20px",
    threshold: 0.5
}

//ELEMENT GAAT IN OF UIT HET BEELD?
function callbackFunction(entries) {
    //DOOR ALLE ELEMENTEN HEENLOPEN
    entries.forEach(entry => {
        //IS HET ELEMENT IN BEELD?
        if (entry.isIntersecting) {
          //DAN VOEG CLASS TOE
            entry.target.classList.add('fade')
        }
    })
}

const observer = new IntersectionObserver(callbackFunction, options)

allSections.forEach(item => {
    observer.observe(item)
})

// RESPONSIVE DISSCLOSUE
// ROEP ALLE ELEMENTEN AAN
const radio1 = document.getElementById("radio1")
const radio2 = document.getElementById("radio2")
const radio3 = document.getElementById("radio3")
const input = document.querySelector(".input")


// ZIET WANNEER RADIO3 IS GESELECTEERD
radio3.addEventListener("click", function(){

    // VOEGT DE CLASS "VISIBLE" TOE AAN HET INPUT FIELD
    input.classList.add("visible")
})

// zZIET WANNEER RADIO1 EN RADIO 2 ZIJN GESELECTEERD
radio2.addEventListener("click", function(){
    input.classList.remove("visible")
})
radio1.addEventListener("click", function(){
    input.classList.remove("visible")
})

// REFRESH PAGINA, KRIJG JE EEN ANDER PLAATJE
var images = [
    "images/code.png",
    "images/code1.png",
    "images/code2.png",
    "images/code3.png"]


function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
}

randImg();
