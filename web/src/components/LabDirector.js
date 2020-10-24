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
                        <h>HyperSpectral<br/>Imaging</h>
                    </div>
                    <div className="Content">
                        <p>We dedicated to design and develop algorithms for multi/hyperspectral, specifically for image classification, and target detection.
                        </p> 
                    </div>     
                </div>
                <div className="App">
                    <div className="Icon">
                        <img src={app} href="#" alt="app"></img>
                        <h>Mobile<br/>Application</h>
                    </div>
                    <div className="Content">
                        <p>We develop the design and function implementation of mobile application.
                        </p>
                    </div>
                </div>
                <div className="Web" >
                    <div className="Icon">
                        <img src={web} href="#" alt="web"></img>
                        <h>Web<br/>Development</h>
                    </div>
                    <div className="Content">
                        <p>We develop the design and function implementation of web pages.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};
