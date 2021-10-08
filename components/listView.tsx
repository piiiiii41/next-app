import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  pagenation: {
    '& > *': {
      marginTop: theme.spacing(2),
      display: 'inline-block',
    }
  },
  }));

const ListView = () => {

  const classes = useStyles();

  const [page, setPage] = useState(1); //ページ番号
  const [pageCount, setPageCount] = useState(); //ページ数
  const [allItems, setAllItems] = useState([]); //全データ
  const [displayedItems, setDisplayedItems] = useState([]); //表示データ
  const displayNum = 3; //1ページあたりの項目数

  const items = [
  {
    id: '1',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/01',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '2',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/02',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '3',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/03',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '4',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/04',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '5',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/05',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '6',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/06',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '7',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/07',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '8',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/08',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '9',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/09',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  },
  {
    id: '10',
    subject_id:'(C-F-001)',
    subject: 'プロジェクトリーダーにに求められるコミュニケーションスキル',
    rating: '★★★★☆',
    busho: '配電システム部',
    date: '2021/07/10',
    impression:'プロジェクトリーダーとしての心得や、チームメンバーに対する行動の基本が学べるが、どれも当たり前のことで、特別受ける必要を感じなかった。講師の話は上手かったため、自分のモチベーション向上につながる可能性はある。プロジェクトリーダーに対する考えや経験がゼ…'
  }
]

  useEffect(() => {
    setAllItems(items);
    //ページカウントの計算（今回は3項目/ページなので4ページ）
    setPageCount(Math.ceil(items.length/displayNum));
    //表示データを抽出
    setDisplayedItems(items.slice(((page - 1) * displayNum), page * displayNum))
  }, [])

  const handleChange = (event, index) => {
    //ページ移動時にページ番号を更新
    setPage(index);
    //ページ移動時に表示データを書き換える
    setDisplayedItems(allItems.slice(((index - 1) * displayNum), index * displayNum))
  }

  return (
    <>
      <List dense className={classes.list}>
        {displayedItems.map((item, index) => {
          const labelId = `label-${item.id}`;
          return (
            <ListItem key={index} button>
              <ListItemAvatar>
                <Avatar alt={item.busho} src="/static/images/avatar/xxx.jpg" />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={item.subject}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      display="block"
                      color="textPrimary"
                    >
                        <Grid container spacing={2} justify='space-between'>
                            <Grid item>
                              {item.busho} ---
                               {item.rating}
                            </Grid>
                            <Grid item>
                              {item.date}
                            </Grid>
                        </Grid>
                    </Typography>
                    {item.impression}
                  </>
                } />
            </ListItem>
          );
        })}
      </List>
      <div className={classes.pagenation} style={{textAlign:'center'}}>
        <Pagination count={pageCount} page={page} variant="outlined" color="primary" size="small" onChange={handleChange} />
      </div>
    </>
  )
}

export default ListView;