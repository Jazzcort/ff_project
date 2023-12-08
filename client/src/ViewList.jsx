import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import List from "./List"

export default function ViewList() {
    const { id } = useParams()

    const [lstArray, setLstArray] = useState(null)
    const [editText, setEditText] = useState("")
    const [canEdit, setCanEdit] = useState(false)

    function updateEditText(evt) {
        setEditText(evt.target.value)
    }

    function handdleEdit(evt) {
        evt.preventDefault()
        if (!canEdit) {
            setCanEdit(true)
        }
    }

    function cancelEdit(evt) {
        evt.preventDefault()
        setCanEdit(false)
    }

    function addNewList(evt) {
        evt.preventDefault()
        if (editText !== "") {
            axios.post('http://localhost:7777/createNewList', { id, newList: editText }).then(res => {
                
                if (res.data) {
                    axios.post('http://localhost:7777/getUserAllLists', { id }).then((res) => {
                        setLstArray(res.data)
                    }).catch(e => {
                        console.log(e)
                    })
                }
            })
        }
        setCanEdit(false)

    }

    if (!lstArray) {
        axios.post('http://localhost:7777/getUserAllLists', { id }).then((res) => {
            setLstArray(res.data)
        })
    }


    return (
        <div className="row">
            <form onSubmit={addNewList} style={{ display: canEdit ? "inline-block" : "none" }}>
                <input onChange={updateEditText} className="form-control" type="text" placeholder="New list name" />
                <button className="btn btn-primary">Submit</button>
                <button onClick={cancelEdit} className="btn btn-danger">Cancel</button>
            </form>
            <button onClick={handdleEdit} className="btn btn-success" >Add new list</button>
            {lstArray !== null ? lstArray.map(l => <List lstName={l.list_name} list_id={l.list_id} setLstArray={setLstArray} />) : null}

        </div>
    )
}