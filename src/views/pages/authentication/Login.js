// import { useState, useContext, Fragment } from 'react'
// import ReCAPTCHA from "react-google-recaptcha"
// import classnames from 'classnames'
// import Avatar from '@components/avatar'
// import { useSkin } from '@hooks/useSkin'
// import useJwt from '@src/auth/jwt/useJwt'
// import { useDispatch } from 'react-redux'
// import { useForm } from 'react-hook-form'
// import { toast, Slide } from 'react-toastify'
// import { handleLogin } from '@store/actions/auth'
// import { AbilityContext } from '@src/utility/context/Can'
// import { Link, useHistory } from 'react-router-dom'
// import InputPasswordToggle from '@components/input-password-toggle'
// import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
// // Logo component start
// import signin from '@src/assets/images/avatars/logo.png'
// // Logo component End
// import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
// import {
//   Alert,
//   Row,
//   Col,
//   CardTitle,
//   CardText,
//   Form,
//   Input,
//   CardImg,
//   FormGroup,
//   Label,
//   CustomInput,
//   Button,
//   UncontrolledTooltip,
//   Spinner
// } from 'reactstrap'

// import '@styles/base/pages/page-auth.scss'

// const ToastContent = ({ name, role }) => (
//   <Fragment>
//     <div className='toastify-header'>
//       <div className='title-wrapper'>
//         <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
//         <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
//       </div>
//     </div>
//     <div className='toastify-body'>
//       <span>You have successfully logged in as an {role} user to cmgalaxy. Now you can start to explore. Enjoy!</span>
//     </div>
//   </Fragment>
// )

// const Login = props => {
//   const [skin, setSkin] = useSkin()
//   const ability = useContext(AbilityContext)
//   const dispatch = useDispatch()
//   const history = useHistory()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const [emailerror, setEmailerror] = useState()
//   const [passworderror, setPassworderror] = useState()
//   const capacha = event => {
//     console.log("Captcha value:", value)
//   }
//   const { register, errors, handleSubmit } = useForm()
//   const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
//   source = require(`@src/assets/images/pages/${illustration}`).default
//   //const [data, setData] = useState([])  
//   const api_url = "https://srvr1px.cyberads.io/cmgalaxy_users/?user_name=testing&password=Gemsbschool"
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url)
//     // Storing data in form of JSON
//     const data1 = await response.json()
//     console.log(data1)
//     localStorage.setItem('userlogin', JSON.stringify(data1))

// }
// // Calling that async function
// getapi(api_url)

//   const handleChange = e => { 
   
//     setEmail(e.target.value)
//     setEmailerror('')
//   }

//   const handleChangePassword = e => {

//     setPassword(e.target.value)
//     setPassworderror('')
//   }

//   const onSubmit = data => {
//     //window.localStorage.clear()
//     if (document.getElementById('username').value === "") {
//       setEmailerror('Please provide email.')
//       //return false
//     } else {
//       setEmailerror('')
//     }
//     if (document.getElementById('password').value === "") {
//       setPassworderror('Please provide password.')
//       //return false
//     } else {
//       setPassworderror('')
//     }
//     if (document.getElementById('username').value !== "" && document.getElementById('password').value !== "") {
//       document.getElementById('btnlogin').style.display = 'none'
//       document.getElementById('loaderimg').style.display = 'block'
//     const fet = 'https://srvr1px.cyberads.io/login/?user_name='
//     const p = "&password="
//     localStorage.setItem('user_name', email)
//     localStorage.setItem('email', email)
//     localStorage.setItem('password', password)
//     fetch(fet + localStorage.getItem('user_name') + p + localStorage.getItem('password'), 
//         {
//           method: 'POST'
    
//         }).then(res => res.json())
//         .then(
//           (result) => {
//             console.log(JSON.stringify(result))  
//             //alert(JSON.stringify(result))
//             if (result.msg === 'success') {
//               //localStorage.setItem('user_name', email)
//               //localStorage.setItem('password', password)
//               localStorage.setItem('brand_name', result.brand_name)
//               //alert(localStorage.getItem('user_name'))
//               //alert(email)
//               //alert(password)
//               //if (isObjEmpty(errors)) {
//                 useJwt
//                   .login({ email, password })
//                  .then(res => {
//                    //alert(JSON.stringify(res))
//                     const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
//                     //alert(JSON.stringify(data))
//                     dispatch(handleLogin(data))
//                     ability.update(res.data.userData.ability)
//                     //history.push("/overall-snapshot")
//                     history.push(getHomeRouteForLoggedInUser('admin'))
//                     toast.success(
//                       <ToastContent name={data.fullName || data.username} role={'admin'} />,
                      
