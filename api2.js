let mainDiv = document.getElementById("main-div");

const apilink =
  "https://api.harvardartmuseums.org/object?apikey=6352f816-73d6-42ff-92ae-e5a7e45501ea";

fetch(`${apilink}`)
  .then((response) => response.json())
  .then((data) => {
    data.records.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card-main");
      let description = document.createElement("p");
      description.innerText = element.verificationleveldescription;
      console.log(description);
      let artpng = document.createElement("img");
      artpng.src = element.images.baseimageurl;
      artpng.style.height = "5rem";
      artpng.style.width = "5rem";
      console.log(artpng);
      let title = document.createElement("h4");
      title.innerText = element.title;
      console.log(title);
      let artest = document.createElement("p");
      artest.innerText = element.creditline;
      console.log(artest);
      let date = document.createElement("p");
      date.innerText = element.createdate;
      console.log(date);

      card.appendChild(artpng);
      card.appendChild(title);
      card.appendChild(date);
      card.appendChild(artest);
      card.appendChild(description);

      mainDiv.appendChild(card);
    });
  });

//   العنصر
// الوصف
// records.verificationleveldescription
// الصورة
// صورة اللوحة بجودة جيدة
// records.images.baseimageurl

// العنوان
// اسم العمل الفني
// records.title

// الفنان
// اسم الفنان (إن وُجد)
// records.creditline

// التاريخ
// متى تم إنشاء العمل
//records.createdate
