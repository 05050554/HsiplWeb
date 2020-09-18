import React from "react";
import "./LabDirector.scss";
import camera from "../img/LabDirector/camera.png"
import app from "../img/LabDirector/mobile.png"
import web from "../img/LabDirector/web.png"

export const LabDirector = () => {
    return (
        <div className="LabDirector" id="LabDirector">
            <div className="Background">
                <div className="Hsipl">
                    <div className="Icon">
                        <img src={camera} href="#" alt="camera"></img>
                        <h>HSIPL<br></br>　</h>
                    </div>
                    <div className="Content">
                        <p>HSIPL is dedicated to design and 
                            develop algorithms for multi/hyperspectral,
                            medical and satellite images, 
                            specifically for image classification, 
                            endmember finding and target detection.
                        </p> 
                    </div>     
                </div>
                <div className="App">
                    <div className="Icon">
                        <img src={app} href="#" alt="app"></img>
                        <h>Mobile<br></br>Application</h>
                    </div>
                    <div className="Content">
                        <p>HSIPL is dedicated to design and 
                            develop algorithms for multi/hyperspectral,
                            medical and satellite images, 
                            specifically for image classification, 
                            endmember finding and target detection.
                        </p>
                    </div>
                </div>
                <div className="Web" >
                    <div className="Icon">
                        <img src={web} href="#" alt="web"></img>
                        <h>Web<br></br>Development</h>
                    </div>
                    <div className="Content">
                        <p>HSIPL is dedicated to design and 
                            develop algorithms for multi/hyperspectral,
                            medical and satellite images, 
                            specifically for image classification, 
                            endmember finding and target detection.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
