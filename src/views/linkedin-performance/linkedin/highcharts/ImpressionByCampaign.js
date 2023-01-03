import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

const ImpressionByCampaign = () => {
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
          valuePrefix: '$'
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

  series: [
    {
      name: 'Total Engagement Campaign',
      type: 'pie',
      data: [
          ['Suburban Jungle - May 27, 2021', 25],
          ['Suburban Jungle - Apr 27, 2021', 3],
          ['Suburban Jungle - Dec 27, 2021', 3],
          ['LIT_CookOff-Momos_ETMoney', 2],
          ['Suburban Jungle - Jan 27, 2021', 3],
          ['Suburban Jungle - Jun 27, 2021', 2],
          ['Suburban Jungle - Aug 21, 2021', 3],
          ['Suburban Jungle - Male Only', 3],
          ['Suburban Jungle - Male Only', 3],
          ['Others', 2]
      ]
  }
]

    
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Impression By Campaign</CardTitle>
      </CardHeader>
      <CardBody>
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
      </CardBody>
    </Card>
  )
}

export default ImpressionByCampaign
