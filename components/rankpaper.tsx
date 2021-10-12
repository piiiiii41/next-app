import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReviewRegPaper from './reviewRegPaper';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import Button from '@material-ui/core/Button';

const rankLists = [
  {
    id: '1',
    subject_id: '(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    people: '20'
  },
  {
    id: '2',
    subject_id: '(C-F-001)',
    subject: 'SwiftによるiOSアプリ開発応用 -Auto Layout、Web API、Core ',
    people: '18'
  },
  {
    id: '3',
    subject_id: '(C-F-001)',
    subject: 'デザイン思考入門 ～イノベーションを日常的に行うための思考法～',
    people: '5'
  }
];

const topGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    listStyle: 'none'
  },
  paper: {
    padding: theme.spacing(2),
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'black',
    borderRadius: 16,
    backgroundColor: '#fffacd'
  },
  rankPaper: {
    padding: theme.spacing(2),
    color: '#ffd966',
    borderRadius: 16,
    backgroundColor: '#222b35'
  },
  downroadBtn: {
    borderRadius: 16,
    width: '130px',
    backgroundColor: 'white',
    color: 'black'
  }
}));

export default function Rankpaper() {
  const topStyle = topGrid();

  return (
    <div className={topStyle.root}>
      <Grid container spacing={1}>
        <Grid container>
          <Grid item xs={12}>
            <ReviewRegPaper />
            <br />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{ width: '1300px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Grid item xs={12} sm={6}>
            <Paper className={topStyle.rankPaper} id="paper">
              <Grid
                container
                justify="space-between"
                style={{ padding: '1%', paddingLeft: '1%' }}
              >
                <Grid item>
                  <div id="huto" className="huto">
                    👑 受講者数ランキング（TOP20)
                    <br />
                  </div>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={topStyle.downroadBtn}
                    startIcon={<GetAppOutlinedIcon />}
                  >
                    全件出力
                  </Button>
                </Grid>
                <Grid container>
                  <div style={{ paddingTop: '10px' }}>
                    {rankLists.map((value) => (
                      <li style={{ paddingTop: '3px' }}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            style={{
                              minWidth: '480px',
                              color: 'white',
                              textDecoration: 'underline'
                            }}
                          >
                            {value['id']}.{value['subject']}
                          </Grid>
                          <Grid item>👤{value['people']}人</Grid>
                        </Grid>
                      </li>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={topStyle.rankPaper} id="paper">
              <Grid
                container
                justify="space-between"
                style={{ padding: '1%', paddingLeft: '1%' }}
              >
                <Grid item>
                  <div id="huto" className="huto">
                    👑 評価ランキング（TOP20)
                    <br />
                  </div>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={topStyle.downroadBtn}
                    startIcon={<GetAppOutlinedIcon />}
                  >
                    全件出力
                  </Button>
                </Grid>
                <Grid container>
                  <div style={{ paddingTop: '10px' }}>
                    {rankLists.map((value) => (
                      <li style={{ paddingTop: '3px' }}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            style={{
                              minWidth: '480px',
                              color: 'white',
                              textDecoration: 'underline'
                            }}
                          >
                            {value['id']}.{value['subject']}
                          </Grid>
                          <Grid item>👤{value['people']}人</Grid>
                        </Grid>
                      </li>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
