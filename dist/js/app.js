$(document).foundation()

$("[data-toggle-menu]").on("click",function(){
  $("#menu").toggleClass("is-open")
})

$("#menu li a").on("click",function(){
  $("#menu").removeClass("is-open")
  $('.hamburger').removeClass('is-active');
})

$('.hamburger').on('click', function () {
  $('.hamburger--spring').toggleClass('is-active');
})
