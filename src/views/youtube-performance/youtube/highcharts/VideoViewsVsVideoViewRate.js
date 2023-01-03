import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState } from 'react'

const VideoViewsVsVideoViewRate = () => {
  const [Keyword, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/youtube_vvrate/?brand_name='  ////--campaign
  const fet = fett + brand_name 
  const fett1 = 'https://srvr1px.cyberads.io/youtube_vvrate_vrate/?brand_name='  ///--viewrate
  const fet1 = fett1 + brand_name
  const fett2 = 'https://srvr1px.cyberads.io/youtube_vvrate_views/?brand_name='  //--views
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
  const campaign = '&campaign='
  const region = '&region='
  const yt_campaign = sessionStorage.getItem("yt_campaign_sel")
  const yt_region = sessionStorage.getItem("yt_region_sel")  
  
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
    
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + yt_campaign + region + yt_region, {
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
    
    fetch(fet1 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + yt_campaign + region + yt_region, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

          setDatavalm(result)
          
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  useState(() => { 
    
    fetch(fet2 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + yt_campaign + region + yt_region, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

          setDatavald(result)
          
        },
          (error) => {
            //this.setState({ error });
          }
        )
  })
  const options = {
    chart: {
      marginRight:68,
      marginTop:30,
      // marginLeft: 75,
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
  // categories: ['Alright_WYHASR_Becks', 'Alright_FirstDayInOffice_Medibuddy', 'Alright_MGIDW_Walla', 'Binge_CCSI#2_Binomo', 'LIT_CookOff-Pintola', 'LIT_FMLS2E1_Philips', 'Recharge_Mediatek'],
  categories: Keyword,
  labels: {
      x: -10
  }
  // min:1,
  // max:6
},

  yAxis: [
    {
      labels: {
          format: '{value} %'
      },
      title: {
          text: 'View Rate'
      },
      opposite: true

  }, {
      gridLineWidth: 0,
      title: {
          text: 'Views'
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
      name: 'Views',
      type: 'column',
      yAxis: 1,
      // data: [49009, 715, 10664, 12876, 10344, 10000, 54564],
      data: datavald,
      tooltip: {
          valueSuffix: ' '
      }

  }, {
    name: 'Views Rate',
      type: 'column',
      // data: [17.0, 6.9, 34.5, 14.5, 48.2, 21.5, 10.6],
      data: datavalm,
      tooltip: {
          valueSuffix: ' %'
      }
  }
] 
}
if (datavalm.length === 0) {
  return (

    <Card>
    <Row className='match-height'>
        <Col lg='9' md='12'>
          <CardHeader>
            <CardTitle tag='h4'>Video views vs Video view rate</CardTitle>
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
        <CardTitle tag='h4'>Video views vs Video view rate</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px"} }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}
}
export default VideoViewsVsVideoViewRate
