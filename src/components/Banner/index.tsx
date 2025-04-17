import HomeBannerState from "../../config/banner/background/HomeBannerState";
//import AboutBannerState from "../../config/banner/background/AboutBannerState";

function imagePath(page: string) {
    /*let filePath;
    if (page === "home") filePath = HomeBannerState();
    else if (page === "about") filePath = AboutBannerState();
    */ console.log("page for filePath : " + page);
    return HomeBannerState().background_home;
}

const Banner = (/*page: string*/ { props }) => {
    return (
        <div id="banner">
            <h1 id="banner-title" className="title__h1home">
                Chez vous, partout et ailleurs
            </h1>

            <div id="banner-overlay" />

            <img
                id="banner-image"
                src={imagePath(props.page)}
                aria-hidden="true"
                alt="falaises"
            ></img>
        </div>
    );
};

export default Banner;
