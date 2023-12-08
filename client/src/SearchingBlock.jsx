import './SearchingBlock.css'
import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



export default function SearchingBlock() {
    const { id, listId } = useParams()
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [actor, setActor] = useState("")
    const [director, setDirector] = useState("")
    const [genre, setGenre] = useState("")
    const [result, setResult] = useState(null)
    const updateTitle = (evt) => {
        setTitle(evt.target.value)
    }
    const updateYear = (evt) => {
        setYear(evt.target.value)
    }
    const updateActor = (evt) => {
        setActor(evt.target.value)
    }
    const updateDirector = (evt) => {
        setDirector(evt.target.value)
    }
    const updateGenre = (evt) => {
        setGenre(evt.target.value)
    }

    function handleFromSubmit(evt) {
            
        const objToSent = {
            title: title === "" ? null : title, year: year === "" ? null : year, actor: actor === "" ? null : actor, director: director === "" ? null : director
            , genre: genre === "" ? null : genre
        }
        console.log(objToSent)
        axios.post('http://localhost:7777/searchMovies', objToSent).then((data) => {
            setResult(data.data)
        })

    }

    return (

        <div className='row justify-content-sm-center'>
            <div className='col-6 mb-3'>
                <form className="searchingBlock" onSubmit={handleFromSubmit}>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor="title">Title</label>
                        <input onChange={updateTitle} name="title" id="title" type="text" value={title} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor="category">Year released</label>
                        <input onChange={updateYear} name="category" id='category' type="text" value={year} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor="actor">Actor/Actress</label>
                        <input onChange={updateActor} name='actor' id='actor' type="text" value={actor} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor="director">Director</label>
                        <input onChange={updateDirector} name='director' id='director' type="text" value={director} />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor="genre">Genre</label>
                        <input onChange={updateGenre} name='genre' id='genre' type="text" value={genre} />
                    </div>

                    <div className='mb-3'>
                        <button onSubmit={handleFromSubmit}>Search</button>
                    </div>

                    {result ? <Navigate to={`/search/${id}/${listId}`} replace={true} state={result} /> : null}

                </form>
            </div>
        </div>

    )
}