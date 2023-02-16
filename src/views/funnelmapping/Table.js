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
            <PerfectScrollbar>
                <table className="table">
                    <thead className="thead-muted rounded">
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">Device</th>
                            <th scope="col">Device Model</th>
                            <th scope="col">Operating System</th>
                            <th scope="col">Country</th>
                            <th scope="col">Number of Session Per User</th>
                            <th scope="col">Bounce Rate</th>
                            {/* <th scope="col">Interest</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((val) => {
                            let ddevice
                            if (val.mob) {
                                ddevice = 'Mobile'
                            } else if (val.tab) {
                                ddevice = 'Tablet'
                            } else if (val.desktop) {
                                ddevice = 'Desktop'
                            }
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{val.ip} - {val.user_agent_Os_family}</th>
                                        <td>{ddevice}</td>
                                        <td>{val.user_agent_device_model}</td>
                                        <td>{val.user_agent_Os_family}</td>
                                        <td>{val.country_name}</td>
                                        <td>{val.Sessions}</td>
                                        <td>{parseFloat(val.Bounce_rate).toFixed(2)}</td>
                                        {/* <td>{val.Keyword_Bucket}</td> */}
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