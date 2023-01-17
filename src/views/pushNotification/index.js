import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import Templete1 from './Templete1'


const ChartContainer1 = () => {

    return (

        <>
            <Row className="match-height">
                <Col xs="12">
                    <Templete1 />
                </Col>
            </Row>
        </>
    )
}
export default ChartContainer1