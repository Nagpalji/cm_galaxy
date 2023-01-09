import * as React from 'react'
import { Link, Redirect, Route, Router, useHistory } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import * as ReactDOM from 'react-dom'
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { Chart, ChartTitle, ChartLegend, ChartTooltip, ChartArea, ChartPlotArea, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts'
import "hammerjs"
import Funnel from './Funnel'
import Table from './Table'

const tooltipRender = (props) => {
    if (props.point) {
        return props.point.dataItem.stat
    }
}

const ChartContainer1 = () => {
    const history = useHistory()
    
    return (

        <>
            <Row className="match-height">
                <Col xs="12">
                    <Funnel />
                </Col>
            </Row>
            <Row className="match-height">
                <Col xs="12">
                    <Table />
                </Col>
            </Row>
        </>
    )
}
export default ChartContainer1