import React from "react";
import "./LabDirector.scss";
import camera from "../img/camera.png"
import app from "../img/mobile.png"
import web from "../img/web.png"

export const LabDirector = () => {
    return (
        <div className="LabDirector">
            <div className="Hsipl">
                <img src={camera} href="#" width={'100%'}></img>
                <h>HSIPL</h>      
                </div>
            <div className="App">
                <img src={app} href="#" width={'100%'}></img>
                <h>Mobile</h>
                <h>Application</h>
            </div>
            <div className="Web" >
                <img src={web} href="#" width={'100%'}></img>
                <h>Web</h>
                <h>Development</h>
                
            </div>
            
        </div>
    );
};
