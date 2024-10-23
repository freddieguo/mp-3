import { styled } from "styled-components";

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

export default function Cer(){
    return(
        <StyledMain>
            <StyledH2>Certification</StyledH2>
            <br />
                <StyledH3>Python for Data Science – Coursera</StyledH3>
                <p>Completed a comprehensive course on Python programming for data analysis,
                    visualization, and basic machine learning algorithms.
                </p>
                <br />
                    <StyledH3>Data Science Specialization – Coursera</StyledH3>
                    <p>A comprehensive series of courses covering the basics of data science,
                        including Python programming, data cleaning, and machine learning techniques,
                        with real-world applications.
                    </p>
                    <br />
                        <StyledH3>Financial Markets - Coursera</StyledH3>
                        <p>Provides insights into the functioning of financial markets, including
                            risk management, behavioral finance, and the role of financial
                            institutions in the economy.
                        </p>
        </StyledMain>
    )
}