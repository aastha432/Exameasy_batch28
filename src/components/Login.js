import {React, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import auth from './Auth';
import swal from 'sweetalert';
import { gapi } from "gapi-script";


import { GoogleLogin } from 'react-google-login'
import { Box, AppBar, Toolbar } from '@material-ui/core';

// 503971528272-gaeb14hrlk2t0rh55hl3p4t1g51v3bi5.apps.googleusercontent.com - exameasy
// 544380108275-kr6k0rarc4hv5r352o4hlnmjkofr970e.apps.googleusercontent.com - exameasy_28
const client_id = "544380108275-kr6k0rarc4hv5r352o4hlnmjkofr970e.apps.googleusercontent.com" 

const LoginPage = () => {


  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }


  const onSuccess = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //console.log('Name: ' + profile.getName());
    var checkname = profile.getName();
    sessionStorage.setItem("checkname", checkname);
    //console.log('Image URL: ' + profile.getImageUrl());
    //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var checkemail = profile.getEmail();
    sessionStorage.setItem("checkemail", checkemail);

    auth.login(() => {
      history.push("/systemcheck")
    });
  };

  const onFaliure = (res) => {
    console.log("Error in logging in - ")
    console.log(res)
    swal("Login Failed", res.error, "error");
  };

  const history = useHistory();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: client_id,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  return (
    <div>
      <head>
        <script src="accounts.google.com/gsi/client" async defer></script>

        <meta name="google-signin-client_id" content="544380108275-kr6k0rarc4hv5r352o4hlnmjkofr970e.apps.googleusercontent.com"></meta>


      </head>
      <AppBar style={{ position: 'fixed', top: 0 }} color="primary">
            <Toolbar />
      </AppBar>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

      <center>
      <header>
        <br></br><br></br><br></br><br></br><br></br>
        <h3>Login</h3>
        <h5>
          Login using only your Gmail account
        </h5>
        <br></br><br></br>
        <GoogleLogin

          clientId={client_id}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFaliure}
          prompt="select_account"
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}
        />
      </header></center></Box>
    </div>
  );
}

export default LoginPage;