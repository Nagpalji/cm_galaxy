import { useContext, useState } from "react"
import {selectThemeColors, kFormatter } from "@utils"
import Avatar from "@components/avatar"
import AvatarGroup from "@components/avatar-group"
import jsonImg from "@src/assets/images/icons/json.png"
import InvoiceList from "@src/views/apps/invoice/list"
import ceo from "@src/assets/images/portrait/small/avatar-s-9.jpg"
import { ThemeColors } from "@src/utility/context/ThemeColors"
import Select, { components } from 'react-select' 
import {
  Row,
  Button, Form, Input, Label, Table, CustomInput,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Media
} from "reactstrap"
import OrdersReceived from "@src/views/ui-elements/cards/statistics/OrdersReceived"
import SubscribersGained from "@src/views/ui-elements/cards/statistics/ActiveUsers"

import "@styles/react/libs/charts/apex-charts.scss"

const LMSAccounts = () => {
  const { colors } = useContext(ThemeColors)
  const [fields, setfields] = useState({
    name:"",
    site_url:"",
    location:"",
    global_domain:"",
    category:[]
  })
  const handleChange = (e) => {
    setfields({
      [e.target.name]: e.target.value
    })
  }
  
  const category = [
    {
        label:"capgate finance",
        value:"capgate_finance"
    },
    {
        label:"star finance",
        value:"star_finance"
    },
    {
        label:"fiestaa admin",
        value:"fiestaa_admin"
    },
    {
        label:"education link house",
        value:"education_link_house"
    }
  ]
  const domainType = [
    {
        label:"capgate finance",
        value:"capgate_finance"
    },
    {
        label:"star finance",
        value:"star_finance"
    },
    {
        label:"fiestaa admin",
        value:"fiestaa_admin"
    },
    {
        label:"education link house",
        value:"education_link_house"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <div id="dashboard-analytics">
     <Card>
      <CardHeader>
        <CardTitle tag='h4'>Account</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col sm='12'>
              <FormGroup>
            <Label for="Name">Enter Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Account Holder Name"
              onChange = {handleChange}
              value = {fields?.name}
            //   defaultValue={userData && userData.brand_name}
            />
          </FormGroup>
            </Col>
            <Col sm='12'>
            <FormGroup>
            <Label for="email">Site URL</Label>
            <Input
              type="text"
              name="site_url"
              id="site_url"
              onChange = {handleChange}
              placeholder="Enter Your Site Url"
              value={fields?.site_url}
            //   defaultValue={userData && userData.email}
            />
          </FormGroup>
            </Col>
            <Col sm='12'>
            <FormGroup>
            <Label for="role">Is This Your Global Domain:</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              name='global_domain'
              onChange = {(e) => {
                setfields({...fields, global_domain:e})
              }}
              options={[
                {
                    label:"true",
                    value:"true"
                },
                {
                    label:"false",
                    value:"false"
                }
              ]}
              defaultValue={fields?.global_domain?.label}
              className='react-select'
              placeholder='Select Location'
              classNamePrefix='select'
            />
          </FormGroup>
            </Col>
            <Col sm='12'>
            <FormGroup>
            <Label for="role">category:</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name='category'
              options={category}
              defaultValue={fields?.category}
              className='react-select'
              onChange={(e) => {
                const category = {...fields?.category, e}
                setfields({...fields, category })
              }}
              placeholder='Domain Type'
              classNamePrefix='select'
            />
          </FormGroup>
            </Col>
            <Col sm='12'>
            <FormGroup>
            <Label for="role">Select Location:</Label>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              name='location'
              options={[
                {
                    label:"true",
                    value:"true"
                },
                {
                    label:"false",
                    value:"false"
                }
              ]}
              defaultValue={fields?.location}
              className='react-select'
              onChange={(e) => {
                setfields({...fields, location:e})
              }}
              placeholder='Select Location'
              classNamePrefix='select'
            />
          </FormGroup>
            </Col>
            <Col sm='12'>
            <FormGroup>
            {/* <Select
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name='colors'
              options={domainType}
              defaultValue={domainType}
              className='react-select'
              onChange={{}}
              placeholder='Domain Type'
              classNamePrefix='select'
            /> */}
          </FormGroup>
            </Col>
            <Col sm='12'>
              <FormGroup className='d-flex mb-0'>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={handleSubmit}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
      {/* <Row>
        <Col md="6" sm="6">
         
        </Col>

        
        <Col md="6" sm="6">
          
        </Col>

        <Col md="6" sm="6">
         
        </Col>
        
        <Col md="6" sm="6">
          
        </Col>
        <Col md="6" sm="6">
          
        </Col>
        <Col md="6" sm="6">
          
        </Col>

        <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
          <Button.Ripple
            className="mb-1 mb-sm-0 mr-0 mr-sm-1"
            type="submit"
            color="primary"
          >
            Add Account
          </Button.Ripple>
          <Button.Ripple color="danger" href="/apps/user/list">
            Cancel
          </Button.Ripple>
        </Col>
      </Row> */}
    </div>
  )
}

export default LMSAccounts
