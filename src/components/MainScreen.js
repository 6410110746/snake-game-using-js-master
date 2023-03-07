import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default class MainScreen extends Component {
  easyhscore = localStorage.getItem('easyhscore');
  mediumhscore = localStorage.getItem('mediumhscore');
  hardhscore = localStorage.getItem('hardhscore');
  

  handleEasyReset() 
  {
    localStorage.setItem('easyhscore',0);
    window.location.reload(false);
  }
  handleMediumReset() 
  {
    localStorage.setItem('mediumhscore',0);
    window.location.reload(false);
  }
  handleHardReset()
  {
    localStorage.setItem('hardhscore',0);
    window.location.reload(false);
  }
  handleAllReset()
  {
    localStorage.setItem('easyhscore',0);
    localStorage.setItem('mediumhscore',0);
    localStorage.setItem('hardhscore',0);
    window.location.reload(false);
  }


  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2C1E55' }}>
        <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, textAlign: 'center'}}>
            Snake Game
          </Typography>
          <Link to='/' style={{ textDecoration: 'none' , color: 'white'}}><p>Home</p></Link>
        </Toolbar>
      </AppBar>
      <div className='mainscreen'>
        <div className='level'>
          <h1>เลือกระดับความยาก</h1>
          <Link to='/gameboardeasy' style={{ textDecoration: 'none' , color: 'green' }} ><h2>Easy</h2></Link>
          <Link to='/gameboardmedium' style={{ textDecoration: 'none', color: 'orange' }}><h2>Medium</h2></Link>
          <Link to='/gameboardhard' style={{ textDecoration: 'none', color: 'red'}}><h2>Hard</h2></Link>
          <h3>วิธีการเล่น</h3>
            <div className='instruction'>

              ปุ่มขึ้น W หรือ UP Arrow button on keyboard 
              <br>
              </br>
              ปุ่มลง S หรือ DOWN Arrow button on keyboard 
              <br></br>
              ปุ่มเลื่อนซ้าย A หรือ LEFT Arrow button on keyboard 
              <br></br>
              ปุ่มเลื่อนขวา D หรือ Right Arrow button on keyboard
              <br></br>
              กด P เพื่อหยุดเกม
            </div>
        </div>
        <div className='scorecard'>
          <h1>Highest Scores</h1>
          <div className='hscore-div'>
            <h2 className='levelinfo' style={{ color: 'green', }}>Easy level: {(this.easyhscore == null) ? 0 : (parseInt(JSON.parse(this.easyhscore)))}</h2>
            <button className='resetbtn' onClick={this.handleEasyReset}>Reset this highscore</button>
          </div>
          <div className='hscore-div'>
            <h2 className='levelinfo' style={{ color: 'orange', }}>Medium level: {(this.mediumhscore == null) ? 0 : (parseInt(JSON.parse(this.mediumhscore)))}</h2>
            <button className='resetbtn' onClick={this.handleMediumReset}>Reset this highscore</button>
          </div>
          <div className='hscore-div'>
            <h2 className='levelinfo' style={{ color: 'red', }}>Hard level: {(this.hardhscore == null) ? 0 : (parseInt(JSON.parse(this.hardhscore)))}</h2>
            <button className='resetbtn' onClick={this.handleHardReset}>Reset this highscore</button>
          </div>
          <div className='resetall'>
            <button className='resetallbtn' onClick={this.handleAllReset}>Reset all highscores</button>
          </div>
        </div>
      </div>
    </Box>
    )
  }
}
