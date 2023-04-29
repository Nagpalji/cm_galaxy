import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'

import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { Fragment, useEffect, useState } from 'react'

const WeekOnWeekAnalysis = () => {
  const [day, setDay] = useState([])
  const [cpl, setCpl] = useState([])
  const [cpc, setCpc] = useState([])
  const [lead, setLead] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/common_weekanalysis/?data=months&brand_name=' ///days
  const fet = fett + brand_name
  const fett1 = 'https://srvr1px.cyberads.io/common_weekanalysis/?data=cpl&brand_name='  //data
  const fet1 = fett1 + brand_name
  const fett2 = 'https://srvr1px.cyberads.io/common_weekanalysis/?data=leads&brand_name='
  const fet2 = fett2 + brand_name
  // const fett3 = 'https://srvr1px.cyberads.io/common_weekanalysis/?data=data&data2=m1&brand_name='
  // const fet3 = fett3 + brand_name
  const c_product = sessionStorage.getItem("overall_product")
  const c_campaign = sessionStorage.getItem("overall_campaign")
  const c_traffic = sessionStorage.getItem("overall_traffic")
  const c_geo = sessionStorage.getItem("overall_geo")
  const product = '&product='
  const campaign = '&campaign='
  const traffic = '&traffic='
  const geo = "&geo="
  useState(() => {

    fetch(fet, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {


        setDay(result)

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


        setCpl(result)

      },
        (error) => {
          //this.setState({ error });
        }
      )
  })
  useState(() => {

    fetch(fet2 + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((result) => {


        setLead(result)

      },
        (error) => {
          //this.setState({ error });
        }
      )
  })
  // useState(() => { 

  //   fetch(fet3, {
  //        method: 'GET'
  //   })
  //   .then(res => res.json())  
  //   .then((result) => {


  //     setLead(result)

  //       },
  //         (error) => {
  //           //this.setState({ error });
  //         }
  //       )
  // })          
  const options = {
    chart: {
      marginTop: 30,
      type: 'column',
      scrollablePlotArea: {
        minWidth: 500,
        scrollPositionY: 0,
        scrollPositionX: 0,
        opacity: 1
      },
      style: {
        fontFamily: 'Montserrat',
        fontWeight: '600'
      }
    },

    // colors: ['#ffc413', '#4acade',  '#83ffff', '#97f7c4', '#52c777'],
    colors: ['#ffc413', '#4acade'],

    title: {
      text: ''
    },

    xAxis: {
      categories: day
      // categories:  
      // [   
      //     'Jun 28',
      //     'Jul 5',
      //     'Jul 12',
      //     'Jul 19',
      //     'Jul 26'
      //   ]
    },

    yAxis: [
      {
        labels: {
          format: '{value}'
        },

        title: {
          text: ['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Conversions" : 'Leads')
        },
        min: 0
      },
      {
        min: 0,
        title: {
          text: ['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders Value' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Cost Per Conversions" : 'CPL')
        },
        opposite: true
      }
    ],


    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      y: 0,
      padding: 10,
      itemMarginTop: 15,
      itemMarginBottom: -15,
      itemStyle: {
        lineHeight: '14px'
      }
    },
    tooltip: {
      valuePrefix: '',
      shared: true
    },

    exporting: {
      enabled: false
    },

    credits: {
      enabled: false
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
      },
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false
        }
      }
    },

    series: [
      {
        name: ['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Conversions" : 'Leads'),
        type: 'column',
        // data: [15, 30, 10, 20, 35]
        data: lead
      },
      {
        name: ['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? 'Orders Value' : (['theivdocus@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? "Cost Per Conversions" : 'CPL'),
        type: 'line',
        marker: {
          enabled: false,
          symbol: 'circle'
        },
        yAxis: 1,
        // data: [10.14, 15.15, 28.15, 17.59, 52.14]
        data: cpl
      }
    ]
    // yAxis: [
    //   {
    //     labels: {
    //       format: '{value}k'
    //     },

    //     title: {
    //       text: 'Leads'
    //     },
    //     min: 0
    //   },
    //   {
    //     min: 0,
    //     title: {
    //       text: 'CPL'
    //     },
    //     labels: {
    //       format: '{value}k'
    //     },
    //     opposite: true
    //   }
    // ],

  }
  if (lead.length === 0) {
    return (
      <Card>
        <Row className='match-height'>
          <Col lg='9' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Week-On-Week Analysis</CardTitle>
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
          <CardTitle tag='h4'>Week-On-Week Analysis</CardTitle>
        </CardHeader>
        <CardBody>
          {/* <PieChart highcharts={Highcharts} options={options} /> */}
          <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
        </CardBody>
      </Card>
    )
  }
}
export default WeekOnWeekAnalysis
