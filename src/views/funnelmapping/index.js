import * as React from 'react'
import { Link, Redirect, Route, Router, useHistory } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import * as ReactDOM from 'react-dom'
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { Chart, ChartTitle, ChartLegend, ChartTooltip, ChartArea, ChartPlotArea, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts'
import "hammerjs"
import Funnel from './Funnel'
import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from './Table3'
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
            <Row className="my-2">
                <Col xs="12">
                    <Table />
                    {/* <Table2 />
                    <Table3 /> */}
                </Col>
            </Row>
        </>
    )
}
export default ChartContainer1