import './ListDisplay.css'
export default function ListDisplay({ lst }) {

    return (
        <div className="listDisplay">
            <h3>{lst.length===0? "No List": lst[0].list_name}</h3>
            {lst.map((elem, i) => <p>{i + 1} {elem.movie_title}</p>
            )}
        </div>
    )
}