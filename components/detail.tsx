import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import SwapVertIcon from '@material-ui/icons/SwapVert';
//import { Link } from 'react-router-dom';

const list = [
  {
    good: '4',
    eva: '★★★★☆',
    teacher: '4/5',
    teachmaterial: '3/5',
    level: '中',
    grade: 'S2,S3',
    department: '開発センター',
    date: '2021/xx/xx',
    comment:
      '講師の説明が、具体的で実話に基づいて語られており納得感があった。プロジェクトリーダーをこれから経験していく人や、実際に経験しているが、うまくメンバーを管理できていない人におすすめ。教材が多く、資料を参照するのが大変なため注意。'
  },

  {
    good: '4',
    eva: '☆☆☆☆☆',
    teacher: '4/5',
    teachmaterial: '3/5',
    level: '中',
    grade: 'S2,S3',
    department: '開発センター',
    date: '2021/xx/xx',
    comment:
      '講師の説明が、具体的で実話に基づいて語られており納得感があった。プロジェクトリーダーをこれから経験していく人や、実際に経験しているが、うまくメンバーを管理できていない人におすすめ。教材が多く、資料を参照するのが大変なため注意。'
  },
  {
    good: '4',
    eva: '☆☆☆☆☆',
    teacher: '4/5',
    teachmaterial: '3/5',
    level: '中',
    grade: 'S2,S3',
    department: '開発センター',
    date: '2021/xx/xx',
    comment:
      '講師の説明が、具体的で実話に基づいて語られており納得感があった。プロジェクトリーダーをこれから経験していく人や、実際に経験しているが、うまくメンバーを管理できていない人におすすめ。教材が多く、資料を参照するのが大変なため注意。'
  },
  {
    good: '4',
    eva: '☆☆☆☆☆',
    teacher: '4/5',
    teachmaterial: '3/5',
    level: '中',
    grade: 'S2,S3',
    department: '開発センター',
    date: '2021/xx/xx',
    comment:
      '講師の説明が、具体的で実話に基づいて語られており納得感があった。プロジェクトリーダーをこれから経験していく人や、実際に経験しているが、うまくメンバーを管理できていない人におすすめ。教材が多く、資料を参照するのが大変なため注意。'
  },
  {
    good: '4',
    eva: '☆☆☆☆☆',
    teacher: '4/5',
    teachmaterial: '3/5',
    level: '中',
    grade: 'S2,S3',
    department: '開発センター',
    date: '2021/xx/xx',
    comment:
      '講師の説明が、具体的で実話に基づいて語られており納得感があった。プロジェクトリーダーをこれから経験していく人や、実際に経験しているが、うまくメンバーを管理できていない人におすすめ。教材が多く、資料を参照するのが大変なため注意。'
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
    backgroundColor: '#fffacd',
    border: '15px'
  }
}));

const detaliGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: 'black',
    borderRadius: 16,
    backgroundColor: '#f5f5f5'
  }
}));

export default function Detail() {
  const topStyle = topGrid();
  const detailStyle = detaliGrid();

  return (
    <div className={topStyle.root}>
      <Grid item xs={12}>
        <Paper className={topStyle.paper} id="paper">
          <Grid container justify="space-between" style={{ padding: '1%' }}>
            <Grid item>
              <div style={{ paddingLeft: '1%', paddingBottom: '1%' }}>
                CD : C-F-001
              </div>
              <div id="huto" className="huto" style={{ paddingLeft: '10px' }}>
                プロジェクトリーダーに求められるコミュニケーションスキル(ULD43R)
              </div>
              <div
                style={{
                  color: '#0070c1',
                  fontSize: '14px',
                  paddingTop: '10px',
                  paddingLeft: '10px'
                }}
              >
                🏢 富士通ラーニングメディア
              </div>
            </Grid>
            <Grid item style={{ paddingTop: '30px', paddingRight: '2%' }}>
              <div>
                👥 過去受講者：10人 🔥
                <br />
                📝 ★★★☆☆　📅 2021/07/20～
              </div>
            </Grid>
          </Grid>
        </Paper>
        <div id="popo" className="popo">
          🔗応募はコチラ
          ：　https://www.kcc.knowledgewing.com/icm/srv/course-application/init-detail?cd=FLM&pcd=FLMC&cscd=ULD43R
        </div>
        <br />
      </Grid>
      <br />
      <Grid container justify="space-between">
        <Grid item>
          <Grid container spacing={2} style={{ width: '1200px' }}>
            <Grid item md={2} style={{ fontSize: '20px' }}>
              💬 受講者の声
            </Grid>
            <Grid
              item
              xs={10}
              style={{
                alignItems: 'flex-end',
                fontSize: '14px',
                paddingTop: '15px'
              }}
            >
              ■評価：条件なし　■受講者部署：条件なし　■投稿日：条件なし
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

      {list.map((value) => (
        <li style={{ paddingTop: '15px' }}>
          <Grid container spacing={1} justifyContent="center">
            <Grid item style={{ paddingTop: '20px' }}>
              👍 {value['good']}
            </Grid>
            <Grid item xs={11}>
              <Paper className={detailStyle.paper}>
                <div id="blue" className="blue">
                  評価:{value['eva']} 【 講師：{value['teacher']}　教材：
                  {value['teachmaterial']}　レベル：{value['lavel']}
                  　受講推奨グレード：{value['grade']}】　
                  <div id="depart" className="depart">
                    👤{value['department']}　　　📅{value['date']}　　
                  </div>
                </div>

                {value['comment']}
              </Paper>
            </Grid>
          </Grid>
        </li>
      ))}
    </div>
  );
}
