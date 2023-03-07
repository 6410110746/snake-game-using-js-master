import React, { Component } from 'react';
import GameBoard from './components/GameBoard';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from './components/Home';
import MainScreen from './components/MainScreen';
import './App.css';
import App from './components/App';

export default class Data extends Component {
  render() {
    return (
      <div className='body'>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/snakemain' element={<MainScreen/>}></Route>
          <Route path='/gameboardeasy' element={<GameBoard speed={150} level={'easy'}/>}></Route>
          <Route path='/gameboardmedium' element={<GameBoard speed={50} level={'medium'}/>}></Route>
          <Route path='/gameboardhard' element={<GameBoard speed={25} level={'hard'}/>}></Route>
          <Route path='/tenzimain' element={<App/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
