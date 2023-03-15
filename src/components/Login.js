import {React, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import auth from './Auth';
import swal from 'sweetalert';
import { gapi } from "gapi-script";


import { GoogleLogin } from 'react-google-login'
import { Box, AppBar, Toolbar } from '@material-ui/core';

// const client_id = "544104470592-tmud4b78eecjhd58aft6qrg84jfoqq9h.apps.googleusercontent.com"
const client_id = "503971528272-vhrh8mco1rhnl29go92pchpig44h4f20.apps.googleusercontent.com" // ours

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
    swal("Login Failed", "Kindly try again using Google Account", "error");
    //console.log('[Login Success] res:', res);
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

        <meta name="google-signin-client_id" content="503971528272-vhrh8mco1rhnl29go92pchpig44h4f20.apps.googleusercontent.com"></meta>


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