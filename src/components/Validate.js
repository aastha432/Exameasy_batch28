import { Button } from '@material-ui/core';
import React from 'react'
import Webcam from "react-webcam";
//import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import './validate.css';
import { Container, Row, Col } from 'react-bootstrap'
import { AppBar, Box, Toolbar} from '@material-ui/core';


const ValidatePage = () => {
  var buttonfield = true;
  //Disable Right click
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }
  // document.addEventListener("visibilitychange", handleVisibilityChange, false);
  //for capturing image
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    sessionStorage.setItem("imageSrc", imageSrc);
  }, [webcamRef, setImgSrc]);

  //image as base64
  //console.log(imgSrc);

  if (imgSrc) {
    buttonfield = false;
  }


  const history = useHistory();

  // /* View in fullscreen */
  // function openFullscreen() {
  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  //     history.push("/instructions")
  //   } else if (elem.webkitRequestFullscreen) { /* Safari */
  //     elem.webkitRequestFullscreen();
  //     history.push("/instructions")
  //   } else if (elem.msRequestFullscreen) { /* IE11 */
  //     elem.msRequestFullscreen();
  //     history.push("/instructions")
  //   }
  // }
  function handleClick() {
    history.push("/systemcheck");
  }
  return (
  <div>
    <AppBar style={{ position: 'fixed', top: 0 }} color="primary">
            <Toolbar />
          </AppBar>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <center>
    <br></br><br></br><br></br><br></br><br></br>
    <center>

      <p ><b>Instructions to Follow:</b></p>
      <li >The lighting in the room must be bright enough to be considered “daylight” quality. Overhead lighting is preferred.</li>

    </center>
    <Container fluid>
      <Row>
        <Col sm={6} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <center><Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          /></center>

        </Col>
        <Col sm={6}>
          <center>
            {imgSrc && (
              <img
                src={imgSrc}
              />
            )}</center>

        </Col>
      </Row>
    </Container>

    <Button id="validateButtons" variant="contained" onClick={capture}>Capture Photo</Button>
              <br></br>
    <Button id="validateButtons" disabled={buttonfield} variant="contained" onClick={handleClick}>Confirm Validation</Button>
  </center></Box>
  </div>
  )
}

export default ValidatePage;