type bannerContent = {
    bannerBackground: string;
    title: string;
};

const Img = ({ backGrd }: { backGrd: bannerContent }) => {
    return (
        <img
            className = 'banner-image'
            src = { backGrd.bannerBackground }
            aria-hidden = 'true'
            alt = 'falaises'
        />
    );
}

const Title = ({ isThereTitle, banner }: { isThereTitle: boolean, banner: bannerContent } ) => {
    if(isThereTitle)
        return (
            <h1 className = 'banner-title__h1'>
                { banner.title }
            </h1>
        );
}

const CommonBanner = ({ banner, isThereTitle }: { banner: bannerContent, isThereTitle: boolean }) => {
    return (
        <div>
            <Img backGrd = { banner } /> 
            <Title isThereTitle = { isThereTitle } banner = { banner }/>
        </div>
    );
}

/**
 * The banner is the image between
 *     1) header &
 *     2) gallery
 * on Home and About pages.
 * See
 *     1) https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0%3A1&fuid=1468146315413220709 &
 *     2) https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=3-0&t=XZsuSXqkyNhKdQrv-0
 * D_Home -> _Body -> _Section 1
 * @returns the home page banner section
 */
const Banner = ({ banner, page }: { banner: bannerContent, page: string }) => {
    if(page === 'home')
        return (
            <section className = 'banner banner-home'>
                <CommonBanner banner = { banner } isThereTitle = { true } />
            </section>
        );
    else if(page === 'about')
        return (
            <section className = 'banner banner-about'>
                <CommonBanner banner = { banner } isThereTitle = { false } />
            </section>
        );
};

export default Banner;
