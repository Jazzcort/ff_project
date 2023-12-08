import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
export default function List({ lstName, list_id }) {
    const { id } = useParams()
    const [num, setNum] = useState(null)

    if (!num) {
        axios.post('http://localhost:7777/getListSize', { listId: list_id }).then(res => {
            setNum(res.data)
            console.log(res.data)
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
                <a className="btn btn-primary" href={`/search/${id}/${list_id}`}>View</a>
            </div>

        </div>
    )
}
