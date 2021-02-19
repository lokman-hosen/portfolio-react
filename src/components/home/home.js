import react from 'react'
import Banar from './banar';
import Branding from './branding';
import MyWork from "./myWork";
import LatestArticle from "./latestArticle";

function Home() {
    return (
        <div>
            <Banar />
            <Branding />
            <MyWork />
            <LatestArticle />
        </div>
        
    );
}

export default Home