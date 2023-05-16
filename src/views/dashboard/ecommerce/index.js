import { useContext, useState } from 'react'
import { Row, Col, Modal, ModalBody, Button } from 'reactstrap'
import CompanyTable from './CompanyTable'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
// import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import StatsCard from './StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import CustomDropDown from "./CustomDropDown"

// import DropDown from '@src/views/ui-elements/cards/statistics/DropDown'
import DropDown from './DropDown'
import '@styles/react/libs/react-select/_react-select.scss'

import DashboardTable from './DashboardTable'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import TopCampaign from './TopCampaign'
import AudienceOverview from './AudienceOverview'
import CampaignTypePerformance from './KeywordPerformance'

// Highcharts start
import DeviceWiseAttribution from './highcharts/DeviceWiseAttribution'
import Demographic from './highcharts/Demographic'
import KeywordPerformance from './highcharts/AdPerformance'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ThumbsDown } from 'react-feather'
import DateRangePicker from './DateRangePicker'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// sessionStorage.setItem("nam", "Google Performance")
const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  const [modal, setModal] = useState(true)
  const MySwal = withReactContent(Swal)
  if (['demo_account@cmrsl.net', 'admin@cmrsl.net', 'dhavalg@cmrsl.net', 'gauravg@cmrsl.net', 'cm.gems.mysore@gmail.com', 'cm.gems.fiestaa.cuisines@gmai.com', 'cm.gems.fiestaa.resort@gmail.com', 'cmgalaxy.uom@gmail.com', 'cmgalaxy.gndu@gmail.com', 'cm.gems.bschool@gmail.com', 'cm.gems.captive@gmail.com', 'cm.gems.vizag@gmail.com', 'cm.gems.tirupathi@gmail.com', 'frtesting@test.com', 'cmgalaxy.okana@cmgalaxy.com', 'gemssmart@gmail.com', 'theivdocus@cmgalaxy.com'].includes(localStorage.getItem("email"))) {
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
          {/* <Col xl='12' md='12' xs='12'>
              <CardMedal />
            </Col> */}
          <Col xl='12' md='12' xs='12'>
            <StatsCard cols={{ xl: '3', md: '4', xs: '6' }} />
          </Col>
        </Row>

        <Row className='match-height'>
          <Col lg='7' md='12'>
            <TopCampaign />
          </Col>

          <Col lg='5' md='12'>
            <DeviceWiseAttribution />
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
          <Col lg='7' md='12'>
            <CampaignTypePerformance />
          </Col>

          <Col lg='5' md='12'>
            <KeywordPerformance />
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
          </Row> */}

        {/* <Row className='match-height'>
            <Col lg='8' xs='12'>
              <CompanyTable />
            </Col>
            <Col lg='4' md='6' xs='12'>
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
    // return MySwal.fire({
    //   title: '',
    //   // footer: '<a href="javascript:void(0);">If You any further issue ! Please Let me Know</a>',
    //   // icon: 'success',
    //   // html:
    //   //   'Data Integration Inactive.</b> ',
    //   html: (
    //     <span style={{ fontSize: 25 }}>If you would like to link your Google account please contact your account manager.</span>
    //   ),
    //   showCloseButton: false,
    //   showCancelButton: false,
    //   focusConfirm: false,
    //   confirmButtonText: (
    //     <span className='align-middle'>
    //       {/* <ThumbsUp className='mr-50' size={15} /> */}
    //       {/* <span className='align-middle'>Close</span> */}
    //       <a href="/overall-snapshot" className='align-middle text-white'>Close</a>
    //     </span>
    //   ),
    //   cancelButtonText: <ThumbsDown size={15} />,
    //   customClass: {
    //     confirmButton: 'btn btn-primary custom-buttoncss',
    //     cancelButton: 'btn btn-outline-danger ml-1'
    //   },
    //   buttonsStyling: false
    // })
    return (
      <>
        <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} >
          <ModalBody className='text-center m-1'>
            <div className='m-xl-2 m-sx-0'>
              <p style={{ fontSize: 25 }}>If you would like to link your Google account please contact your account manager.</p>
            </div>
            <span>
              <Button.Ripple color="primary" className='mt-1'>
                <a href="/overall-snapshot" className='text-white'>Close</a>
              </Button.Ripple>
            </span>
          </ModalBody>
        </Modal>
      </>
    )
  }

}

export default EcommerceDashboard
