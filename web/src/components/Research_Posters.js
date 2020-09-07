import React from 'react'
import "./Research_Posters.scss";
import poster from "../img/Research_Posters/poster.jpg"
import App from "../img/Research_Posters/APP.jpg"
import monitor from "../img/Research_Posters/monitor.jpg"
import hsipl from "../img/Research_Posters/hsipl.png"
import Landslide from "../img/Research_Posters/Landslide.jpg"
import TreeRings from "../img/Research_Posters/TreeRings.jpg"
import hand from "../img/Research_Posters/hand.png"
import yuntech from "../img/Research_Posters/yuntech.png"
import Application from "../img/Research_Posters/Application.png"
import helper from "../img/Research_Posters/helper.png"
const Research_Posters = () => {
    return (
        <div className="Research_Posters" id="Research_Posters">
            <div className="Title">
                <h1>Research Posters</h1>
            </div>
            <div className="Posters">
                <div className="Item">   
                    <h3>A Modified Watershed Algorithm for LiDAR Image Segmentation</h3>
                    <img src={poster} ></img>
                </div>
                <div className="Item">   
                    <h3>校園導覽APP</h3>
                    <img src={App} ></img>
                </div>
                <div className="Item">   
                    <h3>校園通行監視器</h3>
                    <img src={monitor} ></img>
                </div>
                <div className="Item">   
                    <h3>高光譜影像處理</h3>
                    <img src={hsipl} ></img>
                </div>
                <div className="Item">   
                    <h3>Early Landslide Detection and Warning System Using Remote Sensing Imagery</h3>
                    <img src={Landslide} ></img>
                </div>
                <div className="Item">   
                    <h3>Extracting Tree Rings from Disc Bitmap Image</h3>
                    <img src={TreeRings} ></img>
                </div>
                <div className="Item">   
                    <h3>Hand+ 網路佈告欄APP</h3>
                    <img src={hand} ></img>
                </div>
                <div className="Item">   
                    <h3>我是雲科人 - 智慧校園APP</h3>
                    <img src={yuntech} ></img>
                </div>
                <div className="Item">   
                    <h3>手持式高光譜影像及訊號雲端藥品檢測</h3>
                    <img src={Application} ></img>
                </div>
                <div className="Item">   
                    <h3>雲科小幫手海報</h3>
                    <img src={helper} ></img>
                </div>
            </div>

            
            
        </div>
    )
}

export default Research_Posters;
