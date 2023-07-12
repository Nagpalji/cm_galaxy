import React, { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

function AbandonedCartValueVsPurchaseValue(props) {

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
                return `<div>${this.key}: $${this.key === 'Abandoned Cart Value' ? parseFloat(props.seriesData?.draftTotalPrice + props.seriesData?.orderTotalPrice).toFixed(2) : parseFloat(props.seriesData?.orderTotalPrice).toFixed(2)}, Quantity: ${this.y}</div> 
                <br />
                ${(this.key === 'Abandoned Cart Value') ? props.seriesData?.draftItems?.map((e) => {
                    return `<span style="color: ${this.point.color} ">● </span>${e?.product_name}:  ${e.total_discount === 0 ? e.price : `<span style="text-decoration: line-through">$${e.price}</span> $${e.price - e.total_discount}`}`
                }).join("<br>") : props.seriesData?.orderItems?.map((e) => {
                    return `<span style="color: ${this.point.color} ">● </span>${e?.product_name}:  ${e.total_discount === 0 ? e.price : `<span style="text-decoration: line-through">$${e.price}</span> $${e.price - e.total_discount}`}`
                }).join("<br>")
                    }`
            },
            // formatter() {
            //     const seriesName = this.point.name
            //     const seriesColor = this.point.color
            //     return `<span> ${seriesName} </span></br><span style="color: ${seriesColor} ">●</span> AdRequest: <b> ${Highcharts.numberFormat(props.seriesData?., 0)} </b></br><span style="color: ${seriesColor} ">●</span> Earnings: <b>$ ${Highcharts.numberFormat(pageViewData[seriesName].earnings, 2)} </b></br><span style="color: ${seriesColor}">●</span> CPM: <b>$ ${pageViewData[seriesName].cpm} </b>`
            // },
            // formatter() {
            //     { console.log(this.key === 'Abandoned Cart Value' ? props.seriesData?.draftItems?.reduce((sum, item) => { return (parseFloat(sum.price + item.price).toFixed(2)) }) : props.seriesData?.orderItems?.reduce((sum, item) => { return (sum.price + item.price) })) }
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
                name: '',
                type: 'pie',
                // data: props.seriesData
                data:
                    [
                        // [props.seriesData?.draftItems?.length],
                        // [props.seriesData?.orderItems?.length]
                        ['Abandoned Cart Value', props.seriesData?.draftItems?.length],
                        ['Purchase Value', props.seriesData?.orderItems?.length]
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

export default AbandonedCartValueVsPurchaseValue