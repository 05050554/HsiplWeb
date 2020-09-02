import React from 'react'
import "./Equipment.scss";
import FX10 from "../img/Equipments/FX10.png"
import FX17 from "../img/Equipments/FX17.png"
import Portable from "../img/Equipments/Portable.png"


const Equipment = () => {
    return (
        <div className="Equipment" id="Equipment">
            <div className="Title">
                <h1>Equipment</h1>
            </div>
            <div className="Item">
                <div className="FX10">
                    <div className="Icon">
                        <img src={FX10} ></img>
                        <h>Hyperspectral Camera FX10</h>
                    </div>
                    <div className="Content">
                        <p>Free wavelength selection from 220 bands 
                            within the camera coverage
                        </p> 
                    </div>     
                </div>
                <div className="FX17">
                    <div className="Icon">
                        <img src={FX17} ></img>
                        <h>Hyperspectral Camera FX17</h>
                    </div>
                    <div className="Content">
                        <p>Free wavelength selection from 224 bands 
                            within the camera coverage
                        </p>
                    </div>
                </div>
                <div className="Sky"  >
                    <div className="Icon">
                        <img src="https://img.icons8.com/carbon-copy/100/000000/drone-with-camera.png" />
                        <h>　Go to sky　</h>
                    </div>
                    <div className="Content">
                        <p>Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky </p>
                    </div>   
                </div>
                <div className="Portable" >
                    <div className="Icon">
                        <img src={Portable} ></img>
                        <h>Portable Device</h>
                    </div>
                    <div className="Content">
                        <p>Portable Device Portable Device Portable Device Portable Device  </p>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Equipment;