//                       { transition: Slide, hideProgressBar: true, autoClose: 5000 }
//                     )
//                   })
//                   .catch(err => console.log(err))
//               //}
//               //handleHTMLAlert()
              
//               //history.push("/overall-snapshot")
//               //history.push(getHomeRouteForLoggedInUser('admin'))
                
//             } else {
//               alert("Credentials are invalid.")
//               document.getElementById('btnlogin').style.display = 'block'
//               document.getElementById('loaderimg').style.display = 'none'
//             }
//           },
//             (error) => {
//               //setError({ error })
//             }
//           )
//     } else {
//       document.getElementById('btnlogin').style.display = 'block'
//       document.getElementById('loaderimg').style.display = 'none'
//     }
    
//   }

//   return (
//     <div className='auth-wrapper auth-v2'>
//       <Row className='auth-inner m-0'>
//         <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
//           <CardImg top src={signin} className='SignLogo'  alt='card1' />
//           {/* <h2 className='brand-text text-primary ml-1'>Vuexy</h2> */}
//         </Link>
//         <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
//           <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
//             <img className='img-fluid' src={source} alt='Login V2' />
//           </div>
//         </Col>
//         <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
//           <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
//             <CardTitle tag='h2' className='font-weight-bold mb-1'>
//               Welcome to CMGalaxy!
//             </CardTitle>
//             <CardText className='mb-2'>Please sign-in to your account</CardText>
//             {/* <Alert color='primary'>
//               <div className='alert-body font-small-2'>
//                 <p>
//                   <small className='mr-50'>
//                     <span className='font-weight-bold'>Admin:</span> admin@demo.com | admin
//                   </small>
//                 </p>
//                 <p>
//                   <small className='mr-50'>
//                     <span className='font-weight-bold'>Client:</span> client@demo.com | client
//                   </small>
//                 </p>
//               </div>
//               <HelpCircle
//                 id='login-tip'
//                 className='position-absolute'
//                 size={18}
//                 style={{ top: '10px', right: '10px' }}
//               />
//               <UncontrolledTooltip target='login-tip' placement='left'>
//                 This is just for ACL demo purpose.
//               </UncontrolledTooltip>
//             </Alert> */}
//             <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
//               <FormGroup>
//                 <Label className='form-label' for='login-email'>
//                   Email
//                 </Label>
//                 <Input
//                   autofocus
//                   type='email'
//                   value={email}
//                   id='username'
//                   name='username'
//                   placeholder=''
//                   onChange={handleChange}
                  
//                 />
//                 <small style={{ color: "red" }}>{emailerror}</small>
//               </FormGroup>
//               <FormGroup>
//                 <div className='d-flex justify-content-between'>
//                   <Label className='form-label' for='login-password'>
//                     Password
//                   </Label>
//                   <Link to='/forgot-password'>
//                     <small>Forgot Password?</small>
//                   </Link>
//                 </div>
//                 <InputPasswordToggle
//                   value={password}
//                   id='password'
//                   name='password'
//                   className='input-group-merge'
//                   onChange={handleChangePassword}
//                 />
//                 <small style={{ color: "red" }}>{passworderror}</small>
//               </FormGroup>
//               <FormGroup className='' style={{marginTop: "25px", marginBottom: "22px"}}>              <ReCAPTCHA
//                 sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//                 onChange={capacha}
//               />
//               </FormGroup>
//               <FormGroup>
//                 <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
//               </FormGroup>
//               <Button.Ripple type='submit' id='btnlogin' color='primary' block>
//                 Sign in
//               </Button.Ripple>
//               <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30, display: 'none'}} id='loaderimg'>
//               <Spinner color='primary' />
//              </div>
//             </Form>
//             <p className='text-center mt-2'>
//               <span className='mr-25'>Don't have an account ?</span>
//               <Link to='/register'>
//                 <span>Sign Up</span>
//               </Link>
//             </p>
//             {/* <div className='divider my-2'>
//               <div className='divider-text'>or</div>
//             </div>
//             <div className='auth-footer-btn d-flex justify-content-center'>
//               <Button.Ripple color='facebook'>
//                 <Facebook size={14} />
//               </Button.Ripple>
//               <Button.Ripple color='twitter'>
//                 <Twitter size={14} />
//               </Button.Ripple>
//               <Button.Ripple color='google'>
//                 <Mail size={14} />
//               </Button.Ripple>
//               <Button.Ripple className='mr-0' color='github'>
//                 <GitHub size={14} />
//               </Button.Ripple>
//             </div> */}
//           </Col>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default Login
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
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
// Logo component End
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
  UncontrolledTooltip,
  Spinner
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
      <span>You have successfully logged in as an {role} user to cmgalaxy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const Login = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [emailerror, setEmailerror] = useState()
  const [passworderror, setPassworderror] = useState()
  
  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  source = require(`@src/assets/images/pages/${illustration}`).default
  //const [data, setData] = useState([])  
  const api_url = "https://srvr1px.cyberads.io/cmgalaxy_users/?user_name=testing&password=Gemsbschool"
  
// Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url)
//     // Storing data in form of JSON
//     const data1 = await response.json()
//     localStorage.setItem('userlogin', JSON.stringify(data1))

// }
// // Calling that async function
// getapi(api_url)

  const handleChange = e => { 
   
    setEmail(e.target.value)
    setEmailerror('')
  }

  const handleChangePassword = e => {

    setPassword(e.target.value)
    setPassworderror('')
  }

  const onSubmit = data => {
    //window.localStorage.clear()
    if (document.getElementById('username').value === "") {
      setEmailerror('Please provide email.')
      //return false
    } else {
      setEmailerror('')
    }
    if (document.getElementById('password').value === "") {
      setPassworderror('Please provide password.')
      //return false
    } else {
      setPassworderror('')
    }
    if (document.getElementById('username').value !== "" && document.getElementById('password').value !== "") {
      document.getElementById('btnlogin').style.display = 'none'
      document.getElementById('loaderimg').style.display = 'block'
    const fet = 'https://srvr1px.cyberads.io/login/?user_name='
    const p = "&password="
    localStorage.setItem('user_name', email)
    localStorage.setItem('email', email)
    // localStorage.setItem('password', password)
    fetch(fet + localStorage.getItem('user_name') + p + password, 
        {
          method: 'POST'
    
        }).then(res => res.json())
        .then(
          (result) => {
            console.log(JSON.stringify(result))
             
            //alert(JSON.stringify(result))
            if (result.msg === 'success') {
              //localStorage.setItem('user_name', email)
              //localStorage.setItem('password', password)
              localStorage.setItem('brand_name', result.brand_name)
              localStorage.setItem('level', result.level)
              //alert(localStorage.getItem('user_name'))
              //alert(email)
              //alert(password)
              //if (isObjEmpty(errors)) {
                useJwt
                  .login({ email, password })
                 .then(res => {
                   //alert(JSON.stringify(res))
                    const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
                    // alert(JSON.stringify(data))
                    dispatch(handleLogin(data))
                    ability.update(res.data.userData.ability)
                    //history.push("/overall-snapshot")
                    history.push(getHomeRouteForLoggedInUser('admin'))
                    // localStorage.removeItem('userlogin')
                    toast.success(
                      <ToastContent name={data.fullName || data.username} role={localStorage.getItem('level')} />,
                      
                      { transition: Slide, hideProgressBar: true, autoClose: 5000 }
                    )
                  })
                  .catch(err => console.log(err))
              //}
              //handleHTMLAlert()
              
              //history.push("/overall-snapshot")
              //history.push(getHomeRouteForLoggedInUser('admin'))
                
            } else {
              alert("Credentials are invalid.")
              document.getElementById('btnlogin').style.display = 'block'
              document.getElementById('loaderimg').style.display = 'none'
            }
          },
            (error) => {
              //setError({ error })
            }
          )
    } else {
      document.getElementById('btnlogin').style.display = 'block'
      document.getElementById('loaderimg').style.display = 'none'
    }
    
  }
  
  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        {/* <Link  to='/index' className='brand-logo' onClick={e => e.preventDefault()}> */}
        <Link  to='/index' className='brand-logo'>
          <CardImg top src={signin} className='SignLogo'  alt='cmgalaxy' />
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
                  autofocus
                  type='email'
                  value={email}
                  id='username'
                  name='username'
                  placeholder=''
                  onChange={handleChange}
                  
                />
                <small style={{ color: "red" }}>{emailerror}</small>
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
                  id='password'
                  name='password'
                  className='input-group-merge'
                  onChange={handleChangePassword}
                />
                <small style={{ color: "red" }}>{passworderror}</small>
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple type='submit' id='btnlogin' color='primary' block>
                Sign in
              </Button.Ripple>
              <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30, display: 'none'}} id='loaderimg'>
              <Spinner color='primary' />
             </div>
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
      </Row>
    </div>
  )
}

export default Login
