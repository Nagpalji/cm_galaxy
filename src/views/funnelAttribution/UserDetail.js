import React, { useState, Fragment } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Modal, ModalBody, ModalHeader, Card, CardBody,  CardHeader, CardTitle} from 'reactstrap'
import Highcharts from "highcharts"
// import PieChart from "highcharts-react-official"
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
        text: 'Vijay Deenanath Chauhan'
    },
    series: [
        {
            data: [1, 2, 3, 4, 5, 6]
        }
    ]
}

function UserDetail(data) {

    return (
        <>
            <Modal size='lg' >
                <ModalHeader toggle={() => setModal(!modal)}>
                    User Detail
                </ModalHeader>
                <ModalBody>
                    <div className='d-flex row'>
                        <div className='d-flex col-lg-6 mb-1'> <span className='fw-bold'>Name: </span><span> Deenanath Chauhan</span></div>
                        <div className='d-flex col-lg-3 mb-1'> <span className='fw-bold'>Mobile: </span><span> +91 9876543210</span></div>
                        <div className='d-flex col-lg-3 mb-1'> <span className='fw-bold'>Gender: </span><span> Male</span></div>
                        <div className='d-flex col-lg-6 mb-1'> <span className='fw-bold'>Email: </span><span> deenanathchauhan@gmail.com</span></div>
                        <div className='d-flex col-lg-3 mb-1'> <span className='fw-bold'>Country: </span><span> India</span></div>
                        <div className='d-flex col-lg-3 mb-1'> <span className='fw-bold'>City: </span><span> Gurgaon</span></div>
                        <div className='d-flex col-lg-3 mb-1'> <span className='fw-bold'>Interest: </span><span> xyz</span></div>
                    </div>
                    <PerfectScrollbar className=''>
                        <table className="table table-success">
                            <thead className="thead rounded">
                                <tr className='bg-success'>
                                    <th className='bg-success text-white' scope="col">Sr. No.</th>
                                    <th className='bg-success text-white' scope="col">Date</th>
                                    <th className='bg-success text-white' scope="col">Source</th>
                                    <th className='bg-success text-white' scope="col">Plateform</th>
                                    <th className='bg-success text-white' scope="col">Visited URL</th>
                                    <th className='bg-success text-white' scope="col">Draft to Cart</th>
                                    <th className='bg-success text-white' scope="col">Transaction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.convertionsData && data?.convertionsData.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <th className='text-black'>{index + 1}</th>
                                                <td className='text-black'>{0}</td>
                                                <td className='text-black'>{0}</td>
                                                <td className='text-black'>{0}</td>
                                                <td className='text-black'>{0}</td>
                                                <td className='text-black'>{0}</td>
                                                <td className='text-black'>{0}</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </PerfectScrollbar>
                </ModalBody>
            </Modal>
            {/* <HighchartsReact
                highcharts={Highcharts}
                options={options}
            /> */}

            {/* <Fragment>
                <Card>
                    <CardHeader>
                        <CardTitle tag='h4'>Demographic</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <PieChart highcharts={Highcharts} options={options} />
                    </CardBody>
                </Card>
            </Fragment> */}
        </>
    )
}

export default UserDetail