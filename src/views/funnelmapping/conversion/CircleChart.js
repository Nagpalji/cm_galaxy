import React, { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

function CircleChart(props) {

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
            marginTop: 5,
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '600'
            },
            options3d: {
                enabled: false,
                alpha: 45
            }
        },
        title: {
            text: ''
        },

        colors: ['#4076d9', '#38a6d9', '#4acade', '#00def6', '#83ffff', '#97f7c4', '#52c777', '#3aab58', '#15ad29', '#ffc413'],

        tooltip: {
            valuePrefix: ''
        },

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45,
                dataLabels: {
                    enabled: false
                },
                showInLegend: true

            }
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            enabled: true,
            y: 0,
            padding: 3,
            itemMarginTop: 10,
            itemMarginBottom: -5,

            itemStyle: {
                lineHeight: '14px'
            }
        },

        series: [
            {
                name: 'Platform Wise Clicks',
                type: 'pie',
                data: [
                    ['Product Purchases', 35],
                    ['Product Views', 20]
                ]
            }
        ]

    }

    return (
        <Fragment>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>{props.title}</CardTitle>
                </CardHeader>
                <CardBody>
                    <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts} options={options} />
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CircleChart