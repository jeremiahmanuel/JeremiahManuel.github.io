//Automatic Quotes Slideshow

let qIndex = 0;
let q=["laziness is the mother of all bad habits yet she is a mother and we should Respect her","It’s foolish to fear what we’ve yet to see and know"];
let a=["shikamaru nara","Masashi Kishimoto"];
let quote = function (qIndex) {
    if (qIndex >= q.length ) {
     return 0;
    }
    let b = $(".blockquote");
    b.html("<blockquote class='blockquote' style='font-size:26px;'>\""+q[qIndex]+"\"<footer class='blockquote-footer'>"+a[qIndex]+"</footer></blockquote>");
    qIndex++;
    setTimeout(quote(qIndex), 5000); // Change quote every 2 seconds
};

//quote(0);
