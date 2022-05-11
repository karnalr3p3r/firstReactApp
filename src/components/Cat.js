import React from "react";

export default function Cat(props) {
  return (
    <div className="cat">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}
// async function getCats() {
//   const catsFetch = await fetch("https://catfact.ninja/breeds");
//   // console.log(catsFetch);
//   catData = await catsFetch.json();
//   console.log(catData.data);
//   catData.data.forEach((element) => {
//     var catBreed = document.createElement("div");
//     catBreed.classList.add("breed");
//     catBreed.textContent = `this cat is the: ${element.breed}, and it is from ${element.country}`;
//     mainContainer.appendChild(catBreed);
//     console.log(catBreed);
//   });
// }
// getCats();