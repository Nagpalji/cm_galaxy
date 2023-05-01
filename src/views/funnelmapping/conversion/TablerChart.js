import React, { Fragment } from 'react'
import { Modal, ModalBody, ModalHeader, Card, CardBody, CardHeader, CardTitle, Spinner, Row, Col } from 'reactstrap'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"
import moment from 'moment'

function TablerChart(props) {

    const options = {
        chart: {
            // marginRight:50,
            marginTop: 30,
            // marginLeft: 75,
            type: 'column',
            style: {
                fontFamily: 'Montserrat',
                fontWeight: '600'
            },
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
            // categories: ['Alright_WYHASR_Becks', 'Alright_FirstDayInOffice_Medibuddy', 'Alright_MGIDW_Walla', 'Binge_CCSI#2_Binomo', 'LIT_CookOff-Pintola', 'LIT_FMLS2E1_Philips', 'Recharge_Mediatek'],
            categories: props.categories?.map((e) => { return moment(e.created_at).format('MMM YYYY') }),
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
                    text: 'Avg. Time Spend'
                },
                opposite: true

            }, {
                gridLineWidth: 0,
                title: {
                    text: 'Page Views'
                },
                labels: {
                    format: ''
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
        // series: Keyword

        series: [
            {
                name: 'Page Views',
                type: 'column',
                yAxis: 1,
                // data: [49009, 715, 10664, 12876, 10344, 10000, 54564],
                data: props.series?.map((e) => { return e.session }),
                tooltip: {
                    valueSuffix: ' '
                }

            }, {
                name: 'Avg. Time Spend',
                type: 'line',
                data: [17, 6, 34, 14, 28, 51],
                // data: click,
                tooltip: {
                    valueSuffix: ''
                }
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

export default TablerChart