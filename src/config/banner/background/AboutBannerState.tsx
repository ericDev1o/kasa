import { useState } from "react";
import { background_about } from "../../variables";

function AboutBannerState() {
    const [aboutBannerImg] = useState(background_about);
    return aboutBannerImg;
}

export default AboutBannerState;
