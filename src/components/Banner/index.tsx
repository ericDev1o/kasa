import { background_home } from "../../config/variables";

function Banner() {
    return (
        <div id="banner">
            <h1 id="banner-title" className="title__h1home">
                Chez vous, partout et ailleurs
            </h1>
            <div id="banner-overlay" />
            <img
                id="banner-image"
                src={background_home}
                aria-hidden="true"
                alt="falaises"
            ></img>
        </div>
    );
}

export default Banner;
