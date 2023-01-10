import React, { useState } from 'react'

const Table1 = () => {
    return (
        <>
            
            <div className='d-flex justify-content-between my-1'>

                <select className='btn btn-primary btn-sm'>
                    <option className="dropdown-item" value={''}>Select</option>
                    <option className="dropdown-item" >TOFU</option>
                    <option className="dropdown-item" >BOFU</option>
                    <option className="dropdown-item" >MOFU</option>
                </select>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-primary mr-sm-3">Download</button>
                    <input className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <table className="table">
                <thead className="thead-muted rounded">
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Heat Map Analysis</th>
                        <th scope="col">No. Of Days Last Purchase</th>
                        <th scope="col">Customer Lifetime Value</th>
                        <th scope="col">High ValueCustomer</th>
                        <th scope="col">View Details</th>
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
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>-</td>
                        <td>@fat</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>@cmrsl</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Table1