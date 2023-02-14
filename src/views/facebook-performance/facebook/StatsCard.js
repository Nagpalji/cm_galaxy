import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, CheckCircle, DollarSign, Activity, MousePointer, UserCheck, Filter, Percent, Layers, ShoppingBag } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import React, { useState, useEffect } from "react"
import { icon } from 'leaflet'

const StatsCard = ({ cols }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/facebook_headers/?brand_name='
  const fet = fett + brand_name
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em")
  let ed = localStorage.getItem("ed")
  const sy = localStorage.getItem("sy")
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")

  const platform = '&platform='
  const campaign = '&campaign='
  const region = '&region='
  const audience = "&audience="
  const fb_platform = sessionStorage.getItem("facebook_platform_sel")
  const fb_campaign = sessionStorage.getItem("facebook_campaign_sel")
  const fb_region = sessionStorage.getItem("facebook_region_sel")
  const fb_audience = sessionStorage.getItem("facebook_audience_sel")
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
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + platform + fb_platform + campaign + fb_campaign + region + fb_region + audience + fb_audience)
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
        data[3].icon = <Filter size={24} />
        data[4].icon = <User size={24} />
        data[5].icon = <Percent size={24} />
        data[6].icon = <CheckCircle size={24} />
        data[7].icon = <UserCheck size={24} />
        data[8].icon = <Filter size={24} />
        data[9].icon = <UserCheck size={24} />
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
  //     title: '$142.76K',
  //     subtitle: 'Spends',
  //     color: 'light-primary',
  //     icon: <TrendingUp size={24} />
  //   },
  //   {
  //     title: '7.37M',
  //     subtitle: 'Leads',
  //     color: 'light-success',
  //     icon: <Activity size={24} />
  //   },
  //   {
  //     title: '71.43K',
  //     subtitle: 'Clicks',
  //     color: 'light-secondary',
  //     icon: <ArrowUpLeft size={24} />
  //   },
  //   {
  //     title: '734',
  //     subtitle: 'Website Leads',
  //     color: 'light-warning',
  //     icon: <MousePointer size={24} />
  //   },
  //   {
  //     title: '6.38M',
  //     subtitle: 'Reach',
  //     color: 'light-primary',
  //     icon: <Filter size={24} />
  //   },
  //   {
  //     title: '0.83%',
  //     subtitle: 'CTR',
  //     color: 'light-success',
  //     icon: <Percent size={24} />
  //   },
  //   {
  //     title: '$13.55K',
  //     subtitle: 'Avg. CPC',
  //     color: 'light-secondary',
  //     icon: <Percent size={24} />
  //   }
  // ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      const userName = localStorage.getItem("brand_name")
      const userEmail = localStorage.getItem("user_name")
      // return (
      //   <Col
      //     key={index}
      //     {...cols}
      //     className={classnames({
      //       [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
      //     })}
      //   >
      //     <Media>
      //       {/* <Avatar color={item.color} icon={item.icon} className='mr-2' /> */}
      //       <Avatar color={item.color} icon={item.icon} className='mr-2' />
      //       <Media className='my-auto' body>
      //         <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
      //         <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
      //       </Media>
      //     </Media>
      //   </Col>
      // )
      if (userEmail === "dhavalg@cmrsl.net") {
        if (userName === "masteraccess") {
          return (
            <Col
              key={index}
              {...cols}
              className={classnames({
                [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
              })}
            >
              <Media>
                {/* {/ <Avatar color={item.color} icon={item.icon} className='mr-2' /> /} */}
                <Avatar color={item.color} icon={item.icon} className='mr-2' />
                <Media className='my-auto' body>
                  <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                  <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                </Media>
              </Media>
            </Col>
          )
        } else {
          const valJSON = JSON.parse(userName)
          const valJSONuser = valJSON[0].value
         // console.log("shiv", valJSONuser)
          if (valJSONuser === "GlobalLogic") {
            if (item.subtitle === "Leads" || item.subtitle === "CPL") {

            } else {
              return (
                <Col
                  key={index}
                  {...cols}
                  className={classnames({
                    [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
                  })}
                >
                  <Media>
                    {/* {/ <Avatar color={item.color} icon={item.icon} className='mr-2' /> /} */}
                    <Avatar color={item.color} icon={item.icon} className='mr-2' />
                    <Media className='my-auto' body>
                      <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                      <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                    </Media>
                  </Media>
                </Col>
              )
            }
          } else if (item.subtitle === "Post Engagement" || item.subtitle === "CPE") {
            //console.log('other than global logic')
          } else {
            return (
              <Col
                key={index}
                {...cols}
                className={classnames({
                  [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
                })}
              >
                <Media>
                  {/* {/ <Avatar color={item.color} icon={item.icon} className='mr-2' /> /} */}
                  <Avatar color={item.color} icon={item.icon} className='mr-2' />
                  <Media className='my-auto' body>
                    <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                    <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                  </Media>
                </Media>
              </Col>
            )
          }
        }
        
      } else if (userEmail === "globallogic@cmrsl.net") {
        if (item.subtitle === "Leads" || item.subtitle === "CPL") {

        } else {
          return (
            <Col
              key={index}
              {...cols}
              className={classnames({
                [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
              })}
            >
              <Media>
                {/* {/ <Avatar color={item.color} icon={item.icon} className='mr-2' /> /} */}
                <Avatar color={item.color} icon={item.icon} className='mr-2' />
                <Media className='my-auto' body>
                  <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                  <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                </Media>
              </Media>
            </Col>
          )
        }
      } else if (item.subtitle === "Post Engagement" || item.subtitle === "CPE") {

      } else {
        return (
          <Col
            key={index}
            {...cols}
            className={classnames({
              [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
            })}
          >
            <Media>
              {/* {/ <Avatar color={item.color} icon={item.icon} className='mr-2' /> /} */}
              <Avatar color={item.color} icon={item.icon} className='mr-2' />
              <Media className='my-auto' body>
                <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
              </Media>
            </Media>
          </Col>
        )
      }
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
