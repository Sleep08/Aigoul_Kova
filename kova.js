const nav = document.querySelector('.nav');
const reseaux = document.querySelector('.kovaheader__reseaux');
const photoSuivant = document.querySelector('photos__suivant');
const items = document.querySelectorAll('div.photos__paysage > img');
const itemsDeux = document.querySelectorAll('div.photos__conteneur--portrait > img');
const itemsTrois = document.querySelectorAll('div.photos__conteneur--portraitDeux > img');
const nbSlides = items.length;
const nbSlidesDeux = itemsDeux.length;
const nbSlidesTrois = itemsTrois.length;
const suivant = document.querySelector('.photos__suivant');
const precedent = document.querySelector('.photos__precedent');
let count = 0;
const tarifs = document.querySelector('.tarifs__contain');
const tarifsTitle = document.getElementById('tarifs__inf');
const tarifsTitleReturn = document.getElementById('tarifs__sup');
const galeriePaysage = document.querySelector('.indexpaysage');

// Barre de navigation :
const btnNavResponsive = document.querySelector("#logoNav");
const btnNavResponsiveClose = document.querySelector("#logoNavClose");
const navMenu = document.querySelector("#navMenu");

// Bouton "Les Robes" :
const robesBtn = document.querySelector('#mainBtnRobes');
const sousBtnRobes = document.querySelector('#sousBtnRobes');
const robesBtnClose = document.querySelector('#mainBtnRobesClose');

// Bouton "L'Atelier'" :
const atelierBtn = document.querySelector('#mainBtnAtelier');
const atelierBtnClose = document.querySelector('#mainBtnAtelierClose');
const sousBtnAtelier = document.querySelector('#sousBtnAtelier');

// Bouton "Creatrice" :
const creatriceBtn = document.querySelector('#mainBtnCreatrice');
const creatriceBtnClose = document.querySelector('#mainBtnCreatriceClose');
const sousBtnCreatrice = document.querySelector('#sousBtnCreatrice');

// Bouton "Evenements" :
const eventBtn = document.querySelector('#mainBtnEvenements');
const eventBtnClose = document.querySelector('#mainBtnEvenementsClose');
const sousBtnEvent = document.querySelector('#sousBtnEvenements');

/* Barre de navigation */

window.addEventListener("scroll", function(){
    if(window.scrollY>0){
        nav.classList.add('nav-fixe');
    } else {
        nav.classList.remove('nav-fixe');
    }
})
window.addEventListener("scroll", function(){
    if(window.scrollY>30){
        reseaux.classList.add('reseaux-fixe');
    } else {
        reseaux.classList.remove('reseaux-fixe');
    }
});

// Click du bouton "Les robes" :

btnNavResponsive.addEventListener('click', function(){
    navMenu.style.display="block";
    btnNavResponsiveClose.style.display="block";
    btnNavResponsive.style.display="none";
});

btnNavResponsiveClose.addEventListener('click', function(){
    navMenu.style.display="none";
    btnNavResponsiveClose.style.display="none";
    btnNavResponsive.style.display="block";
});

// Click du bouton "Les robes" :

robesBtn.addEventListener('click', function(){
    console.log(sousBtnRobes);
    sousBtnRobes.style.display='block';
    robesBtnClose.style.display='block';
    robesBtn.style.display="none";
});
robesBtnClose.addEventListener('click', function(){
    console.log(sousBtnRobes);
    sousBtnRobes.style.display='none';
    robesBtn.style.display='block';
    robesBtnClose.style.display="none";
});

// Click du bouton "Atelier" :

atelierBtn.addEventListener('click', function(){
    sousBtnAtelier.style.display='block';
    atelierBtnClose.style.display='block';
    atelierBtn.style.display="none";
});
atelierBtnClose.addEventListener('click', function(){
    sousBtnAtelier.style.display='none';
    atelierBtn.style.display='block';
    atelierBtnClose.style.display="none";
});

// Click du bouton "Votre Créatrice" :

creatriceBtn.addEventListener('click', function(){
    console.log(sousBtnRobes);
    sousBtnCreatrice.style.display='block';
    creatriceBtnClose.style.display='block';
    creatriceBtn.style.display="none";
});
creatriceBtnClose.addEventListener('click', function(){
    sousBtnCreatrice.style.display='none';
    creatriceBtn.style.display='block';
    creatriceBtnClose.style.display="none";
});

// Click du bouton "Votre Créatrice" :

eventBtn.addEventListener('click', function(){
    sousBtnEvent.style.display='block';
    eventBtnClose.style.display='block';
    eventBtn.style.display="none";
})
eventBtnClose.addEventListener('click', function(){
    sousBtnEvent.style.display='none';
    eventBtn.style.display='block';
    eventBtnClose.style.display="none";
})
/* Galerie photos robes de mariées */

function slideSuivante(){
    items[count].classList.remove('active');
    itemsDeux[count].classList.remove('active');
    itemsTrois[count].classList.remove('active');

    if(count < (nbSlides -1) && (nbSlidesDeux -1) && (nbSlidesTrois -1)){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    itemsDeux[count].classList.add('active');
    itemsTrois[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');
    itemsDeux[count].classList.remove('active');
    itemsTrois[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    itemsDeux[count].classList.add('active');
    itemsTrois[count].classList.add('active');
}

precedent.addEventListener('click', slidePrecedente);

/* Tarif des robes */
console.log(tarifsTitle);
console.log(tarifsTitleReturn);
tarifsTitle.addEventListener('click', function() {        
        tarifs.style.display = 'block';
        tarifsTitleReturn.style.display = 'block';
        tarifsTitle.style.display = 'none';
    });
tarifsTitleReturn.addEventListener('click', function() {        
    tarifs.style.display = 'none';
    tarifsTitleReturn.style.display = 'none';
    tarifsTitle.style.display = 'block';
});

/* Background index */

window.addEventListener("scroll", function(){
    if(window.scrollY>20){
        galeriePaysage.style.backgroundPosition = "top";
    } else {
        galeriePaysage.style.backgroundPosition = "center";
    }
})