type bannerContent = {
    bannerBackground: string;
    page: string;
    title?: string;
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
 * @param bannerContent: please see below, a banner is 
 *     1) an image 
 *     2) with or without a title respectively home or about
 *     3) depending on which page it is displayed. Page must be either
 *         i) home or
 *         ii) about
 * @returns the page's banner section displayed as per Figma design
 */
const Banner = ({ banner }: { banner: bannerContent }) => (
    <>
        <section className = { `banner banner-${ banner.page }` }>
            <img
                className = 'banner-image'
                src = { banner.bannerBackground }
                aria-hidden = 'true'
                alt = 'falaises'
            />
            { 
                banner.title && 
                <h1 className = 'banner-title__h1'>
                    { banner.title } 
                </h1>
            }
        </section> 
    </>
);

export default Banner;