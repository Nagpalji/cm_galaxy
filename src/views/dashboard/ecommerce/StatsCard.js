import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, UserCheck, MousePointer, CheckCircle, Filter, Percent, Layers, ShoppingBag } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import { data } from 'jquery'
import React, { useState, useEffect } from "react"
import { icon } from 'leaflet'

const StatsCard = ({ cols }) => {
  // export default function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/adword_headers/?brand_name='
  const fet = fett + brand_name
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em")
  let ed = localStorage.getItem("ed")
  const sy = localStorage.getItem("sy")
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")
  const google_region = sessionStorage.getItem("google_region_sel")
  const google_campaign = sessionStorage.getItem("google_campaign_sel")
  const google_adgroup = sessionStorage.getItem("google_adgroup_sel")
  const google_device = sessionStorage.getItem("google_device_sel")
  const region = '&region='
  const campaign = '&campaign='
  const adgroup = '&adgroup='
  const device = "&device="

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
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + region + google_region + campaign + google_campaign + adgroup + google_adgroup + device + google_device)
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
        data[4].icon = <Filter size={24} />
        data[5].icon = <CheckCircle size={24} />
        data[6].icon = <UserCheck size={24} />
        data[7].icon = <MousePointer size={24} />
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
            {/* <Avatar icon={<TrendingUp size={14} />} /> */}

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

