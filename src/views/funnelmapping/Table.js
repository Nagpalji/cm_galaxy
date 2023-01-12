import React from 'react'

const Table = ({data}) => {
    return (
        <>
            <div className='float-right mb-2'>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-primary mr-sm-3">Download</button>
                    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <div className='d-flex justify-content-between my-1'>
                {/*  
                <select className='btn btn-primary btn-sm'>
                    <option className="dropdown-item" href="#">Select</option>
                    <option className="dropdown-item" href="#">Option A</option>
                    <option className="dropdown-item" href="#">Option B</option>
                    <option className="dropdown-item" href="#">Option C</option>
                </select> */}
            </div>
            <table className="table">
                <thead className="thead-muted rounded">
                    <tr>
                        <th scope="col">User IP</th>
                        <th scope="col">Device</th>
                        <th scope="col">Device Model</th>
                        <th scope="col">Operating System</th>
                        <th scope="col">Country</th>
                        <th scope="col">Number of Session Per User</th>
                        <th scope="col">Bounce Rate</th>
                        <th scope="col">Interest</th>
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
                                <th scope="row">{val.ip}</th>
                                <td>{ddevice}</td>
                                <td>{val.user_agent_device_model}</td>
                                <td>{val.user_agent_Os_family}</td>
                                <td>{val.country_name}</td>
                                <td>{''}</td>
                                <td>{''}</td>
                                <td>{val.Keyword_Bucket}</td>
                                </tr>
                                </>
                            )
                        })}
                  
                </tbody>
            </table>
        </>
    )
}
export default Table