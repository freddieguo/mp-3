import Header from "./components/resume-header.tsx";
import Footer from "./components/resume-footer.tsx";
import Nav from "./components/resume-nav.tsx";
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Main from "./components/resume-main.tsx";
import Edu from "./components/resume-education.tsx";
import Exp from "./components/resume-experience.tsx";
import Cer from "./components/resume-certification.tsx";
import Ski from "./components/resume-skill.tsx";
import Calculator from "./components/resume-project.tsx";
import Cre from "./components/resume-credit.tsx";
import {styled, createGlobalStyle } from 'styled-components';


const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;  
    }
`;

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Playwrite DE Grund', sans-serif;
    }
`;

function Root() {
    return (
        <>
        <GlobalStyle />
            <Header />
            <PageWrapper>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/edu" element={<Edu />} />
                <Route path="/exp" element={<Exp />} />
                <Route path="/cer" element={<Cer />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/ski" element={<Ski />} />
                <Route path="/cre" element={<Cre />} />
            </Routes>
            </PageWrapper>
            <Footer />
        </>
    )
}

const router = createBrowserRouter(
    [{path:"*", element: <Root />}]
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
