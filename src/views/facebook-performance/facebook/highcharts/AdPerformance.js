import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, CardText, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState, Fragment } from 'react'

const AdPerformance = () => {
  const [Device, setColorOptions] = useState([])
  const [click, setClick] = useState([])
  const [spend, setSpend] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/facebook_adperformance/?brand_name=' ///ad...//
  const fet = fett + brand_name
  const fett1 = 'https://srvr1px.cyberads.io/adword_ctr/?brand_name='          //---clicks--//
  const fet1 = fett1 + brand_name
  const fett2 = 'https://srvr1px.cyberads.io/adword_spends/?brand_name='    //---spensd//
  const fet2 = fett2 + brand_name
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
  useState(() => { 
    
    fetch(fet1 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + platform + fb_platform + campaign + fb_campaign + region + fb_region + audience + fb_audience, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

          setClick(result)
          
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  useState(() => { 
    
    fetch(fet2 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + platform + fb_platform + campaign + fb_campaign + region + fb_region + audience + fb_audience, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

          setSpend(result)
          
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })

//   const options = {
//     chart: {
//       marginRight:50,
//       marginTop:30,
//       // marginLeft: 55,
//       type: 'column',
//       style: {
//               fontFamily: 'Montserrat',
//               fontWeight: '600'
//           }
//   },

// colors: ['#ffc413', '#4acade', '#83ffff', '#97f7c4', '#52c777'],

//   title: {
//       text: ''
//   },

//    legend: {
//       layout: 'horizontal',
//       align: 'center',
//       verticalAlign: 'bottom',
//       y: 0,
//       padding: 3,
//       itemMarginTop: 10,
//       itemMarginBottom: -10,
//       itemStyle: {
//           lineHeight: '14px'
//       }
//   },

//    exporting: {
//     enabled:false
//   },

//   credits: {
//   enabled: false
// },

//   xAxis: {
//       // categories: ['Melissa Schneider', 'Are you a family', 'Weekends all are about family', 'While areas like cherry Hii', 'Greg and Rebecca', 'Video Ad - General Text', 'Video Ad - Client Text', 'Today"s Feature Friday'],
//       categories: Device,
//       labels: {
//           x: -10
//       }
//   },

//   yAxis: [
//     { 
//       labels: {
//           format: ''
//       },
//       title: {
//           text: 'Clicks'
//       }
//   }, { 
//       title: {
//           text: 'Spends'
//       },
//       labels: {
//           format: ''
//       },
//       opposite: true,
//       min: 0,
//       max: 10
//   }
// ],

//    tooltip: {
//           valueSuffix: '',
//           valueDecimals: 2,
//           shared: false
//       },

//       plotOptions: {
//           area: {
//               fillColor: {
//                   linearGradient: {
//                       x1: 0,
//                       y1: 0,
//                       x2: 0,
//                       y2: 1
//                   }
//                   // stops: [
//                   //     [0, Highcharts.getOptions().colors[0]],
//                   //     [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
//                   // ]
//               }   
//             }
//           },

//   series: 
//    [
//     {
//       name: 'Clicks',
//       data: click
//   },
//   {
//     name: 'Spends',
//     data: spend
// }
// ]

    
//   }
const options = {
  chart: {
    // marginRight:50,
    marginTop:30,
    // marginLeft: 75,
    type: 'column',
    style: {
            fontFamily: 'Montserrat',
            fontWeight: '600'
        },
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionY: 0,
          scrollPositionX: 0,
          opacity: 1
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
// categories: ['Alright_WYHASR_Becks', 'Alright_FirstDayInOffice_Medibuddy', 'Alright_MGIDW_Walla', 'Binge_CCSI#2_Binomo', 'LIT_CookOff-Pintola', 'LIT_FMLS2E1_Philips', 'Recharge_Mediatek'],
categories: Device,
labels: {
    x: -10
}
// min:1,
// max:6
},

yAxis: [
  {
    labels: {
        format: ''
    },
    title: {
        text: 'Clicks'
    },
    opposite: true

}, {
    gridLineWidth: 0,
    title: {
        text: 'Spends'
    },
    labels: {
        format: ''
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
        // stops: [
        //     [0, Highcharts.getOptions().colors[0]],
        //     [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        // ]
    }   
  }
},
  // series: Keyword

series: [
  {
    name: 'Spends',
    type: 'column',
    yAxis: 1,
    // data: [49009, 715, 10664, 12876, 10344, 10000, 54564],
    data: spend,
    tooltip: {
        valueSuffix: ' '
    }

}, {
  name: 'Clicks',
    type: 'column',
    // data: [17.0, 6.9, 34.5, 14.5, 48.2, 21.5, 10.6],
    data: click,
    tooltip: {
        valueSuffix: ''
    }
}
] 
}

if (click.length === 0) {
  return (

   <Card>
        <Row className='match-height'>
            <Col lg='9' md='12'>
              <CardHeader>
                <CardTitle tag='h4'>Ad Performance</CardTitle>
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
    <Fragment>
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Ad Performance</CardTitle>
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
export default AdPerformance
