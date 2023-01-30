import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import Form from './Form'
import NotificationHub from '../../@core/layouts/components/navbar/NotificationHub'

const ChartContainer1 = () => {

    return (
        <>
            <Row className="match-height">
                <Col xs="12">
                    <div className='d-flex row justify-content-around'>
                        <Form />
                        {/* <NotificationHub /> */}
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ChartContainer1