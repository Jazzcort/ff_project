import "./Movie.css"
export default function Movie({ title, category, img }) {
    return (
        <div className="card" style={{width: "13rem", height: "16rem"}}>
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">Title: {title}</h5>
                <p className="card-text">Category: {category}</p>
                <a className="btn btn-primary" href="">+</a>
            </div>

        </div>
    )
}