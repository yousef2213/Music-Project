document.querySelector('.icon-logo').addEventListener('click',sho);


function sho() {
    document.querySelector('.nav-ul').classList.toggle('shooo');
}


  $(".nav-logo").click(function () {
    $(".header").toggleClass("let");
    $('main').toggleClass('hei');

  })








  $('.songs-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })



