import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, Activity, MousePointer, ArrowUpLeft, Filter, Percent, Layers, Eye } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import React, { useState, useEffect } from "react"
import { icon } from 'leaflet'
const StatsCard = ({ cols }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/linkedin_headers/?brand_name='
  const fet = fett + brand_name
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em")
  let ed = localStorage.getItem("ed")
  const sy = localStorage.getItem("sy")
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")

  const sy1 = "&sy="
  const sm1 = "&sm="
  const sd1 = "&sd="
  const ey1 = "&ey="
  const em1 = "&em="
  const ed1 = "&ed="

  const campaign = '&campaign='
  const campaigntype = '&campaigntype='
  const link_campaign = sessionStorage.getItem("link_campaign_sel")
  const link_campaigntype = sessionStorage.getItem("link_campaigntype_sel")

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
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + campaign + link_campaign + campaigntype + link_campaigntype)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data)
        data[0].icon = <DollarSign size={24} />
        data[1].icon = <TrendingUp size={24} />
        data[2].icon = <MousePointer size={24} />
        data[3].icon = <Percent size={24} />
        data[4].icon = <Eye size={24} />
        // data[5].icon = <Percent size={24} />
        data[7].icon = <User size={24} />
        data[6].icon = <TrendingUp size={24} />
        data[5].icon = <Filter size={24} />
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

  // const renderdd = () => {
  //   return dd.map((item, index) => {
  //     const margin = Object.keys(cols)
  //     return (
  //       <Col
  //         key={index}
  //         {...cols}
  //         className={classnames({
  //           [`mb-2 mb-${margin[0]}-0`]: index !== dd.length - 1
  //         })}
  //       >
  //         <Media>
  //           <Avatar color={item.color} icon={item.icon} className='mr-2' />

  //           <Media className='my-auto' body>
  //             <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
  //             <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
  //           </Media>
  //         </Media>
  //       </Col>
  //     )
  //   })
  // }


  // return (
  //   <Card className='card-statistics'>
  //     {/* <CardHeader>
  //       <CardTitle tag='h4'>Statistics</CardTitle>
  //       <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText>
  //     </CardHeader> */}
  //     <CardBody className='statistics-body mtb-20'>
  //       <Row>{renderdd()}</Row>
  //     </CardBody>
  //   </Card>
  // )
  //   for (var i = 0; i < input.length; i++) {
  //     var datum = input[i];
  //     if (!d[datum.key]) {
  //         d[datum.key] = [];
  //     }
  //     d[datum.key].push(datum.val);
  // }


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