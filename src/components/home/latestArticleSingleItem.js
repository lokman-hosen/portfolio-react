function LatestArticleSingleItem(props) {
    return (
        <div className="col-lg-4 col-md-6  mb-4 mb-lg-0">
            <div className="blog-img position-relative">
                <img src={props.item.image} alt="" className="img-fluid w-100"/>
                <a className="blog-category" href="#">{props.item.type}</a>
            </div>
            <a href="blog-single.html">
                <h4 className="mt-4 mb-2">{props.item.title}</h4>
            </a>
            <div className="post-meta text-uppercase mb-3">
                <a href="#" className="text-color">{props.item.date}</a>
            </div>
            <p>{props.item.description}</p>
        </div>
    );
}

export default LatestArticleSingleItem