import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, Activity, MousePointer, UserCheck, Filter, Percent, CheckCircle, ShoppingBag } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import { data } from 'jquery'
import React, { useState, useEffect } from "react"
import { icon } from 'leaflet'
import ReactPaginate from 'react-paginate'

const StatsCard = ({ cols }) => {
  // export default function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/common_headers/?brand_name='
  const fet = fett + brand_name
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em")
  let ed = localStorage.getItem("ed")
  const sy = localStorage.getItem("sy")
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")
  const c_product = sessionStorage.getItem("overall_product")
  const c_campaign = sessionStorage.getItem("overall_campaign")
  const c_traffic = sessionStorage.getItem("overall_traffic")
  const c_geo = sessionStorage.getItem("overall_geo")
  const product = '&product='
  const campaign = '&campaign='
  const traffic = '&traffic='
  const geo = "&geo="

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
  
  useEffect(() => {
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo)
      .then((response) => {
        if (response.ok) {
          return response.json()
          // console.log(ab)
        }
        throw response
      })
      .then((data) => {
        setData(data)
        data[0].icon = <ShoppingBag size={24} />
        data[1].icon = <Percent size={24} />
        data[2].icon = <CheckCircle size={24} />
        data[3].icon = <MousePointer size={24} />
        data[4].icon = <UserCheck size={24} />
        data[5].icon = <Filter size={24} />
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
  // if (loading) return "Loading..."
  // if (error) return "Data Unavailable."

  const handlePagination = page => {

    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then((result) => {

        setData(result)
      },
        (error) => {

        }
      )
  }
  const CustomPagination = () => {
    return (
      <ReactPaginate
        onPageChange={handlePagination}
      />
    )
  }

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      const userName = localStorage.getItem("brand_name")
      const userEmail = localStorage.getItem("user_name")
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
                {/* {/ <Avatar icon={<TrendingUp size={14} />} /> /} */}
    
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
          //  console.log("shiv", valJSONuser)
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
                    {/* {/ <Avatar icon={<TrendingUp size={14} />} /> /} */}
        
                    <Media className='my-auto' body>
                      <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                      <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                    </Media>
                  </Media>
                </Col>
              )
            }
          } else if (item.subtitle === "Engagements" || item.subtitle === "CPE") {
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
                  {/* {/ <Avatar icon={<TrendingUp size={14} />} /> /} */}
      
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
                {/* {/ <Avatar icon={<TrendingUp size={14} />} /> /} */}
    
                <Media className='my-auto' body>
                  <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                  <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                </Media>
              </Media>
            </Col>
          )
        }
      } else if (item.subtitle === "Engagements" || item.subtitle === "CPE") {

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
              {/* {/ <Avatar icon={<TrendingUp size={14} />} /> /} */}
  
              <Media className='my-auto' body>
                <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
                <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
              </Media>
            </Media>
          </Col>
        )
      }
    })
    // return data.map((item, index) => {
    //   const margin = Object.keys(cols)
    //   return (
    //     <Col
    //       key={index}
    //       {...cols}
    //       className={classnames({
    //         [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
    //       })}
    //     >
    //       <Media>
    //         {/* <Avatar color={item.color} icon={item.icon} className='mr-2' /> */}
    //         <Avatar color={item.color} icon={item.icon} className='mr-2' />
    //         {/* <Avatar icon={<TrendingUp size={14} />} /> */}

    //         <Media className='my-auto' body>
    //           <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
    //           <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
    //         </Media>
    //       </Media>
    //     </Col>
    //   )
    // })
  }

  return (
    <Card className='card-statistics'>
      {/* <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader> */}
      <CardBody className='statistics-body mtb-20'>
        <Row>{renderData()}
          {CustomPagination}
        </Row>

        {/* onChange={handleOnChange} */}
      </CardBody>
    </Card>
  )
}

export default StatsCard

