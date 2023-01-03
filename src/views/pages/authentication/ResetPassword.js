import { useState, useContext, Fragment } from 'react'
import { isUserLoggedIn } from '@utils'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import { Link, Redirect, useHistory } from 'react-router-dom'
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
import { ChevronLeft, Coffee } from 'react-feather'
import { toast, Slide } from 'react-toastify'
// Logo component End
import { Row, Col, CardTitle, CardText, Form, FormGroup, CardImg, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const ForgotPassword = () => {
  const history = useHistory()
  const ToastContent = ({ name, role }) => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
          <h6 className='toast-title font-weight-bold'>Reset Password</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <span>Password is reset.</span>
      </div>
    </Fragment>
  )
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
  
    source = require(`@src/assets/images/pages/${illustration}`).default
    function handleSubmitCustom(e) {
      e.preventDefault()
    const queryParams = new URLSearchParams(window.location.search)
    const username = queryParams.get('user_name')
    const time = queryParams.get('time')
    const date = queryParams.get('date')
    const fet = 'https://srvr1px.cyberads.io/reset_password/?user_name='
    //const username = 'abc@demo.com'
    const password = document.getElementById('password').value
    const confirm_password = document.getElementById('confirm_password').value
    const p = "&password="
    const confirm_p = "&confirm_password="
    const time_value = "&time="
    const date_value = "&date="

      fetch(fet + username + p + password + confirm_p + confirm_password + time_value + time + date_value + date,
      {
        method: 'GET'
  
      }).then(res => res.json())
      .then(
        (result) => {
          console.log(JSON.stringify(result))  
          //alert(JSON.stringify(result))
          if (result.status === 200) { 
             //alert("Recovery link is send on email.")
             toast.success(
              <ToastContent username={username} />,
              
              { transition: Slide, hideProgressBar: true, autoClose: 5000 }
            )
            history.push("/login")  
            } else { 
              alert("Something is wrong.") 
        }
           
        },
          (error) => {
            //setError({ error })
          }
        )
      
  }
  if (!isUserLoggedIn()) {
    return (
      <div className='auth-wrapper auth-v2'>
        <Row className='auth-inner m-0'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <CardImg top src={signin} className='SignLogo'  alt='card1' />
            {/* <h2 className='brand-text text-primary ml-1'>Vuexy</h2> */}
          </Link>
          <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
            <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
              <img className='img-fluid' src={source} alt='Login V2' />
            </div>
          </Col>
          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <CardTitle tag='h2' className='font-weight-bold mb-1'>
                Reset Password?
              </CardTitle>
        
              <Form className='auth-forgot-password-form mt-2' onSubmit={handleSubmitCustom}>
                <FormGroup>
                  <Label className='form-label' for='login-email'>
                    Password
                  </Label>
                  <Input type='password' id='password'  autoFocus />
                </FormGroup>
                <FormGroup>
                  <Label className='form-label' for='login-email'>
                   Confirm Password
                  </Label>
                  <Input type='password' id='confirm_password'  />
                </FormGroup>
                <Button.Ripple color='primary' block type="submit">
                  SUBMIT
                </Button.Ripple>
              </Form>
            </Col>
          </Col>
        </Row>
      </div>
    )
  } else {
    return <Redirect to='/' />
  }
}

export default ForgotPassword
