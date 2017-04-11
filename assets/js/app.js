window.addEventListener("load", function(){
  var imagenes = document.getElementsByClassName("modal-img");
  var modalBox = document.getElementById("modal01");
  var img = document.getElementById("img01");

  for(i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener("click", function(event){
      event.preventDefault();
        img.src = event.target.src;
        modalBox.style.display = "block";

    });
  }

  var closed = document.getElementById("close");

  closed.addEventListener("click", function(){
    modalBox.style.display = "none";
  });

});
