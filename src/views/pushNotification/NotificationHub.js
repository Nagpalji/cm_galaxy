import React from 'react'
import * as FaIcons from 'react-icons/fa'
import "./details.css"

const NotificationHub = () => {
    return (
        <div className="bg-white shadow rounded p-2">
            <div className='d-flex justify-content-between align-item-center'>
                <h2 className='font-weight-bold'>Notifications Hub</h2>
                <div className='d-flex'>
                    <div className='mx-1'>
                        <FaIcons.FaCheckDouble className='text-primary' />
                    </div>
                    <p className='text-primary'>Mark as read</p>
                </div>
            </div>
            <hr className="my-2" />
            <div className="rect1 row rounded d-flex flex-xl-row flex-sm-column flex-xs-column my-1 p-1 border border-primary">
                <div className="col-1 p-0">
                    <img className='circle rounded-circle border border-primary' src="/assets/images/team/04.jpg" alt="" />
                </div>
                <div className="innerContent">
                    <h4 className="text-black">Monthly Payment Advice is ready. </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
                    <div className='d-flex'>
                        <p className='pr-1 notificationSender'>Sender</p>
                        <p className='pr-1 notificationDate'>28-12-22</p>
                        <p className='notificationTime'>9:19pm</p>
                    </div>
                </div>
            </div>
            <div className="rect1 row rounded d-flex flex-xl-row flex-sm-column flex-xs-column my-1 p-1 border border-primary">
                <div className="col-1 p-0">
                    <img className='circle rounded-circle border border-primary' src="/assets/images/team/04.jpg" alt="" />
                </div>
                <div className="innerContent">
                    <h4 className="text-black">Monthly Payment Advice is ready. </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos </p>
                    <div className='d-flex'>
                        <p className='mr-3 notificationSender'>Sender</p>
                        <p className='mr-3 notificationDate'>28-12-22</p>
                        <p className='notificationTime'>9:19pm</p>
                    </div>
                </div>
            </div>
            <div className="rect3 row rounded d-flex flex-xl-row flex-sm-column flex-xs-column my-1 p-1 border">
                <div className="col-1 p-0">
                    <img className='circle rounded-circle border border-primary' src="/assets/images/team/04.jpg" alt="" />
                </div>
                <div className="innerContent">
                    <h4 className="text-black">Monthly Payment Advice is ready. </h4>
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