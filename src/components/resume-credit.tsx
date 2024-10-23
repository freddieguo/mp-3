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

const StyledH4 = styled.h4`
    color: #3C4048;
    font-size:calc(7px + 1vw);
`

const StyledLink =styled.a`
    color: #3C4048;
`

export default function Cre() {
    return(
        <StyledMain>
            <StyledH2>Credits</StyledH2>
            <br />
                <StyledH4>
                    Font of
                    <StyledLink href="https://fonts.google.com/specimen/Playwrite+DE+Grund?selection.family=Metal+Mani"> Playwrite Deutschland Grundschrift </StyledLink>
                    is provided to you by
                    <StyledLink href="https://fonts.google.com/?query=Open+Window"> Open Window </StyledLink>
                    under the following <StyledLink href="https://openfontlicense.org">terms</StyledLink>.
                </StyledH4>
            <br />
                <StyledH4>
                    The profile picture of Freddie Guo is licensed under the following
                    <StyledLink href="https://creativecommons.org/licenses/by-sa/4.0/"> terms</StyledLink>.
                </StyledH4>
        </StyledMain>
    )
}