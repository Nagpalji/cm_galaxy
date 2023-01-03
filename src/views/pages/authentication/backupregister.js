import { Fragment, useState, useContext } from 'react'
import { isObjEmpty } from '@utils'
import classnames from 'classnames'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { handleLogin } from '@store/actions/auth'
import { Link, useHistory } from 'react-router-dom'
import { AbilityContext } from '@src/utility/context/Can'
import InputPasswordToggle from '@components/input-password-toggle'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
// Logo component End
import { Row, Col, CardTitle, CardText, CardImg, FormGroup, Label, Button, Form, Input, CustomInput } from 'reactstrap'

import '@styles/base/pages/page-auth.scss'

const Register = () => {
  const ability = useContext(AbilityContext)

  const [skin, setSkin] = useSkin()

  const history = useHistory()

  const dispatch = useDispatch()

  const { register, errors, handleSubmit, trigger } = useForm()

  const [email, setEmail] = useState('')
  const [valErrors, setValErrors] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)
  const [errorsusers, setErrorsusers] = useState({})
  const [brandname, setBrandname] = useState('')

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const Terms = () => {
    return (
      <Fragment>
        I/We accept the
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
         Terms & Conditions
        </a>
      </Fragment>
    )
  }

  // const onSubmit1 = () => { 
  //  alert("ZZZ")
  // }

  const onSubmit = () => { 
    if (isObjEmpty(errors)) {

      useJwt
        .register({ username, email, password })
        .then(res => {
          if (res.data.error) {
            const arr = {}
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) arr[property] = res.data.error[property]
            }
            setValErrors(arr)
            if (res.data.error.email !== null) console.error(res.data.error.email)
            if (res.data.error.username !== null) console.error(res.data.error.username)
          } else {
            setValErrors({})
            const data = { ...res.data.user, accessToken: res.data.accessToken }
            ability.update(res.data.user.ability)
            dispatch(handleLogin(data))
            history.push('/')
          }
        })
        .catch(err => console.log(err))
    }
  }

  const handleSubmitForm = (e) => {
    event.preventDefault()
    alert("zzz")
    console.log(e.target[0].value)
    console.log(e.target.elements.username.value)
    console.log(e.target.username.value)
    
  }
  const handleUsernameChange = e => {
    const errs = valErrors
    if (errs.username) delete errs.username
    setUsername(e.target.value)
    setValErrors(errs)
  }

  const handleBrandnameChange = e => {
    const errs = valErrors
    if (errs.brand_name) delete errs.brand_name
    setBrandname(e.target.value)
    setValErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = valErrors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setValErrors(errs)
  }

  function handleSubmit1(e) {
    e.preventDefault()
    const {username, password, brandname } = e.target.elements
    // alert(username.value)
    // alert(password.value)
    console.log({username: username.value, password: password.value}) 
    localStorage.setItem('username', username.value)
    localStorage.setItem('password', password.value)
    localStorage.setItem('brandname', brandname.value)
    const x = localStorage.getItem("username")
    const y = localStorage.getItem("username")
    const z = localStorage.getItem("username")
    
    history.push("/custom-dashboard")
    if (x === "" || x === null || y === "" || y === null || z === "" || z === null) {
      alert("Please fill the required details")
    } else {
      history.push("/custom-dashboard") 
    }

}


  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <CardImg top src={signin} className='SignLogo'  alt='card1' />
          {/* <h2 className='brand-text text-primary ml-1'>Vuexy</h2> */}
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='7' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='5' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Sign Up starts here!
            </CardTitle>
            <CardText className='mb-2'>Please sign-up to your account!</CardText>
            <Form action='/' onSubmit={handleSubmit1} className='auth-register-form mt-2'>
            <FormGroup>
                <Label className='form-label' for='username'>
                  Username
                </Label>
                <Input
                  autoFocus
                  type='text'
                  value={username}
                  placeholder=''
                  id='username'
                  name='username'
                  onChange={handleUsernameChange}
                  // className={classnames({ 'is-invalid': errors['username'] })}
                  // innerRef={{ required: true, validate: value => value !== '' }}
                  className={{ 'is-invalid': errors['username'] }}
                  innerRef={({ required: true, validate: value => value !== '' })}
                />
                <span style={{ color: "red" }}>{errorsusers['username']}</span>
                {Object.keys(valErrors).length && valErrors.username ? (
                  <small className='text-danger'>{valErrors.username}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='password'>
                  Password
                </Label>
                <InputPasswordToggle
                  value={password}
                  id='password'
                  name='password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['password'] })}
                  innerRef={{ required: true, validate: value => value !== '' }}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='brand_name'>
                 Brand Name 
                </Label>
                <Input
                  type='text'
                  value={brandname}
                  placeholder=''
                  id='brandname'
                  name='brnadname'
                  onChange={handleBrandnameChange}
                  className={classnames({ 'is-invalid': errors['brandname'] })}
                  innerRef={{ required: true, validate: value => value !== '' }}
                />
                <span style={{ color: "red" }}>{errorsusers['brandname']}</span>
                {Object.keys(valErrors).length && valErrors.brandname ? (
                  <small className='text-danger'>{valErrors.brandname}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <CustomInput
                  type='checkbox'
                  id='terms'
                  name='terms'
                  value='terms'
                  label={<Terms />}
                  className='custom-control-Primary'
                  innerRef={{ required: true }}
                  onChange={e => setTerms(e.target.checked)}
                  invalid={errors.terms && true}
                />
              </FormGroup>
             {/* <Link to='/custom-dashboard'> */}
              <Button.Ripple type='submit' block color='primary'>
                Sign up 
              </Button.Ripple>
              {/*</Link>*/}
              
</Form>
            
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
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
      </Row>
    </div>
  )
}

export default Register
