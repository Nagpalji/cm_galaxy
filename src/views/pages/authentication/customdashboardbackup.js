// import { Fragment, useState, useContext } from 'react'
// import { isObjEmpty } from '@utils'
// import classnames from 'classnames'
// import { useSkin } from '@hooks/useSkin'
// import useJwt from '@src/auth/jwt/useJwt'
// import { useDispatch } from 'react-redux'
// import { useForm } from 'react-hook-form'
// import { handleLogin } from '@store/actions/auth'
// import { Link, useHistory } from 'react-router-dom'
// import { AbilityContext } from '@src/utility/context/Can'
// import InputPasswordToggle from '@components/input-password-toggle'
// import { LogIn, Check, X, AlertTriangle, Info, ThumbsUp, ThumbsDown } from 'react-feather'
// // Logo component start
// import signin from '@src/assets/images/avatars/logo.png'
// import customimage from '@src/assets/images/pages/graphic-1.png'
// // Logo component End
// import { Row, Col, CardTitle, CardText, Alert, CardImg, FormGroup, Label, Button, Form, Input, CustomInput, Card, CardHeader, CardBody } from 'reactstrap'
// import '@styles/base/pages/page-auth.scss'

// import withReactContent from 'sweetalert2-react-content'
// import Swal from 'sweetalert2'

// const Register = () => {
//   const ability = useContext(AbilityContext)

//   const [skin, setSkin] = useSkin()

//   const history = useHistory()

//   const dispatch = useDispatch()

//   const { register, errors, handleSubmit, trigger } = useForm()

//   const [email, setEmail] = useState('')
//   const [valErrors, setValErrors] = useState({})
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [terms, setTerms] = useState(false)

//   const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
//     source = require(`@src/assets/images/pages/${illustration}`).default

//   const Terms = () => {
//     return (
//       <Fragment>
//         I/We accept the
//         <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
//          Terms & Conditions
//         </a>
//       </Fragment>
//     )
//   }

//   const onSubmit = () => {
//     if (isObjEmpty(errors)) {
//       useJwt
//         .register({ username, email, password })
//         .then(res => {
//           if (res.data.error) {
//             const arr = {}
//             for (const property in res.data.error) {
//               if (res.data.error[property] !== null) arr[property] = res.data.error[property]
//             }
//             setValErrors(arr)
//             if (res.data.error.email !== null) console.error(res.data.error.email)
//             if (res.data.error.username !== null) console.error(res.data.error.username)
//           } else {
//             setValErrors({})
//             const data = { ...res.data.user, accessToken: res.data.accessToken }
//             ability.update(res.data.user.ability)
//             dispatch(handleLogin(data))
//             history.push('/')
//           }
//         })
//         .catch(err => console.log(err))
//     }
//   }

//   const handleUsernameChange = e => {
//     const errs = valErrors
//     if (errs.username) delete errs.username
//     setUsername(e.target.value)
//     setValErrors(errs)
//   }

//   const handleEmailChange = e => {
//     const errs = valErrors
//     if (errs.email) delete errs.email
//     setEmail(e.target.value)
//     setValErrors(errs)
//   }

//   // my popup start
//   const MySwal = withReactContent(Swal)
//   // const handleBasicTitleAlert = () => {
//   //   return MySwal.fire({
//   //     title: 'Any fool can use a computer',
//   //     customClass: {
//   //       confirmButton: 'btn btn-primary'
//   //     },
//   //     buttonsStyling: false
//   //   })
//   // }

//   // const handleTitleAlert = () => {
//   //   return MySwal.fire({
//   //     title: 'The Internet?,',
//   //     text: 'That thing is still around?',
//   //     customClass: {
//   //       confirmButton: 'btn btn-primary'
//   //     },
//   //     buttonsStyling: false
//   //   })
//   // }

//   // const handleFooterAlert = () => {
//   //   return MySwal.fire({
//   //     icon: 'error',
//   //     title: 'Oops...',
//   //     text: 'Something went wrong!',
//   //     footer: '<a href="javascript:void(0);">Why do I have this issue?</a>',
//   //     customClass: {
//   //       confirmButton: 'btn btn-primary'
//   //     },
//   //     buttonsStyling: false
//   //   })
//   // }

