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
            formatter() {
                return `<div>${this.key} : $${this.key === 'Cart Value' ? props.seriesData?.draftItems?.reduce((sum, item) => parseFloat(sum + item.price).toFixed(2), 0) : props.seriesData?.orderItems?.reduce((sum, item) => parseFloat(sum + item.price).toFixed(2), 0)} , Product Count: ${this.y}</div> 
                <br /> 
                ${(this.key === 'Cart Value') ? props.seriesData?.draftItems?.map((e) => {
                            return `<br />${e?.product_name} : $${parseFloat(e?.price).toFixed(2)}`
                        }) : props.seriesData?.orderItems?.map((e) => {
                            return `<br />${e?.product_name} : $${parseFloat(e?.price).toFixed(2)}`
                        })
                    }`
            },
            // formatter() {
            //     const seriesName = this.point.name
            //     const seriesColor = this.point.color
            //     return `<span> ${seriesName} </span></br><span style="color: ${seriesColor} ">●</span> AdRequest: <b> ${Highcharts.numberFormat(props.seriesData?., 0)} </b></br><span style="color: ${seriesColor} ">●</span> Earnings: <b>$ ${Highcharts.numberFormat(pageViewData[seriesName].earnings, 2)} </b></br><span style="color: ${seriesColor}">●</span> CPM: <b>$ ${pageViewData[seriesName].cpm} </b>`
            // },
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
                name: props.seriesName,
                type: 'pie',
                // data: props.seriesData
                data:
                    [
                        // [props.seriesData?.draftItems?.length],
                        // [props.seriesData?.orderItems?.length]
                        ['Cart Value', props.seriesData?.draftItems?.length],
                        ['Purchases Value', props.seriesData?.orderItems?.length]
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
                    <PieChart
                        containerProps={{ style: { height: "430px" } }}
                        highcharts={Highcharts}
                        options={options} />
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CircleChart