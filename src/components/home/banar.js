import react from 'react'
import { Link } from 'react-router-dom';

function Banar() {
    return (
        <section className="banner-2 position-relative bg-blue">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content-2">
                            <span className="h5 text-uppercase text-yello">MY NAME IS Jessica Alba</span>
                            <h2 className="text-white mt-2 font-weight-bold">I am a creative <br/>UI/UX Designer <br/>from London.</h2>
                            <p className="my-4">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.</p>

                            <Link to="/contact" className="btn btn-outline-warning">Contact me</Link>
                        </div>
                    </div>

                    <div className="col-lg-6 align-self-end">
                        <img src="https://demo.themefisher.com/dizer/images/banner/banner-img-2.png" alt="" className="img-fluid position-absolute-"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banar