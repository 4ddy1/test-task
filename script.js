function openForm(){
    document.getElementById("myForm").style.display = "block"
    document.getElementById("shadow").style.display = "block"
}

function closeForm(){
    document.getElementById("myForm").style.display = "none"
    document.getElementById("shadow").style.display = "none"
}



$(document).ready(function(){
    $('.slider').slick({
        dots: true
    });
  });
