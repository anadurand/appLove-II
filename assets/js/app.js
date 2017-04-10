window.addEventListener("load", function(){
  var imagenes = document.getElementsByClassName("modal-img");
  var modalBox = document.getElementById("modal01");
  var img = document.getElementById("img01");

  for(i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener("click", function(event){
        img.src = event.target.src;
        modalBox.display = "block";

    });
  }


});
