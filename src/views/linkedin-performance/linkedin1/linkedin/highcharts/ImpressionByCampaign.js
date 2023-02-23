// import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
// import Highcharts from "highcharts/highstock"
// import PieChart from "highcharts-react-official"

import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, CardText, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { Fragment, useEffect, useState } from 'react'

const ImpressionByCampaign = () => {
  const [Device, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/linkedin_impbycampaign/?brand_name='
  const fet = fett + brand_name
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
  const campaign = '&campaign='
  const campaigntype = '&campaigntype='
  const link_campaign = sessionStorage.getItem("link_campaign_sel")
  const link_campaigntype = sessionStorage.getItem("link_campaigntype_sel")
  if (ey === 'NaN') {
    ey = sy
}
  if (em === 'NaN') {
    em = sm
  }
  if (ed === 'NaN') {
    ed = sd
  }
  useState(() => { 
    
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + link_campaign + campaigntype + link_campaigntype, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

          setColorOptions(result)
          
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })

  
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
          // marginTop: -10,
          marginTop: 5,
      style: {
              fontFamily: 'Montserrat',
              fontWeight: '600'
          },
      options3d: {
          enabled: false,
          alpha: 45
      }
  },
  title: {
      text: ''
  },

colors: ['#4076d9', '#38a6d9',  '#4acade', '#00def6', '#83ffff', '#97f7c4', '#52c777', '#3aab58', '#15ad29', '#ffc413'],

  tooltip: {
          valuePrefix: ''
      },

  exporting: {
    enabled:false
  },

credits: {
  enabled: false
},
  
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45,
           dataLabels: {
              enabled: false
          },
          showInLegend: true

      }
  },

  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    enabled: true,
    y: 0,
    padding: 3,
    itemMarginTop: 10,
    itemMarginBottom: -5,
    
    itemStyle: {
        lineHeight: '14px'
    }
},

  series: Device
//   [
//     {
//       name: 'Platform Wise Clicks',
//       type: 'pie',
//       data: [
//           ['Facebook', 35],
//           ['Messanger', 2],
//           ['MarketPlace', 2],
//           ['Instagram', 2]
//       ]
//   }
// ]

    
  }
  if (Device.length === 0) {
    return (
      <Fragment>
     
     <Card>
        <Row className='match-height'>
            <Col lg='9' md='12'>
              <CardHeader>
                <CardTitle tag='h4'>Platform Wise Clicks</CardTitle>
              </CardHeader>
            </Col>

            <Col lg='3' md='12'>
              <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30 }}>
                <Spinner color='primary' />
              </div>
              {/* <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts}  /> */}
              <div style={{ height: "430px", visibility: 'hidden' }} ></div>
            </Col>
          </Row>
         
        </Card>
        </Fragment>)
  } else {
  return (
    <Fragment>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Impression By Campaign</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
    </Fragment>
  )
}
}

export default ImpressionByCampaign


// const ImpressionByCampaign = () => {
//   const options = {
//     chart: {
//       type: 'pie',
//       backgroundColor: 'transparent',
//           // marginTop: -10,
//           marginTop: 5,
//       style: {
//               fontFamily: 'Montserrat',
//               fontWeight: '600'
//           },
//       options3d: {
//           enabled: false,
//           alpha: 45
//       }
//   },
//   title: {
//       text: ''
//   },

// colors: ['#4076d9', '#38a6d9',  '#4acade', '#00def6', '#83ffff', '#97f7c4', '#52c777', '#3aab58', '#15ad29', '#ffc413'],

//   tooltip: {
//           valuePrefix: '$'
//       },

//   exporting: {
//     enabled:false
//   },

// credits: {
//   enabled: false
// },
  
//   plotOptions: {
//       pie: {
//           innerSize: 100,
//           depth: 45,
//            dataLabels: {
//               enabled: false
//           },
//           showInLegend: true

//       }
//   },

//   legend: {
//     layout: 'horizontal',
//     align: 'center',
//     verticalAlign: 'bottom',
//     enabled: true,
//     y: 0,
//     padding: 3,
//     itemMarginTop: 10,
//     itemMarginBottom: -5,
    
//     itemStyle: {
//         lineHeight: '14px'
//     }
// },

//   series: [
//     {
//       name: 'Total Engagement Campaign',
//       type: 'pie',
//       data: [
//           ['Suburban Jungle - May 27, 2021', 25],
//           ['Suburban Jungle - Apr 27, 2021', 3],
//           ['Suburban Jungle - Dec 27, 2021', 3],
//           ['LIT_CookOff-Momos_ETMoney', 2],
//           ['Suburban Jungle - Jan 27, 2021', 3],
//           ['Suburban Jungle - Jun 27, 2021', 2],
//           ['Suburban Jungle - Aug 21, 2021', 3],
//           ['Suburban Jungle - Male Only', 3],
//           ['Suburban Jungle - Male Only', 3],
//           ['Others', 2]
//       ]
//   }
// ]

    
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle tag='h4'>Impression By Campaign</CardTitle>
//       </CardHeader>
//       <CardBody>
//         {/* <PieChart highcharts={Highcharts} options={options} /> */}
//         <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
//       </CardBody>
//     </Card>
//   )
// }

// export default ImpressionByCampaign
