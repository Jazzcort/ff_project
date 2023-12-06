export default function ListDisplay({ lstName, lst }) {
    return (
        <div>
            <h3>{lstName}</h3>
            {lst.map((elem) => <p>{elem}</p>
            )}
        </div>
    )
}