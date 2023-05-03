import { Formik } from "formik"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { ChevronDown } from "react-feather"
import { FaEdit } from "react-icons/fa"
import { MdDelete, MdClose } from "react-icons/md"
import Select from "react-select"
import { Badge, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from "reactstrap"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import FileBase64 from 'react-file-base64'
import ReactPaginate from "react-paginate"
import { selectThemeColors } from '@utils'

export default function DripCampaign() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [pages, setPages] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [UpdateModal, setUpdateModal] = useState(false)
  const [editData, seteditData] = useState([])

  const handleDelete = async (id) => {
    try {
      const response = await axios.post("https://srvr1px.cyberads.io/notificationDelete/", { id })
      toast.success("Deleted Success")
    } catch (error) {
      toast.error("Deleted Failed")
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
      selector: (row) => "Push Notification",
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
    // { value: "1", label: "ToFu" },
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
    { value: "Desktop", label: "Desktop" },
    { value: "Tablet", label: "Tablet" },
    { value: "Mobile", label: "Mobile" }
    // { value: "4", label: "TV" }
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
    { value: "Android", label: "Android" },
    // { value: "2", label: "ubuntu" },
    { value: "Windows", label: "Windows" },
    { value: "Mac Os X", label: "iOS" }
  ]

  const style = {
    marginTop: '-5px',
    // marginRight: '-10px',
    cursor: 'pointer'
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = pages

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakLabel='...'
        pageCount={count || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={
          'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-2'
        }
      />
    )
  }


  const getData = async () => {
    try {
      const response = await axios.post("https://srvr1px.cyberads.io/notificationList/", { brand_name: localStorage.getItem("brand_name") })
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
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown size={10} />}
          className="react-dataTable"
          paginationComponent={CustomPagination}
          data={filteredData}
          // selectableRows
          // selectableRowsHighlight
          subHeaderComponent={
            <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
              <Row>
                <Col xl='6' className='d-flex align-items-center p-0'>
                  <h5 className="m-0">
                    <span>Campaign Overview</span>
                  </h5>
                </Col>
                <Col
                  xl='6'
                  className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
                >
                  <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
                    <Label className='mb-0' for='search-invoice'>
                      Search:
                    </Label>
                    <Input
                      id='search-invoice'
                      className='ml-50 w-100'
                      type='text'
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <Button.Ripple color='primary' onClick={() => setModal(true)}>
                    Add New
                  </Button.Ripple>
                </Col>
              </Row>
            </div>
          }
        />
      </Card>
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <CardHeader className='d-flex justify-content-between align-items-top'>
          <h5>
            <span>Add New Drip Campaign</span>
          </h5>
          <MdClose size={16} style={style} className='rounded' onClick={() => setModal(false)} />
        </CardHeader>
        <Formik
          initialValues={{ name: "", startDate: "", endDate: "", Frequency: "", AudienceType: "", Audience: [], device: "", message: "", url: "", image: "" }}

          onSubmit={async (values, { setSubmitting }) => {
            try {
              values.brand_name = localStorage.getItem("brand_name")
              const request = await axios.post("https://srvr1px.cyberads.io/notificationSend/", values)
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
            <Form className="m-2" onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="" for="campaignName">
                  Campaign Name
                </Label>
                <Input
                  required
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
                      required
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
                      required
                      id="endDate"
                      name="endDate"
                      placeholder="date placeholder"
                      type="date"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Label className="mt-1">Select Image </Label>
                <img src={values?.image} width={100} height={100} className="mb-1" />
                <div className="mb-1">
                  <FileBase64 className="mb-2" onDone={e => setFieldValue("image", e.base64)} /></div>
                <Label className="mt-1" for="frequencyTime">
                  Frequency Time
                </Label>
                <Select
                  required
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
                      required
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
                      required
                      isMulti
                      onChange={e => {
                        // console.log(e)
                        setFieldValue("Audience", e)
                      }}
                      options={option01}
                      name="Audience"
                      placeholder="Audience"
                      className='react-select'
                      classNamePrefix='select'
                      theme={selectThemeColors}
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
                                className='react-select'
                                classNamePrefix='select'
                                theme={selectThemeColors}
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
                                placeholder="Gender"
                                className='react-select'
                                classNamePrefix='select'
                                theme={selectThemeColors}
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
                                className='react-select'
                                classNamePrefix='select'
                                theme={selectThemeColors}
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
                                className='react-select'
                                classNamePrefix='select'
                                theme={selectThemeColors}
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
                  required
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  onChange={handleChange}
                  maxLength={260}
                />
                <Label className="mt-1" for="url">
                  URL
                </Label>
                <Input required id="url" name="url" onChange={handleChange} placeholder="URL" type="url" />
              </FormGroup>
              <Button.Ripple type="submit" color='primary' className="align-center justify-content-center" disabled={isSubmitting}>
                Save
              </Button.Ripple>
            </Form>
          )}
        </Formik>
      </Modal>


      {/* Update Module */}
      <Modal size="md" isOpen={UpdateModal} toggle={() => setUpdateModal(!UpdateModal)}>
        <Formik
          initialValues={{ name: editData?.name, startDate: editData?.startDate, endDate: editData?.endDate, Frequency: editData?.Frequency, AudienceType: editData?.AudienceType, Audience: editData?.Audience, device: editData?.device, message: editData?.message, url: editData?.url, OS: editData?.OS, image: editData?.image }}

          onSubmit={async (values, { setSubmitting }) => {
            try {
              values.brand_name = localStorage.getItem("brand_name")
              values._id = editData?._id
              values.date_created = editData?.date_created
              values.del = editData?.del
              const request = await axios.post("https://srvr1px.cyberads.io/notificationUpdate/", values)
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
            <Form className="m-2" onSubmit={handleSubmit}>
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
                <Label className="mt-1">Select Image </Label>
                <img src={values?.image} width={100} height={100} className="mb-1" />
                <div className="mb-1"><FileBase64
                  className="mb-2"
                  onDone={e => setFieldValue("image", e.base64)} /></div>
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
                      className='react-select'
                      classNamePrefix='select'
                      theme={selectThemeColors}
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
                              className='react-select'
                              classNamePrefix='select'
                              theme={selectThemeColors}
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
                              className='react-select'
                              classNamePrefix='select'
                              theme={selectThemeColors}
                            />
                          </Col>}
                        {(val.label === "Device") &&
                          <Col>
                            <Label className="mt-1" for="endDate">
                              Device
                            </Label>
                            <Select
                              isMulti
                              defaultValue={editData.device}
                              onChange={e => {
                                // console.log(e)
                                setFieldValue("device", e)
                              }}
                              options={option02}
                              name="device"
                              placeholder="device"
                              className='react-select'
                              classNamePrefix='select'
                              theme={selectThemeColors}
                            />
                          </Col>}
                        {(val.label === "OS") &&
                          <Col>
                            <Label className="mt-1" for="endDate">
                              Os
                            </Label>
                            <Select
                              isMulti
                              defaultValue={editData.OS}
                              onChange={e => {
                                // console.log(e)
                                setFieldValue("OS", e)
                              }}
                              options={option05}
                              name="OS"
                              placeholder="OS"
                              className='react-select'
                              classNamePrefix='select'
                              theme={selectThemeColors}
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
                  maxLength={260}
                />
                <Label className="mt-1" for="url">
                  URL
                </Label>
                <Input id="url" name="url" value={values.url} onChange={handleChange} placeholder="URL" type="url" />
              </FormGroup>
              <Button.Ripple type="submit" color='primary' className="align-center justify-content-center" disabled={isSubmitting}>
                Update
              </Button.Ripple>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  )
}