//   const handleHTMLAlert = () => {
//     return MySwal.fire({
//       title: 'Welcome!',
//       // footer: '<a href="javascript:void(0);">If You any further issue ! Please Let me Know</a>',
//       // icon: 'success',
//       html:
//         'Your dashboard is being prepared. Once ready you will receive an email update.</b> ',
//       showCloseButton: false,
//       showCancelButton: false,
//       focusConfirm: false,
//       confirmButtonText: (
//         <span className='align-middle'>
//           {/* <ThumbsUp className='mr-50' size={15} /> */}
//           <span className='align-middle'>Logout!</span>
//         </span>
//       ),
//       cancelButtonText: <ThumbsDown size={15} />,
//       customClass: {
//         confirmButton: 'btn btn-primary custom-buttoncss',
//         cancelButton: 'btn btn-outline-danger ml-1'
//       },
//       buttonsStyling: false
//     })
//   }
//   // my popup end


//   return (
//     <div className='auth-wrapper auth-v2'>
//       <Row className='auth-inner m-0'>
//         <Link className='brand-logo custom_mobile_css' to='/' onClick={e => e.preventDefault()}>
//         <CardImg top src={signin} className='SignLogo'  alt='card1' />
//         </Link>
//         <Col className='d-none d-lg-flex align-items-center p-5' lg='6' sm='12'>
//           <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
//             <img className='img-fluid' src={customimage} alt='CMGalaxy' />
//           </div>
//         </Col>

//         <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='6' sm='12'>
//           <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
//             <CardTitle tag='h2' className='font-weight-bold mt-1 mb-1'>
//             Which platforms would you like to launch your custom dashboard with?
//             </CardTitle>
//             <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary1' 
//                label='Google AdWords' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary2' 
//                label='Facebook, Instagram, Messenger' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary3' 
//                label='LinkedIn' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary4' 
//                label='Amazon' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary5' 
//                label='Youtube' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary6' 
//                label='Google DV360' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary7' 
//                label='Google Analytics' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary8' 
//                label='CRM' default/>
//               </Col>

//               <Col md='6' sm='6' >
//               <Alert color='primary'>
//               <div className='alert-body'>
//               <span className='font-weight-bold'>Our team will get in touch soon!</span>
//               </div>
//               </Alert>
//               </Col>
//             </Row>

//             <Row>
//               <Col className='mb-2'  md='6' sm='6' size='sm' for='input-small-horizontal'>
//               <CustomInput type='checkbox' className='custom-control-Primary ' id='Primary9' 
//                label='Others' default />
//               </Col>

//               <Col md='6' sm='6'>
//                 <Input className='mbottom-mobile' type='text' id='input-small-horizontal' bsSize='sm' placeholder='Enter Account ID' />
//               </Col>
//             </Row>

//               <div className='auth-login-form mt-2 mbottom-mobile'>
//                 <Button.Ripple type='submit' onClick={handleHTMLAlert} color='primary' block>
//                 Submit
//               </Button.Ripple>
//               </div>
//             </Form>

