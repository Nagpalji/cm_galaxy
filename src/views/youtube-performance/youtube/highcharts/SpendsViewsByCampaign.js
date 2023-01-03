import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState } from 'react'

const SpendsViewsByCampaign = () => {
  const [names, setNames] = useState([])
  const [views, setViews] = useState([])
  const [spends, setSpends] = useState([])
  // const [datavalt, setDatavalt] = useState([])
  // const [label, setLabel] = useState([])
  // const [value, setValue] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/youtube_spendsviews/?data=names&brand_name='
  const fet = fett + brand_name
  const fett1 = 'https://srvr1px.cyberads.io/youtube_spendsviews/?data=views&brand_name='
  const fet1 = fett1 + brand_name
  const fett2 = 'https://srvr1px.cyberads.io/youtube_spendsviews/?data=spends&brand_name='
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


        setNames(result)

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


        setViews(result)

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


        setSpends(result)

      },
        (error) => {
          //this.setState({ error });
        }
      )
  })

  const options = {
    chart: {
      // marginRight:25,
      // marginLeft: 60,
      marginRight: 19,
      // marginLeft: 10,
      marginTop: 30,
      type: 'line',
      style: {
        fontFamily: 'Montserrat',
        fontWeight: '600'
      }
    },

    colors: ['#4076d9', '#38a6d9', '#4acade', '#00def6', '#83ffff', '#97f7c4', '#52c777', '#3aab58', '#15ad29', '#ffc413'],

    title: {
      text: '',
      align: 'left'
    },

    exporting: {
      enabled: false
    },

    credits: {
      enabled: false
    },

    legend: {
      padding: 3,
      itemMarginTop: 5,
      itemMarginBottom: -10,
      itemStyle: {
        lineHeight: '14px'
      }
    },

    xAxis: {
      categories: names,
      // categories: [
      //     'Alright_DUDE',
      //     'Binge_Fathers',
      //     'LIT_FMLSE2EI',
      //     'Alright_LoveDecoded',
      //     'LIT_CookOff',
      //     'LIT_GM11_Ustraa',
      //     'LIT_CO22_ApisHoney'
      // ],
      min: 0.1,

      type: 'datetime',
      labels: {
        overflow: 'justify'
      }
    },

    yAxis: {
      title: {
        text: ''
      }
    },

    tooltip: {
      valueSuffix: '',
      shared: true
    },

    plotOptions: {
      spline: {
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 4
          }
        }
      },
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

    // series: colorOptions,
    series: [
      {
        name: 'Views',
        type: 'line',
        data: views,
        marker:
        {
          enabled: false,
          symbol: 'circle'
        }
      },
      {
        name: 'Spends',
        type: 'line',
        data: spends,
        marker:
        {
          enabled: false,
          symbol: 'circle'
        }
      }
    ],

    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }

  }
  if (spends.length === 0) {
    return (

      <Card>
      <Row className='match-height'>
          <Col lg='9' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Spends & Views by Campaign </CardTitle>
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
          <CardTitle tag='h4'>Spends & Views by Campaign </CardTitle>
        </CardHeader>
        <CardBody>
          {/* <PieChart highcharts={Highcharts} options={options} /> */}
          <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
        </CardBody>
      </Card>
    )
  }
}
export default SpendsViewsByCampaign