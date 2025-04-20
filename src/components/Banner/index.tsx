import "../../assets/background1.jpg";

function Banner() {
    return (
        <div id="banner">
            <h1 id="banner-title" className="title__h1home">
                Chez vous, partout et ailleurs
            </h1>
            <div id="banner-overlay" />
            <img
                id="banner-image"
                src="background1"
                aria-hidden="true"
                alt="falaises"
            />
        </div>
    );
}

export default Banner;
