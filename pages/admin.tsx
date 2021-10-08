import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import ListView from '../components/listView';
//import { Link } from 'react-router-dom';
import Header from '../components/header';
//import ApiFetch from './components/ApiFetch';

// 検索バーとボタン
function Search() {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary">
          検索
        </Button>
      </Grid>
    </Grid>
  );
}

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
          <Search />
          <br />
          <br />
        </Box>

        <Grid container justify="space-between">
          <Grid item>
            <Grid container spacing={1} style={{ width: '1200px' }}>
              <Grid
                item
                xs={1}
                style={{ color: 'red', fontSize: '14px', paddingTop: '15px' }}
              >
                ✔全１５０件
              </Grid>
              <Grid
                item
                xs={8}
                style={{ fontSize: '14px', paddingTop: '15px' }}
              >
                ■教育機関：条件なし　■カテゴリ：条件なし　■過去受講者数：条件なし　■登録年月：2021/7～
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<TuneIcon />}
                >
                  絞り込み
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<SwapVertIcon />}
                >
                  標準
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <ListView />
      </React.Fragment>
    );
  }
}
