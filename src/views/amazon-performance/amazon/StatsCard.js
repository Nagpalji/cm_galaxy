import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, Activity, MousePointer, ArrowUpLeft, Filter, Percent, Layers } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '$20.34K',
      subtitle: 'Spends',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: '332.20K',
      subtitle: 'Impressions',
      color: 'light-success',
      icon: <Activity size={24} />
    },
    {
      title: '9.47K',
      subtitle: 'Clicks',
      color: 'light-secondary',
      icon: <ArrowUpLeft size={24} />
    },
    {
      title: '112',
      subtitle: 'Leads',
      color: 'light-warning',
      icon: <MousePointer size={24} />
    },
    {
      title: '1.60%',
      subtitle: 'CTR',
      color: 'light-primary',
      icon: <Filter size={24} />
    },
    {
      title: '8.92',
      subtitle: 'Avg CPC',
      color: 'light-success',
      icon: <Percent size={24} />
    },
    {
      title: '$5.81K',
      subtitle: 'CPL',
      color: 'light-secondary',
      icon: <Percent size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      {/* <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader> */}
      <CardBody className='statistics-body mtb-20'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
