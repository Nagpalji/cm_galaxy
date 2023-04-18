import { Formik } from "formik"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { ChevronDown } from "react-feather"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import Select from "react-select"

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table
} from "reactstrap"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

export default function DripCampaign() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const [UpdateModal, setUpdateModal] = useState(false)
  const [editData, seteditData] = useState([])

  const handleDelete = async (id) => {
    try {
      const response = await axios.post("http://srvr1px.cyberads.io/notificationDelete/", {id})
      toast.success("Deleted Success")
    } catch (error) {
        toast.error("Deleted Success")
        console.log(error)
    }
  }

  const columns = [
    {
      name: "Campaign Name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
      sortable: true
    },
    {
      name: "Channel",
      selector: (row) => "push notification",
      sortable: true
    },
    {
      name: "Message",
      selector: (row) => row.message
    },
    // {
    //     name: 'Action',
    //     selector: row => <Link to={'/editUser/'} className='btn btn-primary'><FaEdit size={24} className='text-primary' /></Link>
    // },
    {
      name: "Action",
      selector: (row) => (
        <>
            <FaEdit size={24} className="text-primary" onClick={(e) => {
                setUpdateModal(true)
                seteditData(row)
            }} />

             <MdDelete size={24} className="ml-1 text-primary" onClick={(e) => {
                handleDelete(row._id)
            }} />
        </>
    )
        }
  ]

  const option = [
    { value: "1", label: "ToFu" },
    { value: "2", label: "MoFu" },
    { value: "3", label: "BoFu" },
    { value: "4", label: "Existing Customer" }
  ]

  const option01 = [
    { value: "1", label: "Device" },
    { value: "2", label: "OS" },
    { value: "3", label: "Age Group" },
    { value: "4", label: "Gender" }
  ]

  const option02 = [
    { value: "1", label: "Desktop" },
    { value: "2", label: "Tablet" },
    { value: "3", label: "Mobile" },
    { value: "4", label: "TV" }
  ]

  const option1 = [
    { value: "1", label: "Daily" },
    { value: "2", label: "Weekly" },
    { value: "3", label: "Monthly" },
    { value: "4", label: "Twice a Week" },
    { value: "5", label: "Twice a Month" }
  ]
  const option03 = [
    { value: "1", label: "Below 18" },
    { value: "2", label: "18 to 36" },
    { value: "3", label: "37 to 48" }
  ]
  const option04 = [
    { value: "1", label: "Male" },
    { value: "2", label: "Female" }
  ]
  const option05 = [
    { value: "1", label: "android" },
    { value: "2", label: "ubuntu" },
    { value: "3", label: "windows" },
    { value: "4", label: "ios" }
  ]

  const getData = async () => {
    try {
      const response = await axios.post("http://srvr1px.cyberads.io/notificationList/", {brand_name:localStorage.getItem("brand_name")})
      setData(response.data?.data)
      setFilteredData(response.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const result = data.filter((country) => {
      return country.name.toLowerCase().match(search.toLocaleLowerCase())
    })
    setFilteredData(result)
  }, [search])

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
    <ToastContainer />
      <Card>
        <Row className="d-flex justify-content-between p-1">
          <Col lg="6">
            <Row>
              <h3 className="mb-1">Campaign Overview</h3>
            </Row>
          </Col>
          <Col lg="3">
          <Col>
            <Button
            className="mb-1"
            color="primary"
            onClick={() => setModal(true)}
            >
            Add New
            </Button>
        </Col>
          </Col>

  <Col>
    <Input
      type="search"
      placeholder="Search Campaign"
      name="search"
      className="rounded"
      id="searchCampaign"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </Col>
         
        </Row>
      </Card>
      <Row>
        <DataTable
          onHeader
          pagination
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          columns={columns}
          data={filteredData}
          selectableRows
          selectableRowsHighlight
        />
      </Row>
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <Formik
          initialValues={{ name: "", startDate: "", endDate: "", Frequency: "", AudienceType: "", Audience: [], device: "", message: "", url: "" }}
         
          onSubmit={async (values, { setSubmitting }) => {
            try {
                values.brand_name = localStorage.getItem("brand_name")
                const request = await axios.post("http://srvr1px.cyberads.io/notificationSend/", values)
                const response = await request?.data
                toast.success("campaign created")
                window.location.href = ""
            } catch (error) {
                toast.error("unable to create Campaign")
            }
            setSubmitting(false)
          }}
        >
          {({ values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         setFieldValue,
         isSubmitting }) => (
            <Form className="mx-2" onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="" for="campaignName">
                  Campaign Name
                </Label>
                <Input
                  id="campaignName"
                  name="name"
                  placeholder="Campaign Name"
                  type="text"
                  onChange={handleChange}
                />
                <Row>
                  <Col>
                    <Label className="mt-1" for="startDate">
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      placeholder="date placeholder"
                      type="date"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      End Date
                    </Label>
                    <Input
                      id="endDate"
                      name="endDate"
                      placeholder="date placeholder"
                      type="date"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Label className="mt-1" for="frequencyTime">
                  Frequency Time
                </Label>
                <Select
                    onChange={e => {
                        setFieldValue("Frequency", e)
                    }}
                    options={option1}
                    name="Frequency"
                    placeholder="Frequency"
                />

                <Row>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      Audience Type
                    </Label>
                    <Select
                        onChange={e => {
                            setFieldValue("AudienceType", e)
                        }}
                        options={option}
                        name="AudienceType"
                        placeholder="Audience Type"
                    />
                  </Col>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      Audience
                    </Label>
                    <Select
                        isMulti
                        onChange={e => {
                            // console.log(e)
                            setFieldValue("Audience", e)
                        }}
                        options={option01}
                        name="Audience"
                        placeholder="Audience"
                    />
                  </Col>
                  <Row>
                  {values?.Audience && values?.Audience?.map((val) => {
                    return (
                        <>
                            {(val.label === "Age Group") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Age
                                </Label>
                                <Select
                                    isMulti
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("age", e)
                                    }}
                                    options={option03}
                                    name="age"
                                    placeholder="age"
                                />
                            </Col>}
                            {(val.label === "Gender") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Gender
                                </Label>
                                <Select
                                    isMulti
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("gender", e)
                                    }}
                                    options={option04}
                                    name="age"
                                    placeholder="age"
                                />
                            </Col>}
                            {(val.label === "Device") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Device
                                </Label>
                                <Select isMulti
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("device", e)
                                    }}
                                    options={option02}
                                    name="device"
                                    placeholder="device"
                                />
                            </Col>}
                            {(val.label === "OS") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Os
                                </Label>
                                <Select isMulti
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("OS", e)
                                    }}
                                    options={option05}
                                    name="OS"
                                    placeholder="OS"
                                />
                            </Col>}
                        </>
                    )
                  })}
                  </Row>
                  
                </Row>
                <Label className="mt-1" for="message">
                  Message
                </Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  onChange={handleChange}
                />
                <Label className="mt-1" for="url">
                  URL
                </Label>
                <Input id="url" name="url" onChange={handleChange} placeholder="URL" type="url" />
              </FormGroup>
              <button type="submit" className="btn btn-primary align-center justify-content-center" disabled={isSubmitting}>
             Save
           </button>
              {/* <Button color="primary align-center justify-content-center">
                Save
              </Button> */}
            </Form>
          )}
        </Formik>
      </Modal>


      {/* Update Module */}
      <Modal size="md" isOpen={UpdateModal} toggle={() => setUpdateModal(!UpdateModal)}>
        <Formik
          initialValues={{ name: editData?.name, startDate: editData?.startDate, endDate: editData?.endDate, Frequency: editData?.Frequency, AudienceType: editData?.AudienceType, Audience: editData?.Audience, device: editData?.device, message: editData?.message, url: editData?.url, OS: editData?.OS }}
         
          onSubmit={async (values, { setSubmitting }) => {
            try {
                values.brand_name = localStorage.getItem("brand_name")
                values._id = editData?._id
                values.date_created = editData?.date_created
                values.del = editData?.del
                const request = await axios.post("http://srvr1px.cyberads.io/notificationUpdate/", values)
                const response = await request?.data
                toast.success("campaign Updated")
                window.location.href = ""
            } catch (error) {
                toast.error("unable to Update Campaign")
            }
            setSubmitting(false)
          }}
        >
          {({ values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         setFieldValue,
         isSubmitting }) => (
            <Form className="mx-2" onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="" for="campaignName">
                  Campaign Name
                </Label>
                <Input
                value={values.name}
                  id="campaignName"
                  name="name"
                  placeholder="Campaign Name"
                  type="text"
                  onChange={handleChange}
                />
                <Row>
                  <Col>
                    <Label className="mt-1" for="startDate">
                      Start Date
                    </Label>
                    <Input
                value={values.startDate}
                      id="startDate"
                      name="startDate"
                      placeholder="date placeholder"
                      type="date"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      End Date
                    </Label>
                    <Input
                      id="endDate"
                value={values.endDate}
                      name="endDate"
                      placeholder="date placeholder"
                      type="date"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Label className="mt-1" for="frequencyTime">
                  Frequency Time
                </Label>
                <Select
                defaultValue={values.Frequency}
                    onChange={e => {
                        setFieldValue("Frequency", e)
                    }}
                    options={option1}
                    name="Frequency"
                    placeholder="Frequency"
                />

                <Row>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      Audience Type
                    </Label>
                    <Select
                defaultValue={values.AudienceType}

                        onChange={e => {
                            setFieldValue("AudienceType", e)
                        }}
                        options={option}
                        name="AudienceType"
                        placeholder="Audience Type"
                    />
                  </Col>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      Audience
                    </Label>
                    <Select
                        isMulti
                defaultValue={values.Audience}
                        onChange={e => {
                            // console.log(e)
                            setFieldValue("Audience", e)
                        }}
                        options={option01}
                        name="Audience"
                        placeholder="Audience"
                    />
                  </Col>
                  {/* <Col>
                    <Label className="mt-1" for="endDate">
                      Select
                    </Label>
                    <Select
                        isMulti
                        onChange={e => {
                            // console.log(e)
                            setFieldValue("device", e)
                        }}
                        options={option02}
                        name="device"
                        placeholder="device"
                    />
                  </Col> */}
                </Row>
                <Row>
                  {values?.Audience && values?.Audience?.map((val) => {
                    return (
                        <>
                            {(val.label === "Age Group") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Age
                                </Label>
                                <Select
                                    isMulti
                                    defaultValue={editData.age}
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("age", e)
                                    }}
                                    options={option03}
                                    name="age"
                                    placeholder="age"
                                />
                            </Col>}
                            {(val.label === "Gender") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Gender
                                </Label>
                                <Select
                                    isMulti
                defaultValue={editData.gender}
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("gender", e)
                                    }}
                                    options={option04}
                                    name="age"
                                    placeholder="age"
                                />
                            </Col>}
                            {(val.label === "Device") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Device
                                </Label>
                                <Select isMulti
                defaultValue={editData.device}
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("device", e)
                                    }}
                                    options={option02}
                                    name="device"
                                    placeholder="device"
                                />
                            </Col>}
                            {(val.label === "OS") && 
                            <Col>
                                <Label className="mt-1" for="endDate">
                                Os
                                </Label>
                                <Select isMulti
                                defaultValue={editData.OS}
                                    onChange={e => {
                                        // console.log(e)
                                        setFieldValue("OS", e)
                                    }}
                                    options={option05}
                                    name="OS"
                                    placeholder="OS"
                                />
                            </Col>}
                        </>
                    )
                  })}
                  </Row>
                <Label className="mt-1" for="message">
                  Message
                </Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  value={values.message}
                  onChange={handleChange}
                />
                <Label className="mt-1" for="url">
                  URL
                </Label>
                <Input id="url" name="url"   value={values.url} onChange={handleChange} placeholder="URL" type="url" />
              </FormGroup>
              <button type="submit" className="btn btn-primary align-center justify-content-center" disabled={isSubmitting}>
             Update
           </button>
              {/* <Button color="primary align-center justify-content-center">
                Save
              </Button> */}
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}
