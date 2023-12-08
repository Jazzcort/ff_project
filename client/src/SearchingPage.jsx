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


    if (movies && movies.length === 0) {
        axios.get('http://localhost:7777/getAllMovies').then((res) => {
            setMovies(res.data)

        }).then(() => {
            getAllLists()
        }).then(() => {
            loadList()
        })
            .catch(e => {
                console.log(e)
            })
    }


    function loadList() {
        let flag = true

        if (flag) {
            flag = false
            axios.post('http://localhost:7777/getMoviesInList', { listId }).then(res => {
                setMlist(res.data)
                flag = true
            }).catch(e => {
                console.log(e)
                flag = true
            })
        }



    }

    function getAllLists() {
        axios.post('http://localhost:7777/getUserAllLists', { id }).then(res => {
            setAllLists(res.data)

        }).catch(e => {
            console.log(e)
        })
    }

    function handleOnClick(evt) {
        // evt.preventDefault()
        console.log(evt)
        console.log('clicked')
    }

    const location = useLocation()
    const result = location.state


    return (
        <div className="searchingPage">
            <SearchingBlock />
            <div className='row'>
                <div className='col-3'>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {allLists ? (allLists.find((elem) => elem.list_id === parseInt(listId))).list_name : "No List"}
                        </button>
                        <ul className="dropdown-menu">
                            {allLists && allLists.map(elem => <li><a onClick={handleOnClick} className="dropdown-item" href={`/search/${id}/${elem.list_id}`}>{elem.list_name}</a></li>)}
                            
                        </ul>
                    </div>

                    <ListDisplay lstName="Your list" lst={mList ? mList : []} />
                </div>

                <div className='col-9'>
                    <SearchResult movies={result && result.length !== 0 ? result : movies} />
                </div>
            </div>

        </div>
    )
}