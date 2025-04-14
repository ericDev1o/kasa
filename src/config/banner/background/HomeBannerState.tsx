import { useState } from "react";
import { background_home } from "../../variables";

function HomeBannerState() {
    const [homeBannerImg] = useState(background_home);
    return homeBannerImg;
}

export default HomeBannerState;
