var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

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
