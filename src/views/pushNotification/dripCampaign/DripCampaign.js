import { Formik } from "formik"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { ChevronDown } from "react-feather"
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import Select from "react-select"
import { Badge, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Spinner, Table } from "reactstrap"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import FileBase64 from 'react-file-base64'
import ReactPaginate from "react-paginate"
import { selectThemeColors } from '@utils'
import Flatpickr from 'react-flatpickr'
import Avatar from '@components/avatar'
import moment from "moment"

export default function DripCampaign() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [pages, setPages] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const [UpdateModal, setUpdateModal] = useState(false)
  const [previewNotificationModal, setPreviewNotificationModal] = useState(false)
  const [campaignDetailModal, setCampaignDetailModal] = useState(false)
  const [editData, seteditData] = useState([])
  const [previewNotification, setPreviewNotification] = useState([])
  const [detailData, setDetailData] = useState([])
  const [report, setReport] = useState([])

  const handleDelete = async (id) => {
    try {
      const response = await axios.post("https://srvr1px.cyberads.io/notificationDelete/", { id })
      toast.success("Deleted Success")
      window.location.reload(false)
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
      sortable: true,
      minWidth: '100px'
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
      selector: (row) => row.message,
      maxWidth: '400px'
    },
    {
      name: "Action",
      maxWidth: '150px',
      selector: (row) => (
        <>
          <a>
            <FaEdit size={20} className="text-warning" color="#625f6e" onClick={(e) => {
              setUpdateModal(true)
              seteditData(row)
            }} />
          </a>
          <a>
            <FaTrash size={20} className="ml-1 text-danger" color="#625f6e" onClick={(e) => {
              handleDelete(row._id)
            }} />
          </a>
          <a>
            <FaEye size={20} className="ml-1 text-success" color="#625f6e" onClick={(e) => {
              setPreviewNotificationModal(true)
              setPreviewNotification(row)
            }} />

          </a>
        </>
      )
    }
  ]

  const detailReport = [
    {
      name: "date",
      selector: (row) => row.created_at,
      sortable: true
    },
    {
      name: "Reach",
      selector: (row) => row.total_notification_send,
      sortable: true,
      minWidth: '100px'
    },
    {
      name: "Click",
      selector: (row) => row.count,
      sortable: true
    },
    {
      name: "Viewability",
      selector: (row) => `${row.percentage.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })} %`,
      sortable: true
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

  const location = [
    { value: "1", label: "Auckland" },
    { value: "2", label: "Canterbury" },
    { value: "3", label: "Waikato" },
    { value: "4", label: "Wellington" },
    { value: "5", label: "Manawatu-Wanganui" }
  ]

  const option1 = [
    { value: "1", label: "Daily" },
    { value: "2", label: "Weekly" },
    { value: "3", label: "Monthly" },
    { value: "4", label: "Twice a Week" },
    { value: "5", label: "Twice a Month" }
  ]
  const ageGroup = [
    { value: "1", label: "18-24" },
    { value: "2", label: "25-34" },
    { value: "3", label: "35-44" },
    { value: "4", label: "45-54" },
    { value: "5", label: "55-65" },
    { value: "6", label: "65+" }
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

  const date = new Date

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

  const reportData = async (Id) => {
    try {
      setReport([])
      const response = await axios.post('https://srvr1px.cyberads.io/notification_report/', { notificationId: Id })
      setReport(response?.data) // Handle the response data here
    } catch (error) {
      console.error(error) // Handle any errors here  
    }
  }


  const getData = async () => {
    try {
      const response = await axios.post("https://srvr1px.cyberads.io/notificationList/", { brand_name: localStorage.getItem("brand_name") })
      setData(response.data?.data)
      // setFilteredData(response.data?.data)
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

  const header = () => {
    return (
      <div className='campaign-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
        <Row>
          <Col xl='6' className='d-flex align-items-center p-0'>
            <h4 className="m-0">
              Campaign Overview
            </h4>
          </Col>
          <Col
            xl='6'
            className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
          >
            <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
              <Label className='mb-0' for='search-campaign'>
                Search:
              </Label>
              <Input
                id='search-campaign'
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
    )
  }

  return (
    <div>
      <ToastContainer />
      <Card>
        <DataTable
          noHeader
          pagination
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown size={10} />}
          className="react-dataTable"
          paginationComponent={CustomPagination}
          data={data}
          // selectableRows
          // selectableRowsHighlight
          subHeader
          subHeaderComponent={header()}
          style={{ whiteSpace: 'wrap' }}
          pointerOnHover
          highlightOnHover
          onRowClicked={(e) => {
            setCampaignDetailModal(true)
            setDetailData(e)
            reportData(e.notification_id)
          }}
          noDataComponent={
            <Spinner color='primary' className='mb-1' />
          }
        />
      </Card>

      {/* Add New-Drip-Compaign */}
      <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
        <CardHeader className='d-flex justify-content-between align-items-top'>
          <h5>
            <span>Add New Drip Campaign</span>
          </h5>
          <MdClose size={16} style={style} className='rounded' onClick={() => setModal(false)} />
        </CardHeader>
        <Formik
          initialValues={{ name: "", startDate: "", endDate: "", Frequency: "", AudienceType: "", Audience: [], device: "", message: "", url: "", image: "", Location: "" }}

          onSubmit={async (values, { setSubmitting }) => {
            try {
              values.brand_name = localStorage.getItem("brand_name")
              const request = await axios.post("https://srvr1px.cyberads.io/notificationSend/", values)
              const response = await request?.data
              toast.success("Campaign Created")
              window.location.href = ""
            } catch (error) {
              toast.error("Unable to Create Campaign")
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
                  Campaign Name <span className='text-danger'>*</span>
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
                      Start Date <span className='text-danger'>*</span>
                    </Label>
                    <Flatpickr
                      id='range-picker'
                      className='form-control'
                      // value={selectedDate}
                      options={{
                        dateFormat: 'Y-m-d'
                      }}
                      onChange={(e) => setFieldValue('startDate', moment(e[0]).format('YYYY-MM-DD'))}
                    />
                  </Col>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      End Date <span className='text-danger'>*</span>
                    </Label>
                    <Flatpickr
                      id='range-picker'
                      className='form-control'
                      // value={selectedDate}
                      options={{
                        dateFormat: 'Y-m-d'
                      }}
                      onChange={(e) => setFieldValue('endDate', moment(e[0]).format('YYYY-MM-DD'))}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label className="mt-1">Select Image </Label>
                    <img src={values?.image} width={100} height={100} className="mb-1" />
                  </Col>
                  <Col className='align-items-center justify-content-center d-flex'>
                    <FileBase64 onDone={e => setFieldValue("image", e.base64)} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label className="mt-1" for="frequencyTime">
                      Frequency Time <span className='text-danger'>*</span>
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
                  </Col>
                  <Col>
                    <Label className="mt-1" for="frequencyTime">
                      Location <span className='text-danger'>*</span>
                    </Label>
                    <Select
                      required
                      onChange={e => {
                        setFieldValue("Location", e)
                      }}
                      options={location}
                      name="Location"
                      placeholder="Location"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      Audience Type <span className='text-danger'>*</span>
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
                      Audience <span className='text-danger'>*</span>
                    </Label>
                    <Select
                      isClearable={false}
                      required
                      isMulti
                      onChange={e => {
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
                                Age <span className='text-danger'>*</span>
                              </Label>
                              <Select
                                isClearable={false}
                                isMulti
                                onChange={e => {
                                  setFieldValue("age", e)
                                }}
                                options={ageGroup}
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
                                Gender <span className='text-danger'>*</span>
                              </Label>
                              <Select
                                isClearable={false}
                                isMulti
                                onChange={e => {
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
                                Device <span className='text-danger'>*</span>
                              </Label>
                              <Select
                                isClearable={false}
                                isMulti
                                onChange={e => {
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
                                OS
                              </Label>
                              <Select
                                isClearable={false}
                                isMulti
                                onChange={e => {
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
                  Message <span className='text-danger'>*</span>
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
                  URL <span className='text-danger'>*</span>
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
        <CardHeader className='d-flex justify-content-between align-items-top'>
          <h5>
            <span>Update Drip Campaign</span>
          </h5>
          <MdClose size={16} style={style} className='rounded' onClick={() => setUpdateModal(false)} />
        </CardHeader>
        <Formik
          initialValues={{ name: editData?.name, startDate: editData?.startDate, endDate: editData?.endDate, Frequency: editData?.Frequency, AudienceType: editData?.AudienceType, Audience: editData?.Audience, device: editData?.device, message: editData?.message, url: editData?.url, OS: editData?.OS, image: editData?.image, Location: editData?.Location }}

          onSubmit={async (values, { setSubmitting }) => {
            try {
              values.brand_name = localStorage.getItem("brand_name")
              values._id = editData?._id
              values.date_created = editData?.date_created
              values.del = editData?.del
              const request = await axios.post("https://srvr1px.cyberads.io/notificationUpdate/", values)
              const response = await request?.data
              toast.success("Campaign Updated")
              window.location.href = ""
            } catch (error) {
              toast.error("Unable to Update Campaign")
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
                  Campaign Name <span className='text-danger'>*</span>
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
                      Start Date <span className='text-danger'>*</span>
                    </Label>
                    <Flatpickr
                      id='range-picker'
                      className='form-control'
                      value={values.startDate}
                      options={{
                        dateFormat: 'Y-m-d'
                      }}
                      onChange={(e) => setFieldValue('startDate', moment(e[0]).format('YYYY-MM-DD'))}
                    />
                  </Col>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      End Date <span className='text-danger'>*</span>
                    </Label>
                    <Flatpickr
                      id='range-picker'
                      className='form-control'
                      // value={selectedDate}
                      value={values.endDate}
                      options={{
                        dateFormat: 'Y-m-d'
                      }}
                      onChange={(e) => setFieldValue('endDate', moment(e[0]).format('YYYY-MM-DD'))}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label className="mt-1">Select Image </Label>
                    <img src={values?.image} width={100} height={100} />
                  </Col>
                  <Col className='d-flex justify-content-center align-items-center'>
                    <FileBase64 onDone={e => setFieldValue("image", e.base64)} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Label className="mt-1" for="frequencyTime">
                      Frequency Time <span className='text-danger'>*</span>
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
                  </Col>
                  <Col>
                    <Label className="mt-1" for="location">
                      Location <span className='text-danger'>*</span>
                    </Label>
                    <Select
                      defaultValue={values.Location}
                      onChange={e => {
                        setFieldValue("Location", e)
                      }}
                      options={location}
                      name="Location"
                      placeholder="Location"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Label className="mt-1" for="endDate">
                      Audience Type <span className='text-danger'>*</span>
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
                      Audience <span className='text-danger'>*</span>
                    </Label>
                    <Select
                      isClearable={false}
                      isMulti
                      defaultValue={values.Audience}
                      onChange={e => {
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
                              Age <span className='text-danger'>*</span>
                            </Label>
                            <Select
                              isClearable={false}
                              isMulti
                              defaultValue={editData.age}
                              onChange={e => {
                                setFieldValue("age", e)
                              }}
                              options={ageGroup}
                              name="age"
                              placeholder="Age"
                              className='react-select'
                              classNamePrefix='select'
                              theme={selectThemeColors}
                            />
                          </Col>}
                        {(val.label === "Gender") &&
                          <Col>
                            <Label className="mt-1" for="endDate">
                              Gender <span className='text-danger'>*</span>
                            </Label>
                            <Select
                              isClearable={false}
                              isMulti
                              defaultValue={editData.gender}
                              onChange={e => {
                                setFieldValue("gender", e)
                              }}
                              options={option04}
                              name="gender"
                              placeholder="Gender"
                              className='react-select'
                              classNamePrefix='select'
                              theme={selectThemeColors}
                            />
                          </Col>}
                        {(val.label === "Device") &&
                          <Col>
                            <Label className="mt-1" for="endDate">
                              Device <span className='text-danger'>*</span>
                            </Label>
                            <Select
                              isClearable={false}
                              isMulti
                              defaultValue={editData.device}
                              onChange={e => {
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
                              Os <span className='text-danger'>*</span>
                            </Label>
                            <Select
                              isClearable={false}
                              isMulti
                              defaultValue={editData.OS}
                              onChange={e => {
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
                  Message <span className='text-danger'>*</span>
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
                  URL <span className='text-danger'>*</span>
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

      {/* Preview Drip-Campaign */}
      <Modal size="md" isOpen={previewNotificationModal} toggle={() => setModal(!previewNotificationModal)}>
        <div className='d-flex justify-content-between align-items-top p-1'>
          <div>
            <Avatar color='light-primary' icon={previewNotification?.image ? <img src={previewNotification?.image} height={30} width={30} /> : ''} />{' '}
            <span className="h5">{previewNotification && previewNotification?.brand_name}</span>
          </div>
          <MdClose size={16} style={style} className='rounded' onClick={() => setPreviewNotificationModal(false)} />
        </div>
        <div className="m-1">
          <a className="text-black" href={previewNotification && previewNotification?.url} target="_blank">
            <p>{previewNotification && previewNotification?.message}</p>
          </a>
          <div>
            <span className="mr-1 text-primary">10:12 PM</span>
          </div>
        </div>
      </Modal>

      {/* Show Campaign Report */}
      <Modal size="xl" isOpen={campaignDetailModal}>
        <CardHeader className='d-flex justify-content-between align-items-top'>
          <h5>
            <span className=''>Drip Campaign Report</span>{" "}
            <a>
              <FaEdit size={20} className="text-warning" color="#625f6e" onClick={(e) => {
                setUpdateModal(true)
                seteditData(detailData)
              }} />
            </a>
          </h5>
          <MdClose size={16} className='rounded' style={style} onClick={() => setCampaignDetailModal(false)} />
        </CardHeader>
        <ModalBody>
          <Row className='mb-1'>
            <Col>
              <strong>Campaign Name:</strong> {report[0]?.title}
            </Col>
            <Col>
              <strong>Start Date:</strong> {report[0]?.startDate}
            </Col>
            <Col>
              <strong>End Date:</strong> {report[0]?.endDate}
            </Col>
          </Row>
          <Row>
            <Col>
              <strong>Audience Type:</strong> {report[0]?.AudienceType}
            </Col>
            <Col>
              <strong>Location:</strong> {report[0]?.Location}
            </Col>
            <Col>
              <strong>Status:</strong> {report[0]?.delete_data === '0' ? 'Active' : 'Inactive' /* 0 for "Active", 1 for "Inactive"  */}
            </Col>
          </Row>
          <hr />
          <Row>
            <DataTable
              noHeader
              pagination
              responsive
              paginationServer
              columns={detailReport}
              sortIcon={<ChevronDown size={10} />}
              className="react-dataTable"
              paginationComponent={CustomPagination}
              data={report}
              // selectableRows
              // selectableRowsHighlight
              // subHeader
              // subHeaderComponent={header()}
              style={{ whiteSpace: 'wrap' }}
              noDataComponent={
                <Spinner color='primary' className='mb-1' />
              }
            />
          </Row>
        </ModalBody>
      </Modal>
    </div >
  )
}
