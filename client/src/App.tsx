import React from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./components/landingPage";

const BASE_URL = 'http://localhost:3000/crazy-cats'

const App = () => {
    return (
        <>
            <ChakraProvider>
                <Routes>
                    <Route path='/' element={<LandingPage props={{url: BASE_URL}} />} />
                </Routes>
            </ChakraProvider>
        </>
    )

}

export default App;