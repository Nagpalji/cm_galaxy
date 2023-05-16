import { useContext, useState } from 'react'
import { Row, Col, Modal, CardHeader, ModalBody, Button } from 'reactstrap'
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
import LeadPerformance from './LeadPerformance'
import OverallPerformance from './OverallPerformance'
//////////////////////////////////////////////////////pop start
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ThumbsDown } from 'react-feather'
// Highcharts start
import ImpressionByCampaign from './highcharts/ImpressionByCampaign'
import CPCAndCPLAnalysis from './highcharts/CPCAndCPLAnalysis'
import CostByCampaign from './highcharts/CostByCampaign'
import { FaAmazon, FaUser } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

const EcommerceDashboard = () => {
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'
  // my popup start
  const MySwal = withReactContent(Swal)

  // const handleHTMLAlert = () => {
  // return MySwal.fire({
  //   title: '',
  //   // footer: '<a href="javascript:void(0);">If You any further issue ! Please Let me Know</a>',
  //   // icon: 'success',
  //   // html:
  //   //   'Data Integration Inactive.</b> ',
  //   html: (
  //     <span style={{ fontSize: 25 }}>If you would like to link your Amazon account please contact your account manager.</span>
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
  const [modal, setModal] = useState(true)

  return (
    <>
      <Modal size='lg' isOpen={modal} toggle={() => setModal(!modal)} centered backdrop="static" keyboard={false} >
        <ModalBody className='text-center m-1'>
          <div className='m-xl-2 m-sx-0'>
            <p style={{ fontSize: 25 }} className='lh-base'>If you would like to link your Amazon account please contact your account manager.</p>
          </div>
          <span>
            <Button.Ripple color="primary" className='mt-1' tag={Link} to="/">
              Close
            </Button.Ripple>
          </span>
        </ModalBody>
      </Modal>
    </>
  )
  // }
  // my popup end
  return (
    <div id='dashboard-ecommerce'>
      <Row className='laptophideCustomdropdown match-height mt-1 mb-1'>
        <Col className='widthdate' xl='12' md='12' xs='12'>
          <CustomDropDown />
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
          <ImpressionByCampaign />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='5' md='12'>
          <CPCAndCPLAnalysis />
        </Col>

        <Col lg='7' md='12'>
          <OverallPerformance />
        </Col>
      </Row>

      <Row className='match-height'>
        <Col lg='5' md='6'>
          <CostByCampaign />
        </Col>

        <Col lg='7' md='12'>
          <LeadPerformance />
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
}

export default EcommerceDashboard
