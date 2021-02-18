import MyWorkSingleItem from "./myWorkSingleItem";

function MyWork() {

    const cardContents = [
        {
            id: 1,
            title: "Painting",
            description: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.1",
            image: "https://demo.themefisher.com/dizer/images/portfolio/p-1.jpg"
        },

        {
            id: 2,
            title: "Web Dev",
            description: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.2",
            image: "https://demo.themefisher.com/dizer/images/portfolio/p-2.jpg"
        },
        {
            id: 3,
            title: "Business",
            description: "Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.3",
            image: "https://demo.themefisher.com/dizer/images/portfolio/p-3.jpg"
        },

    ];

    return (
        <section className="pt200 section portfolio-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                    <span className="h5 text-color text-uppercase fw-bold">my works</span>
                        <h3 className="mb-4 mt-2 fw-bold">A collection of some recently completed projects, covering a wide range of design disciplines</h3>
                    </div>
                </div>
                <div className="row shuffle-wrapper portfolio-gallery">
                    {cardContents.map((item) => (
                        <div className="col-lg-4 col-6 mb-4">
                            <MyWorkSingleItem item={item}/>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
}

export default MyWork