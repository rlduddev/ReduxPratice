import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home';

const App = (props) =>{
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' exast element={<Home />}></Route>
                <Route path='/:id' exast element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;