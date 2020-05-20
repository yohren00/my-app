import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Home from "../githubApi/index";
// import './css/tatle.css';

const useStyles = makeStyles({
  root: {
    // minWidth: '100px',
    // height: 'auto',
    width: '700px',
    // 'word-wrap': 'break-word'
  }
});

function App() {

  const classes = useStyles();

  const [apiData, setApiData] = useState({ title: "", description: "", description1: "", url: "" });


  useEffect(() => {
    console.log('useEffect');
    userData();
  }, []);

  /**
   * 取得API資料
   */
  function userData() {
    Axios.get("https://api.github.com/users/yohren00/repos?client_id=5c25b8a05e9391eb2fe9client_secret=5f944f596d5b10f05ea04da03c497187ce7bfb57")
      .then((res) => {
        let data = res.data[0];
        setApiData(prevState => ({ ...prevState, title: data.name, url: data.html_url }));
      });

    Axios.get("https://api.github.com/repos/yohren00/my-app/readme?client_id=5c25b8a05e9391eb2fe9&client_secret=5f944f596d5b10f05ea04da03c497187ce7bfb57")
      .then((res) => {
        let data = res.data;
        let decodedString = Buffer.from(data.content, 'base64').toString();
        let rows = decodedString.split('\n');
        let rows1 = rows.map(el => {
          el = el.replace("<br/>", "");
          return el;
        })

        setApiData(prevState => ({ ...prevState, description: rows1[0], description1: rows1[1] }));
      })
  }

  /**
   * 無限滾動
   */


  return <>
   
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            title：{apiData.title}
          </Typography>
          <br />
          <Typography variant="h5" component="h2">
            連結：<a href={apiData.url} >github作品連結</a>
          </Typography>
          <br />
          <Typography variant="h5" component="h2">
            文件說明：1.{apiData.description}<br />
              &emsp;&emsp;&emsp;&emsp;&emsp;2.{apiData.description1}
          </Typography>
        </CardContent>
      </Card>
  
  </>;
}

export default App;
