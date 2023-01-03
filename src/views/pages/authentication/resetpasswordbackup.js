import { isUserLoggedIn } from '@utils'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Link, Redirect } from 'react-router-dom'
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
// Logo component End
import { Row, Col, CardTitle, CardText, Form, FormGroup, CardImg, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const ForgotPassword = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
    function handleSubmitCustom(e) {
      e.preventDefault()
      const {google_adwords, facebook_id, linkdin, amazon, youtube, google_dv360, google_analytics, crm, google_adwords_chk } = e.target.elements
      alert("hello")
      
      
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
                  <Input type='password' id='confirm_password'  autoFocus />
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
