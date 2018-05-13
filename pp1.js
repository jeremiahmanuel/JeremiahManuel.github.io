


let slideIndex = 1;
let showSlides=function(n) {
  let i;
  let slides = $(".mySlides");
  let dots = $(".dot");
  if (n > slides.length)
  {slideIndex = 1;}
  if (n < 1)
  {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
  dots.eq(i).removeClass("active");
  }
  slides[slideIndex-1].style.display = "inline";
  dots.eq(slideIndex-1).addClass(" active");
};

//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
