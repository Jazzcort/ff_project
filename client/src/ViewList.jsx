import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import List from "./List"

export default function ViewList() {
    const { id } = useParams()

    const [lstArray, setLstArray] = useState(null)

    if (!lstArray) {
        axios.post('http://localhost:7777/getUserAllLists', { id }).then((res) => {
            setLstArray(res.data)
        })
    }


    return (
        <div className="row">

            {lstArray !== null ? lstArray.map(l =>  <List lstName={l.list_name} list_id={l.list_id} setLstArray={setLstArray} /> ) : null}
           
        </div>
    )
}