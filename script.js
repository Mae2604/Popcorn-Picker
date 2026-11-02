
//Movie Examples, the java file could look something like this with some of its features for reference 

let movies = [
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        watched: false,
        rating: 0
    },
    {
        title: "The Dark Knight",
        genre: "Action",
        watched: false,
        rating: 0
    },
    {
        title: "Titanic",
        genre: "Drama",
        watched: false,
        rating: 0
    },
    {
        title: "Toy Story",
        genre: "Animation",
        watched: false,
        rating: 0
    },
    {
        title: "Inception",
        genre: "Sci-Fi",
        watched: false,
        rating: 0
    }
];

function saveMovies() {
    localStorage.setItem(
        "movies",
        JSON.stringify(movies)
    );
}

function loadMovies() {

    const savedMovies =
        JSON.parse(
            localStorage.getItem("movies")
        );

    if (savedMovies) {
        movies = savedMovies;
    }
}


function markWatched(index) {

    movies[index].watched = true;

    saveMovies();

    displayMovies();
}

function rateMovie(index, rating) {

    movies[index].rating = rating;

    saveMovies();

    displayMovies();
}

function sortByRating() {

    movies.sort(
        (a, b) => b.rating - a.rating
    );

    displayMovies();
}

function displayMovies() {

    const container =
        document.getElementById(
            "movieContainer"
        );

    container.innerHTML = "";

    movies.forEach((movie, index) => {

        container.innerHTML += `

        <div class="movie-card">

            <h2>${movie.title}</h2>

            <p>${movie.genre}</p>

            <p>
                Status:
                ${
                    movie.watched
                    ? "✅ Watched"
                    : "🎬 Not Watched"
                }
            </p>

            <p>
                Rating:
                ${movie.rating} ⭐
            </p>

            <button onclick="markWatched(${index})">
                Mark Watched
            </button>

            <button onclick="rateMovie(${index},5)">
                5 Stars
            </button>

        </div>

        `;
    });
}


loadMovies();

displayMovies();
