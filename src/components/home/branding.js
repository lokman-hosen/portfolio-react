import react from 'react'
import { Link } from 'react-router-dom';

function Branding() {

    const data = [
        { 
            id: 1, 
            title: "Brand Design",
            discription: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna."
        },

        { 
            id: 2, 
            title: "Seo & Marketing",
            discription: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna."
        },
        { 
            id: 3, 
            title: "Creative Design",
            discription: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna."
        },
       
      ];


    return (
        <section className="service-2">
            <div className="container">
                <div className="row justify-content-center">

                {data.map((item) => (
                    <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="service-item mb-4 mb-lg-0 text-center px-4">
                        <i className="ti-ruler-pencil text-color icon-md"></i>
                        <h4 className="my-4 fw-bold">{item.title}</h4>
                        <p>{item.discription}</p>
                    </div>
                </div>
                ))}
                    
                   
                </div>
            </div>
        </section>
    );
}

export default Branding