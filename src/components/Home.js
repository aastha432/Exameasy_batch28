//import config from "../config";
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.png';
import './../App.css';
//import { Redirect } from "react-router-dom";
//import { AuthContext } from "./Auth";
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Box } from '@material-ui/core';


const MainPage = () => {

  const history = useHistory();

  function handleClick() {
  var mywindow = window.open("/login", "NewWindow", "height=700,width=1720")
    history.push("/login");
  }

  function handleClickDetect() {
    history.push("/detections")
  }
  

  // function handleClickDetect2() {
  //   history.push("/detections2")
  // }
  
  function handleClickAdmin() {
    history.push("/adminsignin")

  }
  

  function headpose() {
    history.push("/posenet")
  }

  const myStyle={
    backgroundImage: 
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}
 //  <img src={logo} alt="logo" />
 // <img src="/background.jpeg" />
 //<Button id="homeButtons" variant="contained" onClick={headpose} color="primary">Check Headpose estimation</Button>

  return (
    <div>
      <AppBar style={{ position: 'fixed', top: 0 }} color="primary">
        <Toolbar />
      </AppBar>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <center>
          <br></br><br></br><br></br><br></br>
          <img src="/background.png" height={250} width={250}/>
          <h3>Welcome to Exameasy</h3>
          <h5>Smart Online Proctoring Examination System</h5>
          <br></br>
          <Button id="homeButtons" style={{ fontSize: '15px' }} variant="contained" size="medium" onClick={handleClick}>Student Login</Button>
          <br></br>
          <Button id="homeButtons" variant="contained" onClick={handleClickAdmin}>Admin Login</Button>
        </center>
      </Box>
    </div>
  );
}

export default MainPage;