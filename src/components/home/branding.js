import react from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'


function Branding() {

    const data = [
        { 
            id: 1, 
            title: "Brand Design",
            discription: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.",
            image: img1
        },

        { 
            id: 2, 
            title: "Seo & Marketing",
            discription: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.",
            image: img2
        },
        { 
            id: 3, 
            title: "Creative Design",
            discription: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.",
            image: img3
        },
       
      ];


    return (
        <section className="service-2">
            <div className="container">
                <div className="row justify-content-center">

                {data.map((item) => (
                    <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="service-item mb-4 mb-lg-0 text-center px-4">
                        <img src={item.image}/>
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