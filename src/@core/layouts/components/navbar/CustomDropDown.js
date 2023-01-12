import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'

const animatedComponents = makeAnimated()

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: '0.5' } : base
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed ? { ...base, color: '#626262', paddingRight: 6 } : base
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: 'none' } : base
  }
}

const orderOptions = values => {
  if (values.length > 0) return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed))
}

// const formatGroupLabel = data => (
//   <div className='d-flex justify-content-between align-center'>
//     <strong>
//       <span>{data.label}</span>
//     </strong>
//     <span>{data.options.length}</span>
//   </div>
// )

const CustomDropDown = () => {
  
  const brand_name = localStorage.getItem("email")
  const [colorOptions, setColorOptions] = useState([])
  const fett1 = 'https://srvr1px.cyberads.io/user_dropdown/?brand_name='
  const fet1 = fett1 + brand_name

  
  useState(() => { 
    fetch(fet1, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
          result.map((item) => { 
  
            colorOptions.push({
            label: item.label,
            value: item.value
          })
            
          })
          setColorOptions(colorOptions)
          //console.log(colorOptions)
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  sessionStorage.setItem('menu', JSON.stringify(colorOptions))
  const colorOptions00 = JSON.parse(sessionStorage.getItem('brand_selection'))
  const handleOnChange = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value.replace("&", "@@@")
      val1["label"] = res.value.replace("&", "@@@")
      selval1.push(val1)

    })
    if (selval1.length > 0) {
      sessionStorage.setItem("brand_selection", JSON.stringify(selval1))
      localStorage.setItem("brand_name", JSON.stringify(selval1))
    } else if (selval1.length === 0 && (localStorage.getItem('email')) === ("dhavalg@cmrsl.net" || 'admin@cmrsl.net' || 'gauravg@cmrsl.net')) {
      sessionStorage.removeItem("brand_selection")
      localStorage.setItem("brand_name", "masteraccess")
    } else if (selval1.length === 0 && (localStorage.getItem('email')) !==  ("dhavalg@cmrsl.net" || 'admin@cmrsl.net' || 'gauravg@cmrsl.net')) {
      sessionStorage.removeItem("brand_selection")
      localStorage.setItem("brand_name", JSON.stringify(colorOptions))
    } else {
      console.log('no selection')
    }
    // localStorage.setItem("brand_selection", JSON.stringify(selval1))
    // localStorage.setItem("brand_name", JSON.stringify(selval1[0]['value']))
  }
  
  const filterColors1 = inputValue => {
    return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors1(inputValue))
    }, 2000)
  }

  const filterColors2 = inputValue => {
    return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const fixedOnChange = (value, { action, removedValue }) => {
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue.isFixed) {
          return
        }
        break
      case 'clear':
        value = colorOptions.filter(v => v.isFixed)
        break
      default:
        break
    }

    value = orderOptions(value)
    setFixedValue(value)
  }

  const handleInputChange = newValue => {
    const val = newValue.replace(/\W/g, '')
    return val
  }

  const promiseOptions = inputValue => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filterColors2(inputValue))
      }, 2000)
    })
  }
  
  if ((localStorage.getItem("email") === 'admin@cmrsl.net') || (localStorage.getItem("email") === 'dhavalg@cmrsl.net' || localStorage.getItem("email") === 'gauravg@cmrsl.net' || (localStorage.getItem("level") === 'Manager'))) {
    return (
        <Row>
        {window.location.pathname !== '/funnelmapping/index' ? <Col className='mb-0 mt-0 mb-9' md='12' sm='12'>
          {/* <h6 className='font-weight-bold'>Product</h6> */}
            <Select
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name='colors'
              options={colorOptions}
              defaultValue={colorOptions00}
              className='react-select'
              onChange={handleOnChange}
              placeholder='Brands'
              classNamePrefix='select'
            />
          </Col> : null}
        </Row>
  )
  } else {
    return (
      <Row>
        <Col className='mb-0 mt-0 mb-9' md='12' sm='12'>
        </Col>
      </Row>
)
  }
}
export default CustomDropDown
