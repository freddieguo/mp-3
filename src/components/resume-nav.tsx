import { styled } from "styled-components";
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    background-color: #D2E3C8;
    padding: 2%;
    width:30%;
    text-align: center;

    @media screen and (max-width: 750px) {
        width: 100%;
        text-align: center;
        padding: 2%;
    }
`
const StyledUl = styled.ul`
    list-style: none;
    padding-left: 0;

    @media screen and (max-width: 750px) {
        text-align: center;
        list-style: none;
        padding-left: 0;
    }
`

const StyledLi = styled.li`
    margin: 25% 0;
    padding: 3% 0;
    background-color: #90A17D;
    border: solid #5F7161;
    font-size: calc(2px + 1vw);

    &:hover{
        transform: scale(1.02);
        background-color: #90A17D;
        z-index: 2;
    }

    @media screen and (max-width: 750px) {
        display: inline-block;
        margin: 2%;
        padding: 2% 2%;
        width: auto;
    }
`
const StyledLink = styled(Link)`
    padding: 1%;
    text-decoration: none;
    color: #F2F1EB;
`

export default function Nav() {
    return(
    <StyledNav>
        <StyledUl>
            <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
            <StyledLi><StyledLink to ="/edu">Education</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/exp">Experience</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/calculator">Project</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/ski">Skill</StyledLink></StyledLi>
            <StyledLi><StyledLink to="/cer">Certification</StyledLink></StyledLi>
        </StyledUl>
    </StyledNav>
    )
}