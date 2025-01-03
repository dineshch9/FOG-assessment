import { useState } from "react";


import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FallingSquares from './Q2.jsx'
import Server from './Server.jsx'

function App() {
  return (
    <>
    
        <BrowserRouter>
    <Routes>
        <Route path='/' element={<Server/>}></Route>
        <Route path='/Q2' element={<FallingSquares/>}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;




