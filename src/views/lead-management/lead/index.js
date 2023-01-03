import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import DropDown from './DropDown'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import LeadManagement from './LeadManagement'
import DateRangePicker from './DateRangePicker'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='laptophidedaterange match-height mt-1 mb-1'>
        <Col className='widthdate' xl='12' md='12' xs='12'>
          <DateRangePicker />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='12' md='12'>
          <LeadManagement />
        </Col>
      </Row>     
    </div>
  )
}
export default EcommerceDashboard
