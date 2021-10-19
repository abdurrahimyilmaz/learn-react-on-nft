import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';
import {NavBtn, NavBtnLink} from '../Navbar/NavbarElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>A Voyage to Dreams of Artificial Intelligence</HeroH1>
                <HeroP>
                    Wait pre-sale date.
                </HeroP>
                <HeroBtnWrapper>
                    <NavBtn>
                        <NavBtnLink to='/mint'>Minting Page</NavBtnLink>
                    </NavBtn>  
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
