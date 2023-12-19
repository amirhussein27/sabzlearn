let $=document.getElementsByClassName
$('.save').click(function(){
    var newItem = "<div class='item'><div class='close'>&times;</div></div>";
    var textVal = $('.inputLine').val();
    
    $('.notes').append(newItem)
    $('.item:last-child').prepend(textVal);
    $('.wrapper textarea').val('');
  });
  
  $('.notes').on('click', '.close',function(){
    $(this).parent().fadeOut(300, function(){ $(this).remove(); });
  });