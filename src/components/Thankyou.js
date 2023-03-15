import {Button, Box} from '@material-ui/core';
import thanks from "./thanks.png"

const Thankyou = () => {

    function handleClickExit() {
        window.close()
    }

    var checkn = sessionStorage.getItem("checkname")
    var checke = sessionStorage.getItem("checkemail")

    return (
        <div>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <center>
                <br></br><br></br><br></br><br></br>
                <img src={thanks} id="thankyou"  height="400px"/>
                {/* <h2>Cheat Score</h2> */}
                <br/>
                <br/>
                <h3>
                    Name : {checkn}
                    <br/>
                    <br/>
                    
                    Email : {checke}
                </h3>

            
                    {/* <br/> */}

                    {/* Face,Object Detection: {count_facedetect}  */}
                    {/* <br/> */}

                    {/* Fullscreen Cheat Detection: {count_fullscreen} */}
                    {/* <br/> */}

                    {/* Tab Change Detection: {count_tabchange} */}
                    {/* <br/> */}

                    {/* ALT Tab Key Pressed: {countalt} */}
                    {/* <br/> */}
                    <br/>
                    <br/>

                <Button variant="contained" onClick={handleClickExit}>Exit Secure Window</Button>
            </center>
            </Box>
        </div>
    )
}
export default Thankyou;