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

const StyledH4 = styled.h4`
    color: #3C4048;
    font-size:calc(7px + 1vw);
`

const StyledLi = styled.li`
    color: #3C4048;
    text-decoration: none;
    font-size:calc(5px + 1vw);
`

export default function Edu(){
    return(
        <StyledMain>
            <StyledH2>Education</StyledH2>
            <br />
                <StyledH3>Boston University</StyledH3>
                <StyledH4>Bachelor of Arts in Computer Science & Economics</StyledH4>
                <ul>
                    <StyledLi>Dean’s List 2022-2023</StyledLi>
                    <StyledLi>Cumulative GPA: 3.5/4.0</StyledLi>
                    <StyledLi>Relevant Courses: Data Structures, Algorithms, Microeconomics, Macroeconomics,
                        Software Engineering, Relational Database, Econometrics</StyledLi>
                </ul>
                <br />
                <StyledH3>Durango High School</StyledH3>
                <StyledH4>High School Diploma</StyledH4>
                <ul>
                     <StyledLi>Cumulative GPA: 3.7/4.0</StyledLi>
                     <StyledLi>Relevant Courses: AP Computer Science, Calculus, Economics</StyledLi>
                     <StyledLi>Activities: Math Club, Computer Science Club, Badminton Team</StyledLi>
                </ul>
        </StyledMain>
    )
}