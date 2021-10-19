import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    width: 150px;
    height: 50px;
    border-radius: 25px;
    background: ${({primary}) => (primary ? 'black': 'white')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30 px')};
    color: ${({dark}) => (dark ? 'white' : 'black')};    
    font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'purple': 'purple')};
    }
`