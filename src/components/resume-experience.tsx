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


export default function Exp(){
    return(
        <StyledMain>
            <StyledH2>Experience</StyledH2>
            <br />
                <StyledH3>Statistical Analysis of Housing Prices in Boston</StyledH3>
                <StyledH4>Team Leader</StyledH4>
                <p>
                    Conducted a comprehensive analysis and data visualization of the local housing market in MA using regression model.
                    Utilized Stata and Python to conduct the analysis on different factors that effect the property price and generate data visualizations.
                    Presented findings and insights to a group of peers in class, improves my public speaking skills.
                </p>
            <br />
                <StyledH3>Analysis of Economic Policies Using Empirical Data</StyledH3>
                <StyledH4>Team Member</StyledH4>
                <p>
                    For this independent study, I conducted an empirical analysis of the impact of fiscal and monetary policies
                    on economic growth. Utilizing econometric models in Stata, I analyzed historical data from multiple countries
                    to identify correlations between policy interventions and economic indicators such as GDP growth, unemployment rates, and inflation.
                </p>
            <br />
                <StyledH3>Analysis of Economic Impact of Renewable Energy Adoption</StyledH3>
                <StyledH4>Team Member</StyledH4>
                <p>
                    This research project explored the economic implications of increased renewable energy adoption on national
                    economies. I analyzed data from various countries that have made significant investments in renewable energy,
                    focusing on economic growth, job creation, and energy prices. Using econometric models in Excel and Stata,
                    I identified trends and impacts, presenting the findings in a paper that highlighted the long-term economic
                    benefits and challenges of transitioning to renewable energy sources.
                </p>
            <br />
                <StyledH3>Survey Analysis on Consumer Behavior During Economic Downturns</StyledH3>
                <StyledH4>Team Member</StyledH4>
                <p>
                    In this project, I designed and conducted a survey to investigate how consumer behavior changes during economic
                    downturns. The survey collected data on spending habits, savings, and consumer confidence. I analyzed the data
                    to identify patterns and correlations, culminating in a report that provided insights into consumer psychology
                    and economic resilience. This project demonstrated the application of data collection and analysis skills to
                    understand economic phenomena.
                </p>
            <br />
                <StyledH3>Analysis on Consumer Behavior During Economic Downturns</StyledH3>
                <StyledH4>Team Member</StyledH4>
                <p>
                    In this project, I designed and conducted a survey to investigate how consumer behavior changes during economic
                    downturns. The survey collected data on spending habits, savings, and consumer confidence. I analyzed the data
                    to identify patterns and correlations, culminating in a report that provided insights into consumer psychology
                    and economic resilience. This project demonstrated the application of data collection and analysis skills to
                    understand economic phenomena.
                </p>
            <br />
        </StyledMain>
    )
}