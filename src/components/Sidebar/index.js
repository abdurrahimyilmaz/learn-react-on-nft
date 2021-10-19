import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>          
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>      
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About 
                    </SidebarLink>
                    <SidebarLink to="roadmap" onClick={toggle}>
                        Roadmap 
                    </SidebarLink>
                    <SidebarLink to="specs" onClick={toggle}>
                        Specs 
                    </SidebarLink>                                  
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/mint">Minting Page</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>      
        </SidebarContainer>
    );
};

export default Sidebar;
