import React from 'react'
import './details.css'

function Notification() {
  return (
    <div className="notificationContainer border shadow rounded p-1">
      <div className='d-flex justify-content-between align-item-center'>
        <h3 className=''>Notifications</h3>
        <div className='d-flex justify-content-center align-items-center'>
          <img src="/assets/images/icon/iconNotification.png" alt="" />
        </div>
      </div>
      <div className='d-flex justify-content-between align-item-center pt-1'>
        <p className="unread">Unread<span className='unreadNum text-white bg-dark'> 6&nbsp;</span></p>
        <div className='border'></div>
        <div className='d-flex'>
          <p className="read">Read<span className='readNum bg-dark text-white'> 4&nbsp;</span></p>
        </div>
      </div>
      <hr />
      <div className=" rounded d-flex my-1">
        <img className='notificationCircle rounded-circle border mr-1' src="/assets/images/team/04.jpg" alt="" />
        <div className="">
          <h5 className='text-dark'>Monthly Payment Advice is ready.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
          <div className='d-flex'>
            <p className='mr-2 notificationSender'>Sender</p>
            <p className='mr-2 notificationDate'>28-12-22</p>
            <p className='notificationTime'>9:19pm</p>
          </div>
        </div>
      </div>
      <hr />
      <div className=" rounded d-flex my-1">
        <img className='notificationCircle rounded-circle border mr-1' src="/assets/images/team/04.jpg" alt="" />
        <div className="">
          <h5 className='text-dark'>Monthly Payment Advice is ready.</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
          <div className='d-flex'>
            <p className='mr-2 notificationSender'>Sender</p>
            <p className='mr-2 notificationDate'>28-12-22</p>
            <p className='notificationTime'>9:19pm</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn btn-primary">View All Notifications</button>
      </div>
    </div>
  )
}

export default Notification