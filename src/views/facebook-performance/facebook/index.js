import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

// import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
// import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
// import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
// import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
// import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
// import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
// import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
// import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
// import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import StatsCard from './StatsCard'
import DropDown from './DropDown'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import CustomDropDown from "./CustomDropDown"

import TopCampaigns from './TopCampaigns'
import AudienceOverview from './AudienceOverview'

// Highcharts start
import PlatformWiseClicks from './highcharts/PlatformWiseClicks'
import Demographic from './highcharts/Demographic'
import LeadsByAudience from './highcharts/LeadsByAudience'
import AdPerformance from './highcharts/AdPerformance'

import DateRangePicker from './DateRangePicker'
import '@styles/react/libs/flatpickr/flatpickr.scss'
sessionStorage.setItem("nam", "Facebook Performance")
const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='laptophideCustomdropdown match-height mt-1 mb-1'>
        <Col className='widthdate' xl='12' md='12' xs='12'>
          <CustomDropDown />
        </Col>
      </Row>
      <Row className='laptophidedaterange match-height mt-1 mb-1'>
        <Col className='widthdate' xl='12' md='12' xs='12'>
          <DateRangePicker />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <DropDown />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col xl='12' md='12' xs='12'>
          <StatsCard cols={{ xl: '3', md: '4', xs: '6' }} />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='7' md='12'>
          <TopCampaigns />
        </Col>

        <Col lg='5' md='12'>
          <PlatformWiseClicks />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='5' md='12'>
          <Demographic />
        </Col>

        <Col lg='7' md='12'>
          <AudienceOverview />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='5' md='6'>
          <LeadsByAudience />
        </Col>

        <Col lg='7' md='12'>
          <AdPerformance />
        </Col>
      </Row>
      
    </div>
  )
}

export default EcommerceDashboard
