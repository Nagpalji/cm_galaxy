import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import moment from 'moment'

function DateWiseProductPurchase(props) {
    const options = {
        chart: {
            marginTop: 30,
            // marginRight:11,
            // marginLeft: 54,
            zoomType: 'xy',
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '600'
            }
        },

        colors: ['#ffc413', '#4acade', '#83ffff', '#97f7c4', '#52c777'],

        title: {
            text: ''
        },

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        xAxis: {
            // categories: [
            //     '13-17',
            //     '18-24',
            //     '25-34',
            //     '34-44',
            //     '44-54',
            //     '55-65',
            //     '65+',
            //     'Undetermined'
            // ],
            categories: props.categories?.map((e) => { return moment(e.created_at).format('MMM YYYY') }),
            crosshair: true
        },

        yAxis: [
            {
                labels: {
                    format: ''
                },
                gridLineWidth: 0,
                title: {
                    text: props.titleTextRight
                }
            }
        ],

        tooltip: {
            formatter() {
                return `<div> ${props.titleTextRight} : ${this.y}</div>
                <br />${props.series?.map((e) => {
                    return `${e?.line_items?.map((e) => {
                        return `<br />${e?.product_name} : ${e?.price}`
                    })}`
                })}
                `
            },

            valueSuffix: '',
            // valueDecimals: 2,
            shared: true
        },

        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    }
                }
            }
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            y: 0,
            padding: 3,
            itemMarginTop: 10,
            itemMarginBottom: -10,
            itemStyle: {
                lineHeight: '14px'
            }
        },

        // series: props.series?.map((e) => { return e.total_price })
        series: [
            {
                name: 'Monthly Data',
                type: 'column',
                // yAxis: 1,
                data: props.series?.map((e) => { return e.total_price })
                // tooltip: {
                //     valueSuffix: ''
                // }
            }
        ]

        //   }, {
        //     name: 'Female',
        //     type: 'column',
        //     // yAxis: 1,
        //     data: [110, 122, 51, 66, 62, 5],
        //     tooltip: {
        //       valueSuffix: ' %'
        //   }

        // }, {
        //       name: 'Unknown',
        //       type: 'column',
        //        marker: {
        //           enabled: false,
        //           symbol: 'circle'
        //       },
        //        data: [0, 22, 15, 0, 0, 10],
        //        tooltip: {
        //         valueSuffix: ' %'
        //     }
        //   }
        // ]
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

export default DateWiseProductPurchase