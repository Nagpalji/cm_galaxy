import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'

const animatedComponents = makeAnimated()
const sy = localStorage.getItem("sy")
const sm = localStorage.getItem("sm")
const sd = localStorage.getItem("sd")
const ey = localStorage.getItem("ey")
const em = localStorage.getItem("em")
const ed = localStorage.getItem("ed")
const sy1 = "&sy="
const sm1 = "&sm="
const sd1 = "&sd="
const ey1 = "&ey="
const em1 = "&em="
const ed1 = "&ed="
// const op = "&leadsource="
// const val = sessionStorage.getItem('leadsource')

const cam = '&cam='
const val2 = sessionStorage.getItem('leadcampaign')
if (ey === 'NaN') {
  ey = sy
}
if (em === 'NaN') {
  em = sm
}
if (ed === 'NaN') {
  ed = sd
}
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
  const fett1 = 'https://srvr1px.cyberads.io/adword_clicks/?dat=source&brand_name='
  const fet1 = fett1 + brand_name
  useState(() => {
    fetch(fet1 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
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
  const colorOptions11 = JSON.parse(sessionStorage.getItem('leadsource'))


  const SourceChange = event => {
    const selval1 = []
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value.replace("&", "@@@")
      val1["label"] = res.value.replace("&", "@@@")
      selval1.push(val1)

    })
    sessionStorage.setItem("leadsource", JSON.stringify(selval1))

  }
  const [colorOptions, setColorOptions] = useState([])
  const fett2 = 'https://srvr1px.cyberads.io/adword_clicks/?dat=campaign&brand_name='
  const fet2 = fett2 + brand_name
  useState(() => {
    fetch(fet2 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
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
  const colorOptionst = JSON.parse(sessionStorage.getItem('leadcampaign'))


  const CampaignChange = event => {
    const selval = []
    event.map(res1 => {
      const val = {}
      val["value"] = res1.value.replace("&", "@@@")
      val["label"] = res1.value.replace("&", "@@@")
      selval.push(val)

    })
    sessionStorage.setItem("leadcampaign", JSON.stringify(selval))

  }

  // const filterColors1 = inputValue => {
  //   return colorOptions1.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  // }

  // const loadOptions = (inputValue, callback) => {
  //   setTimeout(() => {
  //     callback(filterColors1(inputValue))
  //   }, 2000)
  // }

  // const filterColors2 = inputValue => {
  //   return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  // }

  // const fixedOnChange = (value, { action, removedValue }) => {
  //   switch (action) {
  //     case 'remove-value':
  //     case 'pop-value':
  //       if (removedValue.isFixed) {
  //         return
  //       }
  //       break
  //     case 'clear':
  //       value = colorOptions.filter(v => v.isFixed)
  //       break
  //     default:
  //       break
  //   }

    // value = orderOptions(value)
    // setFixedValue(value)
  // }

  // const handleInputChange = newValue => {
  //   const val = newValue.replace(/\W/g, '')
  //   return val
  // }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col className='mb-1 mt-0 mb-7' md='6' sm='6'>
            <h6 className='font-weight-bold'>Source</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name='colors'
              options={colorOptions1}
              defaultValue={colorOptions11}
              className='react-select'
              onChange={SourceChange}
              placeholder='All Sources'
              classNamePrefix='select'
            />
          </Col>
          <Col className='mb-1 mt-0 mb-7' md='6' sm='6'>
            <h6 className='font-weight-bold'>Campaign</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              isMulti
              name='colors'
              options={colorOptions}
              defaultValue={colorOptionst}
              className='react-select'
              onChange={CampaignChange}
              placeholder='All Campaigns'
              classNamePrefix='select'
            />
          </Col>

        </Row>

      </CardBody>
    </Card>
  )
}
export default SelectOptions
