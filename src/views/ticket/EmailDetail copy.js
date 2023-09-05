// EmailDetail.js
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function EmailDetail({ selectedEmail }) {
  const [modal, setModal] = useState(true)
 
  const closeBtn = (
    <MdClose size={16} className='rounded' onClick={() => setModal(false)} />
  )

  if (selectedEmail) {
    return (
  
      <div className="email-detail">
        {/* ------------------- New Ticket System Start ------------------- */}
        <Modal isOpen={modal} size='xl' className='modal-dialog'>
          <ModalHeader className='d-flex justify-content-between align-items-top' close={closeBtn}>
            <span>Raise New Ticket</span>
          </ModalHeader>
          <ModalBody>
            <strong className="">{selectedEmail.subject}</strong>
            <div className="email-content">{selectedEmail.content}</div>
            {/* <div className="email-sender">{selectedEmail.sender}</div> */}
            {/* <div className="email-date">{selectedEmail.date}</div> */}
          </ModalBody>
          {/* <ModalFooter className='d-flex justify-content-between'>
            <Button size='sm' color='primary' onClick={() => setModal(false)} >Send</Button>
            <input id='file' type="file" name="" className='d-none' />
            <label htmlFor='file'><MdOutlineAttachFile size={20} /></label>
          </ModalFooter> */}
        </Modal>
        {/* ------------------- New Ticket System End ------------------- */}
      </div>
    )
  }
  return <div className="email-detail-placeholder">Select an email to view</div>

}

export default EmailDetail
