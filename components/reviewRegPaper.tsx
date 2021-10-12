import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FileUpload from './fileUpload';

const items = [
  {
    id: '1',
    subject_id: '(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '開発センター',
    date: '2021/07/01 13:01:00',
    impression:
      'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '2',
    subject_id: '(C-F-001)',
    subject:
      'SwiftによるiOSアプリ開発応用 -Auto Layout、Web API、Core Dataとテーブルビューの',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/02 13:01:00',
    impression:
      'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '3',
    subject_id: '(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/03 13:01:00',
    impression:
      'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '4',
    subject_id: '(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/04 13:01:00',
    impression:
      'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '5',
    subject_id: '(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/05 13:01:00',
    impression:
      'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
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
  }
}));

export default function Adminpaper() {
  const topStyle = topGrid();

  return (
    <div className={topStyle.root}>
      <Paper className={topStyle.paper} id="paper" style={{ width: '1300px' }}>
        <Grid
          container
          justify="space-between"
          style={{ padding: '1%', paddingLeft: '1%' }}
        >
          <Grid item>
            <div id="huto" className="huto">
              🖊 レビューの登録（レポートアップロード）
              <br />
              <FileUpload />
            </div>
          </Grid>
          <Grid container style={{ paddingTop: '2%' }}>
            <Grid item>
              <div id="huto" className="huto">
                📅 アップロード履歴（過去20件）
              </div>
            </Grid>
          </Grid>
          <Grid container style={{ paddingTop: '10px' }}>
            {items.map((value) => (
              <li style={{ paddingTop: '3px' }}>
                <Grid container spacing={2}>
                  <Grid
                    item
                    style={{
                      minWidth: '590px',
                      color: 'blue',
                      textDecoration: 'underline'
                    }}
                  >
                    {value['subject']}
                  </Grid>
                  <Grid item style={{ paddingRight: '10px' }}>
                    📝{value['rating']}
                  </Grid>
                  <Grid item style={{ minWidth: '140px' }}>
                    👤{value['busho']}
                  </Grid>
                  <Grid item>📅{value['date']}</Grid>
                </Grid>
              </li>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
