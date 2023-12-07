import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import List from "./List"
import Movie from "./Movie"





export default function ViewList() {
    const { id } = useParams()

    const [lstArray, setLstArray] = useState(null)

    if (!lstArray) {
        axios.post('http://localhost:7777/artists', { user: id }).then((res) => {
            console.log(res.data)
            setLstArray(res.data)
        })
    }


    return (
        <div className="row">

            {lstArray !== null ? lstArray.map(l =>  <List lstName={l.artist_name} num={l.num_released} /> ) : null}
           
        </div>
    )
}