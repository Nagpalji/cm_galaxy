import { useState, useContext, Fragment } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import {dashboards} from '@src/navigation/horizontal/index.js'
// "src\navigation\horizontal\index.js"
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
// Logo component End
// services start
import LoginLandingPageServices from './LoginLandingPageServices'
// services End

// Testinomials start
import LoginLandingPageTestinomials from './LoginLandingPageTestinomials'
import '@styles/react/libs/swiper/swiper.scss'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'
SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
// Testinomials end

// contact start
import LoginLandingPageContact from './LoginLandingPageContact'
// contact End

import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Input,
  CardImg,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import '@styles/base/pages/page-auth.scss'

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to CMGalaxy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const Login = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('admin@demo.com')
  const [password, setPassword] = useState('admin')

  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (isObjEmpty(errors)) {
      useJwt
        .login({ email, password })
        .then(res => {
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          history.push(getHomeRouteForLoggedInUser(data.role))
          toast.success(
            <ToastContent name={data.fullName || data.username || 'John 123'} role={data.role || 'admin'} />,
            
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch(err => console.log(err))
    }
  }

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
              Welcome to CMGalaxy!
            </CardTitle>
            <CardText className='mb-2'>Please sign-in to your account</CardText>
            {/* <Alert color='primary'>
              <div className='alert-body font-small-2'>
                <p>
                  <small className='mr-50'>
                    <span className='font-weight-bold'>Admin:</span> admin@demo.com | admin
                  </small>
                </p>
                <p>
                  <small className='mr-50'>
                    <span className='font-weight-bold'>Client:</span> client@demo.com | client
                  </small>
                </p>
              </div>
              <HelpCircle
                id='login-tip'
                className='position-absolute'
                size={18}
                style={{ top: '10px', right: '10px' }}
              />
              <UncontrolledTooltip target='login-tip' placement='left'>
                This is just for ACL demo purpose.
              </UncontrolledTooltip>
            </Alert> */}
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input
                  autoFocus
                  type='email'
                  value={email}
                  id='login-email'
                  name='login-email'
                  placeholder='john@example.com'
                  onChange={e => setEmail(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-email'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  value={password}
                  id='login-password'
                  name='login-password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple type='submit' color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <span className='mr-25'>Don't have an account ?</span>
              <Link to='/register'>
                <span>Sign Up</span>
              </Link>
            </p>
            {/* <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='twitter'>
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
              <Button.Ripple className='mr-0' color='github'>
                <GitHub size={14} />
              </Button.Ripple>
            </div> */}
          </Col>
        </Col>
        <Col className='mt-3' lg='12' md='12'>
          <LoginLandingPageServices />
        </Col>

        <Col className='mt-0' lg='12' md='12'>
          <LoginLandingPageTestinomials />
        </Col>

        <Col className='mt-0' lg='12' md='12'>
          <LoginLandingPageContact />
        </Col>
      </Row>
    </div>
  )
}

export default Login
