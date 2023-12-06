import SearchingBlock from "./SearchingBlock"
import ListDisplay from "./ListDisplay"
import SearchResult from "./SearchResult"
export default function SearchingPage({ lst, movies }) {
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