import { Formik } from "formik"
import React, { useEffect, useState } from "react"
import CustomDropDown from "../CustomDropDown"
import DataTable from "react-data-table-component"
import { ChevronDown } from "react-feather"
import { FaEdit } from "react-icons/fa"
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

  const columns = [
    {
      name: "Campaign Name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "Start Date",
      selector: (row) => row.nativeName,
      sortable: true
    },
    {
      name: "End Date",
      selector: (row) => row.capital,
      sortable: true
    },
    {
      name: "Channel",
      selector: (row) => row.capital,
      sortable: true
    },
    {
      name: "Message",
      selector: (row) => row.capital
    },
    // {
    //     name: 'Action',
    //     selector: row => <Link to={'/editUser/'} className='btn btn-primary'><FaEdit size={24} className='text-primary' /></Link>
    // },
    {
      name: "Action",
      selector: (row) => <FaEdit size={24} className="text-primary" />
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

  const getData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all")
      setData(response.data)
      setFilteredData(response.data)
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
          <Col lg="4">
            <Row>
              <h3 className="mb-1">Campaign Overview</h3>
            </Row>
          </Col>
          <Col lg="4">
            <Row>
              <Col>
                <Button
                  className="mb-1"
                  color="primary"
                  onClick={() => setModal(true)}
                >
                  Add New
                </Button>
              </Col>
              <Col>
                <Button className="mb-1" color="primary">
                  Delete
                </Button>
              </Col>
            </Row>
            <Row>
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
         
          onSubmit={(values, { setSubmitting }) => {
            console.log(values)
            try {
                const request = axios.post("http://srvr1px.cyberads.io/createNotificationCampaign/", values)
                const response = request?.data
                toast.success("campaign created")
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
                  <Col>
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
                  </Col>
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
    </div>
  )
}
