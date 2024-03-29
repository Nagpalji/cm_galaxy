import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState } from 'react'
const DeviceWiseAttribution = () => {
  const [Device, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/adword_dattribution/?brand_name='
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

  const region = '&region='
  const campaign = '&campaign='
  const adgroup = '&adgroup='
  const device = "&device="
  const google_region = sessionStorage.getItem("google_region_sel")
  const google_campaign = sessionStorage.getItem("google_campaign_sel")
  const google_adgroup = sessionStorage.getItem("google_adgroup_sel")
  const google_device = sessionStorage.getItem("google_device_sel")
  
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
    
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + region + google_region + campaign + google_campaign + adgroup + google_adgroup + device + google_device, {
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

  const xcategories = ['Clicks', 'Spends']
  if (['cmgalaxy.okana@cmgalaxy.com', 'theivdocus@cmgalaxy.com'].includes(localStorage.getItem("email"))) {
    xcategories.push('Conversions')
  } else {
    xcategories.push('Leads')
  }
  
  const options = {

    chart: {
      marginRight:15,
      marginTop:30,
      // marginLeft: 55,
      type: 'column',
      style: {
              fontFamily: 'Montserrat',
              fontWeight: '600'
          }
  },

colors: ['#ffc413', '#4acade', '#83ffff', '#97f7c4', '#52c777'],

  title: {
      text: ''
  },

   legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      y: 0,
      padding: 3,
      itemMarginTop: 10,
      itemMarginBottom: -10,
      itemStyle: {
          lineHeight: '14px'
      }
  },

   exporting: {
    enabled:false
  },

  credits: {
  enabled: false
},

  xAxis: {
      categories: xcategories,
      labels: {
          x: -10
      }
  },

   yAxis: {
      min: 0,
      title: {
          text: 'Clicks'
      },
      stackLabels: {
          enabled: false
      }
  },

   tooltip: {
          valueSuffix: '',
          // valueDecimals: 2,
          shared: true
      },

      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  }
                  // stops: [
                  //     [0, Highcharts.getOptions().colors[0]],
                  //     [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  // ]
              }   
            }
          },

  series: Device
  }
  if (Device.length === 0) {
    return (
  
     <Card>
        <Row className='match-height'>
            <Col lg='9' md='12'>
              <CardHeader>
                <CardTitle tag='h4'>Device Wise Attribution</CardTitle>
              </CardHeader>
            </Col>

            <Col lg='3' md='12'>
              <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30 }}>
                {/* <Spinner color='primary' /> */}
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
        <CardTitle tag='h4'>Device Wise Attribution</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}
}
export default DeviceWiseAttribution
