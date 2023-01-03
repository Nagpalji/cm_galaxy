// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../store/action'
import { useDispatch } from 'react-redux'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addUser({
          fullName: values['full-name'],
          company: values.company,
          role,
          username: values.username,
          country: values.country,
          contact: values.contact,
          email: values.email,
          currentPlan: plan,
          status: 'active',
          avatar: ''
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Add User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='username'>
            Username <span className='text-danger'>*</span>
          </Label>
          <Input
            name='username'
            id='username'
            placeholder='Enter Your User Name'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['username'] })}
          />
        </FormGroup>

        <FormGroup>
          <Label for='password'>
            Password <span className='text-danger'>*</span>
          </Label>
          <Input
           name='password'
           id='password'
            placeholder='Enter Your Password'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['password'] })}
          />
        </FormGroup>

        <FormGroup>
          <Label for='confirm-password'>
            Confirm Password <span className='text-danger'>*</span>
          </Label>
          <Input
           name='confirm-password'
           id='confirm-password'
            placeholder='Enter Your Confirm Password'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['comfirm-password'] })}
          />
        </FormGroup>

         <FormGroup>
          <Label for='first-name'>
            First Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='first-name'
            id='first-name'
            placeholder='Enter Your First Name'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['first-name'] })}
          />
        </FormGroup>

        <FormGroup>
          <Label for='Last-name'>
            Last Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='last-name'
            id='last-name'
            placeholder='Enter Your Last Name'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['last-name'] })}
          />
        </FormGroup>

        <FormGroup>
          <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
          {/* <FormText color='muted'>You can use letters, numbers & periods</FormText> */}
        </FormGroup>
        
        <FormGroup>
          <Label for='contact'>
            Mobile No. <span className='text-danger'>*</span>
          </Label>
          <Input
            name='contact'
            id='contact'
            placeholder='Enter Your Mobile No.'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['contact'] })}
          />
        </FormGroup>

        <FormGroup>
          <Label for='user-role'>Select Role Type</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            <option value='subscriber'>Superadmin</option>
            <option value='editor'>Client</option>
            <option value='maintainer'>Telecaler</option>
            <option value='author'>External client</option>
            <option value='admin'>Vendor</option>
          </Input>
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='primary' onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
