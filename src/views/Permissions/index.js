import React, { useEffect, useState } from "react"
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap"
import CustomDropDown from "../dashboard/ecommerce/CustomDropDown"
import Select, { components } from "react-select"
import { selectThemeColors } from "@utils"
import { toast, ToastContainer } from "react-toastify"
import { Formik } from "formik"
import axios from "axios"
import PermissionTable from "./PermissionTable"

export default function index() {
  // const usersData = [
  //   {
  //     id: "1",
  //     name: "Sahil"
  //   }
  // ]


  const [Users, setUsers] = useState([])
  const [Permission, setPermisson] = useState([])
 
  const [selectedUsers, setSelectedUsers] = useState([])
  const [selectedPermission, setSelectedPermission] = useState([])
 
  const [Model, setModel] = useState(false)

  const UserData = async () => {
    try {
      const request = await axios.get("https://srvr1px.cyberads.io/usersData/")
      const response = await request?.data
      setUsers(response)
    } catch (error) {
      toast.error("unable to load user list")
    }
  }
  
  const PermissionData = async () => {
    try {
      const request = await axios.get("https://srvr1px.cyberads.io/permissionFormRead/")
      const response = await request?.data
      setPermisson(response)
    } catch (error) {
      toast.error("unable to load user list")
    }
  }

  const handleClick = async () => {
    const data = {
      user_id: selectedUsers,
      Permission: selectedPermission
    }
    try {
      const request = await axios.post("https://srvr1px.cyberads.io/permissionAssign/", data)
      const response = await request?.data
      toast.success("Uploaded")
    } catch (error) {
      toast.error("unable to load user list")
    }
  }
 
  useEffect(() => {
    PermissionData()
    UserData()
  }, [])


  return (
    <>
      <ToastContainer />
      <Row>
      <button className="btn btn-primary" onClick={e => setModel(!Model)}>Create new Path</button>
        <Select
          defaultValue={selectedUsers}
          onChange={setSelectedUsers}
          options={Users}
          getOptionLabel ={(option) => option.user_name}
          getOptionValue ={(option) => option._id}
          isMulti
          theme={selectThemeColors}
          name="Users"
          placeholder="Select Users"
        />

        {selectedUsers !== "" && (
          <>
          <Select
            defaultValue={selectedPermission}
            onChange={setSelectedPermission}
            options={Permission}
            isMulti={true}
            theme={selectThemeColors}
            name="Permission"
            placeholder="Select permission"
          />
          </>
        )}

        <button onClick={handleClick} className="btn btn-primary">
          Submit{" "}
        </button>
        <Modal size="lg" isOpen={Model} toggle={() => setModel(!Model)}>
          <ModalHeader toggle={() => setModel(!Model)}>
            Notification
          </ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{ label: "", icon: "", path:"" }}
             
              onSubmit={async (values, { setSubmitting }) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2))
                // }, 400)
                try {
                  // values = [...values, {user_id:SelectedUsers}]
                  const request = await axios.post("https://srvr1px.cyberads.io/permissionForm/", values)
                  const response = await request?.data
                  toast.success("Navigation listed ...")
                  window.location.href = ""
                } catch (error) {
                  toast.error("navigation not listed")
                }
                setSubmitting(false)

              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="label"
                    name="label"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.label}
                    placeholder="label"
                    required
                  />
                  {errors.label && touched.label && errors.label}
                  <input
                    type="path"
                    name="path"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.path}
                    placeholder="path"
                    required

                  />
                  {errors.path && touched.path && errors.path}
                  <input
                    type="icon"
                    name="icon"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.icon}
                    placeholder="icon"
                    required
                  />
                  {errors.icon && touched.icon && errors.icon}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </ModalBody>
        </Modal>
        <PermissionTable data={Permission}/>
        <Row className="laptophideCustomdropdown match-height mt-0 mb-1">
          <Col className="widthdate" xl="12" md="12" xs="12">
            {/* Select User  */}
            <Row>
              {/* <Col className='' md='12' sm='12'> */}
              {/* <h6 className='font-weight-bold'>Product</h6> */}

              {/* </Col> */}
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  )
}
