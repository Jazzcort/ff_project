export default function List({ lstName, num }) {
    return (
        <div className="card" style={{ width: "13rem", height: "16rem" }}>
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">{lstName}</h5>
                <p className="card-text">{num} {num > 1 ? "movies": "movie"}</p>
                <a className="btn btn-primary" href="">View</a>
            </div>

        </div>
    )
}
