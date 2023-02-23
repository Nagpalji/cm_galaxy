import React, { useEffect, useState } from 'react'
import { Link, Redirect, Route, Router, useHistory } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import * as ReactDOM from 'react-dom'
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { Chart, ChartTitle, ChartLegend, ChartTooltip, ChartArea, ChartPlotArea, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts'
import "hammerjs"
import Funnel from './Funnel'
import Table from './Table'
import FunnelMappingDetails from './FunnelMappingDetails'
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
    const [selectedCategory, setselectedCategory] = useState("tofu")
    useEffect(() => {
        fetch('https://srvr1px.cyberads.io/getFunnelData/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ startDate: dateFrom, endDate: dateTo })
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
            body: JSON.stringify({ startDate: dateFrom, endDate: dateTo })
        })
            .then(response => response.json())
            .then(data => setTabelData(data))
    }, [])

    return (

        <>
        <ToastContainer />
            <Row className="match-height">
                <Col xs="12">
                    <Funnel res={res} setselectedCategory={(cat) => setselectedCategory(cat)}  />
                    {/* <FunnelMappingDetails /> */}
                </Col>
            </Row>
            <hr />
            <Row className="match-height">
                <Col xs="12">
                    <Table data={tabelData} selectedCategory={selectedCategory} />
                </Col>
            </Row>
        </>
    )
}
export default ChartContainer1