import React from 'react'

function Notification() {
  return (
    <div className="container notificationContainer border">
      <div className='d-flex justify-content-between align-item-center py-2'>
        <h1 className=''>Notifications</h1>
        <div className='d-flex'>
          <div className='mx-1'>
            <img src="/assets/images/icon/iconNotification.png" alt="" />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-between align-item-center py-2'>
        <u className='d-flex'>
          <p className="unread">Unread<span className='unreadNum text-white bg-dark'> 6&nbsp;</span></p>
        </u>
        <div className='border'></div>
        <div className='d-flex'>
          <p className="read">Read</p>
          <p className="readNum"><span className='readNum bg-dark text-white'>&nbsp;4&nbsp;</span></p>
        </div>
      </div>
      <div className=" rounded d-flex my-1">
        <div className="p-0">
          <img className='notificationCircle rounded-circle border' src="/assets/images/team/04.jpg" alt="" />
        </div>
        <div className="">
          <h3 className='notificationHeading'>Monthly Payment Advice is ready.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
          <div className='d-flex'>
            <p className='mr-3 notificationSender'>Sender</p>
            <p className='mr-3 notificationDate'>28-12-22</p>
            <p className='notificationTime'>9:19pm</p>
          </div>
        </div>
        <hr />
      </div>
      <div className=" rounded d-flex my-1">
        <div className="p-0">
          <img className='notificationCircle rounded-circle border' src="/assets/images/team/04.jpg" alt="" />
        </div>
        <div className="">
          <h3 className='notificationHeading'>Monthly Payment Advice is ready.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
          <div className='d-flex'>
            <p className='mr-3 notificationSender'>Sender</p>
            <p className='mr-3 notificationDate'>28-12-22</p>
            <p className='notificationTime'>9:19pm</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Notification