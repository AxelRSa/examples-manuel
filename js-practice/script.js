const imagen = document.querySelector(".imagen")

// ajax

// const xhttp = new XMLHttpRequest();

// xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);

// xhttp.onreadystatechange  = function() {
// 	if(this.readyState === 4 && this.status === 200) {
// 		const response = JSON.parse(this.responseText)
// 		imagen.src = response.message;
// 	}
// }

// xhttp.send();

// fetch - promesas y el uso de ".then"

// const response = fetch("https://dog.ceo/api/breeds/image/random")
// 	.then((response) => response.json())
// 	.then(data => imagen.src = data.message)

// async/await

// async function fetchDogs () {
// 	const response = await fetch("https://dog.ceo/api/breeds/image/random")
// 	const data = await response.json()
// 	imagen.src = data.message
// }

// fetchDogs()