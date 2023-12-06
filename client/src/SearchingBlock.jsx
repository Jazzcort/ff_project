import './SearchingBlock.css'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



export default function SearchingBlock() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [actor, setActor] = useState("")
    const [result, setResult] = useState(null)
    const updateTitle = (evt) => {
        setTitle(evt.target.value)
    }
    const updateCategory = (evt) => {
        setCategory(evt.target.value)
    }
    const updateActor = (evt) => {
        setActor(evt.target.value)
    }

    function handleFromSubmit(evt) {
        evt.preventDefault()
        const objToSent = {title, category, actor}
        console.log(objToSent)
        axios.post('http://localhost:7777/artists', {title, category, actor}).then((data) => {
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
                        <label className='form-label' htmlFor="category">Category</label>
                        <input onChange={updateCategory} name="category" id='category' type="text" value={category}/>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label' htmlFor="actor">Actor/Actress</label>
                        <input onChange={updateActor} name='actor' id='actor' type="text" value={actor}/>
                    </div>
                    <div className='mb-3'>
                        <button onSubmit={handleFromSubmit}>Search</button>
                    </div>

                    {result ? <Navigate to='/search/a' replace={true} state={result} haha={result}/> : null}

                </form>
            </div>
        </div>

    )
}