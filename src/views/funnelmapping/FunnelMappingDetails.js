import React from 'react'
import "./details.css"
const  FunnelMappingDetails = () => {
  return (
    <>
      <div class="sidebar"></div>
    <div class="topbar"></div>
    <div class="profile">
        <div class="circleinside"></div>
        <div class="circleoutside"></div>
        <p1>XYZ</p1>
        <p2>USER-ID</p2>
        <div class="line1"></div>
        <div class="line2"></div>
        <p3>mail@abcxyz@gmail.com <br />+91-xxxxxxxxxx</p3>
        <p4>Country <br /> State <br /> City </p4>
        <p5>India <br /> Haryana <br /> Gurgaon </p5>
        <div class="line3"></div>
        <p6>OS <br /> Device</p6>
        <p7>Windows <br /> HP-xxxxxxxx </p7>
    </div>
    <div class="heatmap">
        <div class="top1">Heat Map Analysis</div>
    </div>
    <div class="interest">
        <img src="/assets/images/userDetails/Package Search.png" alt="" />
        <p>Interest:</p>
    </div>
    <div class="goods">
        <div class="c-line"></div>
        <img src="Buy.png" alt="" />
        <p1>Ordered Goods:</p1>
            <div class="purchased">
                <img src="/assets/images/userDetails/60 Seconds.png" alt="" />
                <p2>Last Purchased:</p2>
            </div>
    </div>
    </>
  )
}

export default FunnelMappingDetails