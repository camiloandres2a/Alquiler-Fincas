import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from '../components/HomeScreen';

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;