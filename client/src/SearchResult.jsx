import Movie from "./Movie"
export default function SearchResult({ movies }) {
    return (

        <div className="row">
            {movies.map(m => <Movie title={m.artist_name} category={m.category} img={m.img} />)}
        </div>

    )
}