import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import '../TicketSystem.css'
import { FaReply } from 'react-icons/fa'
import Avatar from '@components/avatar'

function TicketDetail({ selectedEmail }) {
  if (!selectedEmail) {
    return (
      <Row className="email-detail-placeholder m-0 card p-1">
        <Col className='p-0 '>
          <Row>
            <Col>
              <Row className='m-0 my-1'>
                <Col tag='h4' className='p-0'>Announcements, Updates, and Recent Posts</Col>
              </Row>
              <Row className='m-0 pt-1'>
                <div className='m-0 d-flex flex-row'>
                  <div><Avatar>Avatar</Avatar></div>
                  <div>
                    <Row className='m-0'>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className='m-0'>Yogesh Kalara</h6>
                          <p className=''>yogeshkalara@cmrsl.net</p>
                        </div>
                        <div>10:56 AM (37 minutes ago)</div>
                      </div>
                    </Row>
                    <Row className='m-0'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Row>
                  </div>
                </div>
              </Row>
              <hr />
              <Row className='m-0 pt-1'>
                <div className='m-0 d-flex flex-row'>
                  <div><Avatar src="/assets/images/CMLogo.png" /></div>
                  <div>
                    <Row className='m-0'>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className='m-0'>CM Galaxy</h6>
                          <p className=''>cmgalaxy@cmrsl.net</p>
                        </div>
                        <div>10:56 AM (37 minutes ago)</div>
                      </div>
                    </Row>
                    <Row className='m-0'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Row>
                  </div>
                </div>
              </Row>
              <hr />
              <Row className='m-0 pt-1'>
                <div className='m-0 d-flex flex-row'>
                  <div><Avatar>Avatar</Avatar></div>
                  <div>
                    <Row className='m-0'>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h6 className='m-0'>Yogesh Kalara</h6>
                          <p className=''>yogeshkalara@cmrsl.net</p>
                        </div>
                        <div>10:56 AM (37 minutes ago)</div>
                      </div>
                    </Row>
                    <Row className='m-0'>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Row>
                  </div>
                </div>
              </Row>
              <Row>
                <Col>
                  <Button color='primary' outline className='rounded-pill'><FaReply /> Reply</Button>
                </Col>
              </Row>
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

