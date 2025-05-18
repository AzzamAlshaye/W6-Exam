let mainDiv = document.getElementById("main-div");

const apiall = "https://restcountries.com/v3.1/all";
// offical name https://restcountries.com/v3.1/name/{name}?fullText=true
let languages = document.createElement("ul");
fetch(`${apiall}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card-main");
      let namescomm = document.createElement("p");
      namescomm.innerText = element.name.common;
      console.log(namescomm);
      let namesoffical = document.createElement("p");
      namesoffical.innerText = element.name.official;
      console.log(namesoffical);
      let population = document.createElement("p");
      population.innerText = element.population;
      console.log(population);
      let flagPng = document.createElement("img");
      flagPng.src = element.flags.png;
      flagPng.style.height = "5rem";
      flagPng.style.width = "5rem";
      console.log(flagPng);
      let region = document.createElement("p");
      region.innerText = element.region;
      console.log(region);
      //   let languages = document.createElement("p");
      //   languages.forEach((e) => {
      //     languages.innerText = element.languages;
      //     console.log(languages);
      //   });

      let maps = document.createElement("p");
      maps.innerText = `maps:${element.maps.googleMaps}`;
      maps.classList.add("mapsText");
      console.log(maps);
      // mainDiv.appandchild(namescomm , namesoffical);
      //   let nameOffi
      console.log("------------");
      card.appendChild(flagPng);
      card.appendChild(namescomm);
      card.appendChild(namesoffical);
      card.appendChild(population);
      card.appendChild(region);
      card.appendChild(languages);
      card.appendChild(maps);

      mainDiv.appendChild(card);
    });
  });

// namescomm,
//     namesoffical,
//     population,
//     region,
//     languages,
//     maps
