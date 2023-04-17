import React, { Fragment, useEffect, useState } from 'react'
import { Badge, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap'
import { FaEdit } from 'react-icons/fa'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { ChevronDown } from 'react-feather'
import CustomDropDown from '../CustomDropDown'
import { Link } from 'react-router-dom'

function DripCampaign() {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all')
            setData(response.data)
            setFilteredData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            name: 'Campaign Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: row => row.nativeName,
            sortable: true
        },
        {
            name: 'End Date',
            selector: row => row.capital,
            sortable: true
        },
        {
            name: 'Channel',
            selector: row => row.capital,
            sortable: true
        },
        {
            name: 'Message',
            selector: row => row.capital
        },
        // {
        //     name: 'Action',
        //     selector: row => <Link to={'/editUser/'} className='btn btn-primary'><FaEdit size={24} className='text-primary' /></Link>
        // },
        {
            name: 'Action',
            selector: row => <FaEdit size={24} className='text-primary' />
        }
    ]
    
        const option = [
            { value: '1', label: 'ToFu' },
            { value: '2', label: 'MoFu' },
            { value: '3', label: 'BoFu' },
            { value: '4', label: 'Existing Customer' }
        ]

    const option01 = [
        { value: '1', label: 'Device' },
        { value: '2', label: 'OS' },
        { value: '3', label: 'Age Group' },
        { value: '4', label: 'Gender' }
    ]

    const option02 = [
        { value: '1', label: 'Desktop' },
        { value: '2', label: 'Tablet' },
        { value: '3', label: 'Mobile' },
        { value: '4', label: 'TV' }
    ]

    const option1 = [
        { value: '1', label: 'Daily' },
        { value: '2', label: 'Weekly' },
        { value: '3', label: 'Monthly' },
        { value: '4', label: 'Twice a Week' },
        { value: '5', label: 'Twice a Month' }
    ]

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const result = data.filter(country => {
            return country.name.toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilteredData(result)
    }, [search])

    return (
        <Fragment>
            <Card>
                <Row className='d-flex justify-content-between p-1'>
                    <Col lg='4'>
                        <Row>
                            <h3 className='mb-1'>Campaign Overview</h3>
                        </Row>
                        {/* <Row>
                            <Col lg='3'>
                                All{' '}
                                <Badge color="primary rounded-circle">
                                    14
                                </Badge>
                            </Col>
                            <Col lg='2' className='p-0'>
                                Live{' '}
                                <Badge color="success rounded-circle">
                                    8
                                </Badge>
                            </Col>
                            <Col>
                                Inactive{' '}
                                <Badge color="warning rounded-circle">
                                    6
                                </Badge>
                            </Col>
                            <Col>
                                Error{' '}
                                <Badge color="primary rounded-circle">
                                    3
                                </Badge>
                            </Col>
                        </Row> */}
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Col>
                                <Button
                                    className='mb-1'
                                    color="primary"
                                    onClick={() => setModal(true)}
                                >
                                    Add New
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    className='mb-1'
                                    color="primary"
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input
                                    type='search'
                                    placeholder="Search Campaign"
                                    name="search"
                                    className='rounded'
                                    id="searchCampaign"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <DataTable
                        onHeader
                        pagination
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10} />}
                        columns={columns}
                        data={filteredData}
                        selectableRows
                        selectableRowsHighlight
                    />
                </Row>
                {/* <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Campaign Name</th>
                                <th className='text-nowrap'>Start Date</th>
                                <th className='text-nowrap'>End Date</th>
                                <th>Channel</th>
                                <th>Message</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='align-middle'>
                                    <Input
                                        type='checkbox'
                                        className='p-1'
                                    />
                                </td>
                                <td>Lorem, ipsum dolor sit amet elit. Vitae</td>
                                <td className='text-nowrap'>24-04-2023</td>
                                <td className='text-nowrap'>30-04-2023</td>
                                <td>Push Notification</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi numquam adipisci dolorem eaque</td>
                                <td>
                                    <FaEdit 
                                        size={24}
                                        className='text-primary'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='align-middle'>
                                    <Input
                                        type='checkbox'
                                        className='p-1'
                                    />
                                </td>
                                <td>Lorem, ipsum dolor sit amet elit. Vitae</td>
                                <td className='text-nowrap'>24-04-2023</td>
                                <td className='text-nowrap'>30-04-2023</td>
                                <td>Push Notification</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi numquam adipisci dolorem eaque</td>
                                <td>
                                    <FaEdit 
                                        size={24}
                                        className='text-primary'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='align-middle'>
                                    <Input
                                        type='checkbox'
                                        className='p-1'
                                    />
                                </td>
                                <td>Lorem, ipsum dolor sit amet elit. Vitae</td>
                                <td className='text-nowrap'>24-04-2023</td>
                                <td className='text-nowrap'>30-04-2023</td>
                                <td>Push Notification</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi numquam adipisci dolorem eaque</td>
                                <td>
                                    <FaEdit 
                                        size={24}
                                        className='text-primary'
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='align-middle'>
                                    <Input
                                        type='checkbox'
                                        className='p-1'
                                    />
                                </td>
                                <td>Lorem, ipsum dolor sit amet elit. Vitae</td>
                                <td className='text-nowrap'>24-04-2023</td>
                                <td className='text-nowrap'>30-04-2023</td>
                                <td>Push Notification</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto excepturi numquam adipisci dolorem eaque</td>
                                <td>
                                    <FaEdit 
                                        size={24}
                                        className='text-primary'
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </Table> */}
                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)} >
                    <ModalHeader toggle={() => setModal(!modal)}>
                        Create New Drip Campaign
                    </ModalHeader>
                    <ModalBody>
                        <Form className='mx-2'>
                            <FormGroup>
                                <Label className='' for="campaignName">Campaign Name</Label>
                                <Input
                                    id="campaignName"
                                    name="campaignName"
                                    placeholder="Campaign Name"
                                    type="text"
                                />
                                <Row>
                                    <Col>
                                        <Label className='mt-1' for="startDate">Start Date</Label>
                                        <Input
                                            id="startDate"
                                            name="startDate"
                                            placeholder="date placeholder"
                                            type="date"
                                        />
                                    </Col>
                                    <Col>
                                        <Label className='mt-1' for="endDate">End Date</Label>
                                        <Input
                                            id="endDate"
                                            name="endDate"
                                            placeholder="date placeholder"
                                            type="date"
                                        />
                                    </Col>
                                </Row>
                                <Label className='mt-1' for="frequencyTime">Frequency Time</Label>
                                <CustomDropDown
                                    placeholder='Frequency Time'
                                    options={option1}
                                    multiSelect={false}
                                />
                                <Row>
                                    <Col>
                                        <Label className='mt-1' for="endDate">Audience Type</Label>
                                        <CustomDropDown
                                            placeholder='Select'
                                            options={option}
                                            multiSelect={false}
                                        />
                                    </Col>
                                    <Col>
                                        <Label className='mt-1' for="endDate">Audience</Label>
                                        <CustomDropDown
                                            placeholder='Select'
                                            options={option01}
                                            multiSelect={true}
                                        />
                                    </Col>
                                    <Col>
                                        <Label className='mt-1' for="endDate">Select</Label>
                                        <CustomDropDown
                                            placeholder='Select'
                                            options={option02}
                                            multiSelect={false}
                                        />
                                    </Col>
                                </Row>
                                <Label className='mt-1' for="message">Message</Label>
                                <Input
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    type="textarea"
                                />
                                <Label className='mt-1' for="url">URL</Label>
                                <Input
                                    id="url"
                                    name="url"
                                    placeholder="URL"
                                    type="url"
                                />

                            </FormGroup>
                            <Button color='primary align-center justify-content-center'>Save</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Card>
        </Fragment>
    )
}

export default DripCampaign