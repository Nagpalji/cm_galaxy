import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import {toast} from 'react-toastify'
import { PhoneCall, Mail } from 'react-feather'
import { useForm } from 'react-hook-form'

const FaqContact = () => {
  // Validation Start
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = data => {
    toast.success(<SuccessToast data={data} />, { hideProgressBar: true })
  }
  // Validation End

  return (
    <div id='faq-contact'>
      <Row className='mt-0 pt-75'>
        <Col style={{ marginBottom: 34 }} className='ml-2 mt-1' className='text-center' sm='12'>
          <h1 style={{ fontSize: 35 }}>Request Here for a Live Demo</h1>
        </Col>
        <Col sm='7'>
          <Card className='bg-light-secondary shadow-none py-1'>
            {/* <CardBody>
              <div className='avatar avatar-tag bg-light-primary mb-2 mx-auto'>
                <PhoneCall size={18} />
              </div>
              <h4>+ (810) 2548 2568</h4>
              <span className='text-body'>We are always happy to help!</span>
            </CardBody> */}
            <CardBody>
              <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col sm='6'>
                    <FormGroup className='mb-2'>
                      <Label for='payment-input-name'>First Name</Label>
                      <Input type='text' placeholder='Enter First Name'
                        id='firstNameBasic'
                        name='firstNameBasic'
                        innerRef={register({ required: true })}
                        invalid={errors.firstNameBasic && true} />
                    </FormGroup>
                  </Col>
                  <Col sm='6'>
                    <FormGroup className='mb-2'>
                      <Label for='payment-cvv'>Last Name</Label>
                      <Input type='text' placeholder='Enter Last Name'
                        id='lastNameBasic'
                        name='lastNameBasic'
                        innerRef={register({ required: true })}
                        invalid={errors.lastNameBasic && true} />
                    </FormGroup>
                  </Col>
                  <Col sm='6'>
                    <FormGroup className='mb-2'>
                      <Label for='payment-input-name'>Email</Label>
                      <Input type="email" placeholder='Enter Email' id='' />
                    </FormGroup>
                  </Col>
                  <Col sm='6'>
                    <FormGroup className='mb-2'>
                      <Label for='payment-input-name'>Mobile Number</Label>
                      <Input type="number" placeholder='Enter Number' id='' />
                    </FormGroup>
                  </Col>
                  <Col sm='12'>
                    <FormGroup className='mb-2'>
                      <Label for='payment-input-name'>Message</Label>
                      <Input type='textarea' id='' rows='1' placeholder='Write Your Message..' />
                    </FormGroup>
                  </Col>

                  <Col sm='12'>
                    <Button.Ripple type='submit' color='primary' block>
                      Submit
                    </Button.Ripple>
                  </Col>
                </Row>
              </Form>
            </CardBody>

          </Card>
        </Col>
        <Col sm='5'>
          <Card className='text-center bg-light-secondary shadow-none py-1'>
            <CardBody>
              <div className='avatar avatar-tag bg-light-primary mb-2 mx-auto'>
                <Mail size={18} />
              </div>
              <h4>support@cmgalaxy.com</h4>
              <span className='text-body'>Best way to get answer faster!</span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FaqContact
