import React from 'react'
import firebase from "firebase/app";
import { Button, AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import './Results.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Results extends React.Component {


constructor(props) {
    super(props);
    this.state = {studentslist : []}
    this.threshold = {
      face : 10.00,
      phone : 3.00,
      book : 3.00,
      laptop : 3.00,
      multiple_face : 3.00,
      fullscreen : "Yes",
      tab : "Yes",
    }
    }

  componentDidMount() {
    var  childcode = sessionStorage.getItem("inputcode");
  //console.log("Checktable", childcode);
   
      firebase.database().ref("stud_records").child(childcode).on("value", snapshot => {
     
        let studentlist = [];
        snapshot.forEach(snap => {
        // snap.val() is the dictionary with all your keys/values from the 'stud_records' path
            studentlist.push(snap.val());
            //console.log("Chekit" ,studentlist);
        });
        this.setState({ studentslist: studentlist });
      });     
 }


GoToAdmin() {
        localStorage.clear();
        window.location.href = '/admin';
    }

  

  render(){
  return (
    <div className="MainDiv">
      <AppBar style={{ position: 'fixed', top: 0 }} color="primary">
            <Toolbar />
      </AppBar>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

      <center>
      <br></br><br></br>
      <div class="givecolor">
          <h3>Cheat Score Threshold</h3>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell >Face not visible (s)</TableCell>
            <TableCell align="left">Phone detected (s)</TableCell>
            <TableCell align="left">Book detected (s)</TableCell>
            <TableCell align="left">Laptop detected (s)</TableCell>
            <TableCell align="left">Multiple persons detected (s)</TableCell>
            <TableCell align="left">Fullscreen exit detected (boolean)</TableCell>
            <TableCell align="left">Tab Change detected (boolean)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{this.threshold.face}</TableCell>
              <TableCell align="left">{this.threshold.phone}</TableCell>
              <TableCell align="left">{this.threshold.book}</TableCell>
              <TableCell align="left">{this.threshold.laptop}</TableCell>
              <TableCell align="left">{this.threshold.multiple_face}</TableCell>
              <TableCell align="left">{this.threshold.fullscreen}</TableCell>
              <TableCell align="left">{this.threshold.tab}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

      <br></br><br></br>
      <div class="givecolor">
          <h3>Cheat Score Records</h3>
      </div>
    
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Face not visible (s)</TableCell>
            <TableCell align="left">Phone detected (s)</TableCell>
            <TableCell align="left">Book detected (s)</TableCell>
            <TableCell align="left">Laptop detected (s)</TableCell>
            <TableCell align="left">Multiple persons detected (s)</TableCell>
            <TableCell align="left">Fullscreen exit detected (boolean)</TableCell>
            <TableCell align="left">Tab Change detected (boolean)</TableCell>
            <TableCell align="left">Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.studentslist.map((row) => (
            <TableRow
              key={row.SID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sname}
              </TableCell>
              <TableCell align="left">{row.semail}</TableCell>
              <TableCell align="left" class={(((row.face/60).toFixed(2))<this.threshold.face)?'belowThreshold':'aboveThreshold'}>{(row.face/60).toFixed(2)}</TableCell>
              <TableCell align="left" class={(((row.phone/60).toFixed(2))<this.threshold.phone)?'belowThreshold':'aboveThreshold'}>{(row.phone/60).toFixed(2)}</TableCell>
              <TableCell align="left" class={(((row.book/60).toFixed(2))<this.threshold.book)?'belowThreshold':'aboveThreshold'}>{(row.book/60).toFixed(2)}</TableCell>
              <TableCell align="left" class={(((row.laptop/60).toFixed(2))<this.threshold.laptop)?'belowThreshold':'aboveThreshold'}>{(row.laptop/60).toFixed(2)}</TableCell>
              <TableCell align="left" class={(((row.multiple_face/60).toFixed(2))<this.threshold.multiple_face)?'belowThreshold':'aboveThreshold'}>{(row.multiple_face/60).toFixed(2)}</TableCell>
              <TableCell align="left" class={(row.fullscreen==1)?'aboveThreshold':'belowThreshold'}>{(row.fullscreen==1)?"Yes":"No"}</TableCell>
              <TableCell align="left" class={(row.tab==1)?'aboveThreshold':'belowThreshold'}>{(row.tab==1)?"Yes":"No"}</TableCell>
              <TableCell align="right">{<img src={row.photo} width="150px" height="100px"/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            
      <div className="center-block"><Button onClick = {this.GoToAdmin} variant="contained" color="primary">
       Return To Admin </Button>
      </div>
      </center></Box>
    </div>
     
  );
}
}

export default Results;