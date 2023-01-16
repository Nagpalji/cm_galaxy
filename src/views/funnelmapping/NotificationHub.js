import React from 'react'
import "./details.css"

const NotificationHub = () => {
    return (
        <div className="container back rounded p-1">
            <div className='d-flex justify-content-between align-item-center py-2'>
                <h1 className='notificationHeading'>Notifications Hub</h1>
                <div className='d-flex'>
                    <div className='mx-1'>
                        <img src="/assets/images/icon/iconRead.png" alt="" />
                    </div>
                    <p className='markAsRead'>Mark as read</p>
                </div>
            </div>
            <div className="line my-2" />
            <div className="rect1 rounded d-flex my-1 p-1">
                <div className="col-1 p-0">
                    <img className='circle' src="" alt="" />
                </div>
                <div className="innerContent">
                    <h3>Monthly Payment Advice is ready. </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
                    <div className='d-flex'>
                        <p className='mr-3 notificationSender'>Sender</p>
                        <p className='mr-3 notificationDate'>28-12-22</p>
                        <p className='notificationTime'>9:19pm</p>
                    </div>
                </div>
            </div>
            <div className="rect1 rounded d-flex my-1 p-1">
                <div className="col-1 p-0">
                    <img className='circle' src="" alt="" />
                </div>
                <div className="innerContent">
                    <h3>Monthly Payment Advice is ready. </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
                    <div className='d-flex'>
                        <p className='mr-3 notificationSender'>Sender</p>
                        <p className='mr-3 notificationDate'>28-12-22</p>
                        <p className='notificationTime'>9:19pm</p>
                    </div>
                </div>
            </div>
            <div className="rect3 rounded d-flex my-1 p-1">
                <div className="col-1 p-0">
                    <img className='circle' src="" alt="" />
                </div>
                <div className="innerContent">
                    <h3>Monthly Payment Advice is ready. </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
                    <div className='d-flex'>
                        <p className='mr-3 notificationSender'>Sender</p>
                        <p className='mr-3 notificationDate'>28-12-22</p>
                        <p className='notificationTime'>9:19pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationHub