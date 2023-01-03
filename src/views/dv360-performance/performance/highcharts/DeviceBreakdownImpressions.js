import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState } from 'react'

const DeviceBreakdownImpressions = () => {
  const [Device, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/dv360_deviceimpr/?brand_name='
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
  const exchange = '&exchange='
  const insertion = '&insertion='
  const app = "&app="
  const dv_campaign = sessionStorage.getItem("dv360_campaign_sel")
  const dv_exchange = sessionStorage.getItem("dv360_exchange_sel")
  const dv_insertion = sessionStorage.getItem("dv360_insertion_order_sel")
  const dv_app = sessionStorage.getItem("dv360_app_url_sel")
  
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
    
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + dv_campaign + exchange + dv_exchange + insertion + dv_insertion + app + dv_app, {
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
//    [
//     {
//       name: 'Device Breakdown Impressions',
//       type: 'pie',
//       data: [
//           ['Smart Phone', 35],
//           ['Desktop', 2],
//           ['Tablet', 2],
//           ['Connected TV', 2]
//       ]
//   }
// ]

    
  }
  if (Device.length === 0) {
    return (

      <Card>
      <Row className='match-height'>
          <Col lg='9' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Device Breakdown(Impressions)</CardTitle>
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
        )
  } else {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Device Breakdown(Impressions)</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}
}
export default DeviceBreakdownImpressions
