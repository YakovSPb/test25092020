document.addEventListener("DOMContentLoaded", function() {


$('.slider').slick({
	slidesToShow: 1,
	infinite: true,
	arrows: false,
	autoplay: true,
  autoplaySpeed: 2000,
});


$('.blog_slider').slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	infinite: true,
	arrows: false,
	dots: true
});

});