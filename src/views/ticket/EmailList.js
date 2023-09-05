// EmailList.js
import React, { useState } from 'react'
import emails from './mockData' // Import the mock data
import { MdDelete, MdOutlineAttachFile } from 'react-icons/md'
import './TicketSystem.css'
import { Link } from 'react-router-dom'

function EmailList({ onSelectEmail }) {

  return (
    <div className="email-list container">
      {emails.map((email) => (
        <div key={email.id} className="email-item card mb-0" onClick={() => onSelectEmail(email)} >
          <div className="d-flex justify-content-between border-bottom py-1">
            <Link to='./ticketDetails/TicketDetail' className=' pointer'><strong className='text-black'>{email.subject} - </strong><span className="card-text text-black"> {email.content.substring(0, 80)} {email.image === '' ? '' : <MdOutlineAttachFile size={18} />}</span></Link>
            <div>{email.date}{' '}&nbsp; <MdDelete size={20} /></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EmailList
