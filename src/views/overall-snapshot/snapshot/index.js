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

import SourceWisePerformance from './SourceWisePerformance'
import CampaignPerformance from './CampaignPerformance'
import SpendsAndLeadsAnalysis from './SpendsAndLeadsAnalysis'

// Highcharts start
import ProductWiseSpends from './highcharts/ProductWiseSpends'
import RegionWiseSpends from './highcharts/RegionWiseSpends'
import SpendsByBusiness from './highcharts/SpendsByBusiness'
import TrafficSource from './highcharts/TrafficSource'

import MonthlyLeadsPlatform from './highcharts/MonthlyLeadsPlatform'
import WeekOnWeekAnalysis from './highcharts/WeekOnWeekAnalysis'

//Editor Start
import Editoru from './Editoru'
import ExtensionsHeader from '@components/extensions-header'
import '@styles/react/libs/editor/editor.scss'

import DateRangePicker from './DateRangePicker'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='laptophideCustomdropdown match-height mt-0 mb-1'>
        <Col className='widthdate' xl='12' md='12' xs='12'>
          <CustomDropDown />
        </Col>
      </Row>
      <Row className='laptophidedaterange match-height mt-0 mb-1'>
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
          <StatsCard cols={{ xl: '2', md: '4',  xs: '6' }} />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='6' md='12'>
        <SpendsByBusiness />
        </Col>

        <Col lg='6' md='12'>
        <ProductWiseSpends />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='6' md='12'>
        <TrafficSource />
        </Col>

        <Col lg='6' md='12'>
        <RegionWiseSpends />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='12' md='12'>
        <SourceWisePerformance />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='7' md='12'>
        <CampaignPerformance />
        </Col>

        <Col lg='5' md='12'>
        <MonthlyLeadsPlatform />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='5' md='12'>
        <WeekOnWeekAnalysis /> 
        </Col>

        <Col lg='7' md='12'>
        <SpendsAndLeadsAnalysis />
        </Col>
      </Row>

      {/* <Row className='match-height'>
        <Col lg='12' md='12'>
        <Editoru />
        </Col>
      </Row> */}

      {/* <Row className='match-height'>
        <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <ProfitLineChart info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col>
        <Col lg='8' md='12'>
          <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row> 
       <Row className='match-height'>
        <Col lg='12' md='6' xs='12'>
          <CardMeetup />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
      </Row> */}
    </div>
  )
}

export default EcommerceDashboard
