import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, CardText, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState, Fragment } from 'react'

const LeadsByAudience = () => {
  const [Device, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/facebook_lbcampaign/?brand_name='
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
//       name: 'Leads by Audience',
//       type: 'pie',
//       data: [
//           ['Converted Look A Like', 35],
//           ['Remarketing', 2],
//           ['Green Clients', 2],
//           ['95% Video View Audience', 2],
//           ['Ad Engagement', 2],
//           ['25-40 Mom', 2],
//           ['Ques Submitted', 2]
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
                <CardTitle tag='h4'>Campaign wise Clicks</CardTitle>
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
        <CardTitle tag='h4'>Campaign wise Clicks</CardTitle>
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

export default LeadsByAudience
