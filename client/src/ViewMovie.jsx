import Movie from "./Movie"
import { useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import './ViewMovie.css'
export default function ViewMovie() {
    const { id, listId } = useParams()
    const [movies, setMovies] = useState(null)
    const [name, setName] = useState(null)
    const [canEdit, setCanEdit] = useState(false)
    const [editText, setEditText] = useState("")


    if (!movies) {
        axios.post('http://localhost:7777/getMoviesInList', { listId }).then(res => {
            console.log(res.data)
            setMovies(res.data)
        }).then(res => {
            axios.post('http://localhost:7777/getListName', { listId }).then(res => {
                setName(res.data.list_name)
            }).catch(e => {
                console.log(e)
            })
        })
            .catch(e => {
                console.log(e)
            })
    }

    function handdleEdit(evt) {
        evt.preventDefault()
        if (!canEdit) {
            setCanEdit(true)
        }
    }

    function updateEditText(evt) {
        setEditText(evt.target.value)
    }

    function updateListName(evt) {
        evt.preventDefault()
        if (editText === "") return;

        axios.post('http://localhost:7777/editListName', { listId, editText }).then(res => {
            if (res) {
                setName(editText)
            }
            setCanEdit(false)
        })
    }

    function cancelEdit(evt) {
        evt.preventDefault()
        setCanEdit(false)
    }

    return (

        <div className="movieContainer row">

            {name && <h1>{name}</h1>}
            <form onSubmit={updateListName} style={{ display: canEdit ? "inline-block" : "none" }}>
                <input onChange={updateEditText} className="form-control" type="text" placeholder="New list name" />
                <button className="btn btn-primary">Submit</button>
                <button onClick={cancelEdit} className="btn btn-danger">Cancel</button>
            </form>

            <button onClick={handdleEdit} className="btn btn-success">Edit</button>
            <a className="btn btn-primary" href={`/search/${id}/${listId}`}>Add more movies</a>
            {movies && movies.map(m => <Movie setMovies={setMovies} mid={m.movie_id} title={m.movie_title} release_year={m.release_year} rating={m.imdb_rating} />)}
        </div>
    )
}