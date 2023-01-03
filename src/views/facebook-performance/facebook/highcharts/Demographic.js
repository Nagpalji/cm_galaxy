import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, CardText, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState, Fragment } from 'react'

const Demographic = () => {
  const [demo, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/facebook_demography/?brand_name='
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
  const platform = '&platform='
  const campaign = '&campaign='
  const region = '&region='
  const audience = "&audience="
  const fb_platform = sessionStorage.getItem("facebook_platform_sel")
  const fb_campaign = sessionStorage.getItem("facebook_campaign_sel")
  const fb_region = sessionStorage.getItem("facebook_region_sel")
  const fb_audience = sessionStorage.getItem("facebook_audience_sel")
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
    
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + platform + fb_platform + campaign + fb_campaign + region + fb_region + audience + fb_audience, {
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
      marginTop:30,
      // marginRight:11,
      // marginLeft: 54,
      zoomType: 'xy',
      style: {
              fontFamily: 'Montserrat',
              fontWeight: '600'
            }
  },

colors: ['#ffc413', '#4acade',  '#83ffff', '#97f7c4', '#52c777'],

  title: {
      text: ''
  },

   exporting: {
    enabled:false
  },

  credits: {
  enabled: false
},
  
  xAxis: {
  categories: [
      '13-17',
      '18-24',
      '25-34',
      '34-44',
      '44-54',
      '55-65',
      '65+',
      'Undetermined'
  ],
  crosshair: true
},

  yAxis: [
    { 
      labels: {
          format: ''
      },
      gridLineWidth: 0,
      title: {
          text: 'Clicks'
      }
  }
],

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
          }  
        }
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

  series: demo
//   series: [
//     {
//       name: 'Male',
//       type: 'column',
//       // yAxis: 1,
//       data: [455, 222, 151, 86, 72, 10],
//       tooltip: {
//         valueSuffix: ' K'
//     }

//   }, {
//     name: 'Female',
//     type: 'column',
//     // yAxis: 1,
//     data: [110, 122, 51, 66, 62, 5],
//     tooltip: {
//       valueSuffix: ' %'
//   }

// }, {
//       name: 'Unknown',
//       type: 'column',
//        marker: {
//           enabled: false,
//           symbol: 'circle'
//       },
//        data: [0, 22, 15, 0, 0, 10],
//        tooltip: {
//         valueSuffix: ' %'
//     }
//   }
// ]
}
if (demo.length === 0) {
  return (
    <Fragment>
   
   <Card>
        <Row className='match-height'>
            <Col lg='9' md='12'>
              <CardHeader>
                <CardTitle tag='h4'>Demographic</CardTitle>
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
        <CardTitle tag='h4'>Demographic</CardTitle>
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

export default Demographic
