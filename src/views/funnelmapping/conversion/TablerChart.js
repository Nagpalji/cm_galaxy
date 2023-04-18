import React, { Fragment } from 'react'
import { Modal, ModalBody, ModalHeader, Card, CardBody, CardHeader, CardTitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

function TablerChart(props) {

    const options = {
        chart: {
            // marginRight:50,
            marginTop: 30,
            // marginLeft: 75,
            type: 'column',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionY: 0,
                scrollPositionX: 0,
                opacity: 1
            }
        },

        colors: ['#ffc413', '#4acade', '#83ffff', '#97f7c4', '#52c777'],

        title: {
            text: ''
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

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        xAxis: {
            // categories: ['31/03/2023', '01/04/2023', '02/04/2023', '03/04/2023', '04/04/2023', '05/04/2023', '06/04/2023', '07/04/2023', '08/04/2023', '09/04/2023', '10/04/2023'],
            categories: props.categories,
            labels: {
                x: -10
            }
            // min:1,
            // max:6
        },

        yAxis: [
            {
                labels: {
                    format: ''
                },
                title: {
                    text: props.titleTextLeft
                },
                opposite: true
            },
            {
                gridLineWidth: 0,
                title: {
                    text: props.titleTextRight
                },
                labels: {
                    format: ''//
                }

            }
        ],

        tooltip: {
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
                    // stops: [
                    //     [0, Highcharts.getOptions().colors[0]],
                    //     [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    // ]
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

        // series: props.series.map((e) => {
        //     // return (e?.quantity) 
        //     return ({
        //         name: props.titleTextLeft,
        //         // type: 'column',
        //         yAxis: 1,
        //         data: e.total_price,
        //         // data: spend,
        //         tooltip: {
        //             valueSuffix: ' '
        //         }

        //     })
        // })

        series: [
            {
                name: 'Total Price',
                type: 'column',
                yAxis: 1,
                data: props.series,
                // data: spend,
                tooltip: {
                    valueSuffix: ''
                }

            }
            // {
            //     name: 'Right Title',
            //     type: 'column',
            //     // yAxis: 1,
            //     data: props.series,
            //     // data: click,
            //     tooltip: {
            //         valueSuffix: ''
            //     }
            // }
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

export default TablerChart