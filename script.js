var slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
  function showSlides(n) {
    var slides = document.getElementsByClassName("img-slider");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}

/*choosing a color*/
window.onload = function() {
  var divElement = document.getElementById("maindiv");
  var color1 = document.getElementById("color-1");
  var color2 = document.getElementById("color-2");
  var color3 = document.getElementById("color-3");
  var color4 = document.getElementById("color-4");

  if (color1) {
    color1.addEventListener("click", function() {
      divElement.style.backgroundImage = "url(images/buzred.png";
    });
  }

  if (color2) {
    color2.addEventListener("click", function() {
      divElement.style.backgroundImage = "url(images/buzgreen.png)";
    });
  }

  if (color3) {
    color3.addEventListener("click", function() {
      divElement.style.backgroundImage = "url(images/buzblue.png)";
    });
  }
  if (color4) {
    color4.addEventListener("click", function() {
      divElement.style.backgroundImage = "url(images/buzyellow.png)";
    });
  }
  /*hidden social-media*/
  var textShare = document.getElementsByClassName("text-to-share");
  var divSocial = document.getElementById("div-socialMedia");
  var btnX = this.document.getElementById("x-icon");
  if (btnX) {
    btnX.addEventListener("click", function() {
      divSocial.style.display = "none";
      textShare[0].style.display = "none";
    });
  }
};
