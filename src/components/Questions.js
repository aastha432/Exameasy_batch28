import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom';
import "./questionpg.css"
import "./formvalid"
//import swal from 'sweetalert';

//Disable Right click
if (document.addEventListener) {
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);
}

export default class Timer extends Component {


  render() {

    //const { minutes, seconds } = this.state
    //const col = { color: 'red' };
    var form_link = sessionStorage.getItem("form_link")
    //console.log(form_link)
    return (
      <div className="timesec">


        {/* {

                    minutes < 1 ? <h1 style={col}>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1> : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }


                {
                    minutes === 0 && seconds === 0 ? endit() : null
                }*/}

        <div className="qsection"><iframe src={form_link} id='form' width="850" height="700" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe >
        </div>
      </div>

    )

  }
}


