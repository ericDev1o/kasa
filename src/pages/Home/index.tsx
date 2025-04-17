import { useContext } from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import { IsHomeBannerContext } from "../../config/context/IsHomeBannerContext";

const Home = () => {
    const bannerContext = useContext(IsHomeBannerContext);

    if (!bannerContext)
        throw new Error(
            "IsHomeBannerContext doit être utilisé dans IsHomeBannerProvider"
        );

    const { page } = bannerContext;
    console.log("bannerContext: " + bannerContext);
    return (
        <Layout>
            <Banner page={page} />
            <Gallery />
        </Layout>
    );
};

export default Home;
