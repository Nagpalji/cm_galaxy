import { useContext, useState } from 'react'
import { Row, Col, Modal, ModalBody, Button } from 'reactstrap'
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

  const [modal, setModal] = useState(true)

  const MySwal = withReactContent(Swal)
  if (['theivdocus@cmgalaxy.com', 'demo_account@cmrsl.net', 'cmgalaxy.apeejay@gmail.com', 'cmgalaxy.okana@cmgalaxy.com', 'globallogic@cmrsl.ne', 'admin@cmrsl.net', 'dhavalg@cmrsl.net', 'gauravg@cmrsl.net'].includes(localStorage.getItem("email"))) {
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
  } else {
    // return MySwal.fire({
    //   title: '',
    //   // footer: '<a href="javascript:void(0);">If You any further issue ! Please Let me Know</a>',
    //   // icon: 'success',
    //   // html:
    //   //   'Data Integration Inactive.</b> ',
    //   html: (
    //     <span style={{ fontSize: 25 }}>If you would like to link your Facebook account please contact your account manager.</span>
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
              <p style={{ fontSize: 25 }} className='lh-base'>If you would like to link your Facebook account please contact your account manager.</p>
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
