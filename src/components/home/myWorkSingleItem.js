import react from 'react'

function MyWorkSingleItem(props) {
    return (
        <div className="card">
            <img src={props.item.image} alt="portfolio-image"/>
            <div className="card-body">
                <h5 className="card-title text-color fw-bold">{props.item.title}</h5>
                <p className="card-text ">{props.item.description}</p>
                <a href="#" className="btn btn-outline-danger">Go somewhere</a>
            </div>
        </div>
    );
}

export default MyWorkSingleItem