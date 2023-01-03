// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2, Mail } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

// const url = 'https://srvr1px.cyberads.io/adword_leadrate/'
// let sample
// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   localStorage.setItem("manager_names", JSON.stringify(out))
// })
// .catch(err => { throw err })

// const manager_names = localStorage.getItem('manager_names')
// localStorage.removeItem('manager_names')
// const manager_names1 = JSON.parse(manager_names)
const url = 'https://srvr1px.cyberads.io/selectmanager/'
let sample
fetch(url)
  .then(res => res.json())
  .then((out) => {
    localStorage.setItem("manager_names", JSON.stringify(out))
  })
  .catch(err => { throw err })

const manager_names = localStorage.getItem('manager_names')
// localStorage.removeItem('manager_names')
const manager_names1 = JSON.parse(manager_names)
const UserAccountTab = ({ selectedUser }) => {
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)
  const [name, setName] = useState("")
  const [mobile, setmobile] = useState("")
  const [email, setEmail] = useState("")

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Update user image on mount or change
  useEffect(() => {
    if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
      setUserData(selectedUser)
      if (selectedUser.avatar.length) {
        return setImg(selectedUser.avatar)
      } else {
        return setImg(null)
      }
    }
  }, [selectedUser])

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '50px',
            width: '62px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='50'
          width='62'
        />
      )
    }
  }
  function handleSubmitCustom(e) {
    e.preventDefault()
    const fet = 'https://srvr1px.cyberads.io/updater/?user_name='

    const username = document.getElementById('email').value
    const mobile_no = document.getElementById('mobile').value

    const id1 = JSON.stringify(selectedUser.id)
    const m = "&mobile_no="
    const e2 = "&id="
    const assigned = "&assigned="
    const assignedmanager = document.getElementById('manager').value
    const assignedbrand = "&assignedbrand="
    const assignedbrandname = document.getElementById('custbrand').value
    // const s = "&status="
    fetch(fet + username + m + mobile_no + e2 + id1 + assigned + assignedmanager + assignedbrand + assignedbrandname,
      {
        method: 'GET'

      }).then(res => res.json())
      .then(
        (result) => {


          if (result.status === 200) {
            //alert("Recovery link is send on email.")
            alert("Updated successfully")

          } else {
            alert(result.status)
          }

        },
        (error) => {
          //setError({ error })
        }
      )

  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          {/* {renderUserAvatar()} */}
          <Media className='mt-50' body>
            <h4 style={{ marginTop: 11 }}>{selectedUser.fullName} </h4>
            <div className='d-flex flex-wrap mt-1 px-0'>
              {/* <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                <span className='d-none d-sm-block'>Change</span>
                <span className='d-block d-sm-none'>
                  <Edit size={14} />
                </span>
                <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
              </Button.Ripple> */}

              {/* <Button.Ripple color='primary'>
                <span className='d-none d-sm-block'>Remove</span>
                <span className='d-block d-sm-none'>
                  <Trash2 size={14} />
                </span>
              </Button.Ripple> */}
            </div>
          </Media>
        </Media>
      </Col>

      <Col sm='12'>
        <Form onSubmit={handleSubmitCustom}>
          <Row>
            <Col md='6' sm='6'>
              <FormGroup>
                <Label for='custbrand'>Brand Name</Label>
                <Input type='text' id='custbrand' placeholder='Enter Your User Name' readOnly defaultValue={userData && userData.brand_name} />
              </FormGroup>
            </Col>

            {/* <Col md='6' sm='12'>
              <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='text' id='password' placeholder='Enter Your Password' defaultValue={userData && userData.password} />
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='confirm-password'> Confirm Password</Label>
                <Input type='text' id='confirmpassword' placeholder='Enter Your Confirm Password' defaultValue={userData && userData.confirmpassword} />
              </FormGroup>
            </Col> */}

            {/* <Col md='6' sm='12'>
              <FormGroup>
                <Label for='first-name'>First Name</Label>
                <Input type='text' id='firstname' placeholder='Enter Your First Name' defaultValue={userData && userData.firstname} />
              </FormGroup>
            </Col> */}

            {/* <Col md='6' sm='12'>
              <FormGroup>
                <Label for='last-name'>Last Name</Label>
                <Input type='text' id='lastname' placeholder='Enter Your Last Name' defaultValue={userData && userData.lastname} />
              </FormGroup>
            </Col> */}

            <Col md='6' sm='6'>
              <FormGroup>
                <Label for='email'>Email Id</Label>
                <Input type='email' id='email' placeholder='Enter Your Email Id' defaultValue={userData && userData.email} />
              </FormGroup>
            </Col>

            <Col md='6' sm='6'>
              <FormGroup>
                <Label for='mobile'>Mobile No.</Label>
                <Input type='number' id='mobile' placeholder='Enter Your Mobile No.' defaultValue={userData && userData.mobile} />
              </FormGroup>
            </Col>
            <Col md='6' sm='6'>
              <FormGroup>
                <Label for='role'>Role</Label>
                <Input type='text' id='UserType' placeholder='Position' readOnly defaultValue={selectedUser.level} />
              </FormGroup>
            </Col>
            {/* <Col md='12' sm='12'>
              <FormGroup>
                <Label for='role'>Assign Brand to:</Label>
                <Input type='select' name='role' id='manager' defaultValue={userData && userData.role}>
                  <option value='jatin@cmrsl.net'>jatin@cmrsl.net</option>
                  <option value='gauravg@cmrsl.net'>gauravg@cmrsl.net</option>
                </Input>
              </FormGroup>
            </Col> */}
            <Col md='6' sm='6'>
              <FormGroup>
                <Label for='role'>Assign Brand to:</Label>
                <Input type='select' name='role' id='manager' defaultValue={userData && userData.role}>
                {manager_names1.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                </Input>
              </FormGroup>
            </Col>

            {/* <Col md='6' sm='6'>
              <FormGroup>
                <Label for='role'>Select Role Type </Label>
                <Input type='select' name='role' id='role' defaultValue={selectedUser.level}>
                  <option value='userData.level'>Advertiser</option>
                  <option value='userData.level'>admin</option>
                  <option value='userData.level'>Manager</option>
                </Input>
              </FormGroup>
            </Col> */}

            {/* <Col md='12' sm='12'>
              <FormGroup>
                <Label for='role'>User Status</Label>
                <Input type='select' name='role' id='role' defaultValue={userData && userData.role}>
                  <option value='admin'>Active</option>
                  <option value='author'>InActive</option>
                </Input>
              </FormGroup>
            </Col> */}

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Update User
              </Button.Ripple>
              <Button.Ripple color='primary' href='/apps/user/list'>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default UserAccountTab
