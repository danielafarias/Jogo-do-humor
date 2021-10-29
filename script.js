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

const humorsMusic = {
  0: "https://www.youtube.com/embed/qE05Bv1e_fo",
  1: "https://www.youtube.com/embed/bKqe9zqMUcI",
  2: "https://www.youtube.com/embed/pykyNOEVqCU",
  3: "https://www.youtube.com/embed/hhBwPj7NpBk",
  4: "https://www.youtube.com/embed/M48JMEkiu3Q",
  5: "https://www.youtube.com/embed/Q3aLp8nhXfg",
  6: "https://www.youtube.com/embed/fOxl2OIOVII",
  7: "https://www.youtube.com/embed/skbnuIhVQUA",
  8: "https://www.youtube.com/embed/RlMg8FbcP7g",
  9: "https://www.youtube.com/embed/mR8i0fRVmSA",
  10: "https://www.youtube.com/embed/PQjovLrnvVo",
  11: "https://www.youtube.com/embed/o1XOFi42xZM",
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const textHumor = document.querySelector("#btn-change");

textHumor.addEventListener("click", function () {
  var index = getRandomInt(0, 11 + 1);

  document.getElementById("actual-humor").innerHTML = humorsText[index];
  document.getElementById("boa-photo").src = humorsImage[index];
  document.getElementById("youtube-video").src = humorsMusic[index];
});
