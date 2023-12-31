import SearchingBlock from "./SearchingBlock"
import ListDisplay from "./ListDisplay"
import SearchResult from "./SearchResult"
import { useLocation, useParams } from "react-router-dom"
import { useState } from "react"
import './SearchingPage.css'
import axios from "axios"
export default function SearchingPage() {
    const { id, listId } = useParams()
    const [movies, setMovies] = useState([])
    const [mList, setMlist] = useState(null)
    const [allLists, setAllLists] = useState(null)
    const [newList, setNewList] = useState("")
    const [currentLst, setCurrentLst] = useState(null)


    if (movies && movies.length === 0) {
        axios.get('http://localhost:7777/getAllMovies').then((res) => {
            setMovies(res.data)

        }).then(getAllLists()).then(loadList()).then(() => {
            axios.post('http://localhost:7777/getListName', { listId }).then(res => {
                setCurrentLst(res.data.list_name)
            }).catch(e => {
                console.log(e)
            })
        })
            .catch(e => {
                console.log(e)
            })
    }


    function loadList() {

        axios.post('http://localhost:7777/getMoviesInList', { listId }).then(res => {
            setMlist(res.data)

        }).catch(e => {
            console.log(e)

        })




    }

    function getAllLists() {
        axios.post('http://localhost:7777/getUserAllLists', { id }).then(res => {
            setAllLists(res.data)

        }).catch(e => {
            console.log(e)
        })
    }


    function createNewList(evt) {
        evt.preventDefault()
        if (newList !== "") {
            axios.post('http://localhost:7777/createNewList', { id, newList }).then(res => {
                if (res.data) {
                    getAllLists()
                }
            })
        }
    }

    function updateNewList(evt) {
        setNewList(evt.target.value)
    }

    const location = useLocation()
    const result = location.state




    return (
        <div className="searchingPage">
            <SearchingBlock />
            <div className='row'>
                <div className='col-3'>
                    <div className="menuSection">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {allLists ? (allLists.find((elem) => elem.list_id === parseInt(listId))).list_name : "No List"}
                            </button>
                            <ul className="dropdown-menu">
                                {allLists && allLists.map(elem => <li><a className="dropdown-item" href={`/search/${id}/${elem.list_id}`}>{elem.list_name}</a></li>)}

                            </ul>
                        </div>
                        <div className="newListInput">
                            <form onSubmit={createNewList}>
                                <input onChange={updateNewList} className="form-control" type="text" placeholder="New list name" />
                                <button className="btn btn-primary">+</button>
                            </form>
                        </div>
                    </div>

                    <ListDisplay lstName={currentLst} lst={mList ? mList : []} />
                </div>

                <div className='col-9'>
                    <SearchResult setMlist={setMlist} movies={result ? result : movies} />
                </div>
            </div>

        </div>
    )
}