import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import '../TicketSystem.css'
import { FaReply } from 'react-icons/fa'

function TicketDetail({ selectedEmail }) {
  if (!selectedEmail) {
    return (
      <Row className="email-detail-placeholder m-0 card p-1">
        <Col className='p-0 '>
          <Row>
            <Col>
              <Row className='m-0 my-1'>
                <Col tag='h4' className='p-0 mb-2'>Announcements, Updates, and Recent Posts</Col>
              </Row>
              <Row className='m-0'>
                <Col className='d-flex'>
                  <div>
                    <h6 className='p-0 m-0'>Yogesh Kalara</h6>
                    <p className='p-0 m-0'>yogeshkalara@cmrsl.net</p>
                    <Row className='m-2'>
                      <Col>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='d-flex'>
                  <img src="/assets/images/CMLogo.png" alt="logo" className='m-1' style={{ height: 30 }} />
                  <div>
                    <h6 className='p-0 m-0'>Yogesh Kalara</h6>
                    <p className='p-0 m-0'>yogeshkalara@cmrsl.net</p>
                    <Row className='my-2'>
                      <Col>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button color='primary' outline className='rounded-pill'><FaReply /> Reply</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  return (
    <div className="email-detail">
      <div className="email-subject">{selectedEmail.subject}</div>
      <div className="email-sender">{selectedEmail.sender}</div>
      <div className="email-date">{selectedEmail.date}</div>
      <div className="email-content">{selectedEmail.content}</div>
      {console.log('hello', selectedEmail)}
    </div>
  )
}

export default TicketDetail

