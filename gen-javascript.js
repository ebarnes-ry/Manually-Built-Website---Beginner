function showAndHideSearch(){
    var x = document.getElementById('search-wrapper');
    var y = document.getElementById('search-icon');
    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.src = "assets/icon\ images/X-icon.png";
    } else {
        x.style.display = 'none';
        y.src = "assets/icon\ images/search-icon.png";
    }
}
function showAndHideMenu(){
    var x = document.getElementById('expanded-menu-id');
    var y = document.getElementById('menu-icon');
    var z = document.getElementById('masthead');
    if(x.style.display =='none'){
        x.style.display = 'block';
        y.src = "assets/icon\ images/X-icon.png";
       //z.id =  "masthead-open";
       // console.log(z.className);
    }
    else{
        x.style.display = 'none';
        y.src = "assets/icon\ images/menu-icon.png";
        //z.id = "masthead";
       // console.log(z.className);
    }
}
// Get all page options
const pageOptions = document.querySelectorAll('.menu-item');
// Attach a mouseover event listener to each page option
pageOptions.forEach((pageOption) => {
  pageOption.addEventListener('mouseover', () => {
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
    if(id == 'artPage'||id=='foodPage'||id=='musicPage'||id=='updatesPage'||id=='aboutPage'||id=='contactPage'){
        previewImage.src = `assets/page images/header images/${id}.jpg`;
        previewImage.alt = `${id} image`;
    }
    else{
        previewImage.src = 'assets/page images/header images/artPage.jpg'
    }
  }
  else{
    var previewImage = document.getElementById('home-image-preview');
    var imageLink = document.getElementById('home-image-preview-link');
    var captionSpace = document.getElementById('preview-image-caption');
    
    if(id == 'artPageHome'||id=='foodPageHome'||id=='musicPageHome'||id=='updatesPageHome'||id=='aboutPageHome'||id=='contactPageHome'){
        var caption;
        var linkID;
        var imageID;
        if(id=='artPageHome'){
            linkID = 'art-topic-page';
            imageID = 'artPage';
            caption = document.getElementById('artPageId').getAttribute('data-img-caption');
            console.log(caption);
        }
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
        else{
            linkID = 'about-page'
            imageID = 'aboutPage'
            caption =   document.getElementById('aboutPageId').getAttribute('data-img-caption');
        }
        captionSpace.innerHTML = caption;

        previewImage.src = `assets/page images/header images/${imageID}.jpg`;
        previewImage.alt = `${id} image`;
        imageLink.href = `${linkID}.html`;
        //TODO IN FUTURE FOR CAPTION: 
        
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