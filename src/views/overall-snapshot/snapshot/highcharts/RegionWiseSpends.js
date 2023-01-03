
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col} from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { Fragment, useEffect, useState } from 'react'

const RegionWiseSpends = () => {
  const [region, setRegion] = useState([])
  const [spends, setSpend] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/common_regionspend/?req=spends&brand_name=' ///ad...//
  const fet = fett + brand_name
  const fett1 = 'https://srvr1px.cyberads.io/common_regionspend/?req=region&brand_name=' //---clicks--//
  const fet1 = fett1 + brand_name
  // const fet2 = 'https://srvr1px.cyberads.io/adword_spends/?brand_name=Apeejay'    //---spensd//
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
  const c_product = sessionStorage.getItem("overall_product")
  const c_campaign = sessionStorage.getItem("overall_campaign")
  const c_traffic = sessionStorage.getItem("overall_traffic")
  const c_geo = sessionStorage.getItem("overall_geo")
  const product = '&product='
  const campaign = '&campaign='
  const traffic = '&traffic='
  const geo = "&geo="
  
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
    
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, {
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
  
  useState(() => { 
    
    fetch(fet1 + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, {
         method: 'GET'
    })
    .then(res => res.json())  
    .then((result) => {
        

      setRegion(result)
          
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
      marginRight:19,
      marginLeft: 60,
      marginTop: 30,
      type: 'line',
      style: {
              fontFamily: 'Montserrat',
              fontWeight: '600'
          }
  },

  colors: ['#4076d9', '#38a6d9',  '#4acade', '#00def6', '#83ffff', '#97f7c4', '#52c777', '#3aab58', '#15ad29', '#ffc413'],

  title: {
      text: '',
      align: 'left'
  },

  exporting: {
    enabled:false
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
      categories: region,

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
      valueSuffix: ''
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

  series: [
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
  if (region.length === 0) {
    return (

      <Card>
      <Row className='match-height'>
          <Col lg='9' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Region wise Spends</CardTitle>
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
        <CardTitle tag='h4'>Region wise Spends</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}
}

export default RegionWiseSpends
