import React, { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Redirect } from 'react-router-dom'
import { Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap'
import UserDetail from './UserDetail'
import TablerChart from './conversion/TablerChart'
import CircleChart from './conversion/CircleChart'
import axios from 'axios'

const Table = ({ data, selectedCategory }) => {

    const [modal, setModal] = useState(false)
    const [dateWiseProductPurchase, setDateWiseProductPurchase] = useState([])
    const [dateWiseSessionAndTime, setDateWiseSessionAndTime] = useState([])
    const [customerData, setCustomerData] = useState({})
    const [pieChartProductPurchase, setPieChartProductPurchase] = useState({})

    const userDetail = (userEmail, orderId) => {
        setModal(true)

        const brand_name = localStorage.getItem('brand_name')

        const userInfo = {
            order_id: orderId,
            brand: brand_name
        }

        fetch('https://srvr1px.cyberads.io/userCycle/', {      // ---- API for Conversion-User Details ----
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                setDateWiseProductPurchase(data.dateWiseProductPurchase)
                setDateWiseSessionAndTime(data.dateWiseSessionAndTime)
                setCustomerData(data.customerInfo)
                setPieChartProductPurchase(data.pieChartProductPurchase)
            })
    }

    function IsJsonString(str) {
        try {
            const json = JSON.parse(str)
            return (typeof json === 'object')
        } catch (e) {
            return false
        }
    }
    let brand
    if (IsJsonString(localStorage.getItem("brand_name"))) {
        brand = JSON.parse(localStorage.getItem("brand_name"))
    } else {
        brand = localStorage.getItem("brand_name")
    }

    const downloadHandle = async () => {
        const request = await axios.post("https://srvr1px.cyberads.io/getexcelData/", { type: selectedCategory, brand })
        const response = await request.data
        window.location.href = response?.url
    }

    const data0 = [
        ['draftItems', 99],
        ['orderItems', 251]
    ]

    const data1 = [
        ['Product Views 1', 103],
        ['Product Views 2', 115],
        ['Product Views 3', 135],
        ['Product Views 4', 181],
        ['Product Views 5', 111],
        ['Product Views 4', 181],
        ['Product Views 5', 111],
        ['Product Views 6', 191]
    ]


    return (
        <>
            <div className='d-flex justify-content-end'>
                <form className="form-inline my-lg-0">
                    <button className="mb-1 btn btn-primary" onClick={downloadHandle}>Download</button>
                </form>
            </div>
            {/* -- ToFu Start Here -- */}
            <PerfectScrollbar className='hide1 d-none funneltable'>
                <table className="table table-warning">
                    <thead className="thead rounded">
                        <tr className='bg-warning'>
                            <th className='bg-warning text-black' scope="col">Sr. No.</th>
                            <th className='bg-warning text-black' scope="col">Country</th>
                            <th className='bg-warning text-black' scope="col">City</th>
                            <th className='bg-warning text-black' scope="col">Device</th>
                            <th className='bg-warning text-black' scope="col">Model</th>
                            <th className='bg-warning text-black' scope="col">Os</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.tofuData && data?.tofuData.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th className='text-black'>{index + 1}</th>
                                        <td className='text-black'>{item?.country_name}</td>
                                        <td className='text-black'>{item?.city_name}</td>
                                        <td className='text-black'>{item?.user_agent_device_brand}</td>
                                        <td className='text-black'>{item?.user_agent_device_model}</td>
                                        <td className='text-black'>{item?.user_agent_Os_family}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
            {/* -- ToFu End Here -- */}

            {/* -- MoFu Start Here -- */}
            <PerfectScrollbar className='hide2 d-none funneltable'>
                <table className="table table-primary">
                    <thead className="thead rounded">
                        <tr className='bg-primary'>
                            <th className='bg-primary text-white' scope="col">Sr. No.</th>
                            <th className='bg-primary text-white' scope="col">Country</th>
                            <th className='bg-primary text-white' scope="col">City</th>
                            <th className='bg-primary text-white' scope="col">Source Medium</th>
                            <th className='bg-primary text-white' scope="col">Device</th>
                            <th className='bg-primary text-white' scope="col">Model</th>
                            <th className='bg-primary text-white' scope="col">Os</th>
                            <th className='bg-primary text-white' scope="col">Session</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.mofuData && data?.mofuData.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th className='text-black'>{index + 1}</th>
                                        <td className='text-black'>{item?.Country}</td>
                                        <td className='text-black'>{item?.City}</td>
                                        <td className='text-black'>{item?.source_medium}</td>
                                        <td className='text-black'>{item?.Device?.charAt(0).toUpperCase() + item?.Device?.slice(1)}</td>
                                        <td className='text-black'>{item?.device_model}</td>
                                        <td className='text-black'>{item?.OS}</td>
                                        <td className='text-black'>{item?.Sessions}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
            {/* -- MoFu End Here -- */}

            {/* -- BoFu Start Here -- */}
            <PerfectScrollbar className='hide3 d-none funneltable'>
                <table className="table table-secondary">
                    <thead className="thead rounded">
                        <tr className='bg-secondary'>
                            <th className='bg-secondary text-white' scope="col">Sr. No.</th>
                            <th className='bg-secondary text-white' scope="col">Email</th>
                            <th className='bg-secondary text-white' scope="col">created at</th>
                            <th className='bg-secondary text-white' scope="col">source</th>
                            <th className='bg-secondary text-white' scope="col">Full Name</th>
                            <th className='bg-secondary text-white' scope="col">order name</th>
                            <th className='bg-secondary text-white' scope="col">total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.bofuData && data?.bofuData.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th className='text-black'>{index + 1}</th>
                                        <td className='text-black'>{item?.email}</td>
                                        <td className='text-black text-nowrap'>{item?.created_at}</td>
                                        <td className='text-black'>{item?.source === "" ? 'Organic' : item?.source?.charAt(0).toUpperCase() + item?.source?.slice(1)}</td>
                                        <td className='text-black text-nowrap'>{item?.first_name} {item?.last_name}</td>
                                        <td className='text-black'>{item?.order_name}</td>
                                        <td className='text-black'>{item?.total_price}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
            {/* -- BoFu Start Here -- */}

            {/* -- Conversion Start Here -- */}
            <PerfectScrollbar className='hide4 d-none funneltable'>
                <table className="table table-success">
                    <thead className="thead rounded">
                        <tr className='bg-success'>
                            <th className='bg-success text-white' scope="col">Sr. No.</th>
                            <th className='bg-success text-white' scope="col">Email</th>
                            <th className='bg-success text-white' scope="col">First Source</th>
                            <th className='bg-success text-white' scope="col">Finale Source</th>
                            <th className='bg-success text-white' scope="col">gateway</th>
                            <th className='bg-success text-white' scope="col">financial status</th>
                            <th className='bg-success text-white' scope="col">order name</th>
                            <th className='bg-success text-white' scope="col">total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.convertionsData && data?.convertionsData.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th className='text-black'>{index + 1}</th>
                                        <td className='text-black' onClick={() => userDetail(item?.email, item?.order_id)}><a>{item?.email}</a></td>
                                        <td className='text-black'>{item?.firstSource === "" ? 'Organic' : item?.firstSource?.charAt(0).toUpperCase() + item?.firstSource?.slice(1)}</td>
                                        <td className='text-black'>{item?.source === "" ? 'Organic' : item?.source?.charAt(0).toUpperCase() + item?.source?.slice(1)}</td>
                                        <td className='text-black'>{item?.gateway}</td>
                                        <td className='text-black'>{item?.financial_status?.charAt(0).toUpperCase() + item?.financial_status?.slice(1)}</td>
                                        <td className='text-black'>{item?.order_name}</td>
                                        <td className='text-black'>{item?.total_price}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>

                <Modal size='xl' isOpen={modal} toggle={() => setModal(!modal)} >
                    <ModalHeader toggle={() => setModal(!modal)}>
                        User Detail
                    </ModalHeader>
                    <ModalBody>
                        <div className='d-flex row'>
                            <div className='d-flex col-4 mb-1'> <span className='fw-bold'>Name: </span><span>&nbsp; {customerData?.firstName} {customerData?.lastName}</span></div>
                            <div className='d-flex col-3 mb-1'> <span className='fw-bold'>Gender: </span><span>&nbsp; {customerData?.gender}</span></div>
                            <div className='d-flex col-2 mb-1'> <span className='fw-bold'>Age: </span><span>&nbsp; 0</span></div>
                            <div className='d-flex col-3 mb-1'> <span className='fw-bold'>Mobile: </span><span>&nbsp; {customerData?.phoneNo}</span></div>
                            <div className='d-flex col-4 mb-1'> <span className='fw-bold'>Email: </span><span>&nbsp; {customerData?.email}</span></div>
                            <div className='d-flex col-3 mb-1'> <span className='fw-bold'>Income: </span><span>&nbsp; 0</span></div>
                            <div className='d-flex col-2 mb-1'> <span className='fw-bold'>Country: </span><span>&nbsp; {customerData?.country}</span></div>
                            <div className='d-flex col-3 mb-1'> <span className='fw-bold'>City: </span><span>&nbsp; {customerData?.city}</span></div>
                            <div className='d-flex col-4 mb-1'> <span className='fw-bold'>Address: </span><span>&nbsp; {customerData?.address1} {customerData?.address2}</span></div>
                            <div className='d-flex col-3 mb-1'> <span className='fw-bold'>Interest: </span><span>&nbsp; 0</span></div>
                        </div>
                        <PerfectScrollbar className=''>
                            <Row>
                                <Col>
                                    <TablerChart
                                        title='Date wise  Page per Session and time spend'
                                        titleTextLeft=''
                                        titleTextRight='time spend'
                                        series={dateWiseSessionAndTime?.map((e) => { return (e?.session) })}
                                        categories={dateWiseSessionAndTime?.map((e) => { return (e?.created_at) })}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TablerChart
                                        title='Date wise Products Purchase By Value'
                                        // titleTextLeft='Total Price'
                                        titleTextLeft=''
                                        titleTextRight='Total Price'
                                        series={dateWiseProductPurchase?.map((e) => { return (e?.total_price) })}
                                        categories={dateWiseProductPurchase?.map((e) => { return (e?.created_at) })}
                                    />
                                    {console.log(dateWiseProductPurchase)}
                                </Col>
                                <Col>
                                    <CircleChart
                                        title='Product Views VS Product Purchases'
                                        seriesName=''
                                        seriesData={pieChartProductPurchase}
                                    />
                                </Col>
                            </Row>
                        </PerfectScrollbar>
                    </ModalBody>
                </Modal>

                <UserDetail />

            </PerfectScrollbar>
            {/* -- Conversion End Here -- */}
        </>
    )
}
export default Table