const humorsText = {
  0: "Feliz",
  1: "Baddass",
  2: "Brava",
  3: "Cansada",
  4: "Engraçada",
  5: "Estudiosa",
  6: "Faminta",
  7: "Fofa",
  8: "Julgando",
  9: "Meh",
  10: "Pensativa",
  11: "Timída",
};

const humorsImage = {
    0: "images/boa-feliz.jpg",
    1: "images/boa-baddass.jpg",
    2: "images/boa-brava.jpg",
    3: "images/boa-cansada.jpg",
    4: "images/boa-engraçada.jpg",
    5: "images/boa-estudiosa.png",
    6: "images/boa-faminta.jpg",
    7: "images/boa-fofa.jpg",
    8: "images/boa-julgando.jpg",
    9: "images/boa-meh.jpg",
    10: "images/boa-pensativa.jpg",
    11: "images/boa-timida.jpg",
  };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const textHumor = document.querySelector("#btn-change");

textHumor.addEventListener("click", function () {
  var index = getRandomInt(0, 11);

  document.getElementById("actual-humor").innerHTML = humorsText[index];
  document.getElementById("boa-photo").src = humorsImage[index];
});
