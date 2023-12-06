import SearchingBlock from "./SearchingBlock"
import ListDisplay from "./ListDisplay"
import SearchResult from "./SearchResult"
import { useLocation } from "react-router-dom"
export default function SearchingPage() {
    const movie1 = { title: "Zinjia", category: "Advanture", img: "http://vwer.com" }
    const movie2 = { title: "Hunger Game", category: "Advanture", img: "http://hunger.com" }

    let movies = [movie1, movie2]
    const location = useLocation()
    const result = location.state
    console.log(result)
    console.log(location.haha)

    // if (result && result.length != 0) {
    //     movies = result
    // }
    return (
        <>
            <SearchingBlock />
            <div className='row'>
                <div className='col-3'>
                    <ListDisplay lstName="Your list" lst={[1, 2, 3, 4, 5]} />
                </div>

                <div className='col-9'>
                    <SearchResult movies={movies} />
                </div>
            </div>

        </>
    )
}