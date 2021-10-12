import React from 'react';
//import { Link } from 'react-router-dom';
import Header from '../components/header';
import Rankpaper from '../components/rankpaper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

export default class revewRegister extends React.Component {
  // //コンストラクタ　header設定
  // constructor(props) {
  //   super();
  //   this.title = props.title;
  // }

  render() {
    return (
      //headerとナビゲーション部分の表示
      <React.Fragment>
        <Grid
          container
          spacing={2}
          justify="space-between"
          style={{ paddingBottom: '10px' }}
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <Grid container className="space" spacing={1}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SettingsIcon />}
                >
                  セミナー科目 一覧
                  <br />
                  （追加・修正・削除）
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SettingsIcon />}
                >
                  レビュー 一覧
                  <br />
                  （修正・削除）
                </Button>
              </Grid>
              <Grid item>
                <IconButton aria-label="help">
                  <HelpIcon style={{ fontSize: 40 }} color="primary" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Rankpaper />
      </React.Fragment>
    );
  }
}
