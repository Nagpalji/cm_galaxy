import React from 'react'

const Table2 = () => {
    return (
        <>
            <div className='d-flex justify-content-between my-1'>
 
                <select className='btn btn-primary btn-sm'>
                    <option className="dropdown-item" href="#">Select</option>
                    <option className="dropdown-item" href="#">Option B</option>
                    <option className="dropdown-item" href="#">Option C</option>
                    <option className="dropdown-item" href="#">Option D</option>
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
                        <th scope="col">Avg. Sessions</th>
                        <th scope="col">Pages Per Session</th>
                        <th scope="col">Avg. Time Per Session</th>
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
export default Table2