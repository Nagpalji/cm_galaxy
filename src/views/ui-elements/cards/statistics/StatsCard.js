import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, Activity, MousePointer } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '$156.67K',
      subtitle: 'Spends',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: '3.66M',
      subtitle: 'Impressions',
      color: 'light-warning',
      icon: <Activity size={24} />
    },
    {
      title: '1.66K',
      subtitle: 'Clicks',
      color: 'light-success',
      icon: <MousePointer size={24} />
    },
    {
      title: '9.37%',
      subtitle: 'CTR',
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: '10K',
      subtitle: 'Leads',
      color: 'light-info',
      icon: <DollarSign size={24} />
    },
    {
      title: '0.50%',
      subtitle: 'Lead Rate',
      color: 'light-secondary',
      icon: <DollarSign size={24} />
    },
    {
      title: '$1.08',
      subtitle: 'Avg. CPC',
      color: 'light-primary',
      icon: <DollarSign size={24} />
    },
    {
      title: '$15.57',
      subtitle: 'CPL',
      color: 'light-warning',
      icon: <DollarSign size={24} />
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
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
