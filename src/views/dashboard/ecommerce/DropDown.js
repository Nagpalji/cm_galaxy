import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label, Button } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'
import Cookies from 'universal-cookie'

const animatedComponents = makeAnimated()
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
  const f1 = "&f="
  const reg = localStorage.getItem("google_region")
  
  
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

const formatGroupLabel = data => (
  <div className='d-flex justify-content-between align-center'>
    <strong>
      <span>{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
)

const SelectOptions = () => { 
  const [colorOptions, setColorOptions] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/adword_campaignname/?brand_name='
  const fet = fett + brand_name
  
  useState(() => { 
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
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
  const colorOptions00 = JSON.parse(sessionStorage.getItem('google_campaign_sel'))
  const [colorOptions1, setColorOptions1] = useState([])
  
  const fett1 = 'https://srvr1px.cyberads.io/adword_region/?brand_name='
  const fet1 = fett1 + brand_name
  useEffect(() => { 
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
 
  const colorOptions11 = JSON.parse(sessionStorage.getItem('google_region_sel'))
const [colorOptions2, setColorOptions2] = useState([])

  const fett2 = 'https://srvr1px.cyberads.io/adword_adgroup/?brand_name='
  const fet2 = fett2 + brand_name
  useEffect(() => { 
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
  const colorOptions22 = JSON.parse(sessionStorage.getItem('google_adgroup_sel'))
  const [colorOptions3, setColorOptions3] = useState([])
  
  const fett3 = 'https://srvr1px.cyberads.io/adword_device/?brand_name='
  const fet3 = fett3 + brand_name
  useEffect(() => { 
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
  const colorOptions33 = JSON.parse(sessionStorage.getItem('google_device_sel'))
  //const [fixedValue, setFixedValue] = useState(orderOptions([colorOptions[0], colorOptions[1], colorOptions[3]]))


  const [valRegion, setValRegion] = useState([])

  const handleOnChange = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value.replace("&", "@@@")
      val1["label"] = res.value.replace("&", "@@@")
      selval1.push(val1)

    })
    sessionStorage.setItem("google_campaign_sel", JSON.stringify(selval1))
  }
  const handleOnChange1 = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value
      val1["label"] = res.value
      selval1.push(val1)

    })
    sessionStorage.setItem("google_region_sel", JSON.stringify(selval1))
  }
  const handleOnChange2 = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value
      val1["label"] = res.value
      selval1.push(val1)

    })
    sessionStorage.setItem("google_adgroup_sel", JSON.stringify(selval1))
  }
  const handleOnChange3 = event => {
    const valReg = []
    const selval1 = []
    
    event.map(res => {
      const val1 = {}
      val1["value"] = res.value
      val1["label"] = res.value
      selval1.push(val1)

    })
    sessionStorage.setItem("google_device_sel", JSON.stringify(selval1))
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
  function filterdata(e) {
    console.log(e, "filter")
  }

  const promiseOptions = inputValue => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filterColors2(inputValue))
      }, 2000)
    })
  }
  const saved = JSON.parse(sessionStorage.getItem('google_campaign'))
  console.log(saved)
  return (
    <Card>
      <CardBody>
        <Row>
          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Campaign Name</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options= {colorOptions}
              defaultValue={colorOptions00}
              className='react-select'
              onChange={handleOnChange}
              placeholder='Campaign Name'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Region</h6>
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
              placeholder='Region'
              classNamePrefix='select'
            />
            
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Ad Group</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti={true}
              name='colors'
              options={colorOptions2}
              defaultValue={colorOptions22}
              className='react-select'
              onChange={handleOnChange2}
              placeholder='Ad Group'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
          <h6 className='font-weight-bold'>Device</h6>
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
              placeholder='Device'
              classNamePrefix='select'
            />
          </Col>
        </Row>
        <Row className='match-height'>
        <Col  xl='10' lg='12'></Col>
          <Col className='mt-1' xl='2' lg='12'>
              <Button.Ripple onClick={() => window.location.reload(false)} className='pull-right' color='primary'>Get Data</Button.Ripple>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectOptions
// import React, { useEffect, useState } from 'react'
// import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'
// import { selectThemeColors } from '@utils'
// import Select, { components } from 'react-select'
// import makeAnimated from 'react-select/animated'
// import CreatableSelect from 'react-select/creatable'
// import AsyncSelect from 'react-select/async'
// import Cookies from 'universal-cookie'
// // sessionStorage.setItem("google_region", 0)
// // sessionStorage.setItem("google_device", 0)
// // sessionStorage.setItem("google_adgroup", 0)
// // sessionStorage.setItem("google_campaign", 0)
// /*const colorOptions = [
//   { value: 'Gems Vizag', label: 'Gems Vizag', color: '#00B8D9', isFixed: true },
//   { value: 'Gems Bangalore', label: 'Gems Bangalore', color: '#0052CC', isFixed: true },
//   { value: 'Gems Mysore', label: 'Gems Mysore', color: '#5243AA', isFixed: true },
//   { value: 'Fiestaa Resort', label: 'Fiestaa Resort', color: '#FF5630', isFixed: false },
//   { value: 'Fiestaa-Catering Service', label: 'Fiestaa-Catering Service', color: '#FF8B00', isFixed: false }
// ]*/
// // const colorOptions1 = [
// //   { value: 'http://admissions.gemsbschool.net/landing/gems-tirupathi/', label: 'http://admissions.gemsbschool.net/landing/gems-tirupathi/', color: '#00B8D9', isFixed: true },
// //   { value: 'http://admissions.gemsbschool.net/landing/gems-corporate/', label: 'http://admissions.gemsbschool.net/landing/gems-corporate/', color: '#0052CC', isFixed: true },
// //   { value: 'http://admissions.gemsbschool.net/landing/industry-synergised-bba', label: 'http://admissions.gemsbschool.net/landing/industry-synergised-bba', color: '#5243AA', isFixed: true },
// //   { value: 'http://admissions.gemsbschool.net/landing/gems-mysore/', label: 'http://admissions.gemsbschool.net/landing/gems-mysore/', color: '#FF5630', isFixed: false },
// //   { value: 'admissions.gemsbschool.net/landing/gems-vizag', label: 'admissions.gemsbschool.net/landing/gems-vizag', color: '#FF8B00', isFixed: false },
// //   { value: 'http://admissions.gemsbschool.net/landing/gems-bschool-mba/', label: 'http://admissions.gemsbschool.net/landing/gems-bschool-mba/', color: '#FFC400', isFixed: false }
// // ]

// // const colorOptions2 = [
// //   { value: 'Facebook', label: 'Facebook', color: '#00B8D9', isFixed: true },
// //   { value: 'Google Adwords', label: 'Google Adwords', color: '#0052CC', isFixed: true },
// //   { value: 'Organic', label: 'Organic', color: '#5243AA', isFixed: true },
// //   { value: 'Linkedin', label: 'Linkedin', color: '#FF5630', isFixed: false },
// //   { value: 'Direct', label: 'Direct', color: '#FF8B00', isFixed: false }
// // ]

// // const colorOptions3 = [
// //   { value: 'Karnataka', label: 'Karnataka', color: '#00B8D9', isFixed: true },
// //   { value: 'Bihar', label: 'Bihar', color: '#0052CC', isFixed: true },
// //   { value: 'Maharashtra', label: 'Maharashtra', color: '#5243AA', isFixed: true },
// //   { value: 'Kerala', label: 'Kerala', color: '#FF5630', isFixed: false },
// //   { value: 'Haryana', label: 'Haryana', color: '#FF8B00', isFixed: false },
// //   { value: 'West Bengal', label: 'West Bengal', color: '#00B8D9', isFixed: true },
// //   { value: 'Andhra Pradesh', label: 'Andhra Pradesh', color: '#FFC400', isFixed: false },
// //   { value: 'Tripura', label: 'Tripura', color: '#FFC400', isFixed: false }
// // ]

// const animatedComponents = makeAnimated()
// const sy = localStorage.getItem("sy")  
//   const sm = localStorage.getItem("sm")
//   const sd = localStorage.getItem("sd")
//   let ey = localStorage.getItem("ey")
//   let em = localStorage.getItem("em") 
//   let ed = localStorage.getItem("ed")
//   const sy1 = "&sy="
//   const sm1 = "&sm="
//   const sd1 = "&sd="
//   const ey1 = "&ey="
//   const em1 = "&em="
//   const ed1 = "&ed="
//   const f1 = "&f="
//   const reg = localStorage.getItem("google_region")
  
  
//   if (ey === 'NaN') {
//     ey = sy
// }
//   if (em === 'NaN') {
//     em = sm
//   }
//   if (ed === 'NaN') {
//     ed = sd
//   }

// const styles = {
//   multiValue: (base, state) => {
//     return state.data.isFixed ? { ...base, opacity: '0.5' } : base
//   },
//   multiValueLabel: (base, state) => {
//     return state.data.isFixed ? { ...base, color: '#626262', paddingRight: 6 } : base
//   },
//   multiValueRemove: (base, state) => {
//     return state.data.isFixed ? { ...base, display: 'none' } : base
//   }
// }

// // const orderOptions = values => {
// //   if (values.length > 0) return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed))
// // }

// const formatGroupLabel = data => (
//   <div className='d-flex justify-content-between align-center'>
//     <strong>
//       <span>{data.label}</span>
//     </strong>
//     <span>{data.options.length}</span>
//   </div>
// )

// const SelectOptions = () => { 
//   const [colorOptions, setColorOptions] = useState([])
//   const fet = 'http://srvr1px.cyberads.io/adword_campaignname/?brand_name=Gemsbschool'
  
//   useState(() => { 
//     fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
//          method: 'GET'
//     })
//     .then(res => res.json())  
//     .then((result) => {
//           result.map((item) => { 
  
//             colorOptions.push({
//             label: item.label,
//             value: item.value
//           })
            
//           })
//           setColorOptions(colorOptions)
//           //console.log(colorOptions)
//         },
//           (error) => {
//             //this.setState({ error });
//           }
//         )
//   })
//   const [colorOptions1, setColorOptions1] = useState([])
//   const fet1 = 'http://srvr1px.cyberads.io/adword_region/?brand_name=Gemsbschool'
//   useEffect(() => { 
//     fetch(fet1 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
//          method: 'GET'
//     })
//     .then(res => res.json())  
//     .then((result) => {
//           result.map((item) => { 
  
//             colorOptions1.push({
//             label: item.label,
//             value: item.value
//           })
            
//           })
//           setColorOptions1(colorOptions1)
//           //console.log(colorOptions)
//         },
//           (error) => {
//             //this.setState({ error });
//           }
//         )
//   })
//   const [colorOptions2, setColorOptions2] = useState([])
//   const fet2 = 'http://srvr1px.cyberads.io/adword_adgroup/?brand_name=Gemsbschool'
//   useEffect(() => { 
//     fetch(fet2 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
//          method: 'GET'
//     })
//     .then(res => res.json())  
//     .then((result) => {
//           result.map((item) => { 
  
//             colorOptions2.push({
//             label: item.label,
//             value: item.value
//           })
            
//           })
//           setColorOptions2(colorOptions2)
//           //console.log(colorOptions)
//         },
//           (error) => {
//             //this.setState({ error });
//           }
//         )
//   })
//   const [colorOptions3, setColorOptions3] = useState([])
//   const fet3 = 'http://srvr1px.cyberads.io/adword_device/?brand_name=Gemsbschool'
//   useEffect(() => { 
//     fetch(fet3 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed, {
//          method: 'GET'
//     })
//     .then(res => res.json())  
//     .then((result) => {
//           result.map((item) => { 
  
//             colorOptions3.push({
//             label: item.label,
//             value: item.value
//           })
            
//           })
//           setColorOptions3(colorOptions3)
//           //console.log(colorOptions)
//         },
//           (error) => {
//             //this.setState({ error });
//           }
//         )
//   })
//   //const [fixedValue, setFixedValue] = useState(orderOptions([colorOptions[0], colorOptions[1], colorOptions[3]]))


//   const [valRegion, setValRegion] = useState([])
  
//   const handleOnChange = event => {
//     const valReg = []
//     event.map(res => {
//       valReg.push(res.value)

//       const cv = JSON.stringify(valReg)
//       const cv2 = cv.replace("&", "@@@")
//       sessionStorage.setItem("google_campaign", (cv2))
      

//     })
    
//     if (valReg.length === 0) {
     
//       sessionStorage.setItem("google_campaign", 0)
//   }
//   }
//   const handleOnChange1 = event => {
//     const valReg = []
//     event.map(res => {
//       valReg.push(res.value)
      
//       sessionStorage.setItem("google_region", JSON.stringify(valReg))
      

//     })
    
//     if (valReg.length === 0) {
     
//       sessionStorage.setItem("google_region", 0)
//   }
//   }
//   const handleOnChange2 = event => {
//     const valReg = []
//     event.map(res => {
//       valReg.push(res.value)
      
//       sessionStorage.setItem("google_adgroup", JSON.stringify(valReg))
      

//     })
    
//     if (valReg.length === 0) {
     
//       sessionStorage.setItem("google_adgroup", 0)
//   }
//   }
//   const handleOnChange3 = event => {
//     const valReg = []
//     event.map(res => {
//       valReg.push(res.value)
      
//       sessionStorage.setItem("google_device", JSON.stringify(valReg))
      

//     })
    
//     if (valReg.length === 0) {
     
//       sessionStorage.setItem("google_device", 0)
//   }
//   }

//   const filterColors1 = inputValue => {
//     return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
//   }

//   const loadOptions = (inputValue, callback) => {
//     setTimeout(() => {
//       callback(filterColors1(inputValue))
//     }, 2000)
//   }

//   const filterColors2 = inputValue => {
//     return colorOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
//   }

//   const fixedOnChange = (value, { action, removedValue }) => {
//     switch (action) {
//       case 'remove-value':
//       case 'pop-value':
//         if (removedValue.isFixed) {
//           return
//         }
//         break
//       case 'clear':
//         value = colorOptions.filter(v => v.isFixed)
//         break
//       default:
//         break
//     }

//     value = orderOptions(value)
//     setFixedValue(value)
//   }
//   const handleInputChange = newValue => {
//     const val = newValue.replace(/\W/g, '')
//     return val
//   }
//   function filterdata(e) {
//     console.log(e, "filter")
//   }

//   const promiseOptions = inputValue => {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(filterColors2(inputValue))
//       }, 2000)
//     })
//   }
//   const saved = JSON.parse(sessionStorage.getItem('google_campaign'))
//   console.log(saved)
//   return (
//     <Card>
//       <CardBody>
//         <Row>
//           <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
//           <h6 className='font-weight-bold'>Campaign Name</h6>
//             <Select
//               isClearable={false}
//               theme={selectThemeColors}
//               // defaultValue={[colorOptions[2], colorOptions[3]]}
//               isMulti
//               name='colors'
//               options= {colorOptions}
//               selected={JSON.parse(sessionStorage.getItem('google_campaign'))}
//               // onChange= { (e) => { console.log(e) } }
//               // values={sessionStorage.getItem('google_campaign')}
//               className='react-select'
//               onChange={handleOnChange}
//               placeholder='Campaign Name'
//               classNamePrefix='select'
//             />
//           </Col>

//           <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
//           <h6 className='font-weight-bold'>Region</h6>
//             <Select
//               isClearable={false}
//               theme={selectThemeColors}
//               // defaultValue={[colorOptions[2], colorOptions[3]]}
//               isMulti
//               name='colors'
//               options={colorOptions1}
//               className='react-select'
//               onChange={handleOnChange1}
//               placeholder='Region'
//               classNamePrefix='select'
//             />
//           </Col>

//           <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
//           <h6 className='font-weight-bold'>Ad Group</h6>
//             <Select
//               isClearable={false}
//               theme={selectThemeColors}
//               // defaultValue={[colorOptions[2], colorOptions[3]]}
//               isMulti
//               name='colors'
//               options={colorOptions2}
//               className='react-select'
//               onChange={handleOnChange2}
//               placeholder='Ad Group'
//               classNamePrefix='select'
//             />
//           </Col>

//           <Col className='mb-1 mt-0 mb-7' md='3' sm='12'>
//           <h6 className='font-weight-bold'>Device</h6>
//             <Select
//               isClearable={false}
//               theme={selectThemeColors}
//               // defaultValue={[colorOptions[2], colorOptions[3]]}
//               isMulti
//               name='colors'
//               options={colorOptions3}
//               className='react-select'
//               onChange={handleOnChange3}
//               placeholder='Device'
//               classNamePrefix='select'
//             />
//           </Col>
//         </Row>
//       </CardBody>
//     </Card>
//   )
// }
// export default SelectOptions