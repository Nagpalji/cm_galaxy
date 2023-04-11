import axios from "axios"
import React, { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import { Table } from "reactstrap"
import * as Icons from 'react-icons/fa'
// import * as Icons from 'react-icons';
// import Icon from "react-icons"
export default function PermissionTable({data}) {
  const handleDelete = async (id) => {
    try {
      const request = await axios.post("http://srvr1px.cyberads.io/permissionFormDelete/", {
        id
      })
      const response = await request?.data
      // setPermisson(response)
      toast.success("Deleted SuccessFully ...")
      window.location.href = ""
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <>
      <ToastContainer />
      <Table responsive={true}>
        <thead>
          <tr>
            <th>Sno.</th>
            <th>label</th>
            <th>path</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          
            {data && data.map((val, index) => {
                
              return (
                <>
                <tr>
                  <td>{index}</td>
                  {/* <td>{<Icons.FaHome />} {val.label}</td> */}
                  <td>{val.label}</td>
                  <td>{val.path}</td>
                  <td>
                    <div>
                      <button
                        onClick={(e) => console.log(e)}
                        className="btn btn-primary mr-1"
                      >
                        {" "}
                        edit{" "}
                      </button>
                      <button
                        onClick={(e) => {
                          handleDelete(val?._id)
                        }}
                        className="btn btn-danger"
                      >
                        {" "}
                        Delete{" "}
                      </button>
                    </div>
                  </td>
                  </tr>
                </>
              )
            })}
        </tbody>
      </Table>
    </>
  )
}
