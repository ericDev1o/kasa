import bannerBackground from "../../assets/bh_bckgrd.jpg"; //"../../config/loadFileConfig";

function Banner() {
    return (
        <div id="banner">
            <h1 id="banner-title" className="title__h1home">
                Chez vous, partout et ailleurs
            </h1>
            <div id="banner-overlay" />
            <img
                id="banner-image"
                src={bannerBackground}
                aria-hidden="true"
                alt="falaises"
            ></img>
        </div>
    );
}

export default Banner;
