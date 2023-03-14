import React from 'react'
import firebase from "firebase/app";
import { Button } from '@material-ui/core';
import './Results.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    
      <div >
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Face not visible (bursts)</th>
                    <th>Phone detected (bursts)</th>
                    <th>Book detected (bursts)</th>
                    <th>Laptop detected (bursts)</th>
                    <th>Multiple persons detected (bursts)</th>
                    <th>Fullscreen exit (number)</th>
                    <th>Tab Change (number)</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                console.log(data)
                return (
                    <tr className="pool">     
                    <td>{data.sname}</td>
                    <td>{data.semail}</td>
                    <td>{data.face}</td>
                    <td>{data.phone}</td>
                    <td>{data.book}</td>
                    <td>{data.laptop}</td>
                    <td>{data.multiple_face}</td>
                    <td>{data.fullscreen}</td>
                    <td>{data.tab}</td>
                    <td> {<img src={data.photo} width="150px" height="100px"/>}
                    </td>
                    </tr>                 
                );             
                })}
                   
            </tbody>
            
         </table>
     </div>
             <div className="center-block"><Button onClick = {this.GoToAdmin} variant="contained" color="primary"> Return To Admin </Button></div>
    </div>
     
  );
}
}

export default Results;