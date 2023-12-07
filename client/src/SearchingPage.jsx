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
    const [mList, setMlist] = useState([])

    if (movies && movies.length === 0) {
        axios.get('http://localhost:7777/getAllMovies').then((res) => {
            setMovies(res.data)
        }).catch(e => {
            console.log(e)
        })
    }

    if (mList && mList.length === 0) {
        loadList()
    }

    function loadList() {

        axios.post('http://localhost:7777/getDefaultList', { id }).then(res => {
            setMlist(res.data)
        }).catch(e => {
            console.log(e)
        })

    }

    const location = useLocation()
    const result = location.state


    return (
        <div className="searchingPage">
            <SearchingBlock />
            <div className='row'>
                <div className='col-3'>
                    <ListDisplay lstName="Your list" lst={mList} />
                </div>

                <div className='col-9'>
                    <SearchResult movies={result && result.length !== 0 ? result : movies} />
                </div>
            </div>

        </div>
    )
}