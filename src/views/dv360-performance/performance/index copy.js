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
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ThumbsDown } from 'react-feather'
import InventoryDetailedBreakdown from './InventoryDetailedBreakdown'
import AppURLImpressionsSpendDistribution from './AppURLImpressionsSpendDistribution'

// Highcharts start
import DeviceBreakdownImpressions from './highcharts/DeviceBreakdownImpressions'
import DeviceBreakdownCost from './highcharts/DeviceBreakdownCost'
import DeviceBreakdownClicks from './highcharts/DeviceBreakdownClicks'
import ExchangeSpends from './highcharts/ExchangeSpends'

import DateRangePicker from './DateRangePicker'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'
    const MySwal = withReactContent(Swal)
    if (['demo_account@cmrsl.net', 'admin@cmrsl.net', 'dhavalg@cmrsl.net', 'gauravg@cmrsl.net', 'adomantradigital2@cmgalaxy.com', 'pldigital@cmgalaxy.com', 'jiosaavn@cmgalaxy.com', 'redrocksent@cmgalaxy.com', 'thebrandbrewery@cmgalaxy.com', 'abpnetwork@cmgalaxy.com', 'bizad@cmgalaxy.com', 'bidsoptnew@cmgalaxy.com'].includes(localStorage.getItem("email"))) {
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
              <StatsCard cols={{ xl: '2', md: '4',  xs: '6' }} />
            </Col>
          </Row>
    
          <Row className='match-height'>
            <Col lg='7' md='12'>
            <InventoryDetailedBreakdown />
            </Col>
    
            <Col lg='5' md='12'>
            <DeviceBreakdownImpressions />
            </Col>
          </Row>
    
          <Row className='match-height'>
            <Col lg='5' md='12'>
             <DeviceBreakdownClicks /> 
            </Col>
    
            <Col lg='7' md='12'>
            <ExchangeSpends/>
            </Col>
          </Row>
    
          <Row className='match-height'>
            <Col lg='5' md='12'>
             <DeviceBreakdownCost /> 
            </Col>
    
            <Col lg='7' md='12'>
            <AppURLImpressionsSpendDistribution />
            </Col>
          </Row>
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
    } else {
      return MySwal.fire({
        title: '',
        // footer: '<a href="javascript:void(0);">If You any further issue ! Please Let me Know</a>',
        // icon: 'success',
        // html:
        //   'Data Integration Inactive.</b> ',
        html: (
          <span style={{ fontSize: 25 }}>If you would like to link your DV 360 account please contact your account manager.</span>
        ),
        showCloseButton: false,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: (
          <span className='align-middle'>
            {/* <ThumbsUp className='mr-50' size={15} /> */}
            {/* <span className='align-middle'>Close</span> */}
            <a href="/overall-snapshot" className='align-middle text-white'>Close</a>
          </span>
        ),
        cancelButtonText: <ThumbsDown size={15} />,
        customClass: {
          confirmButton: 'btn btn-primary custom-buttoncss',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false
      })
    }
  
}

export default EcommerceDashboard
