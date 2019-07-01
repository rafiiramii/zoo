
 
$(document).ready(function() {
   $('#toggle_btn').click(function() {


      
      // $('.animal-desc').on({
      //    hide(), 
      // })
       $('.animal-desc, #menu-item').stop(true,true).slideToggle("slow").slideOutLeft(2000);

      // $('.animal-desc, #menu-item').animate({width:'toggle'});
    
      // $('.animal-desc').hide("slide",{direction: "left"}, 100);
      //$('#menu-item').delay(200).show("slide",{direction: direction}, 100);
      // $('.animal-desc,#menu-item').toggle("slide",{direction: direction}, 100);
   });


   
});
var element = document.querySelector('.slideshow-slide-list');
var slideshow = bamboo(element);