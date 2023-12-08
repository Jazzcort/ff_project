import Movie from "./Movie"
import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function ViewMovie() {
    const { id, listId } = useParams()
    const [movies, setMovies] = useState(null)

    if (!movies) {
        axios.post('http://localhost:7777/getMoviesInList', { listId }).then(res => {
            setMovies(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="movieContainer row">
            {movies && movies.map(m => <Movie mid={m.movie_id} title={m.movie_title} release_year={m.release_year} rating={m.imdb_rating} />)}
        </div>
    )
}