//           </Col>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default Register
import { Fragment, useState, useContext, useRef } from 'react'
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
import { LogIn, Check, X, AlertTriangle, Info, ThumbsUp, ThumbsDown } from 'react-feather'
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
import customimage from '@src/assets/images/pages/graphic-1.png'
// Logo component End
import { Row, Col, CardTitle, CardText, Alert, CardImg, FormGroup, Label, Button, Form, Input, CustomInput, Card, CardHeader, CardBody } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

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

  function handleSubmitCustom(e) {
  alert("zzz")
    e.preventDefault()
  const fet = 'https://srvr1px.cyberads.io/register/?username='
  const username = localStorage.getItem("username")  
  const password = localStorage.getItem("password")
  const brandname = localStorage.getItem("brandname")
  const tc = 'N/A'
  if (localStorage.getItem("tc") === "") {
    const tc = localStorage.getItem("tc")
  } 

  const u = "username="
  const p = "&password="
  const b = "&brandname="
  const tk = "&terms="
  const g = '&google_id='
  const f = "&facebook_id="
  const l = "&linkedin_id="
  const a = "&amazon="
  const y = "&youtube_id="
  const dv360 = "&dv360="
  const ga = "&google_analytics="
  const c = "&crm="
  const o = "&others="

    const {google_adwords, facebook_id, linkedin, amazon, youtube, google_dv360, google_analytics, crm, others} = e.target.elements
    localStorage.setItem('google_adwords', google_adwords.value)
    localStorage.setItem('facebook_id', facebook_id.value)
    localStorage.setItem('linkedin', linkedin.value)
    localStorage.setItem('amazon', amazon.value)
    localStorage.setItem('youtube', youtube.value)
    localStorage.setItem('google_dv360', google_dv360.value)
    localStorage.setItem('google_analytics', google_analytics.value)
    localStorage.setItem('crm', crm.value)
    localStorage.setItem('others', others.value)

    fetch(fet + username + p + password + b + brandname + tk + tc + f + localStorage.getItem('facebook_id') + g + localStorage.getItem('google_adwords') + y + localStorage.getItem('youtube') + l + localStorage.getItem('linkedin') + a + localStorage.getItem('amazon') + dv360 + localStorage.getItem('google_dv360') + ga + localStorage.getItem('google_analytics') + c + localStorage.getItem('crm') + o + localStorage.getItem('others'), 
    {
      method: 'POST'

    }).then(res => res.json())
    .then(
      (result) => {
        console.log(JSON.stringify(result))  
        //alert(JSON.stringify(result))
        if (result.msg === 'register successfully') { 
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
  const handlegoogle_adwords = e => {
    const errs = valErrors
    if (errs.google_adwords) delete errs.google_adwords
    setGoogle_adwords(e.target.value)
    setValErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = valErrors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setValErrors(errs)
  }

  // my popup start
  const MySwal = withReactContent(Swal)
  // const handleBasicTitleAlert = () => {
  //   return MySwal.fire({
  //     title: 'Any fool can use a computer',
  //     customClass: {
  //       confirmButton: 'btn btn-primary'
  //     },
  //     buttonsStyling: false
  //   })
  // }

  // const handleTitleAlert = () => {
  //   return MySwal.fire({
  //     title: 'The Internet?,',
  //     text: 'That thing is still around?',
  //     customClass: {
  //       confirmButton: 'btn btn-primary'
  //     },
  //     buttonsStyling: false
  //   })
  // }

  // const handleFooterAlert = () => {
  //   return MySwal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     footer: '<a href="javascript:void(0);">Why do I have this issue?</a>',
  //     customClass: {
  //       confirmButton: 'btn btn-primary'
  //     },
  //     buttonsStyling: false
  //   })
  // }

  const handleHTMLAlert = () => {
    return MySwal.fire({
      title: 'Welcome!',
      // footer: '<a href="javascript:void(0);">If You any further issue ! Please Let me Know</a>',
      // icon: 'success',
      html:
        'Your dashboard is being prepared. Once ready you will receive an email update.</b> ',
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: (
        <span className='align-middle'>
          {/* <ThumbsUp className='mr-50' size={15} /> */}
            <Link to='/login'> <span className='align-middle'>Logout!</span> </Link>
        </span>
      ),
      cancelButtonText: <ThumbsDown size={15} />,
      customClass: {
        confirmButton: 'btn btn-primary custom-buttoncss',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    })
  }
  // my popup end


  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo custom_mobile_css' to='/' onClick={e => e.preventDefault()}>
        <CardImg top src={signin} className='SignLogo'  alt='card1' />
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='6' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={customimage} alt='CMGalaxy' />
          </div>
        </Col>

        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='6' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mt-1 mb-1'>
            Which platforms would you like to launch your custom dashboard with?
            </CardTitle>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmitCustom}>
            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='google_adwords'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='google_adwords_chk' name='google_adwords_chk'
               label='Google AdWords' default/>
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='google_adwords' name='google_adwords' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='facebook_id'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='facebook_chk' name='facebook_chk'
               label='Facebook, Instagram, Messenger' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='facebook_id' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='linkedin'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='linkedin_chk' name='linkedin_chk' 
               label='LinkedIn' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='linkedin' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='amazon'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='amazon_chk' name='amazon_chk' 
               label='Amazon' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='amazon' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='youtube'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='youtube_chk' name='youtube_chk'
               label='Youtube' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='youtube' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='google_dv360'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='dv360_chk' name='dv360_chk'
               label='Google DV360' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='google_dv360' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='google_analytics'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='google_analytics_chk' name='google_analytics_chk'
               label='Google Analytics' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='google_analytics' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='crm'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='crm' name='crm' 
               label='CRM' default/>
              </Col>

              <Col md='6' sm='6' >
              <Alert color='primary'>
              <div className='alert-body'>
              <span className='font-weight-bold'>Our team will get in touch soon!</span>
              </div>
              </Alert>
              </Col>
            </Row>

            <Row>
              <Col className='mb-2'  md='6' sm='6' size='sm' for='others_chk'>
              <CustomInput type='checkbox' className='custom-control-Primary ' id='others_chk' name='others_chk' 
               label='Others' default />
              </Col>

              <Col md='6' sm='6'>
                <Input className='mbottom-mobile' type='text' id='others' bsSize='sm' placeholder='Enter Account ID' />
              </Col>
            </Row>

              <div className='auth-login-form mt-2 mbottom-mobile'>
                {/*<Button.Ripple type='submit' onClick={handleHTMLAlert} color='primary' block>*/}
                <Button.Ripple type='submit' color='primary' block>
                Submit
              </Button.Ripple>
              </div>
            </Form>

          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
