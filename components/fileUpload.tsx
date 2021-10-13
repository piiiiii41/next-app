import { Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import React from 'react';
import List from '@material-ui/core/List';

const style = makeStyles((theme) => ({
  root: {
    width: 800,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'black'
  },
  btn: {
    display: 'block',
    margin: '0 0 0 auto'
  },
  rankPaper: {
    padding: theme.spacing(2),
    color: '#ffd966',
    borderRadius: 16,
    backgroundColor: '#222b35'
  }
}));

function FileUpload() {
  const Topstyle = style();

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log('acceptedFiles:', acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
    acceptedFiles
  } = useDropzone({
    onDrop,
    noClick: true
  });

  const files = useMemo(
    () =>
      acceptedFiles.map((file) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      )),
    [acceptedFiles]
  );

  return (
    <>
      <Grid container style={{ paddingTop: '10px' }}>
        <Grid item>
          <div {...getRootProps()} className={Topstyle.root}>
            <input {...getInputProps()} />
            {isDragActive ? <p></p> : <p></p>}
          </div>
        </Grid>
        <Grid item style={{ paddingLeft: '30px' }}>
          <Button
            variant="contained"
            color="default"
            startIcon={<FolderOpenOutlinedIcon />}
            style={{ height: 40 }}
            onClick={open}
          >
            ファイルの選択
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <List
          style={{ fontSize: '12px', fontWeight: 'normal', paddingLeft: '5px' }}
        >
          {files}
        </List>
      </Grid>
    </>
  );
}

export default FileUpload;
