import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, Activity, MousePointer, CheckCircle, Filter, Percent, Layers, ShoppingBag } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import { data } from 'jquery'
import React, { useState, useEffect } from "react"
import { icon } from 'leaflet'

const StatsCard = ({ cols }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/dv360_headers/?brand_name='
  const fet = fett + brand_name
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em")
  let ed = localStorage.getItem("ed")
  const sy = localStorage.getItem("sy")
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")

  const campaign = '&campaign='
  const exchange = '&exchange='
  const insertion = '&insertion='
  const app = "&app="
  const dv_campaign = sessionStorage.getItem("dv360_campaign_sel")
  const dv_exchange = sessionStorage.getItem("dv360_exchange_sel")
  const dv_insertion = sessionStorage.getItem("dv360_insertion_order_sel")
  const dv_app = sessionStorage.getItem("dv360_app_url_sel")

  const sy1 = "&sy="
  const sm1 = "&sm="
  const sd1 = "&sd="
  const ey1 = "&ey="
  const em1 = "&em="
  const ed1 = "&ed="

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
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + dv_campaign + exchange + dv_exchange + insertion + dv_insertion + app + dv_app)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
        data[0].icon = <ShoppingBag size={24} />
        data[1].icon = <TrendingUp size={24} />
        data[2].icon = <MousePointer size={24} />
        data[3].icon = <Percent size={24} />
        data[4].icon = <CheckCircle size={24} />
        data[5].icon = <Layers size={24} />
        data[6].icon = <Filter size={24} />
        data[7].icon = <UserCheck size={24} />
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return "Loading..."
  if (error) return "Data Unavailable."


  // const data = [
  //   {
  //     title: '₹1.11K',
  //     subtitle: 'Spends',
  //     color: 'light-primary',
  //     icon: <TrendingUp size={24} />
  //   },
  //   {
  //     title: '234.76K',
  //     subtitle: 'Impressions',
  //     color: 'light-success',
  //     icon: <Activity size={24} />
  //   },
  //   {
  //     title: '259.00',
  //     subtitle: 'Clicks',
  //     color: 'light-secondary',
  //     icon: <ArrowUpLeft size={24} />
  //   },
  //   {
  //     title: '₹4.71',
  //     subtitle: 'CPM',
  //     color: 'light-primary',
  //     icon: <MousePointer size={24} />
  //   },
  //   {
  //     title: '₹4.27',
  //     subtitle: 'CPC',
  //     color: 'light-success',
  //     icon: <Filter size={24} />
  //   },
  //   {
  //     title: '0.11%',
  //     subtitle: 'CTR',
  //     color: 'light-secondary',
  //     icon: <Percent size={24} />
  //   }
  // ]

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
            {/* <Avatar color={item.color} icon={item.icon} className='mr-2' /> */}
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
