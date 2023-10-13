//randomize Number for Movies Poster
function acakArrayTanpaDuplikat(array) {
	const arrayHasil = [...array]; // Make Array Input Temporary

	for (let i = arrayHasil.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		// Swap element
		[arrayHasil[i], arrayHasil[j]] = [arrayHasil[j], arrayHasil[i]];
	}

	// Check not to same value
	for (let i = 0; i < array.length; i++) {
		if (array[i] === arrayHasil[i]) {
			// If value are same, loop randomize
			return acakArrayTanpaDuplikat(array);
		}
	}

	return arrayHasil;
}
//randomize Number for Movies Poster

// Authorization
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmQyN2I0MGU0ODNiMTY4NjQxY2ZjZGNjZTc2NzI5ZiIsInN1YiI6IjY1MWM0MDIzMDcyMTY2MDEzOWM2ZWNhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.610YA-AFIrajUF4B2A9MF9nkqhK0x6giWg02fwFqRDI",
	},
};
// End Authorization

// Getting Fetch API
fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
	.then((response) => response.json()) // Fetch API to Json File
	.then((response) => {
		Data_Api(response); // Locate response data result to Data_API Function
	})
	.catch((err) => console.error(err)); // Get information error from API
// Getting Fetch API

function Data_Api(response) {
	const movies = response.results; // Inisiate movies variable datas from api

	console.log(response); // Optional Check Object Datas

	//Randomize array to const slides
	const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const arrayYangDiacak = acakArrayTanpaDuplikat(myArray);
	const slide1 = arrayYangDiacak[0];
	const slide2 = arrayYangDiacak[1];
	const slide3 = arrayYangDiacak[2];
	const slide4 = arrayYangDiacak[3];
	//Randomize array to const slides

	//Put Image Url Witthin Indexs array randomized on backdrop path
	var elemenSlide1 = document.getElementById("slide1");
	elemenSlide1.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movies[slide1].backdrop_path}')`;

	var elemenSlide2 = document.getElementById("slide2");
	elemenSlide2.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movies[slide2].backdrop_path}')`;

	var elemenSlide3 = document.getElementById("slide3");
	elemenSlide3.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movies[slide3].backdrop_path}')`;

	var elemenSlide4 = document.getElementById("slide4");
	elemenSlide4.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movies[slide4].backdrop_path}')`;
	//Put Image Url Witthin Indexs array randomized on backdrop path

	// Put Title names same as backdrop path
	var text_title1 = document.getElementById("title_slide1");
	var text_title2 = document.getElementById("title_slide2");
	var text_title3 = document.getElementById("title_slide3");
	var text_title4 = document.getElementById("title_slide4");

	text_title1.textContent = movies[slide1].title;
	text_title2.textContent = movies[slide2].title;
	text_title3.textContent = movies[slide3].title;
	text_title4.textContent = movies[slide4].title;
	// Put Title names same as backdrop path
}
