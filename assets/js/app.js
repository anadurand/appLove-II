window.addEventListener("load", function(){
  var imagenes = document.getElementsByClassName("modal-img");
  var modalBox = document.getElementById("modal01");
  var img = document.getElementById("img01");
  var body = document.getElementById("body");
  var closed = document.getElementById("close");
  var leftButton = document.getElementById("buttonLeft");
  var rightButton = document.getElementById("buttonRight");

  for(i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener("click", function(event){
      event.preventDefault();
        body.classList.add("hidden");
        img.src = event.target.src;
        modalBox.style.display = "block";
          buscarImg(img.src);
    });
  }

  closed.addEventListener("click", function(){
    modalBox.style.display = "none";
    body.classList.remove("hidden");
  });

  leftButton.addEventListener("click", function(e){
    moveImag(-1);
  });
  rightButton.addEventListener("click", function(e){
    moveImag(1);
  });


  var actualImg = 1;
  var ImgUrl = [];
  for(i=0; i<imagenes.length; i++){
    ImgUrl.push(imagenes[i].src);
  }
  function buscarImg(ruta){
    for(i=0; i<ImgUrl.length; i++){

      if(ruta == ImgUrl[i]){
        actualImg = i+1;
      }
    }
  }
  function moveImag(n){
    actualImg += n;
    console.log(actualImg);
    if(actualImg > imagenes.length){
      actualImg = 1;
    }
    if(actualImg < 1){
      actualImg = imagenes.length;
    }
    img.src = ImgUrl[actualImg-1];
  }
});
