import bannerBackground from '../../assets/bh_bckgrd.jpg';

const Banner = () => {
    return (
        <section id="banner">
            <h1 id="banner-title" className="title__h1home">
                Chez vous, partout et ailleurs
            </h1>

            <div id="banner-overlay" />

            <img
                id="banner-image"
                src={bannerBackground}
                aria-hidden="true"
                alt="falaises"
            />
        </section>
    );
};

export default Banner;