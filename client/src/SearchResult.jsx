import Movie from "./Movie"
export default function SearchResult({ movies }) {

    return (

        <div className="row">
            {movies.map(m => <Movie mid={m.movie_id} title={m.movie_title} release_year={m.release_year} rating={m.imdb_rating} />)}
        </div>

    )
}