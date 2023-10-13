function searching_movie() {
	// Getting Fetch API
	const control = document.getElementById("search_control");
	const Input = control.value;
	fetch("https://www.omdbapi.com/?apikey=68d923d9&s=" + Input)
		.then((response) => response.json()) // Fetch API to Json File
		.then((response) => {
			Search_API(response); // Locate response data result to Data_API Function
		})
		.catch((err) => console.error(err)); // Get information error from API

	function Search_API(response) {
		const movies = response.Search;
		let cards = "";
		movies.forEach((m) => {
			cards += `<div class="col-md-4 my-5">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" alt= Movie "${m.Title}">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#details_movie" data-imdbid="${m.imdbID}">Go somewhere</a>
              </div>
            </div>
          </div>`;
		});
		console.log(movies);
		const paste = document.getElementById("Smovie_container");

		// Mengubah inner HTML dengan teks baru
		paste.innerHTML = cards;

		// function button details
		const detailbt = document.querySelectorAll(".modal-detail-button");
		detailbt.forEach((btn) => {
			btn.addEventListener("click", function () {
				const imdbid = this.dataset.imdbid; //Getting imdbid datas

				fetch("https://www.omdbapi.com/?apikey=68d923d9&i=" + imdbid)
					.then((response) => response.json()) // Fetch API to Json File
					.then((m) => {
						const movieDetail = showMovieDetail(m); // Locate response data result to Data_API Function
						const modalBody = document.querySelector(".modal-body");
						modalBody.innerHTML = movieDetail;
					})
					.catch((err) => console.error(err)); // Get information error from API
			});
		});
	}
}

function showMovieDetail(m) {
	return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" alt="">
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item">
            <h4>${m.Title} (${m.Year})</h4>
          </li>
          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writter : </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
