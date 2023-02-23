import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, CardText, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { Fragment, useEffect, useState } from 'react'

const DataLeadPerformance = () => {
  const [Device, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/linkedin_leadperformance/?brand_name='
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
  categories: ['Engagements'],
  labels: {
      x: -10
  }
},

yAxis: {
  min: 0,
  title: {
      text: 'Engagements'
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
                <CardTitle tag='h4'>Engagement By Campaign</CardTitle>
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
        <CardTitle tag='h4'>Engagement By Campaign</CardTitle>
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

export default DataLeadPerformance
