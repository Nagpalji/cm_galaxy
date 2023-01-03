// import { useState, useContext, Fragment } from 'react'
// import Avatar from '@components/avatar'
// import { isUserLoggedIn } from '@utils'
// import { useSkin } from '@hooks/useSkin'
// import { ChevronLeft, Coffee } from 'react-feather'
// import { Link, Redirect } from 'react-router-dom'
// import { toast, Slide } from 'react-toastify'
// // Logo component start
// import signin from '@src/assets/images/avatars/logo.png'
// // Logo component End
// import { Row, Col, CardTitle, CardText, Form, FormGroup, CardImg, Label, Input, Button } from 'reactstrap'
// import '@styles/base/pages/page-auth.scss'

// const ForgotPassword = () => {
//   const [skin, setSkin] = useSkin()

//   const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
//     source = require(`@src/assets/images/pages/${illustration}`).default
//     const ToastContent = ({ name, role }) => (
//       <Fragment>
//         <div className='toastify-header'>
//           <div className='title-wrapper'>
//             <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
//             <h6 className='toast-title font-weight-bold'>Forgot Password</h6>
//           </div>
//         </div>
//         <div className='toastify-body'>
//           <span>Recovery link is send on email.</span>
//         </div>
//       </Fragment>
//     )
//   function handleSubmitCustom(e) {
//     // alert("zzz")
//       e.preventDefault()
//     const fet = 'https://srvr1px.cyberads.io/forgot_password/?user_name='
//     const username = document.getElementById('login-email').value
//       fetch(fet + username, 
//       {
//         method: 'POST'

//       }).then(res => res.json())
//       .then(
//         (result) => {
//           console.log(JSON.stringify(result))  
//           //alert(JSON.stringify(result))
//           if (result.status === 200) { 
//              //alert("Recovery link is send on email.")
//              toast.success(
//               <ToastContent username={username} />,

//               { transition: Slide, hideProgressBar: true, autoClose: 5000 }
//             )
//             } else { 
//               alert("Something is wrong.") 
//         }

//         },
//           (error) => {
//             //setError({ error })
//           }
//         )

//   }

//   if (!isUserLoggedIn()) {
//     return (
//       <div className='auth-wrapper auth-v2'>
//         <Row className='auth-inner m-0'>
//           <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
//           <CardImg top src={signin} className='SignLogo'  alt='card1' />
//             {/* <h2 className='brand-text text-primary ml-1'>Vuexy</h2> */}
//           </Link>
//           <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
//             <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
//               <img className='img-fluid' src={source} alt='Login V2' />
//             </div>
//           </Col>
//           <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
//             <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
//               <CardTitle tag='h2' className='font-weight-bold mb-1'>
//                 Forgot Password?
//               </CardTitle>
//               <CardText className='mb-2'>
//               Can't log in? We'll send a recovery link to
//               </CardText>
//               <Form className='auth-forgot-password-form mt-2' onSubmit={handleSubmitCustom}>
//                 <FormGroup>
//                   <Label className='form-label' for='login-email'>
//                     Email
//                   </Label>
//                   <Input type='email' id='login-email' autoFocus />
//                 </FormGroup>
//                 <Button.Ripple color='primary' type="submit" block>
//                   Send recovery link
//                 </Button.Ripple>
//               </Form>
//               <p className='text-center mt-2'>
//                 <Link to='/login'>
//                   <ChevronLeft className='mr-25' size={14} />
//                   <span className='align-middle'>Back to login</span>
//                 </Link>
//               </p>
//             </Col>
//           </Col>
//         </Row>
//       </div>
//     )
//   } else {
//     return <Redirect to='/' />
//   }
// }

// export default ForgotPassword
import { useState, useContext, Fragment } from 'react'
import Avatar from '@components/avatar'
import { isUserLoggedIn } from '@utils'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft, Coffee } from 'react-feather'
import { Link, Redirect } from 'react-router-dom'
import { toast, Slide } from 'react-toastify'
// Logo component start
import signin from '@src/assets/images/avatars/logo.png'
// Logo component End
import { Row, Col, CardTitle, CardText, Form, FormGroup, CardImg, Label, Input, Button, Spinner } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const ForgotPassword = () => {
  const [skin, setSkin] = useSkin()
  const [forgoterror, setForgoterror] = useState('')
  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  const ToastContent = ({ name, role }) => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
          <h6 className='toast-title font-weight-bold'>Forgot Password</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <span>Recovery link is send on email.</span>
      </div>
    </Fragment>
  )

  function setEmail(e) {
    setForgoterror('')
  }
  function handleSubmitCustom(e) {
    e.preventDefault()
    if (document.getElementById('login-email').value === "") {
      setForgoterror('Please provide registered email for recovery link.')
      //return false
    } else {
      setForgoterror('')
      document.getElementById('btnforgot').style.display = 'none'
      document.getElementById('loaderimg').style.display = 'block'
      const fet = 'https://srvr1px.cyberads.io/forgot_password/?user_name='
      const username = document.getElementById('login-email').value
      fetch(fet + username,
        {
          method: 'POST'

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
              document.getElementById('btnforgot').style.display = 'block'
              document.getElementById('loaderimg').style.display = 'none'
            } else {
              alert("Something is wrong.")
            }

          },
          (error) => {
            //setError({ error })
          }
        )
    }
  }

  if (!isUserLoggedIn()) {
    return (
      <div className='auth-wrapper auth-v2'>
        <Row className='auth-inner m-0'>
          {/* <Link  to='/index' className='brand-logo' onClick={e => e.preventDefault()}> */}
          <Link to='/index' className='brand-logo'>
            <CardImg top src={signin} className='SignLogo' alt='card1' />
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
                Forgot Password?
              </CardTitle>
              <CardText className='mb-2'>
                Can't log in? We'll send a recovery link to
              </CardText>
              <Form className='auth-forgot-password-form mt-2' onSubmit={handleSubmitCustom}>
                <FormGroup>
                  <Label className='form-label' for='login-email'>
                    Email
                  </Label>
                  <Input type='email' id='login-email' autoFocus onChange={e => setEmail(e.target.value)} />
                  <small style={{ color: "red" }}>{forgoterror}</small>
                </FormGroup>
                <Button.Ripple color='primary' type="submit" id="btnforgot" block>
                  Send recovery link
                </Button.Ripple>
                <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30, display: 'none' }} id='loaderimg'>
                  <Spinner color='primary' />
                </div>
              </Form>
              <p className='text-center mt-2'>
                <Link to='/login'>
                  <ChevronLeft className='mr-25' size={14} />
                  <span className='align-middle'>Back to login</span>
                </Link>
              </p>
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
