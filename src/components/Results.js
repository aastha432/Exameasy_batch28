import React from 'react'
import firebase from "firebase/app";
import { Button } from '@material-ui/core';
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
      <div class="givecolor">
          <h3>Cheat Score Records</h3>
      </div>
    
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Face not visible</TableCell>
            <TableCell align="right">Phone detected</TableCell>
            <TableCell align="right">Book detected</TableCell>
            <TableCell align="right">Laptop detected</TableCell>
            <TableCell align="right">Multiple persons detected</TableCell>
            <TableCell align="right">Fullscreen exit detected</TableCell>
            <TableCell align="right">Tab Change detected</TableCell>
            <TableCell align="right">Photo</TableCell>
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
              <TableCell align="right">{row.semail}</TableCell>
              <TableCell align="right">{row.face}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.book}</TableCell>
              <TableCell align="right">{row.laptop}</TableCell>
              <TableCell align="right">{row.multiple_face}</TableCell>
              <TableCell align="right">{row.fullscreen}</TableCell>
              <TableCell align="right">{row.tab}</TableCell>
              <TableCell align="right">{<img src={row.photo} width="150px" height="100px"/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            
      <div className="center-block"><Button onClick = {this.GoToAdmin} variant="contained" color="primary">
       Return To Admin </Button>
      </div>
    </div>
     
  );
}
}

export default Results;