const containerCards = document.getElementById("presentacion");

function renderFilms(movie){
  const movieElement = document.createElement("article");
  const card = document.createElement("div");

  movieElement.classList.add("movie");
  card.classList.add("card");

  //movieElement.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`
  
  // card.innerHTML = `
  // <h3> ${movie.title} (${movie.year}) </h3>
  // <p><strong>Director: </strong> ${movie.director}</p>
  // <p><strong>Duración:</strong> ${movie.duracion}</p>
  // <p><strong>Género:</strong> ${movie.genre.join(', ')}</p>
  // <p><strong>Rate:</strong> ${movie.rate}</p>
  
  const poster = document.createElement("img");
   poster.classList.add("card-image");
    poster.src = movie.poster;

 const title = document.createElement("h3");
 title.classList.add("card-title");
 title.innerHTML = movie.title;

   

   const year = document.createElement("p");
  year.classList.add("card-text");
   year.innerHTML = movie.year;

  containerCards.appendChild(movieElement);
  movieElement.appendChild(card);
  card.appendChild(poster);
  card.appendChild(title);
  card.appendChild(year);
  console.log("todas las tarjetas renderizadas correctamente");
}
module.exports = renderFilms