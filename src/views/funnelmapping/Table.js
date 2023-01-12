import React from 'react'

const Table = () => {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>-</td>
                        <td>@fat</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>Sahil</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Table