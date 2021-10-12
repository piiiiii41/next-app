import { Button } from '@material-ui/core';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  root: {
    width: 400,
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
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true
  });

  return (
    <Grid container>
      <Grid item>
        <div {...getRootProps()} className={Topstyle.root}>
          <input {...getInputProps()} />
          {isDragActive ? <p></p> : <p></p>}
        </div>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="default"
          startIcon={<FolderOpenOutlinedIcon />}
          onClick={open}
        >
          ファイルの選択
        </Button>
      </Grid>
    </Grid>
  );
}

export default FileUpload;
