import Movie from "./Movie"
export default function SearchResult({ movies }) {
    return (
        <>
            <div className="row">
                {movies.map(m => <Movie title={m.title} category={m.category} img={m.img} />)}
            </div>
        </>
    )
}