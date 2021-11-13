
class Image {
    constructor(path, descr){
        this.path = path;
        this.descr = descr;
    }

}

var images = new Array();
var slideIndex = 0;

function importImages() {
    var imageFilenames = ["apartment_bath.jpg",
        "apartment_front.jpg",
        "apartment_garden.jpg",
        "back_beach.jpg",
        "back_beach_sorrento.jpg",
        "ocean_beach.jpg",
        "ocean_beach3.jpg",
        "ocean_beach_2.jpg",
        "sorrento_from_jetty.jpg"
        ];
    var imageDescr = ["Apartment bath",
        "Apartment front",
        "Apartment garden",
        "Back beach",
        "Back beach Sorrento",
        "Ocean beach 1",
        "Ocean beach 2",
        "Ocean beach 3",
        "Sorrento from jetty"
        ];   
    
    for(var i=0; i<imageFilenames.length; i++){
        images.push(new Image(imageFilenames[i], imageDescr[i]));
    }
}

importImages();


function showSlides() {
    if(slideIndex >= images.length) {
        slideIndex = 0;
    }
    if(slideIndex < 0){
        slideIndex = images.length - 1;
    }
    document.getElementById("MainImage").src = "Images/Slideshow/" + images[slideIndex].path;
    document.getElementById("MainImage").alt = images[slideIndex].descr;
    document.getElementById("caption").innerHTML = images[slideIndex].descr;

}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function forwardSlide() {
    slideIndex += 1;
    showSlides();
}

function backSlide() {
    slideIndex -= 1;
    showSlides();
}

