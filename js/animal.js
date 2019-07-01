 
$(document).ready(function() {
    $('#toggle_btn').click(function() {
      //$('#menu-item').show();
      var effect = 'slide';
      var options = {direction: 'left'};
       var duration = 120;
  
        $('.animal-types, #dots,#menu-item').stop(true,true).toggle(effect, options,duration);
    // alert('hii');


///    $('.animal-types, #dots,#menu-item').toggle(effect, options, duration);
 
    });
 });