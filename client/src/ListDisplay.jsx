import './ListDisplay.css'
export default function ListDisplay({ lstName, lst }) {
    return (
        <div className="listDisplay">
            <h3>{lstName}</h3>
            {lst.map((elem) => <p>{elem}</p>
            )}
        </div>
    )
}