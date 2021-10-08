import React from 'react';
import TextField from'@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ListView from '../components/listView';
import Detail from '../components/detail';
//import { Link } from 'react-router-dom';
import Header from '../components/header';
import Box from '@material-ui/core/Box';
import ApiFetch from '../components/ApiFetch'
    
    
export default class Temp extends React.Component {
  
  // //コンストラクタ　header設定
  // constructor(props) {
  //   super();
  //   this.title = props.title;
  // }
  
  render() {
        
    return(
      //headerとナビゲーション部分の表示
      <React.Fragment>
        <Header />
        <Box>
          <br/>
          <br/>
          <br/>
        </Box>
        <Detail />
        
       
        
      </React.Fragment>
    );
  }
}