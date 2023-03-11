//import config from "../config";
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import logo from './../logo.png';
import './../App.css';
//import { Redirect } from "react-router-dom";
//import { AuthContext } from "./Auth";
import Button from '@material-ui/core/Button';


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

 //  <img src={logo} alt="logo" />

  return (
    <div>

      <header className="App-header">
        <p>
          Welcome to Exameasy
        </p>
        <small>
          AI Enabled Virtual Examination System
        </small>

        <Button id="homeButtons" style={{ fontSize: '15px' }} variant="contained" size="medium" onClick={handleClick}>Student Login</Button>
        <Button id="homeButtons" variant="contained" onClick={handleClickAdmin}>Admin Login</Button>
        <Button id="homeButtons" variant="contained" onClick={headpose}>Check Headpose estimation</Button>
      </header>
    </div>
  );
}

export default MainPage;