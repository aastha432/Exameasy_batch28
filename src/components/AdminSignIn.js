import config from "../config";
import React, { useState } from "react";
//import TextField from "@material-ui/core/TextField";
//import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import swal from 'sweetalert';
import './Results.css';
import {Box, Button, TextField} from '@material-ui/core';
import firebase from "firebase/app";
require('firebase/auth')


const AdminSignIn = () => {
 
  const [currentUser, setCurrentUser] = useState(null); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    try {
      config.auth().signInWithEmailAndPassword(email, password).then((u)=>{
        setCurrentUser(true);
      }).catch((error) =>
      {
        swal(error.message);
      });    
      
    } catch (error) {
      alert(error);
    }
  };


  if (currentUser) {
      return <Redirect to="/admin" />;
  }
   
  return (
    
      <div >
        <center>
          <br></br>
          <br></br>
          <h1 style={{color:'black'}}>Sign In</h1>
          <br></br>

          <h5 style={{color:'black'}}>Enter email</h5>
          <TextField id="filled-basic" label="Email" variant="outlined" onChange={(e)=>{
            //console.log(e.target.value);
            setEmail(e.target.value);
            }} value={email}/>
          <br></br>
            <br></br>
          <h5 style={{color:'black'}}>Enter password</h5>
          <TextField id="filled-basic" label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} value={password}/>

          <br></br>
          <br></br>
          <Button variant="contained" onClick={handleSubmit} style={{ marginLeft: '10px' }} color="primary" >Sign In</Button>
        </center>
      </div>
    
  );
}


export default AdminSignIn;


  