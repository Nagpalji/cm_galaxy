import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import React, { useEffect, useState } from 'react'

const KeywordPerformance = () => {
  const [Keyword, setColorOptions] = useState([])
  const [datavalm, setDatavalm] = useState([])
  const [datavald, setDatavald] = useState([])
  const [datavalt, setDatavalt] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/adword_adperformance/?brand_name='
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
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
  }
})
  // ** Function to handle Pagination and get data
  const handlePagination = page => {
    const s = JSON.stringify(page).split(':')
    const sel = s[1].split('}')
    const sel_val = parseInt(sel[0]) + 1
    const page1 = "&page="
    //  const pagesel = "https://srvr1px.cyberads.io/adword_clicks/?brand_name=Asia_pacific&sy=2021&sm=07&sd=01&ey=2021&em=07&ed=03&page="
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + page1 + sel_val, 
      {
       
       // fetch('https://srvr1px.cyberads.io/adword_clicks/?brand_name=gems&startdate=,${startdate},&enddate=${enddate}', {
          method: 'GET'
     })
       .then(res => res.json())  
       .then((result) => {
             // setStore(result)
             
             setAllData(result)
             result.map(res => {
             setPages(res.total_pages)
             //setCur(res.current_page)
           })
           
           },
             (error) => {
             //this.setState({ error });
             }
           )
   /*getData({
     page: page.selected + 1,
     perPage: rowsPerPage,
     q: searchValue
   })*/
 
 setCurrentPage(page.selected + 1)
}

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

  series: Keyword
//   [
//     {
//       name: 'Keyword Performance',
//       type: 'pie',
//       data: [
//           ['Search', 35],
//           ['Discovery', 2],
//           ['Video', 2],
//           ['Display', 2]
//       ]
//   }
// ]
    
  }
  if (Keyword.length === 0) {
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
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Ad Performance</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}
}
export default KeywordPerformance
