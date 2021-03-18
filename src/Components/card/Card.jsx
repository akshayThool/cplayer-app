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
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import CricketBat from './../../icons/cricket-bat.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35)
  },
  playerStatContainer: {
    width: '90%',
    margin: '0 auto',
  }
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
  const [playerBattingListA, setPlayerBattingListA] = useState([]);
  const [playerBattingODI, setPlayerBattingODI] = useState([]);
  useEffect(() => {
    axios.get(`https://cricapi.com/api/playerStats?apikey=BOBBPOtyxcZsIuxBBpJtj9bJ0843&pid=${props.pid}`)
      .then((res) => {
        //console.log(res.data);
        setPlayerDetails(res.data);
        setPlayerBattingODI(res.data.data.batting.ODIs);
        setPlayerBattingListA(res.data.data.batting.listA);
        console.log(res.data.data.batting.ODIs);
      })
  }, []);

  //console.log(playerBattingODI);
  const saveFav = () => {
    const playerCard = {
      id: props.pid,
      name: props.name
    }
    //console.log(playerDetails);
    props.readLater(playerCard);
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
            </Button>
          </Toolbar>
        </AppBar>
        <div className="dialog-body">
          <div className="container container-ours">
            <div className="page-heading">
              <div className="media clearfix">
                <div className="media-left pr30">
                  <img src={playerDetails.imageURL} alt="..." className="media-object mw150" />
                </div>
                <div className="media-body va-m">
                  <h2 className="media-heading">{playerDetails.name}
                    <small>- {playerDetails.country}</small></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="panel">
                  <div className="panel-heading">
                    <span className="panel-icon">
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="panel-title">Personal Information</span>
                  </div>
                  <div className="panel-body pn">
                    <table className="table mbn tc-icon-1 tc-med-2 tc-bold-last">
                      <thead>
                        <tr className="visually-hidden">
                          <th className="mw30">#</th>
                          <th>Attributes</th>
                          <th>Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="fa fa-birthday-cake text-warning"></span>
                          </td>
                          <td>
                            Born
                          </td>
                          <td>
                            {playerDetails.born}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/icons/cricket-age.svg" alt="..." className="cricket-bat-logo" />
                          </td>
                          <td>Age</td>
                          <td>{playerDetails.currentAge}</td>
                        </tr>
                        <tr>
                          <td><img src="assets/icons/cricket-role.svg" alt="..." className="cricket-bat-logo" /></td>
                          <td>Playing Role</td>
                          <td>{playerDetails.playingRole}</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/icons/cricket-bat1.svg" alt="..." className="cricket-bat-logo" />
                            {/* <CricketBat /> */}
                          </td>
                          <td>
                            Batting Style
                          </td>
                          <td>
                            {playerDetails.battingStyle}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/icons/cricket-ball.svg" alt="..." className="cricket-bat-logo" />
                          </td>
                          <td>
                            Bowling Style
                          </td>
                          <td>
                            {playerDetails.bowlingStyle}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="panel">
                  <div className="panel-body">
                    <div className="profile-details">
                      {playerDetails.profile}
                    </div>
                    <div className="table-bowling-container">
                      <h5>Batting Career Summary</h5>
                      <table className="table table-striped table-bordered table-sm" cellSpacing="0"
                        width="100%" id="dtHorizontalExample" >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>50</th>
                            <th>100</th>
                            <th>St</th>
                            <th>Ct</th>
                            <th>Sixes</th>
                            <th>Fours</th>
                            <th>Strike Rate</th>
                            <th>BF</th>
                            <th>Avg</th>
                            <th>HS</th>
                            <th>Runs</th>
                            <th>NO</th>
                            <th>Inns</th>
                            <th>Mats</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>List A</th>
                            <td>{playerBattingListA['50']}</td>
                            <td>{playerBattingListA['100']}</td>
                            <td>{playerBattingListA.St}</td>
                            <td>{playerBattingListA.Ct}</td>
                            <td>{playerBattingListA['6s']}</td>
                            <td>{playerBattingListA['4s']}</td>
                            <td>{playerBattingListA.SR}</td>
                            <td>{playerBattingListA.BF}</td>
                            <td>{playerBattingListA.Ave}</td>
                            <td>{playerBattingListA.HS}</td>
                            <td>{playerBattingListA.Runs}</td>
                            <td>{playerBattingListA.NO}</td>
                            <td>{playerBattingListA.Inns}</td>
                            <td>{playerBattingListA.Mat}</td>
                          </tr>
                          <tr>
                            <th>ODI</th>
                            {/* <td>{playerBattingODI['50']}</td>
                            <td>{playerBattingODI['100']}</td>
                            <td>{playerBattingODI.St}</td>
                            <td>{playerBattingODI.Ct}</td>
                            <td>{playerBattingODI['6s']}</td>
                            <td>{playerBattingODI['4s']}</td>
                            <td>{playerBattingODI.SR}</td>
                            <td>{playerBattingODI.BF}</td>
                            <td>{playerBattingODI.Ave}</td>
                            <td>{playerBattingODI.HS}</td>
                            <td>{playerBattingODI.Runs}</td>
                            <td>{playerBattingODI.NO}</td>
                            <td>{playerBattingODI.Inns}</td>
                            <td>{playerBattingODI.Mat}</td> */}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>

  )
}
