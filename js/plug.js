
$(document).ready(function(){
        var isshown = localStorage.getItem('isshown');
    if (isshown== null) {
        localStorage.setItem('isshown', 1);

        // Show popup here
        var dialog = $( "#dialog-form" ).dialog({
        autoOpen: true,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
         OK: function() {
         dialog.dialog( "close" );
         }
       }
     }); 
    }
    
  $(".mainslider").owlCarousel({
      items:1,
      autoplay:true,
      rtl:true,
      loop: true,
  });     
});



function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    $('body').addClass('scroll_mob');
	document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('body').removeClass('scroll_mob');
	document.body.style.backgroundColor = "rgba(0,0,0,0)";
}
  
