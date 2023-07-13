import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { Fragment, useEffect, useState } from 'react'

const MonthlyLeadsPlatform = () => {
  const [months, setMonths] = useState([])
  const [data, setData] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/common_mleadperformance/?data=months&brand_name=' ///ad...//
  const fet = fett + brand_name
  const fett1 = 'https://srvr1px.cyberads.io/common_mleadperformance/?data=data&brand_name='  //---clicks--//
  const fet1 = fett1 + brand_name
  const c_product = sessionStorage.getItem("overall_product")
  const c_campaign = sessionStorage.getItem("overall_campaign")
  const c_traffic = sessionStorage.getItem("overall_traffic")
  const c_geo = sessionStorage.getItem("overall_geo")
  const product = '&product='
  const campaign = '&campaign='
  const traffic = '&traffic='
  const geo = "&geo="
  useState(() => { 
    
    fetch(fet + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

      setMonths(result)
          
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  useState(() => { 
    
    fetch(fet1 + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

      setData(result)
          
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

colors: ['#ffc413', '#4acade', '#52c777', '#97f7c4', '#83ffff'],

  title: {
      text: ''
  },
  xAxis: {
      categories:  
      months
  },
  yAxis: [
    {
      labels: {
        format: ''
    },
      
      title: {
          text: ['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Conversions" : (['globallogic@cmrsl.net'].includes(localStorage.getItem('user_name')) ? "Engagements" : 'Leads'))
      },
      stackLabels: {
          enabled: false
      }
  }
],
  legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      y: 0,
      padding: 3,
      itemMarginTop: 10,
      itemMarginBottom: -7,
      itemStyle: {
          lineHeight: '14px'
      }
  },
   tooltip: {
          valuePrefix: '',
          shared: true
      },

   exporting: {
    enabled:false
  },

  credits: {
  enabled: false
},
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: false
          }
      }
  },
  series: data
//   series:
//   [
//     {name: "Google Adwords",
//    type: "column",
//    data: [1323, 1433, 1607, 368]
//   },
//   {name: "Google ",
//    type: "column",
//    data: [1323, 1433, 1607, 368]
//   }
// ]

  }
  if (data.length === 0) {
    return (

      <Card>
      <Row className='match-height'>
          <Col lg='9' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Monthly {['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Conversions" : (['globallogic@cmrsl.net'].includes(localStorage.getItem('user_name')) ? "Engagements" : 'Leads'))} by Platform</CardTitle>
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
        <CardTitle tag='h4'>Monthly {['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Conversions" : (['globallogic@cmrsl.net'].includes(localStorage.getItem('user_name')) ? "Engagements" : 'Leads'))} by Platforms</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}
}
export default MonthlyLeadsPlatform
