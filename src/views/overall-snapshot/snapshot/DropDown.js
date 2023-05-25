import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'

const colorOptions2 = [
  { value: 'Facebook', label: 'Facebook', color: '#00B8D9', isFixed: true },
  { value: 'Google Adwords', label: 'Google Adwords', color: '#0052CC', isFixed: true },
  { value: 'Organic', label: 'Organic', color: '#5243AA', isFixed: true },
  { value: 'Linkedin', label: 'Linkedin', color: '#FF5630', isFixed: false },
  { value: 'Direct', label: 'Direct', color: '#FF8B00', isFixed: false }
]

const sy = localStorage.getItem("sy")  
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em") 
  let ed = localStorage.getItem("ed")
  const sy1 = "&sy="
  const sm1 = "&sm="
  const sd1 = "&sd="
  const ey1 = "&ey="
  const em1 = "&em="
  const ed1 = "&ed="
  
  if (ey === 'NaN') {
    ey = sy
}
  if (em === 'NaN') {
    em = sm
  }
  if (ed === 'NaN') {
    ed = sd
  }


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

const formatGroupLabel = data => (
  <div className='d-flex justify-content-between align-center'>
    <strong>
      <span>{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
)

const SelectOptions = () => {
  const [colorOptions1, setColorOptions1] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/common_campaignname/?brand_name='
  const fet = fett + brand_name
  
  useState(() => { 
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
          result.map((item) => { 
  
            colorOptions1.push({
            label: item.label,
            value: item.value
          })
            
          })
          setColorOptions1(colorOptions1)
          //console.log(colorOptions)
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  const colorOptions00 = JSON.parse(sessionStorage.getItem('overall_product'))

  const [colorOptions, setColorOptions] = useState([])
  const fett1 = 'https://srvr1px.cyberads.io/common_product/?brand_name='
  const fet1 = fett1 + brand_name

  
  useState(() => { 
    fetch(fet1 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
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
  const colorOptions11 = JSON.parse(sessionStorage.getItem('overall_campaign'))

  const [colorOptions2, setColorOptions2] = useState([])
  const fett2 = 'https://srvr1px.cyberads.io/common_trficsource/?brand_name='
  const fet2 = fett2 + brand_name
  
  useState(() => { 
    fetch(fet2 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
          result.map((item) => { 
  
            colorOptions2.push({
            label: item.label,
            value: item.value
          })
            
          })
          setColorOptions2(colorOptions2)
          //console.log(colorOptions)
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  const colorOptions22 = JSON.parse(sessionStorage.getItem('overall_traffic'))

  
    const [colorOptions3, setColorOptions3] = useState([])
    const fett3 = 'https://srvr1px.cyberads.io/common_geo/?brand_name='
    const fet3 = fett3 + brand_name
    
    useState(() => { 
      fetch(fet3 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
           method: 'GET'
      })
      .then(res => res.json())  
      .then((result) => {
            result.map((item) => { 
    
              colorOptions3.push({
              label: item.label,
              value: item.value
            })
              
            })
            setColorOptions3(colorOptions3)
            //console.log(colorOptions)
          },
            (error) => {
              //this.setState({ error });
            }
          )
    })
    const colorOptions33 = JSON.parse(sessionStorage.getItem('overall_geo'))

  // const [fixedValue, setFixedValue] = useState(orderOptions([colorOptions[0], colorOptions[1], colorOptions[3]]))
  const handleOnChange = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value.replace("&", "@@@")
      val1["label"] = res.value.replace("&", "@@@")
      selval1.push(val1)

    })
    sessionStorage.setItem("overall_product", JSON.stringify(selval1))
  }
  const handleOnChange1 = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value.replace("&", "@@@")
      val1["label"] = res.value.replace("&", "@@@")
      selval1.push(val1)

    })
    sessionStorage.setItem("overall_campaign", JSON.stringify(selval1))
  }
  const handleOnChange2 = event => {
    
    // const valReg = []
    // const selval1 = []
    
    // event.map(res => {
    //   const val1 = {}
    //   val1["value"] = res.value.replace("&", "@@@")
    //   val1["label"] = res.value.replace("&", "@@@")
    //   selval1.push(val1)

    // })
    sessionStorage.setItem("overall_traffic", JSON.stringify(event))
  }
  const handleOnChange3 = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value.replace("&", "@@@")
      val1["label"] = res.value.replace("&", "@@@")
      selval1.push(val1)

    })
    sessionStorage.setItem("overall_geo", JSON.stringify(selval1))
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

  return (
    <Card>
      <CardBody>
        <Row>
          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Product</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions}
              defaultValue={colorOptions00}
              className='react-select'
              onChange={handleOnChange}
              placeholder='Product'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Campaign Name</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions1}
              defaultValue={colorOptions11}
              className='react-select'
              onChange={handleOnChange1}
              placeholder='Campaign Name'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Traffic Source</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions2}
              defaultValue={colorOptions22}
              className='react-select'
              onChange={handleOnChange2}
              placeholder='Traffic Source'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Geo</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions3}
              defaultValue={colorOptions33}
              className='react-select'
              onChange={handleOnChange3}
              placeholder='Geo'
              classNamePrefix='select'
            />
          </Col>
        </Row>
        <Row className='match-height'>
        <Col  xl='10' lg='12'></Col>
          <Col className='mt-1' xl='2' lg='12'>
              <Button.Ripple  onClick={() => window.location.reload(false)} className='pull-right' color='primary'  >Get Data</Button.Ripple>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectOptions
