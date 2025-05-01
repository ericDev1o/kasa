import { useState } from "react";
import { background_home } from "../../fileURIs";

function HomeBannerState() {
    const [homeBannerImg] = useState(background_home);
    return homeBannerImg;
}

export default HomeBannerState;
