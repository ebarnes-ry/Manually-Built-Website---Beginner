/*-------Slideshow on Updates Page-------*/
let slideindex = 1;
displaySlides(slideindex);

function addSlides(n){
    displaySlides(slideindex += n);
}

function displaySlides(n){
    let i;
    let slides = document.getElementsByClassName("updates-slideshow");
    if(n>slides.length){
        slideindex = 1;
    }
    if(n<1){
        slideindex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideindex-1].style.display = "block";
}