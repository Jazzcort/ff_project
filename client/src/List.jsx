import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import './List.css'
export default function List({ lstName, list_id, setLstArray }) {
    const { id } = useParams()
    const [num, setNum] = useState(null)

    if (!num) {
        axios.post('http://localhost:7777/getListSize', { listId: list_id }).then(res => {
            setNum(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    function deleteList(evt) {
        evt.preventDefault()
        axios.post('http://localhost:7777/deleteList', { id, listId: list_id }).then(res => {
            if (res.data) {
                axios.post('http://localhost:7777/getUserAllLists', { id }).then((res) => {
                    setLstArray(res.data)
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">{lstName}</h5>
                <p className="card-text">{num} {parseInt(num) > 1 ? "movies" : "movie"}</p>
                <a className="btn btn-primary" href={`/movie/${id}/${list_id}`}>View List</a>
                <a className="btn btn-success" href={`/search/${id}/${list_id}`}>Add More Movies</a>
                <a onClick={deleteList} className="btn btn-danger" href=""> Delete List </a>
            </div>

        </div>
    )
}
