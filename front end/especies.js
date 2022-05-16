const animalContainer = document.querySelector(".animal-container");

const fetchAnimal = (name) => {
  fetch(`https://api-omar-oceanrisk.herokuapp.com/animals/name/${name}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      createAnimalCard(data);
    });
};

const createAnimalCard = (animals) => {
  const card = document.createElement("div");
  card.classList.add("animal-block");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = animals[0].img;

  imgContainer.appendChild(img);

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = animals[0].name;

  card.appendChild(imgContainer);
  card.appendChild(name);

  animalContainer.appendChild(card);
};

fetchAnimal("Tortuga verde");

$(document).ready(function () {
  $(".menu a").each(function (index, elemento) {
    $(this).css({
      top: "-200px",
    });
    $(this).animate(
      {
        top: "0",
      },
      2000 + index * 500
    );
  });
  if ($(window).width() > 800) {
    $("header .textos").css({
      opacity: 0,
      marginTop: 0,
    });
    $("header .textos").animate(
      {
        opacity: 1,
        marginTop: "-52px",
      },
      1500
    );
  }
});
