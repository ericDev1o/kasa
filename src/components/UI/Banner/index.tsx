type bannerContent = {
    bannerBackground: string;
    title: string;
};

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
 *
 * It must
 *     1) be ready to include a title or not &
 *     2) modularize the image as well.
 *
 * It must be done handing over image | image & title via dynamic props.
 */
const Banner = ({ banner }: { banner: bannerContent }) => {
    return (
        <section className = 'banner'>
            <img
                className = 'banner-image'
                src = {banner.bannerBackground}
                aria-hidden = 'true'
                alt = 'falaises'
            />
            <h1 className = 'banner-title__h1'>
                {banner.title}
            </h1>
        </section>
    );
};

export default Banner;
