import React from 'react'
import "./Equipment.scss";
import FX10 from "../img/Equipments/FX10.png"
import FX17 from "../img/Equipments/FX17.png"
import Sky from "../img/Equipments/sky.png"
import Portable from "../img/Equipments/Portable.png"
import Zmage from "react-zmage";

import { Container } from '@material-ui/core';

import FX10_1 from "../img/Equipments/FX10-1.png"
import FX10_2 from "../img/Equipments/FX10-2.png"
import FX17_1 from "../img/Equipments/FX17-1.png"
import FX17_2 from "../img/Equipments/FX17-2.png"
import SnapScan_1 from "../img/Equipments/SnapScan-1.png"
import SnapScan_2 from "../img/Equipments/SnapScan-2.png"
import SnapShot_1 from "../img/Equipments/SnapShot-1.png"
import SnapShot_2 from "../img/Equipments/SnapShot-2.png"

const Equipment = () => {
    return (
        <div className="Equipment" id="Equipment">
            <div className="Title">
                <h1>Equipment</h1>
            </div>
            <div className="Item">
                <div className="card">
                    <div className="Icon">
                        <img src={FX10} alt="FX10"></img>
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
                        <img src={FX17} alt="FX17"></img>
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


            <div className="camera" id="Linescan">
                <h2>Line Scan</h2>

                <h3>Hyperspectral Camera - SPECIM FX10</h3>
                <Container className="container">
                    <img src={FX10_1} alt="FX10_1" onClick={()=>Zmage.browsing({src:FX10_1})}></img>
                    <img src={FX10_2} alt="FX10_2" onClick={()=>Zmage.browsing({src:FX10_2})}></img>
                </Container>

                <h3>Hyperspectral Camera - SPECIM FX17</h3>
                <Container className="container">
                    <img src={FX17_1} alt="FX10_1" onClick={()=>Zmage.browsing({src:FX17_1})}></img>
                    <img src={FX17_2} alt="FX17_2" onClick={()=>Zmage.browsing({src:FX17_2})}></img>
                </Container>

                <h3>Hyperspectral Camera - SnapScan</h3>
                <Container className="container">
                    <img src={SnapScan_1} alt="SnapScan_1" onClick={()=>Zmage.browsing({src:SnapScan_1})}></img>
                    <img src={SnapScan_2} alt="SnapScan_2" onClick={()=>Zmage.browsing({src:SnapScan_2})}></img>
                </Container>

                <h2 id="Protable">Protable</h2>

                <h3>Hyperspectral Camera - SnapShot</h3>
                <Container className="container">
                    <img src={SnapShot_1} alt="SnapShot_1" onClick={()=>Zmage.browsing({src:SnapShot_1})}></img>
                    <img src={SnapShot_2} alt="SnapShot_2" onClick={()=>Zmage.browsing({src:SnapShot_2})}></img>
                </Container>

                
            </div>
        </div>
    )
}

export default Equipment;
