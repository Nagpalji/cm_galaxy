import React from 'react'
import { Row, Col } from 'reactstrap'
import Form from './Form'
import NotificationHub from '../../@core/layouts/components/navbar/NotificationHub'
// import Test from './Test'
import DripCampaign from './dripCampaign/DripCampaign'

const ChartContainer1 = () => {

    return (
        <>
            <Row className="match-height">
                <Col xs="12">
                    <div className='d-flex row justify-content-around'>
                        {/* <Form /> */}
                        {/* <NotificationHub /> */}
                        {/* <Test /> */}
                        <DripCampaign />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ChartContainer1