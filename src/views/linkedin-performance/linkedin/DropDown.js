import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Label } from 'reactstrap'
import { selectThemeColors } from '@utils'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'
import AsyncSelect from 'react-select/async'
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   GitHub,
//   Instagram,
//   Dribbble,
//   Gitlab,
//   File,
//   FileText,
//   Image,
//   Figma,
//   Chrome,
//   Command,
//   Slack,
//   Youtube
// } from 'react-feather'

const colorOptions = [
  { value: 'Suburban Jungle - May 27, 2021', label: 'Suburban Jungle - May 27, 2021', color: '#0052CC', isFixed: true },
  { value: 'Suburban Jungle - Jun 27, 2021', label: 'Suburban Jungle - Jun 27, 2021', color: '#00B8D9', isFixed: true },
  { value: 'Suburban Jungle - Apr 27, 2021', label: 'Suburban Jungle - Apr 27, 2021', color: '#FF5630', isFixed: false },
  { value: 'Suburban Jungle - Jan 27, 2021', label: 'Suburban Jungle - Jan 27, 2021', color: '#5243AA', isFixed: true },
  { value: 'Suburban Jungle Lead Gen- Sep 9, 2021', label: 'Suburban Jungle Lead Gen- Sep 9, 2021', color: '#5243AA', isFixed: true },
  { value: 'Suburban Jungle - Dec 27, 2021', label: 'Suburban Jungle - Dec 27, 2021', color: '#5243AA', isFixed: true },
  { value: 'Suburban Jungle - Oct 27, 2021', label: 'Suburban Jungle - Oct 27, 2021', color: '#5243AA', isFixed: true }
]

const colorOptions1 = [
  // { value: 'General | BO | Conversions | BN - FB', label: 'General | BO | Conversions | BN - FB', color: '#00B8D9', isFixed: true },
  // { value: 'Re-marketing | Suburban Jungle', label: 'Re-marketing | Suburban Jungle', color: '#0052CC', isFixed: true },
  // { value: 'General | BO | Conversions | BN - Instagram', label: 'General | BO | Conversions | BN - Instagram', color: '#5243AA', isFixed: true },
  // { value: 'FB Boosted Post | "All Audience" - Look-a-Like', label: 'FB Boosted Post | "All Audience" - Look-a-Like', color: '#FF5630', isFixed: false },
  // { value: 'FB Boosted Post | "All Audience" - San Francisco', label: 'FB Boosted Post | "All Audience" - San Francisco', color: '#FF8B00', isFixed: false },
  { value: 'Sponsored Update', label: 'Sponsored Update', color: '#FFC400', isFixed: false }
]

const colorOptions2 = [
  // { value: 'Smoljan', label: 'Smoljan', color: '#FF8B00', isFixed: false },
  // { value: 'Panama', label: 'Panama', color: '#5243AA', isFixed: true },
  // { value: 'Region XII', label: 'Region XII', color: '#00B8D9', isFixed: true },
  { value: 'Lead generation', label: 'Lead generation', color: '#FF5630', isFixed: false },
  { value: 'Website conversions', label: 'Website conversions', color: '#0052CC', isFixed: true }
]
// const iconOptions = [
//   {
//     label: 'Social Media',
//     options: [
//       {
//         value: 'facebook',
//         label: 'Facebook',
//         icon: Facebook
//       },
//       {
//         value: 'twitter',
//         label: 'Twitter',
//         icon: Twitter
//       },
//       {
//         value: 'linkedin',
//         label: 'Linkedin',
//         icon: Linkedin
//       },
//       {
//         value: 'github',
//         label: 'Github',
//         icon: GitHub
//       },
//       {
//         value: 'instagram',
//         label: 'Instagram',
//         icon: Instagram
//       },
//       {
//         value: 'dribbble',
//         label: 'Dribbble',
//         icon: Dribbble
//       },
//       {
//         value: 'gitlab',
//         label: 'Gitlab',
//         icon: Gitlab
//       }
//     ]
//   },
//   {
//     label: 'File Types',
//     options: [
//       { value: 'pdf', label: 'PDF', icon: File },
//       { value: 'word', label: 'word', icon: FileText },
//       { value: 'image', label: 'Image', icon: Image }
//     ]
//   },
//   {
//     label: 'Others',
//     options: [
//       { value: 'figma', label: 'Figma', icon: Figma },
//       { value: 'chrome', label: 'Chrome', icon: Chrome },
//       { value: 'safari', label: 'Safari', icon: Command },
//       { value: 'slack', label: 'Slack', icon: Slack },
//       { value: 'youtube', label: 'Youtube', icon: Youtube }
//     ]
//   }
// ]

// const OptionComponent = ({ data, ...props }) => {
//   const Icon = data.icon

//   return (
//     <components.Option {...props}>
//       <Icon className='mr-50' size={14} />
//       {data.label}
//     </components.Option>
//   )
// }

// const groupedOptions = [
//   {
//     label: 'Ice Creams',
//     options: [
//       { value: 'vanilla', label: 'Vanilla' },
//       { value: 'Dark Chocolate', label: 'Dark Chocolate' },
//       { value: 'chocolate', label: 'Chocolate' },
//       { value: 'strawberry', label: 'Strawberry' },
//       { value: 'salted-caramel', label: 'Salted Caramel' }
//     ]
//   },
//   {
//     label: 'Snacks',
//     options: [
//       { value: 'Pizza', label: 'Pizza' },
//       { value: 'Burger', label: 'Burger' },
//       { value: 'Pasta', label: 'Pasta' },
//       { value: 'Pretzel', label: 'Pretzel' },
//       { value: 'Popcorn', label: 'Popcorn' }
//     ]
//   }
// ]

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
  const [fixedValue, setFixedValue] = useState(orderOptions([colorOptions[0], colorOptions[1], colorOptions[3]]))

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
          <Col className='mb-1 mt-0 mb-7' md='4' sm='12'>
          <h6 className='font-weight-bold'>Campaign Name</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions}
              className='react-select'
              placeholder='Campaign Name'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='4' sm='12'>
          <h6 className='font-weight-bold'>Campaign Type</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions1}
              className='react-select'
              placeholder='Campaign Type'
              classNamePrefix='select'
            />
          </Col>

          <Col className='mb-1 mt-0 mb-7' md='4' sm='12'>
          <h6 className='font-weight-bold'>Campaign Objective</h6>
            <Select
              isClearable={false}
              theme={selectThemeColors}
              // defaultValue={[colorOptions[2], colorOptions[3]]}
              isMulti
              name='colors'
              options={colorOptions2}
              className='react-select'
              placeholder='Campaign Objective'
              classNamePrefix='select'
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default SelectOptions
