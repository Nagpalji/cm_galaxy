import * as React from 'react'
import { Link, Redirect, Route, Router, useHistory } from "react-router-dom"

import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import * as ReactDOM from 'react-dom'
import { NumericTextBox } from '@progress/kendo-react-inputs'
import { Chart, ChartTitle, ChartLegend, ChartTooltip, ChartArea, ChartPlotArea, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts'
import "hammerjs"

const tooltipRender = (props) => {
    if (props.point) {
        return props.point.dataItem.stat
    }
}

const data = [
    {
        stat: "TOFU Avg. Sessions",
        count: 923454,
        color: "#FFCC00"
    },
    {
        stat: "TOFU Pages Per Session",
        count: 523448,
        color: "#FFCC00"
    },
    {
        stat: "TOFU Avg. Time Per Session",
        count: 200438,
        color: "#FFCC00"
    }
]
const data2 = [
    {
        stat: "MOFU Prouct Preference",
        count: 923454,
        color: "#4ACADE"
    },
    {
        stat: "MOFU Number Of Prouct Engaged",
        count: 523448,
        color: "#4ACADE"
    },
    {
        stat: "MOFU Engagement Behaviour",
        count: 200438,
        color: "#4ACADE"
    },
    {
        stat: "MOFU Visitor's Device Preferences",
        count: 923454,
        color: "#4ACADE"
    }
]
const data3 = [
    {
        stat: "BOFU Heat Map Analysis",
        count: 523448,
        color: "#9CFFFF"
    },
    {
        stat: "BOFU Number Of Days Last Purchase",
        count: 200438,
        color: "#9CFFFF"
    },
    {
        stat: "BOFU Customer Lifetime Value",
        count: 200438,
        color: "#9CFFFF"
    },
    {
        stat: "BOFU High Value Customer",
        count: 200438,
        color: "#9CFFFF"
    }
]

const ChartContainer1 = () => {
    const history = useHistory()

    return (

        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <Card style={{ outerWidth: "10px", height: "550px" }}>
                    <Row className='match-height' style={{ display: "flex", justifyContent: "center", height: "550px" }}>
                        <Col>
                            <CardHeader>
                                <CardTitle tag='h4'>TOFU</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <Chart
                                    onSeriesClick={(e) => {
                                        history.push("/funnelmapping/TOFU")
                                    }}

                                    style={
                                        {
                                            margin: "0 auto", height: "350px"
                                        }}>
                                    <ChartArea />
                                    <ChartTitle text="Sales funnel" />
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="funnel"
                                            data={data}
                                            categoryField="stat"
                                            field="count"
                                            colorField="color"
                                            // dynamicSlope="50"
                                            dynamicHeight="800px"
                                        >
                                            <ChartSeriesLabels color="black" background="none" format="N0" />
                                        </ChartSeriesItem>
                                    </ChartSeries>
                                    <ChartTooltip render={tooltipRender} />
                                    <ChartLegend visible={false} />
                                </Chart>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ outerWidth: "10px", height: "550px" }}>
                    <Row className='match-height' style={{ display: "flex", justifyContent: "center", height: "550px" }}>
                        <Col>
                            <CardHeader>
                                <CardTitle tag='h4'>MOFU</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <Chart
                                    onSeriesClick={(e) => {
                                        history.push("/funnelmapping/MOFU")
                                    }}

                                    style={
                                        {
                                            // margin: "0 auto"
                                            // height : 50,
                                            // width: "40%"
                                        }}>
                                    <ChartArea />
                                    <ChartTitle text="Sales funnel" />
                                    <ChartSeries >
                                        <ChartSeriesItem
                                            type="funnel"
                                            data={data2}
                                            categoryField="stat"
                                            field="count"
                                            colorField="color"
                                            // dynamicSlope="50"
                                            dynamicHeight="800"
                                        >
                                            <ChartSeriesLabels color="black" background="none" format="N0" />
                                        </ChartSeriesItem>
                                    </ChartSeries>
                                    <ChartTooltip render={tooltipRender} />
                                    <ChartLegend visible={false} />
                                </Chart>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>

                <Card style={{ outerWidth: "10px", height: "550px" }}>
                    <Row className='match-height' style={{ display: "flex", justifyContent: "center", height: "550px" }}>
                        <Col>
                            <CardHeader>
                                <CardTitle tag='h4'>BOFU</CardTitle>
                            </CardHeader>
                            <CardBody>

                                <Chart
                                    onSeriesClick={(e) => {
                                        history.push("/funnelmapping/BOFU")
                                    }}

                                    style={
                                        {
                                            // margin: "0 auto",
                                            // height : 200,
                                            // width: "80%"
                                        }}>
                                    <ChartArea />
                                    <ChartTitle text="Sales funnel" />
                                    <ChartSeries >
                                        <ChartSeriesItem
                                            type="funnel"
                                            data={data3}
                                            categoryField="stat"
                                            field="count"
                                            colorField="color"
                                            // dynamicSlope="50"
                                            dynamicHeight="800"
                                        >
                                            <ChartSeriesLabels color="black" background="none" format="N0" />
                                        </ChartSeriesItem>
                                    </ChartSeries>
                                    <ChartTooltip render={tooltipRender} />
                                    <ChartLegend visible={false} />
                                </Chart>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    )
}
export default ChartContainer1