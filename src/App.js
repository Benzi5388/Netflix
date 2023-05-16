import React, {useState} from 'react';
import NavBar from './Coponents/NavBar/NavBar';
import "./App.css"
import Banner from './Coponents/Banner/Banner';
import RowPost from './Coponents/RowPost/RowPost';
import { Action, Originals } from './urls';


function App() {
  return (
    <div>
     <NavBar/>
     <Banner/>
     <RowPost url = {Originals} title = "Netflix Originals"/>
     <RowPost url = {Action} title = "Action" isSmall/>
    </div>
  );
}

export default App;
