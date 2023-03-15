import React, { useState } from 'react';
import firebase from "firebase/app";
import { useHistory , Redirect} from 'react-router-dom'
import { Button } from '@material-ui/core';
import {TextField, Container, AppBar, Box, Toolbar} from '@material-ui/core';

//import { Redirect } from "react-router-dom";
import swal from 'sweetalert';
const CodeCheck = () => {
  const history = useHistory();
    const [inputcode, setInputcode] = useState('');

    function onChangeInputcode(e) {
    setInputcode(e.target.value);
  }
   var code_exist = false;
  
  
    function Getdata() {
        const res = firebase.database().ref("stud_records").once('value',(snapshot)=>{
        snapshot.forEach(function(snapshot) {

            var childKey = snapshot.key;
            //console.log("check childkey", childKey)
            if(childKey === inputcode)
            {
              sessionStorage.setItem("inputcode", inputcode);
              //console.log("Show sucess" ,childKey);
              code_exist = true;
              swal("Success");
              history.push("/results"); 
            }
          }); 
          if(code_exist === false){
            swal("Incorrect Code");
          }        
      });      
    }
  
    // if (localStorage.getItem("currentAdmin")) {
    //     return <Redirect to="/codecheck" />;
    // }
    // else{
    //   return <Redirect to="/"/>;
    // }

    return (
    <div>
      <AppBar style={{ position: 'fixed', top: 0 }} color="primary">
            <Toolbar />
          </AppBar>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <center>
            <br></br><br></br><br></br><br></br><br></br>
          <h5 style={{color:'black'}}> Enter Exam Code</h5><br></br>
          <TextField id="filled-basic" label="Examcode" variant="outlined" onChange={onChangeInputcode} value={inputcode}/>
          <br></br><br></br>
          <Button variant="contained" onClick={Getdata}>Submit</Button></center>
    </Box>
  </div>
  )
}

export default CodeCheck;