var pages = {
  top: './index.html',
  bottom: '',
  left: '',
  right: ''
}
positionPointerFromPrevPage();
if (previousPage.indexOf('index.html') != -1) {
  setPointerPosition(documentSize.width * previousXPercent, 50)
}

/* Fancy scrolling adadpted from
https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

/* Trigger animation when in viewport */
$("#thingsILike").inviewport({
  threshold: 75,
  className: 'animate-logos'
});
