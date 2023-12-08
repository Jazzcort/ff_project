import './ListDisplay.css'
import { redirect, useParams, useNavigate } from 'react-router-dom'
export default function ListDisplay({ lst }) {
    const { id, listId } = useParams()
    const navigate = useNavigate()

    function handleOnClick(evt) {
        evt.preventDefault()
        console.log('clicked')
        navigate(`/movie/${id}/${listId}`)
        // return redirect(`/movie/${id}/${listId}`)
    }

    return (
        <div className="listDisplay">
            <div>
                <h3>{lst.length === 0 ? "No List" : lst[0].list_name}</h3>
                <button onClick={handleOnClick} className='btn btn-primary'>Detail</button>
            </div>
            {lst.map((elem, i) => <p>{i + 1}. {elem.movie_title}</p>
            )}
        </div>
    )
}