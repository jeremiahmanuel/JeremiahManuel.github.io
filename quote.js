
$(document).ready(function(){
  $("#loader-wrapper").hide();
});

//Automatic Quotes Slideshow
let qIndex = 0;
let q=["laziness is the mother of all bad habits yet she is a mother and we should Respect her","It’s foolish to fear what we’ve yet to see and know"];
let a=["shikamaru nara","Masashi Kishimoto"];
function quote() {
    if (qIndex >= q.length ) {
      qIndex=0;
     //return 0;
   }
    let b = $(".blockquote");
  //  console.log(q[qIndex]);
    b.html("<blockquote class='blockquote fade1' style='font-size:26px; transition:background-color 15s ease'>\""+q[qIndex]+"\"<footer class='blockquote-footer'>"+a[qIndex]+"</footer></blockquote>");
    qIndex=qIndex+1;
}
setInterval(quote,5000); // Change quote every 2 seconds
//quote(0);
