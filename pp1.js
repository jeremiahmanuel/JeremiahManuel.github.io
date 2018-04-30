$("#menu").on("click",function () {
  if ($(".nav").attr("display")=="block") {
    $(".nav").style.display = "none";
  }
  else {
    $(".nav").style.display = "block";
  }
});


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


/*
$(.nav).hide();
$(#menu).onclick(function(){
  $(.nav).toggle(500);
});




//Automatic Slideshow
/*
var qIndex = 0;

var q=["laziness is the mother of all bad habits yet she is a mother and we should Respect her",
"It’s foolish to fear what we’ve yet to see and know"];
var a=["shikamaru nara","Masashi Kishimoto"];
quote();
function quote(qIndex) {

    for (i = 0; i < q.length; i++) {
        q[i].style.display = "none";

    qIndex++;
    if (qIndex > q.length) {qIndex = 1}

    $(.blockquote).text(q[qIndex]);
    $(.footer).text(a[qIndex]);

    setTimeout(quote(), 2000); // Change quote every 2 seconds
}*/
