import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Table = ({ data }) => {

    return (
        <>
            <div className='d-flex justify-content-end'>
                <form className="form-inline my-lg-0">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary m-1" type="submit">Search</button>
                    <button className="btn btn-primary">Download</button>
                </form>
            </div>
            <PerfectScrollbar className='hide1'>
                <table className="table table-warning">
                    <thead className="thead rounded">
                        <tr className='bg-warning'>
                            <th className='bg-warning text-black' scope="col">Sr. No.</th>
                            <th className='bg-warning text-black' scope="col">Country</th>
                            <th className='bg-warning text-black' scope="col">City</th>
                            {/* <th className='bg-warning text-black' scope="col">Source</th> */}
                            <th className='bg-warning text-black' scope="col">Device</th>
                            <th className='bg-warning text-black' scope="col">Model</th>
                            <th className='bg-warning text-black' scope="col">Os</th>
                            {/* <th className='bg-warning text-black' scope="col">Plateform</th> */}
                            {/* <th className='bg-warning text-black' scope="col">Gender</th> */}
                            {/* <th className='bg-warning text-black' scope="col">Reach</th> */}
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
                                        {/* <td className='text-black'>{0}</td> */}
                                        <td className='text-black'>{item?.user_agent_device_brand}</td>
                                        <td className='text-black'>{item?.user_agent_device_model}</td>
                                        <td className='text-black'>{item?.user_agent_Os_family}</td>
                                        {/* <td className='text-black'>{0}</td> */}
                                        {/* <td className='text-black'>{item?.total_price}</td> */}
                                        {/* <td className='text-black'>{item?.total_price}</td> */}
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
            <PerfectScrollbar className='hide2'>
                <table className="table table-primary">
                    <thead className="thead rounded">
                        <tr className='bg-primary'>
                            <th className='bg-primary text-white' scope="col">Sr. No.</th>
                            <th className='bg-primary text-white' scope="col">Country</th>
                            <th className='bg-primary text-white' scope="col">City</th>
                            {/* <th className='bg-primary text-white' scope="col">Source</th> */}
                            <th className='bg-primary text-white' scope="col">Device</th>
                            <th className='bg-primary text-white' scope="col">Model</th>
                            <th className='bg-primary text-white' scope="col">Os</th>
                            <th className='bg-primary text-white' scope="col">Plateform</th>
                            <th className='bg-primary text-white' scope="col">Gender</th>
                            <th className='bg-primary text-white' scope="col">Session</th>
                            <th className='bg-primary text-white' scope="col">Clicks</th>
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
                                        {/* <td className='text-black'>{item?.gateway}</td> */}
                                        <td className='text-black'>{item?.Device}</td>
                                        <td className='text-black'>{item?.order_name}</td>
                                        <td className='text-black'>{item?.OS}</td>
                                        <td className='text-black'>{item?.OS}</td>
                                        <td className='text-black'>{item?.OS}</td>
                                        <td className='text-black'>{item?.Sessions}</td>
                                        <td className='text-black'>{item?.Sessions}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
            <PerfectScrollbar className='hide3'>
                <table className="table table-secondary">
                    <thead className="thead rounded">
                        <tr className='bg-secondary'>
                            <th className='bg-secondary text-white' scope="col">Sr. No.</th>
                            <th className='bg-secondary text-white' scope="col">Email</th>
                            <th className='bg-secondary text-white' scope="col">created_at</th>
                            <th className='bg-secondary text-white' scope="col">Full Name</th>
                            <th className='bg-secondary text-white' scope="col">order_name</th>
                            <th className='bg-secondary text-white' scope="col">total_price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.bofuData && data?.bofuData.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th className='text-black'>{index + 1}</th>
                                        <td className='text-black'>{item?.email}</td>
                                        <td className='text-black'>{item?.created_at}</td>
                                        <td className='text-black'>{item?.first_name} {item?.last_name}</td>
                                        <td className='text-black'>{item?.order_name}</td>
                                        <td className='text-black'>{item?.total_price}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
            <PerfectScrollbar className='hide4'>
                <table className="table table-success">
                    <thead className="thead rounded">
                        <tr className='bg-success'>
                            <th className='bg-success text-white' scope="col">Sr. No.</th>
                            <th className='bg-success text-white' scope="col">Email</th>
                            <th className='bg-success text-white' scope="col">created_at</th>
                            <th className='bg-success text-white' scope="col">gateway</th>
                            <th className='bg-success text-white' scope="col">financial_status</th>
                            <th className='bg-success text-white' scope="col">order_name</th>
                            <th className='bg-success text-white' scope="col">total_price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.convertionsData && data?.convertionsData.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <th className='text-black'>{index + 1}</th>
                                        <td className='text-black'>{item?.email}</td>
                                        <td className='text-black'>{item?.created_at}</td>
                                        <td className='text-black'>{item?.gateway}</td>
                                        <td className='text-black'>{item?.financial_status}</td>
                                        <td className='text-black'>{item?.order_name}</td>
                                        <td className='text-black'>{item?.total_price}</td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </PerfectScrollbar>
        </>
    )
}
export default Table