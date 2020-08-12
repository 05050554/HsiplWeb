import React from "react";
import "./LabDirector.css";
import camera from "../img/camera.png"
import app from "../img/mobile.png"
import web from "../img/web.png"

export const LabDirector = () => {
    return (
        <div className="LabDirector">
            <div className="Hsipl">
                <img src={camera}></img>
                <h>HSIPL</h>      
                </div>
            <div className="App">
                <img src={app}></img>
                <h>Mobile</h>
                <h>Application</h>
            </div>
            <div className="Web">
                <img src={web}></img>
                <h>Web</h>
                <h>Development</h>

            </div>
            
        </div>
    );
};
