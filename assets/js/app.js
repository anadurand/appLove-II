window.addEventListener("load", function(){
  var imagenes = document.getElementsByClassName("modal-img");
  var modalBox = document.getElementById("modal01");
  var img = document.getElementById("img01");
  var body = document.getElementById("body");
  var closed = document.getElementById("close");
  var leftButton = document.getElementById("buttonLeft");

  for(i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener("click", function(event){
      event.preventDefault();
        body.classList.add("hidden");
        img.src = event.target.src;
        modalBox.style.display = "block";

    });
  }

  closed.addEventListener("click", function(){
    modalBox.style.display = "none";
    body.classList.remove("hidden");
  });

  leftButton.addEventListener("click", function(e){
    console.log(e.target.parentNode.img);

  });

});
