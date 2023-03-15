import React, { useState, useEffect} from 'react';
//import config from "../config";
import firebase from "firebase/app";
import './Results.css';
import { Button } from '@material-ui/core';
import { useHistory , Redirect} from 'react-router-dom';
import {TextField, Container, AppBar, Box, Toolbar} from '@material-ui/core';


const Admin = () => {
  const history = useHistory();

  const [examcode, setTitle] = useState('')
  const [formlink, setFormlink] = useState('')
  const [examtimer, setTimer] = useState('')
  //

  const onChangeexamcode = (e) => {
    setTitle(e.target.value);
  };
  const onChangeformlink = (e) => {
    setFormlink(e.target.value);
  };
  const onChangeTimer = (e) => {
    setTimer(e.target.value);
  };


  function handleClicksub() {
    
    const con_db = firebase.database().ref("con_dbs");

    con_db.on('value', (snapshot) => {
  
      var s = snapshot.val()
      console.log(s);
      con_db.child(examcode).set({
        formlink: formlink,
        examtimer: examtimer
      });
      alert("The form was submitted");
      setTitle('');
      setFormlink('');
      setTimer('');
      // history.push("/");
    
  });
  }
    
  
  function results(){
    history.push('/codecheck');

  }

  function logout(){
        localStorage.clear();
        window.location.href = '/';
    };

  

  return (
    <div >
          <AppBar style={{ position: 'fixed', top: 0 }} color="primary">
            <Toolbar />
          </AppBar>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <center>
          <br></br><br></br><br></br><br></br>
            <h1 style={{color:'black'}} >
              Welcome Admin
            </h1>
            <br></br>

            <h5 style={{color:'black'}}> Enter a unique code for the exam </h5>
            <TextField id="filled-basic" label="Examcode" variant="outlined" onChange={onChangeexamcode} value={examcode}/>
            <br></br>
            <br></br>

            <h5 style={{color:'black'}}>Enter Google/Microsoft form link </h5>
            <TextField id="filled-basic" label="Formlink" variant="outlined" onChange={onChangeformlink} value={formlink}/>
            <br></br>
            <br></br>

            <h5 style={{color:'black'}}>Enter the time duration of the exam in MINUTES</h5>
            <TextField id="filled-basic" label="Examtimer" variant="outlined" onChange={onChangeTimer} value={examtimer}/>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={handleClicksub} style={{ marginLeft: '10px' }} color="primary" >Create Exam</Button>
            <Button variant="contained" onClick={results} style={{ marginLeft: '60px' }} color="secondary">See Results</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick = {logout} variant="contained"> LogOut </Button>
          </center>
          </Box>
    </div>
    
  )
}
export default Admin;