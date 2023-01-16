import React from 'react'
import "./details.css"

const FunnelMappingDetails = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="profile rounded d-flex flex-column col-md-3">
          <div className="rounded d-flex justify-content-center align-items-center flex-column">
            <img className="imageDetail rounded-circle m-1" src="/assets/images/team/04.jpg" alt="avatar" />
            <p className='userNameDetail m-0 p-0'>XYZ</p>
            <p className='userIdDetail m-0 p-0'>USER-ID</p>
            <div className="line1 m-1"></div>
            <p className="emailPhoneDetail m-0 p-0">abcxyz@gmail.com</p>
            <p className="emailPhoneDetail m-0 p-0">+91-xxxxxxxxxx</p>
            <div className="line2 m-1"></div>
            <div className="">
              <p className="p m-0 p-0">Country </p>
              <p className="p5">India</p>
              <p className="p m-0 p-0">State</p>
              <p className="p5">Haryana</p>
              <p className="p m-0 p-0">City </p>
              <p className="p5">Gurgaon </p>
              <div className="line3"></div>
              <p className="p m-0 p-0">OS</p>
              <p className="p7">Windows</p>
              <p className="p m-0 p-0">Device</p>
              <p className="p7">HP-xxxxxxxx </p>
            </div>
          </div>
        </div>
        <div className='row col-md-8 d-flex flex-column'>
          <div className="heatmap">
            <div className="top">Heat Map Analysis</div>
          </div>
          <div className="interest">
            <img src="/assets/images/userDetails/Package Search.png" alt="" />
            <p>Interest:</p>
          </div>
          <div className="goods">
            <div className="c-line"></div>
            <img src="Buy.png" alt="" />
            <p1>Ordered Goods:</p1>
            <div className="purchased">
              <img src="/assets/images/userDetails/60 Seconds.png" alt="" />
              <p2>Last Purchased:</p2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FunnelMappingDetails