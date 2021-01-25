import React from 'react'
import "./Equipment.scss";
import FX10 from "../img/Equipments/FX10.png"
import FX17 from "../img/Equipments/FX17.png"
import Sky from "../img/Equipments/sky.png"
import Portable from "../img/Equipments/Portable.png"
import Zmage from "react-zmage";
import FX10_In from "../img/Equipments/FX10-2.png"
import FX17_In from "../img/Equipments/FX17-2.png"


const Equipment = () => {
    return (
        <div className="Equipment" id="Equipment">
            <div className="Title">
                <h1>Equipment</h1>
            </div>
            <div className="Item">
                <div className="card">
                    <div className="Icon">
                        <img src={FX10} alt="FX10" onClick={()=>Zmage.browsing({src:FX10_In})}></img>
                        <h5>Hyperspectral Camera FX10</h5>
                    </div>
                    <div className="Content">
                        {/* <p>Free wavelength selection from 220 bands 
                            within the camera coverage, spectral range between 400-1000 nm.
                        </p>  */}
                    </div>     
                </div>
                <div className="card">
                    <div className="Icon">
                        <img src={FX17} alt="FX17" onClick={()=>Zmage.browsing({src:FX17_In})}></img>
                        <h5>Hyperspectral Camera FX17</h5>
                    </div>
                    <div className="Content">
                        {/* <p>Free wavelength selection from 224 bands 
                            within the camera coverage, spectral range between 900-1700 nm.
                        </p> */}
                    </div>
                </div>
                <div className="card"  >
                    <div className="Icon">
                        <img src={Sky} alt="Sky" />
                        <h5>　Go to sky　</h5>
                    </div>
                    <div className="Content">
                        {/* <p>Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky </p> */}
                    </div>   
                </div>
                <div className="card" >
                    <div className="Icon">
                        <img src={Portable} alt="Portable"></img>
                        <h5>Portable Device</h5>
                    </div>
                    <div className="Content">
                        {/* <p>Portable Device Portable Device Portable Device Portable Device  </p> */}
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Equipment;
