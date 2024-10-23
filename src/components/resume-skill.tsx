import {styled} from "styled-components";

const StyledMain = styled.main`
    background-color: #F2F1EB;
    padding:2%;
    width:70%;
    justify-content: space-around;

    @media screen and (max-width: 750px) {
        padding: 2%;
        width: 100%;
        height:100vh;
        box-sizing: border-box;
        align-items: center;
        overflow: hidden;
    }
`
const StyledH2 = styled.h2`
    color:#3C4048;
    font-variant: small-caps;
    font-size: calc(12px + 1vw);

    @media screen and (max-width: 750px) {
        color: #3C4048;
        font-variant: small-caps;
        font-size: calc(12px + 1vw);
        text-align: center;
    }
`

const StyledH3 = styled.h3`
    color:#3C4048;
    font-variant: small-caps;
    font-size:calc(9px + 1vw);
`

const StyledLi = styled.li`
    color: #3C4048;
    text-decoration: none;
    font-size:calc(5px + 1vw);
`


export default function Ski(){
    return(
        <StyledMain>
            <StyledH2>Skill</StyledH2>
            <br />
                <StyledH3>Languages</StyledH3>
                <ul>
                    <StyledLi>English</StyledLi>
                    <StyledLi>Mandarin</StyledLi>
                    <StyledLi>Cantonese</StyledLi>
                </ul>
            <br />
                <StyledH3>Programming Languages</StyledH3>
                <ul>
                    <StyledLi>Python</StyledLi>
                    <StyledLi>Java</StyledLi>
                    <StyledLi>HTML</StyledLi>
                </ul>
            <br />
                <StyledH3>Other Skills</StyledH3>
                <ul>
                    <StyledLi>Critical Thinking</StyledLi>
                    <StyledLi>Teamwork</StyledLi>
                    <StyledLi>Problem-Solving</StyledLi>
                </ul>
        </StyledMain>
    )
}