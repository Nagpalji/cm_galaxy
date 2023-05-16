import React from 'react'
import { HiDocumentSearch } from 'react-icons/hi'
import PerfectScrollbar from 'react-perfect-scrollbar'
// import "./details.css"

const FunnelMapDetails = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-3 col-md-4 col-sm-12 shadow rounded bg-white justify-content-center p-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img className="h-25 w-25 rounded-circle border" src="/assets/images/team/04.jpg" alt="" />
              <p className=" fw-bold m-0 mt-1">XYZ</p>
              <p className="p-0 m-0">USER-ID</p>
              <hr className="w-100" />
              <p className="fw-bold">
                abcxyz@gmail.com <br />
                +91-xxxxxxxxxx
              </p>
              <hr className="w-100 p-0 m-0" />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className='px-2 py-1 d-flex flex-column '>
                <p className="m-0">Country</p>
                <p className="text-black fw-bold">India</p>
                <p className="m-0">State</p>
                <p className="text-black fw-bold">Haryana</p>
                <p className="m-0">City</p>
                <p className="text-black fw-bold m-0">Gurgaon</p>
              </div>
              <hr className="w-100 p-0 m-0" />
              <div className='px-2 py-1'>
                <p className="m-0">OS</p>
                <p className="text-black fw-bold">Windows</p>
                <p className="m-0">Device</p>
                <p className="text-black fw-bold">HP-xxxxxxxx</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 p-0">
            <div className="shadow rounded p-0">
              <h4 className='bg-primary text-white rounded-top p-2 m-0 d-flex align-items-center justify-content-center'>Heat Map Analysis</h4>
              <PerfectScrollbar className='' style={{ height: '75vh' }}>
                <img src="/assets/images/userDetails/test.jpeg" alt="" className='img-fluid w-100' />
              </PerfectScrollbar>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-lg-3 col-md-3 col-sm-12 bg-white shadow rounded">
            <div className="d-flex align-items-center p-1">
              <HiDocumentSearch size={30} />
              <p className="m-0">Interest:</p>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="button" className="btn btn-primary btn-sm" >Expand</button>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 bg-white shadow rounded d-flex justify-content-between">
            <div className="d-flex align-items-center p-1">
              <HiDocumentSearch size={30} />
              <p className="m-0">Ordered Goods:</p>
            </div>
            <hr className="" style={{ height: '75%', width: 1 }} />
            <div className="d-flex align-items-center p-1">
              <HiDocumentSearch size={30} />
              <p className="m-0">Last Purchased:</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FunnelMapDetails