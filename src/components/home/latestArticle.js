import MyWorkSingleItem from "./myWorkSingleItem";
import LatestArticleSingleItem from "./latestArticleSingleItem";

function LatestArticle() {

    const articals = [
        {
            id: 1,
            title: "Elit duied aiusm tempor did labore dolory 1",
            type: "Article",
            date: "BY ADMIN / ON 2 SEP, 2018",
            description: "Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde.",
            image: "https://demo.themefisher.com/dizer/images/blog/blog-1.jpg"
        },

        {
            id: 2,
            title: "Elit duied aiusm tempor did labore dolory 2",
            type: "Life Style",
            date: "BY ADMIN / ON 2 SEP, 2018",
            description: "Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde.",
            image: "https://demo.themefisher.com/dizer/images/blog/blog-2.jpg"
        },
        {
            id: 3,
            title: "Elit duied aiusm tempor did labore dolory 3",
            type: "Creative",
            date: "BY ADMIN / ON 2 SEP, 2018",
            description: "Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde.",
            image: "https://demo.themefisher.com/dizer/images/blog/blog-3.jpg"
        },

    ];

    return (
        <section className="section latest-blog position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
				<span className="h5 text-color text-uppercase fw-bold">
					latest article
				</span>
                        <h3 className="mb-5 mt-2 fw-bold">Stay Update with dizer.</h3>
                    </div>
                </div>
                <div className="row justify-content-center">

                    {articals.map((item) => (
                            <LatestArticleSingleItem item={item}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestArticle