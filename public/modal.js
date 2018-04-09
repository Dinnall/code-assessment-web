$(document.ready(function(){
  $('#cartModal').hide();

  $('#shoppingCart').on('click',function(){
     $('cartModal').show();
  });
  $('.close').on('click',function(){
    $('#cartModal').hide()
  })
})