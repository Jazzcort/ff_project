import SearchingBlock from "./SearchingBlock"
import ListDisplay from "./ListDisplay"
import SearchResult from "./SearchResult"
import { useLocation, useParams } from "react-router-dom"
import { useState } from "react"
import './SearchingPage.css'
import axios from "axios"
export default function SearchingPage({user, lst}) {
    const [movies, setMovies] = useState([])

    if (movies && movies.length === 0) {
        axios.get('http://localhost:7777/getAllMovies').then((res) => {
            setMovies(res.data)
        })
    }

    const location = useLocation()
    const result = location.state


    return (
        <div className="searchingPage">
            <SearchingBlock />
            <div className='row'>
                <div className='col-3'>
                    <ListDisplay lstName="Your list" lst={[1, 2, 3, 4, 5]} />
                </div>

                <div className='col-9'>
                    <SearchResult movies={result && result.length !== 0 ? result: movies} />
                </div>
            </div>

        </div>
    )
}