import bannerBackground from '../../../assets/images/bh_bckgrd.jpg';

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
 * See useState, useContext and any shorthand though explicit prop syntax.
 * 
 * It should be something such as 
 * function Banner({child}: {child:React.ReactNode}){...}
 * 
 * Hint to do the overlay: 
 * don't forget to do/check the pseudo-element ::before or else ::after 
 * instead of repeating another <div> in this codebase.
 */
const Banner = () => {
    return (
        <section className='banner'>
            <h1 className='banner-title__h1'>
                Chez vous, partout et ailleurs
            </h1>

            <div className='banner-overlay' />

            <img
                className='banner-image'
                src={bannerBackground}
                aria-hidden='true'
                alt='falaises'
            />
        </section>
    );
};

export default Banner;