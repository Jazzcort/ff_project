import { useParams, useLocation } from "react-router-dom"
import { useState } from "react"
import "./Movie.css"
import axios from "axios"
export default function Movie({ mid, title, release_year, rating, setMovies, setMlist }) {
    const { id, listId } = useParams()
    const location = useLocation()
    const isDelete = location.pathname.split('/')[1] === "movie" ? true : false
    const [genre, setGenre] = useState(null)

    console.log(release_year)

    if (!genre) {
        axios.post('http://localhost:7777/getMovieGenre', { mid }).then(res => {
            setGenre(res.data.genre_list)
        })
    }


    function addToList(evt) {
        evt.preventDefault()
        axios.post('http://localhost:7777/addMovieToList', { mid, listId }).then((res) => {

            if (res.data) {
                axios.post('http://localhost:7777/getMoviesInList', { listId }).then(res => {
                    setMlist(res.data)

                }).catch(e => {
                    console.log(e)

                })
            }

        }).catch(e => {
            console.log(e)
        })
    }

    function deleteFromList(evt) {
        evt.preventDefault()
        axios.post('http://localhost:7777/deleteMovieFromList', { mid, listId }).then(res => {
            if (res) {
                axios.post('http://localhost:7777/getMoviesInList', { listId }).then(res => {
                    setMovies(res.data)
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="card" style={{ width: "13rem", height: "20rem" }}>
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">Title: {title}</h5>
                <p className="card-text">Year released: {release_year}</p>
                <p className="card-text">Genre: {genre}</p>
                <p className="card-text">IMDB: {rating}</p>
                <a onClick={isDelete ? deleteFromList : addToList} className={`btn ${isDelete ? "btn-danger" : "btn-primary"}`} href="">{isDelete ? "-" : "+"}</a>
            </div>

        </div>
    )
}