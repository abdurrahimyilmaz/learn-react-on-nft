//rafce 
import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>The Dream of AI</NavLogo>     
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Roadmap</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="specs"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Specs</NavLinks>
                        </NavItem>                        
                    </NavMenu>          
                    <NavBtn>
                        <NavBtnLink to='/mint'>Minting Page</NavBtnLink>
                    </NavBtn>          
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default NavBar;
