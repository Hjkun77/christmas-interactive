const body = document.getElementById("body");
const overlay = document.getElementById("overlay");
const home0 = document.getElementById("home0");
const home1 = document.getElementById("home1");
const home3 = document.getElementById('home3');
const home4 = document.getElementById('home4');
const home5 = document.getElementById('home5');
const article = document.getElementById("article");
const instructions = document.getElementById("ornament-instructions");

let count = 0;
let overlayStatus = true;
let articleStatus = false;

var mySVG = document.getElementById("svgw");
var svgDoc;
var or1;
var or2;
var or3;

mySVG.addEventListener("load", function () {
    svgDoc = mySVG.contentDocument;

    var or1 = svgDoc.getElementById('Ornament 1').getBoundingClientRect();
    var or2 = svgDoc.getElementById('Ornament 2').getBoundingClientRect();
    var or3 = svgDoc.getElementById('Ornament 3').getBoundingClientRect();
    // gets the coordinates of each ornament for any screen size
    ornament1L = or1.left;
    ornament1T = or1.top;
    ornament1R = or1.right;
    ornament1B = or1.bottom;

    ornament2L = or2.left;
    ornament2T = or2.top;
    ornament2R = or2.right;
    ornament2B = or2.bottom;

    ornament3L = or3.left;
    ornament3T = or3.top;
    ornament3R = or3.right;
    ornament3B = or3.bottom;

}, false);

// function for showing article
const showArticle = articleNum => {
    const article = document.getElementById(`article-${articleNum}`);
    article.style.display = "block";
    body.style.height = "100%";
    body.style.overflowY = "auto";
    home0.style.display = "none";
    body.style.display = "block";
    body.style.cursor = "auto";
    home1.style.display = "none";
    // home2.style.display = "none";
    mySVG.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    home5.style.display = "none";
    articleStatus = true;
};


const closeArticle = articleNum => {
    const article = document.getElementById(`article-${articleNum}`);
    article.style.display = "none";
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    body.style.display = "flex";
    home0.style.display = "none";
    body.style.cursor = "pointer";
    home1.style.display = "none";
    home3.style.display = "none";
    home4.style.display = "none";
    home5.style.display = "none";
    articleStatus = false;
};

// Web Javascript
window.addEventListener('wheel', e => {
    let delta = e.deltaY; // just to know if it is scroll wheel up or down


    if (delta > 0) {
        // scroll down
        count += 1;
        overlay.className = "animated slow fadeOut";
        overlayStatus = false;
    }


    if (!articleStatus && !overlayStatus) {
        if (count >= 60) {
            mySVG.style.display = "none";
            home0.style.display = "none";
            home1.style.display = "none";
            instructions.style.display = "flex";
            body.style.display = "flex";
            count = 75;
        } else if (count <= 30) {
            home0.style.display = "flex";
            overlay.style.display = "none";
        } else if (count >= 30) {
            home0.style.display = "none";
            home1.style.display = "flex";
        }
    }


});

$(document).bind('touchmove mousemove', e => {
    var eventDoc, doc, bodyDoc;
    e = e || window.e;
    var x = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
    var y = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;

    if (x == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        bodyDoc = eventDoc.bodyDoc;

        x = e.clientX +
            (doc && doc.scrollLeft || bodyDoc && bodyDoc.scrollLeft || 0) -
            (doc && doc.clientLeft || bodyDoc && bobodyDocdy.clientLeft || 0);
        y = e.clientY +
            (doc && doc.scrollTop || bodyDoc && bodyDoc.scrollTop || 0) -
            (doc && doc.clientTop || bodyDoc && bodyDoc.clientTop || 0);
    }


    if (!articleStatus && !overlayStatus && home0.style.display === "none" && home1.style.display === "none") {
        // using dynamic coordinates
        if ((ornament1B >= x && x >= ornament1T) && (ornament1R >= y && y >= ornament1L)) {
            home3.style.display = "block";
            body.style.cursor = "pointer";
            home4.style.display = "none";
            home5.style.display = "none";
            overlay.style.display = "none";
            instructions.style.display = "none";
            body.style.display = "block";


            $(home3).bind('click touchstart', () => {
                showArticle(1);

            });
        } else if ((ornament2B >= x && x >= ornament2T) && (ornament2R >= y && y >= ornament2L)) {
            home4.style.display = "block";
            body.style.cursor = 'pointer';
            home3.style.display = "none";
            home5.style.display = "none";
            overlay.style.display = "none";
            instructions.style.display = "none";
            body.style.display = "block";

            $(home4).bind('click touchstart', () => {
                showArticle(2);
            });
        } else if ((ornament3B >= x && x >= ornament3T) && (ornament3R >= y && y >= ornament3L)) {
            home5.style.display = "block";
            body.style.cursor = 'pointer';
            home4.style.display = "none";
            home3.style.display = "none";
            overlay.style.display = "none";
            instructions.style.display = "none";
            body.style.display = "block";

            $(home5).bind('click touchstart', () => {
                showArticle(3);
            });
        } else {
            home3.style.display = "none";
            home4.style.display = "none";
            home5.style.display = "none";
            body.style.cursor = 'auto';
            instructions.style.display = "flex";
            body.style.display = "flex";
        }
    }


});

// Mobile Javascript
var ts;
$(document).bind('touchstart', function (e) {
    ts = e.originalEvent.touches[0].clientY;
});

$(document).bind('touchend', function (e) {
    var te = e.originalEvent.changedTouches[0].clientY;
    if (ts > te + 5) {
        if (count >= 3) {
            count = 3;
        } else {
            count += 1;
        }
        overlay.className = "animated slow fadeOut";
        overlayStatus = false;

    }



    if (!articleStatus && !overlayStatus) {
        if (count === 1) {
            overlay.style.display = "none";
            home0.style.display = "flex";
            home1.style.display = "none";
            // home2.style.display = "none";
        } else if (count === 2) {
            overlay.style.display = "none";
            home0.style.display = "none";
            home1.style.display = "flex";
            // home2.style.display = "none";
        } else if (count === 3) {
            mySVG.style.display = "none";
            overlay.style.display = "none";
            home0.style.display = "none";
            home1.style.display = "none";
            instructions.style.display = "flex";
            body.style.display = "flex";
        }
    }

});

var x = window.matchMedia("(max-width: 768px)");


function myFunction(x) {
    if (x.matches) { // If media query matches
        $("iframe").remove("#iframeAudio");
    }
}


$(document).ready(function () {
    myFunction(x); // Call listener function at run time
});

const observer = lozad();
observer.observe();

$(function () {
    $(window).on('load', function () {
        $('[data-src]').each(function () {
            var $this = $(this),
                src = $(this).data('src');
            $this.attr('src', src);
        });
    });
});