import React from 'react'
import "./Equipment.scss";
import FX10 from "../img/Equipments/FX10.png"
import FX17 from "../img/Equipments/FX17.png"
import SnapScan from "../img/Equipments/SnapScan.png"
import SnapShot from "../img/Equipments/SnapShot.png"
import NIR from "../img/Equipments/NIR.png"
import HP280 from "../img/Equipments/HP280.png"
// import Sky from "../img/Equipments/sky.png"
// import Portable from "../img/Equipments/Portable.png"
// import Zmage from "react-zmage";
import 'antd/dist/antd.css';
import { Image } from 'antd';


import { Container } from '@material-ui/core';

import FX10_1 from "../img/Equipments/FX10-1.png"
import FX10_2 from "../img/Equipments/FX10-2.png"
import FX17_1 from "../img/Equipments/FX17-1.png"
import FX17_2 from "../img/Equipments/FX17-2.png"
import SnapScan_1 from "../img/Equipments/SnapScan-1.png"
import SnapScan_2 from "../img/Equipments/SnapScan-2.png"
import SnapShot_1 from "../img/Equipments/SnapShot-1.png"
import SnapShot_2 from "../img/Equipments/SnapShot-2.png"
import NIR_G1_1 from "../img/Equipments/NIR_G1.png"
import NIR_G1_2 from "../img/Equipments/NIR_G1_Info.png"
import HP280_1 from "../img/Equipments/HP280_1.png"
import HP280_2 from "../img/Equipments/HP280_2.png"

const Equipment = () => {
    return (
        <div className="Equipment" id="Equipment">
            <div className="Title">
                <h1>Equipment</h1>
            </div>
            <div className="Item">
                <div className="card">
                    <div className="Icon"> 
                        <a href="/LearnMore#FX10" >
                        <img src={FX10} alt="FX10"></img>
                    
                        <h5>FX10</h5>
                        </a>
                    </div>
                    <div className="Content">
                        {/* <p>Free wavelength selection from 220 bands 
                            within the camera coverage, spectral range between 400-1000 nm.
                        </p>  */}
                    </div>     
                </div>
                <div className="card">
                    <div className="Icon">
                        <a href="/LearnMore#FX17" >
                        <img src={FX17} alt="FX17"></img>
                        <h5>FX17</h5>
                        </a>
                    </div>
                    <div className="Content">
                        {/* <p>Free wavelength selection from 224 bands 
                            within the camera coverage, spectral range between 900-1700 nm.
                        </p> */}
                    </div>
                </div>
                <div className="card"  >
                    <div className="Icon">
                        <a href="/LearnMore#SnapScan" >
                        <img src={SnapScan} alt="SnapScan" />
                        <h5>SnapScan</h5>
                        </a>
                    </div>
                    <div className="Content">
                        {/* <p>Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky Go to sky </p> */}
                    </div>   
                </div>
                <div className="card" >
                    <div className="Icon">
                        <a href="/LearnMore#SnapShot" >
                        <img src={SnapShot} alt="SnapShot"></img>
                        <h5>SnapShot</h5>
                        </a>
                    </div>
                    <div className="Content">
                        {/* <p>Portable Device Portable Device Portable Device Portable Device  </p> */}
                    </div>   
                </div>
                <div className="card" >
                    <div className="Icon">
                        <a href="/LearnMore#NIR-G1" >
                        <img src={NIR} alt="NIR"></img>
                        <h5>NIR-G1</h5>
                        </a>
                    </div>
                    <div className="Content">
                        {/* <p>Portable Device Portable Device Portable Device Portable Device  </p> */}
                    </div>   
                </div>
                <div className="card" >
                    <div className="Icon">
                        <a href="/LearnMore#HP280_1" >
                        <img src={HP280} alt="HP280"></img>
                        <h5>HP280</h5>
                        </a>
                    </div>
                    <div className="Content">
                        {/* <p>Portable Device Portable Device Portable Device Portable Device  </p> */}
                    </div>   
                </div>
            </div>


            <div className="camera" id="Pushbloom">
                <h2>Pushbloom</h2>

                <h3 id="FX10">Hyperspectral Camera — SPECIM FX10</h3>
                <Container className="container">
                    {/* <img src={FX10_1} alt="FX10_1" onClick={()=>Zmage.browsing({src:FX10_1})}></img> */}
                    <Image src={FX10_1} alt="FX10_1"/>
                    {/* <img src={FX10_2} alt="FX10_2" onClick={()=>Zmage.browsing({src:FX10_2})}></img> */}
                    <Image src={FX10_2} alt="FX10_2"/>
                </Container>

                <h3 id="FX17">Hyperspectral Camera — SPECIM FX17</h3>
                <Container className="container">
                    {/* <img src={FX17_1} alt="FX10_1" onClick={()=>Zmage.browsing({src:FX17_1})}></img> */}
                    <Image src={FX17_1} alt="FX10_1"/>
                    {/* <img src={FX17_2} alt="FX17_2" onClick={()=>Zmage.browsing({src:FX17_2})}></img> */}
                    <Image src={FX17_2} alt="FX17_2"/>
                </Container>

                <h3 id="SnapScan">Hyperspectral Camera — imec SnapScan</h3>
                <Container className="container">
                    {/* <img src={SnapScan_1} alt="SnapScan_1" onClick={()=>Zmage.browsing({src:SnapScan_1})}></img> */}
                    <Image src={SnapScan_1} alt="SnapScan_1"/>
                    {/* <img src={SnapScan_2} alt="SnapScan_2" onClick={()=>Zmage.browsing({src:SnapScan_2})}></img> */}
                    <Image src={SnapScan_2} alt="SnapScan_2"/>
                </Container>

                <h2 className="SnapShot" id="SnapShot">SnapShot</h2>

                <h3 id="SnapShot">Hyperspectral Camera — imec SnapShot</h3>
                <Container className="container">
                    {/* <img src={SnapShot_1} alt="SnapShot_1" onClick={()=>Zmage.browsing({src:SnapShot_1})}></img> */}
                    <Image src={SnapShot_1} alt="SnapShot_1"/>
                    {/* <img src={SnapShot_2} alt="SnapShot_2" onClick={()=>Zmage.browsing({src:SnapShot_2})}></img> */}
                    <Image src={SnapShot_2} alt="SnapShot_2"/>
                </Container>

                <h2 className="Protable" id="Protable">Protable</h2>

                <h3 id="NIR-G1">Near infrared spectrometer — NIRez-G1</h3>
                <Container className="container">
                    {/* <img src={SnapShot_1} alt="SnapShot_1" onClick={()=>Zmage.browsing({src:SnapShot_1})}></img> */}
                    <Image src={NIR_G1_1} alt="NIR_G1_1"/>
                    {/* <img src={SnapShot_2} alt="SnapShot_2" onClick={()=>Zmage.browsing({src:SnapShot_2})}></img> */}
                    <Image src={NIR_G1_2} alt="NIR_G1_2"/>
                </Container>

                <h3 id="HP280_1">Handheld snapshot hyperspectral camera — HP-280</h3>
                <Container className="container">
                    {/* <img src={SnapShot_1} alt="SnapShot_1" onClick={()=>Zmage.browsing({src:SnapShot_1})}></img> */}
                    <Image src={HP280_1} alt="HP280_1"/>
                    {/* <img src={SnapShot_2} alt="SnapShot_2" onClick={()=>Zmage.browsing({src:SnapShot_2})}></img> */}
                    <Image src={HP280_2} alt="HP280_2"/>
                </Container>
            </div>
        </div>
    )
}

export default Equipment;
