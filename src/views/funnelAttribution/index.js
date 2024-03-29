import React, { useEffect, useState } from 'react'
import { Link, Redirect, Route, Router, useHistory } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import * as ReactDOM from 'react-dom'
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { Chart, ChartTitle, ChartLegend, ChartTooltip, ChartArea, ChartPlotArea, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts'
import "hammerjs"
import Funnel from './Funnel'
import { toast, ToastContainer } from 'react-toastify'

const tooltipRender = (props) => {
    if (props.point) {
        return props.point.dataItem.stat
    }
}

const ChartContainer1 = () => {
    const dateTo = localStorage.getItem("date_to")
    const dateFrom = localStorage.getItem("date_from")

    const history = useHistory()
    const [res, setRes] = useState([])
    const [tabelData, setTabelData] = useState([])
    function IsJsonString(str) {
        try {
            const json = JSON.parse(str)
            return (typeof json === 'object')
        } catch (e) {
            return false
        }
    }
    let brand
    if (IsJsonString(localStorage.getItem("brand_name"))) {
        brand = JSON.parse(localStorage.getItem("brand_name"))
    } else {
        brand = localStorage.getItem("brand_name")
    }
    function refreshfunction() {
        fetch('https://srvr1px.cyberads.io/getFunneltableData/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ startDate: dateFrom, endDate: dateTo, brand, start: 0, limit: (tabelData?.convertionsData?.length + 20) || 0 })
        })
            .then(response => response.json())
            .then(data => setTabelData(data))
            .catch(err => {
                toast.error(err.message)
            })
    }
    useEffect(() => {
        fetch('https://srvr1px.cyberads.io/getFunnelData/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ startDate: dateFrom, endDate: dateTo, brand })
        })
            .then(response => response.json())
            .then(data => setRes(data))
            .catch(err => {
                toast.error(err.message)
            })

    }, [])

    useEffect(() => {
        fetch('https://srvr1px.cyberads.io/getFunneltableData/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ startDate: dateFrom, endDate: dateTo, brand })
        })
            .then(response => response.json())
            .then(data => setTabelData(data))
    }, [])

    return (

        <div id='dashboard-ecommerce'>
            <ToastContainer />
            <Row className="match-height">
                <Col xl='12' md='12' xs='12'>
                    <Funnel res={res} table={tabelData} refreshfunction={refreshfunction} />
                </Col>
            </Row>
        </div>
    )
}
export default ChartContainer1