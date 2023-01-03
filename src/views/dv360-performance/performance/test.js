// import React, { useEffect, useState } from 'react'
// import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label, Button } from 'reactstrap'

// const SelectOptions = () => {

//   return (
//     <Card>
//       <CardBody>
//         <Row>
//           <Col className='mb-1 mt-0 mb-7' md='4' sm='12'>
//           <h6 className='font-weight-bold'>Campaign Name</h6>
//           </Col>
//         </Row>
//       </CardBody>
//     </Card>
//   )
// }
// export default SelectOptions
import React from 'react'
class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '/ hfjhsdjfhsjdh /',
      output: '',
      err: ''
    }
  }

  update(e) {
    const code = e.target.value
    try {
      this.setState({
        output: window.Babel
          .transform(code, { presents: ['es2015', 'react'] })
          .code,
          err: ''
        }
        )
        
        }
    catch (err) {
      this.setState({ err: err.message })
    }
  }

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className='container'>
          <textarea onChange={this.update.bind(this)}
            defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default Home