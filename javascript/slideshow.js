/*-------Slideshow on Updates Page-------*/
/*with help ftom https://www.w3schools.com/howto/howto_js_slideshow.asp*/
let slideindex = 1;
displaySlides(slideindex);//call function to display slides on page load

function addSlides(n){//function to add or subtract from slide index
    displaySlides(slideindex += n);
}

function displaySlides(n){//function to display slides based on slide index
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