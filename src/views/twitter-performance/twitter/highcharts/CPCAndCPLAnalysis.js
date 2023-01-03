import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

const CPCAndCPLAnalysis = () => {
  const options = {
    chart: {
      marginTop:30,
      marginRight:60,
      // marginRight:11,
      marginLeft: 54,
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
      'Suburban- Oct 27',
      'Suburban- Nov 28',
      'Suburban- Dec 29',
      'Suburban- Jan 30',
      'Suburban- Feb 28',
      'Suburban- Mar 27'
  ],
  crosshair: true
},

  yAxis: [
    { 
      labels: {
          // format: '{value}$'
      },
      title: {
          text: 'CPC'
      }
  }, { 
      title: {
          text: 'Cost per Lead'
      },
      labels: {
          // format: '{value} $'
      },
      opposite: true
  }
],

  tooltip: {
      valueSuffix: '$',
      valueDecimals: 2,
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

  
  series: [
   {
    name: 'CPC',
    type: 'column',
    yAxis: 1,
    data: [5, 122, 3, 2, 2, 3]

}, {
      name: 'Cost Per Lead',
      type: 'column',
       marker: {
          enabled: false,
          symbol: 'circle'
      },
       data: [3, 22, 5, 2, 1, 5]
  }
]
    
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>CPC and CPL Analysis </CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}

export default CPCAndCPLAnalysis
