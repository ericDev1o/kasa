import HomeBannerState from "../../config/banner/background/HomeBannerState";
import AboutBannerState from "../../config/banner/background/AboutBannerState";

function toggleImagePath(isHome: boolean) {
    if (isHome) return HomeBannerState();
    else return AboutBannerState();
}

function Banner(isHome: boolean) {
    return (
        <div id="banner">
            <h1 id="banner-title" className="title__h1home">
                Chez vous, partout et ailleurs
            </h1>

            <div id="banner-overlay" />

            <img
                id="banner-image"
                src={toggleImagePath(isHome)}
                aria-hidden="true"
                alt="falaises"
            ></img>
        </div>
    );
}

export default Banner;
