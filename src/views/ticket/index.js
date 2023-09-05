import React, { useState } from 'react'
import EmailList from './EmailList'
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Input, Form, FormGroup } from 'reactstrap'
import { MdClose, MdOutlineAttachFile } from 'react-icons/md'
import { FaPencilAlt } from 'react-icons/fa'
import './TicketSystem.css'
import TicketDetail from './ticketDetails/TicketDetail'

const NotificationHub = () => {
    const [selectedEmail, setSelectedEmail] = useState(null)
    const [modal, setModal] = useState(false)

    const handleEmailSelect = (email) => {
        setSelectedEmail(email)
    }

    const addNew = () => {
        setNewTicket(true)
    }

    const handleDelete = () => {

    }
    const closeBtn = (
        <MdClose size={16} className='rounded pointer' onClick={() => setModal(false)} />
    )

    return (
        <Card className="">
            <CardHeader className='border-bottom'>
                <Row className=''>
                    <Col>
                        <Button color='primary' onClick={() => setModal(true)}><FaPencilAlt /> Write</Button>
                        {/* <span className='m-2' onClick={handleDelete}>Delete</span> */}
                    </Col>
                </Row>
            </CardHeader>
            <CardBody className='my-1'>
                <EmailList onSelectEmail={handleEmailSelect} />
                {/* <TicketDetail selectedEmail={selectedEmail} /> */}
            </CardBody>

            {/* ------------------- New Ticket System Start ------------------- */}
            <Modal isOpen={modal} className='modal-dialog position-fixed end-0 modal-content position-absolute bottom-0'>
                <ModalHeader className='d-flex justify-content-between align-items-top' close={closeBtn}>
                    <span>Raise New Ticket</span>
                </ModalHeader>
                <ModalBody>
                    <Row className='my-1 p-0'>
                        <Form>
                            <FormGroup>
                                <Input id="Subject" name="Subject" placeholder="Subject" type="text"
                                />
                            </FormGroup>
                        </Form>
                    </Row>
                    <Row className='my-1 p-0'>
                        <FormGroup>
                            <Input id="Message" name="Message" type="textarea" placeholder='Message'
                            />
                        </FormGroup>
                    </Row>
                    <Row className='m-1'>
                        <Col className='' style={{ minHeight: 200 }}>

                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter className='d-flex justify-content-between'>
                    <Button size='sm' color='primary' onClick={() => setModal(false)} >Send</Button>
                    <input id='file' type="file" name="" className='d-none' />
                    <label htmlFor='file'><MdOutlineAttachFile size={20} className='pointer' /></label>
                </ModalFooter>
            </Modal>
            {/* ------------------- New Ticket System End ------------------- */}
        </Card>
        // <Card>
        //     <CardBody>
        //         <Row>
        //             <Col tag='h3' className='text-uppercase'>Title of the Email Here</Col>
        //         </Row>
        //         <Row>
        //             <Col>
        //                 <Row>
        //                     <Col className='text-uppercase'>
        //                         Profile
        //                     </Col>
        //                     <Col>
        //                         <Row tag='h5' className=''>Name of Sender</Row>
        //                         <Row tag='p' className=''>To, Vijayk, me</Row>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //             <Col>
        //                 <Row>
        //                     <Col tag='p' className=''>
        //                         Aug 11, 2023, 2:39 PM (6 days ago)
        //                     </Col>
        //                     <Col>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //         </Row>
        //         <hr />
        //         <Row className='mx-5 py-2'>
        //             <Col tag='div' >
        //                 <p>Message Body</p>
        //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde molestias sapiente culpa repudiandae quidem et blanditiis tempore, non quia repellat sit consequuntur dolorem aut recusandae animi fugit, veritatis, voluptas obcaecati dolorum nam! Consequatur, nemo repudiandae.</p>
        //             </Col>
        //         </Row>

        //     </CardBody>
        // </Card>
    )
}

export default NotificationHub