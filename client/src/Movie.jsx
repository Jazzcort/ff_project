import { useParams, useLocation } from "react-router-dom"
import "./Movie.css"
import axios from "axios"
export default function Movie({ mid, title, release_year, rating }) {
    const { id, listId } = useParams()
    const location = useLocation()
    const isDelete = location.pathname.split('/')[1] === "movie" ? true : false


    function addToList(evt) {
        evt.preventDefault()
        axios.post('http://localhost:7777/addMovieToList', { mid, listId }).then((res) => {
            
            window.location.reload()

        }).catch(e => {
            console.log(e)
        })
    }

    function deleteFromList(evt) {
        evt.preventDefault()
        axios.post('http://localhost:7777/deleteMovieFromList', { mid, listId }).then(res => {
            window.location.reload()
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">Title: {title}</h5>
                <p className="card-text">Year released: {release_year}</p>
                <p className="card-text">IMDB: {rating}</p>
                <a onClick={isDelete ? deleteFromList : addToList} className={`btn ${isDelete ? "btn-danger" : "btn-primary"}`} href="">{isDelete ? "-" : "+"}</a>
            </div>

        </div>
    )
}