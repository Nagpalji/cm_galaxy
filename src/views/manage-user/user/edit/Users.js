// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

const UsersTab = ({ selectedUser }) => {
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)

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

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          {renderUserAvatar()}
          <Media className='mt-50' body>
            <h4 style={{marginTop:11}}>{selectedUser.fullName} </h4>
          </Media>
        </Media>
      </Col>

      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='username'>User Name</Label>
                <Input type='text' id='username' placeholder='Enter Your User Name' defaultValue={userData && userData.username} />
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='email'>Email Id</Label>
                <Input type='text' id='email' placeholder='Enter Your Email Id' defaultValue={userData && userData.email} />
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='last-name'>Brand</Label>
                <Input type='text' id='lastname' placeholder='Enter Your Brand' defaultValue={userData && userData.lastname} />
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='role'>User Status</Label>
                <Input type='select' name='role' id='role' defaultValue={userData && userData.role}>
                  <option value='admin'>Active</option>
                  <option value='author'>InActive</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='role'>Account Managers </Label>
                <Input type='select' name='role' id='role' defaultValue={userData && userData.role}>
                  <option value='admin'>Jatin</option>
                  <option value='author'>Gaurav</option>
                  <option value='editor'>yatin</option>
                </Input>
              </FormGroup>
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Assign
              </Button.Ripple>
              <Button.Ripple color='primary'>
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default UsersTab
