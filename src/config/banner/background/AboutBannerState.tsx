import { useState } from "react";
import { background_about } from "../../fileURIs";

function AboutBannerState() {
    const [aboutBannerImg] = useState(background_about);
    return aboutBannerImg;
}

export default AboutBannerState;
