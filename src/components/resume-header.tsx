import {styled} from "styled-components";

const StyledHeader = styled.header`
    background-color: #739072;
    color:#F2F1EB;
    padding: 1%;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`
const StyledName = styled.h1`
    font-size: calc(30px + 2vw);
    font-weight:bold;
    padding-top:3%;

    @media screen and (max-width: 750px) {
        padding-right: 0;
        padding-left: 0;
        text-align: center;
        margin: auto;
    }
`

const StyledDes = styled.p`
    font-size: calc(10px + 1vw);
    font-variant: small-caps;
`

export default function Header(){
    return (
        <StyledHeader>
            <StyledName>Freddie Guo</StyledName>
            <StyledDes>Welcome to my Online Resume</StyledDes>
        </StyledHeader>
    )
}