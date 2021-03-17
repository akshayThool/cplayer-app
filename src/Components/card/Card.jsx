import React from 'react'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Card(props) {
  // const[description,setdescription]=useState('');
  // const[id,setid]=useState('');
  // useEffect(() => {
  //  setdescription(props.description);
  //  setid(props.id);
  //     });
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [playerDetails, setPlayerDetails] = useState([]);
  useEffect(() => {
    axios.get(`https://cricapi.com/api/playerStats?apikey=BOBBPOtyxcZsIuxBBpJtj9bJ0843&pid=${props.pid}`)
      .then((res) => {
        setPlayerDetails(res.data);
      })
  }, []);


  const saveFav = () => {
    const playerCard = {
      id: props.pid,
      name: props.name
    }
    props.playerDetails(playerCard);
  };

  return (
    //     <div className="card-inline" style={{width:"17rem" ,border:"1px solid black" ,margin:"5px" }}>
    //     <div className="card-body ">
    //     <div className="card-image-myimg" ><img className="myimg" src={props.urlToImage}/> </div>
    //     <p className="card-title" >{props.title}</p>
    //     <p className="card-author"><b>{props.author}</b></p>
    //     <button type="submit" className="btn btn-primary" onClick={() => {
    //                 saveFav();
    //             }}>
    //                 Add to Favourites
    //     </button>
    //     <button type="submit" className="btn btn-primary" onClick={() => {
    //                 saveFav();
    //             }}>
    //                 Stats
    //     </button>
    //   </div>
    // </div>

    <div className="card grid-item">
      <img src={playerDetails.imageURL} alt="new-coverage" className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{playerDetails.name}</div>
        <div className="card-text">{playerDetails.born}</div>
        <a className="btn btn-outline-success btn-sm" onClick={handleClickOpen} >Player Stats</a>
        <a href="" className="btn btn-outline-danger btn-sm" onClick={saveFav}><i className="far fa-heart"></i></a>
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {playerDetails.name}
            </Typography>
            <Button autofocus >
              <a href="" className="btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></a>
              <div className="player-stat-container">
                <div className="player-details-container">

                </div>
              </div>
            </Button>
          </Toolbar>
        </AppBar>

      </Dialog>
    </div>

  )
}
