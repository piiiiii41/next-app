import React from 'react';
import Detail from '../components/detail';
//import { Link } from 'react-router-dom';
import Header from '../components/header';
import Box from '@material-ui/core/Box';

export default class Temp extends React.Component {
  // //コンストラクタ　header設定
  // constructor(props) {
  //   super();
  //   this.title = props.title;
  // }

  render() {
    return (
      //headerとナビゲーション部分の表示
      <React.Fragment>
        <Header />
        <Box>
          <br />
          <br />
          <br />
        </Box>
        <Detail />
      </React.Fragment>
    );
  }
}
