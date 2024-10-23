import {styled} from "styled-components";
import fred from "../pic/freddie.jpg";

const StyledMain = styled.main`
    background-color: #F2F1EB;
    padding:2%;
    width:70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 750px) {
        padding: 2%;
        width: 100%;
        height:100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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

const StyledP = styled.p`
    color: #3C4048;
    font-size: calc(6px + 1vw);

    @media screen and (max-width: 750px) {
        color: #3C4048;
        font-size: calc(6px + 1vw);
        text-align: justify;
        margin: 0 auto;
        width: 90%;
    }
`

const StyledImage = styled.img`
    max-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    margin: auto;

    @media screen and (max-width: 750px) {
        img {
            height: auto;
            display: block;
            position: relative;
            max-width: 50%;
        }
    }
`

export default function Main() {
    return(
        <StyledMain>
            <StyledH2>Home</StyledH2>
            <br />
                <StyledImage src={fred} alt="Freddie Guo" />
                        <StyledP>
                            My name is Freddie. I am a student currently pursuing a Bachelor of Arts in Computer Science and
                            Economics at Boston University. With a strong foundation in both technical and analytical disciplines,
                            I am passionate about applying programming skills, data analysis, and economic theory to solve
                            real-world challenges. My academic journey has been complemented by hands-on experience in software
                            development, research, and leadership roles in university clubs. Eager to contribute my skills and
                            grow in a dynamic, innovative environment, I am seeking opportunities to further my expertise in
                            software development, data analytics, and economics-driven technology solutions.
                        </StyledP>
        </StyledMain>
    )
}