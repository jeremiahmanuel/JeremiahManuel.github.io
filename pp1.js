/*//Automatic Quotes Slideshow

let qIndex = 0;
let q=["laziness is the mother of all bad habits yet she is a mother and we should Respect her",
"It’s foolish to fear what we’ve yet to see and know"];
let a=["shikamaru nara","Masashi Kishimoto"];

let quote = function (qIndex) {
    qIndex++;
    if (qIndex !< q.length ) {
     qIndex = 0;
    }
    $(".blockquote").text(q[qIndex]);
    $(".blockquote").children().text(a[qIndex]);
    setTimeout(quote(qIndex), 2000); // Change quote every 2 seconds
}
quote(0);*/


let slideIndex = 1;
let showSlides=function(n) {
  var i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  if (n > slides.length)
  {slideIndex = 1;}
  if (n < 1)
  {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
