function showAndHideSearch(){//function that shows and hides search bar when button is pressed
    var x = document.getElementById('search-wrapper');
    var y = document.getElementById('search-icon');
    if (x.style.display == 'none') {//if search bar is hidden
        x.style.display = 'block';
        y.src = "assets/icon\ images/X-icon.png";
    } else {//if search bar is shown
        x.style.display = 'none';
        y.src = "assets/icon\ images/search-icon.png";
    }
}
function showAndHideMenu(){//function that shows and hides full menu when button is pressed
    var x = document.getElementById('expanded-menu-id');
    var y = document.getElementById('menu-icon');
    var z = document.getElementById('masthead');
    if(x.style.display =='none'){//if full menu is hidden
        x.style.display = 'block';
        y.src = "assets/icon\ images/X-icon.png";
       //z.id =  "masthead-open";
       // console.log(z.className);
    }
    else{//if full menu is shown
        x.style.display = 'none';
        y.src = "assets/icon\ images/menu-icon.png";
        //z.id = "masthead";
       // console.log(z.className);
    }
}
// Get all page options
const pageOptions = document.querySelectorAll('.menu-item');
// Attach a mouseover event listener to each page option
pageOptions.forEach((pageOption) => {//for each page option
  pageOption.addEventListener('mouseover', () => {//when mouse is over page option
    const id = pageOption.id;
    // Call your function and pass the ID of the current element as an argument
    showPreviewImage(id);
  });
});
// Function to show the preview image
function showPreviewImage(id) {
  // Get the preview image element and change its source to the image for the current page option
  //if full menu is open
  var x = document.getElementById('expanded-menu-id');
  if(x.style.display == 'block'){
    const previewImage = document.getElementById('full-menu-image-preview');
    if(id == 'artPage'||id=='foodPage'||id=='musicPage'||id=='updatesPage'||id=='aboutPage'||id=='contactPage'||id=='reportPage'){//if page is a topic page
        previewImage.src = `assets/page images/header images/${id}.jpg`;
        previewImage.alt = `${id} image`;//set alt text to page name
    }
    else{
        previewImage.src = 'assets/page images/header images/artPage.jpg'
    }
  }
  else{//if full menu is closed
    var previewImage = document.getElementById('home-image-preview');
    var imageLink = document.getElementById('home-image-preview-link');
    var captionSpace = document.getElementById('preview-image-caption');
    //to make sure home menu is selected
    if(id == 'artPageHome'||id=='foodPageHome'||id=='musicPageHome'||id=='updatesPageHome'||id=='aboutPageHome'||id=='contactPageHome'||id=='reportPageHome'){
        var caption;
        var linkID;
        var imageID;
        if(id=='artPageHome'){//if page is art page
            linkID = 'art-topic-page';//set link to art page
            imageID = 'artPage';//set image to art page image
            caption = document.getElementById('artPageId').getAttribute('data-img-caption');//get caption from data attribute

        }//repeat
        else if(id=='foodPageHome'){
            linkID = 'food-topic-page';
            imageID = 'foodPage';
            caption = document.getElementById('foodPageId').getAttribute('data-img-caption');
        }
        else if(id=='musicPageHome'){
            linkID = 'music-topic-page';
            imageID = 'musicPage';
            caption = document.getElementById('musicPageId').getAttribute('data-img-caption');
        }
        else if(id=='updatesPageHome'){
            linkID = 'updates-page';
            imageID = 'updatesPage';
            caption = document.getElementById('updatesPageId').getAttribute('data-img-caption');
        }
        else if(id=='contactPageHome'){
            linkID = 'contact-page';
            imageID = 'contactPage';
            caption = document.getElementById('contactPageId').getAttribute('data-img-caption');
            
        }
        else if(id=='reportPageHome'){
            linkID = 'report';
            imageID = 'reportPage';
            caption = document.getElementById('reportPageId').getAttribute('data-img-caption');
        }
        else{
            linkID = 'about-page'
            imageID = 'aboutPage'
            caption =   document.getElementById('aboutPageId').getAttribute('data-img-caption');
        }
        captionSpace.innerHTML = caption;//set caption to page name

        previewImage.src = `assets/page images/header images/${imageID}.jpg`;//set image to page image
        previewImage.alt = `${id} image`;
        imageLink.href = `${linkID}.html`;
    }
  }
}
//function that automatically scrolls to top of page when button is pressed 
var mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//function that changes background of page when button is pressed
function changeBackground(){
    var x = document.getElementById('body-id');
    var y = document.getElementById('background-button');
    if(x.className == 'light-background'){
        x.className = 'dark-background';
        y.innerHTML = "Light Mode";
    }
    else{
        x.className = 'light-background';
        y.innerHTML = "Dark Mode";
    }
}

//function that changes font size of page when button is pressed
var cont = document.getElementsByClassName("paragraph-article");
var arr = Array.from(cont);//use an array to get around the html element

function fontSize(size) {
    for(var i = 0; i < arr.length; i++){//iterate through array
        if(size == 'less'){//for each type of size, set to predisposed font size for accessibility
            arr[i].style.fontSize = '10px';
        }
        else if(size =='original'){
            arr[i].style.fontSize = '15px';
        }
        else if(size == 'more'){
            arr[i].style.fontSize = '22px';
        }
        else{
            arr[i].style.fontSize = '15px';
        }
    }
}
function toggleDark() {//function that changes background of page and font style color according to altered class tag corresponding with css when button is pressed
    let body = document.body;
    let p1 = Array.from(document.querySelectorAll("p1"));
    let p = Array.from(document.querySelectorAll("p"));
    let a = Array.from(document.querySelectorAll("a"));
    let h1 = Array.from(document.querySelectorAll("h1"));
    let h2 = Array.from(document.querySelectorAll("h2"));
    let li = Array.from(document.querySelectorAll("li"));
    let span = Array.from(document.querySelectorAll("span"));

    body.classList.toggle("dark-mode");
    for (let i = 0; i < p1.length; i++) {
        p1[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < p.length; i++) {
        p[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < h1.length; i++) {
        h1[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < h2.length; i++) {
        h2[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < li.length; i++) {
        li[i].classList.toggle("dark-mode");
    }
    for (let i = 0; i < span.length; i++) {
        span[i].classList.toggle("dark-mode");
    }

  }