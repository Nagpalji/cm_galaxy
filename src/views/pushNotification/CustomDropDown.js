import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'

const CustomDropDown = (props) => {

  return (
    <Row>
      {<Col className='mb-0 mt-0 mb-9' md='12' sm='12'>
        <Select
          isClearable={false}
          theme={selectThemeColors}
          isMulti={props.multiSelect}
          name='colors'
          // options={colorOptions}
          options={props.options}
          defaultValue={'colorOptions00'}
          // defaultValue={colorOptions00}
          className='react-select'
          // onChange={handleOnChange}
          placeholder={props.placeholder}
          classNamePrefix='select'
        />
      </Col>}
    </Row>
  )
}
export default CustomDropDown
