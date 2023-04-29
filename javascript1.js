function myFunction(imgs) {
    // Obtenha a imagem expandida
    var expandImg = document.getElementById("expandedImg");
    // Obtenha o texto da imagem
    var imgText = document.getElementById("imgtext");
    // Use o mesmo src na imagem expandida como a imagem que está sendo clicada na grade
    expandImg.src = imgs.src;
    // Use o valor do atributo alt da imagem clicável como texto dentro da imagem expandida
    imgText.innerHTML = imgs.alt;
    // Mostrar o elemento container (oculto com CSS)
    expandImg.parentElement.style.display = "block";
  }