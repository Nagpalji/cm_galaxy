import React, { useState } from "react"
import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap"
import CustomDropDown from "../dashboard/ecommerce/CustomDropDown"
import Select, { components } from "react-select"
import { selectThemeColors } from "@utils"
import { toast, ToastContainer } from "react-toastify"
import { Formik } from "formik"

export default function index() {
  const usersData = [
    {
      id: "1",
      name: "Sahil"
    }
  ]
  const PermissionData = [
    {
      id: "1",
      label: "dashboard",
      name: "dashboard"
    },
    {
      id: "2",
      label: "dashboard-2",
      name: "dashboard-2"
    },
    {
      id: "3",
      label: "dashboard-3",
      name: "dashboard-3"
    }
  ]

  const permissionForm = {
    label: "Dashboard",
    path: "/index",
    icon: "Home"
  }
  const [Users, setUsers] = useState(usersData)
  const [Permission, setPermisson] = useState(PermissionData)
  const [selectedUsers, setSelectedUsers] = useState(0)
  const [selectedPermission, setSelectedPermission] = useState([])
  const [Model, setModel] = useState(false)
  const handleUsers = async (e) => {
    setSelectedUsers(e.target.value)
  }
  const handlePermission = async (e) => {
    setSelectedPermission(e)
  }
  const handleClick = async () => {
    const data = {
      user_id: selectedUsers,
      Permission: selectedPermission
    }
    toast.success("Uploaded")
  }
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  return (
    <>
      <ToastContainer />
      <Row>
      <button className="btn btn-primary" onClick={e => setModel(!Model)}>Create new Path</button>
        <select
          className="react-select form-control"
          value={selectedUsers}
          onChange={handleUsers}
          required
        >
          <option value={""}>Choose Users</option>
          {Users.map((id) => {
            return (
              <>
              { (selectedUsers === id.id) ? <option value={id.id} selected>{id.name}</option> : <option value={id.id}>{id.name}</option>
              }
              </>
            )
          })}
        </select>

        {selectedUsers > 0 && (
          <>
          <Select
            defaultValue={selectedPermission}
            onChange={setSelectedPermission}
            options={options}
            isMulti
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
             
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
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
