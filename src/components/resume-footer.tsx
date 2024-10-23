import { styled } from "styled-components";
import { Link } from 'react-router-dom';



const StyledFooter = styled.footer`
    background-color: #739072;
    padding: 1%;
`

const FooterNote = styled.p`
    color:#F2F1EB;
    font-size: calc(5px + 1vw);
`

const NavLink = styled(Link)`
    color: #F2F1EB;
`

export default function Footer(){
    return (
        <StyledFooter>
            <FooterNote>All Rights Reserved by Freddie Guo <NavLink to="/cre">Credits</NavLink> &#169;</FooterNote>
        </StyledFooter>
    )
}