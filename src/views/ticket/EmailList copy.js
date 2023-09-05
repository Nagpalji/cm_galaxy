// EmailList.js
import React, { useState } from 'react'
import emails from './mockData' // Import the mock data
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { MdClose, MdDelete } from 'react-icons/md'
import { FaReply, FaShare } from 'react-icons/fa'

function EmailList() {

  const [modal, setModal] = useState(false)
  const [data, setData] = useState('')

  const closeBtn = (
    <MdClose size={16} className='rounded' onClick={() => setModal(false)} />
  )

  const onSelectEmail = (email) => {
    setModal(true)
    setData(email)
  }

  return (
    <div className="email-list container">
      {emails.map((email) => (
        <div key={email.id} className="email-item card mb-0" onClick={() => onSelectEmail(email)}>
          <div className="d-flex justify-content-between">
            <div><strong className=''>{email.subject} - </strong><span className="card-text"> {email.content.substring(0, 80)} {email.image === '' ? '' : '@'}</span></div>
            <div>{email.date}{' '}&nbsp; <MdDelete size={20} /></div>
          </div>
          <hr />
        </div>
      ))}

      {/* ------------------- Details of Ticket is Start Here ------------------- */}
      <Modal isOpen={modal} fullscreen='true' size="xl" className='modal-dialog'>
        <ModalHeader className='d-flex justify-content-between align-items-top' close={closeBtn}>
          <span>{data.subject}</span>
        </ModalHeader>
        <ModalBody>
          <div className="email-content">{data.content}</div>
          {/* <div className="email-sender">{selectedEmail.sender}</div> */}
          {/* <div className="email-date">{selectedEmail.date}</div> */}
        </ModalBody>
        <ModalFooter>
          <Button outline color='primary'><FaReply /> Reply</Button>
          <Button outline color='primary'><FaShare /> Forward</Button>
        </ModalFooter>
      </Modal>
      {/* ------------------- Details of Ticket is End Here ------------------- */}

    </div>
  )
}

export default EmailList
