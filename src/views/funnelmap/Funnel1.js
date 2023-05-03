import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './Funnel.css'

const Funnel = ({ res }) => {
    const data0 = {
        tofu: [
            { heading: 'Reach', detail: 'this is tofu details', tooltip: 'Total Number Of People Reached' },
            { heading: 'Unique Reach', detail: 'this is tofu details', tooltip: 'Number Of Unique People' },
            { heading: 'Spends', detail: 'this is tofu details', tooltip: 'Sum Of Total Spends' },
            { heading: 'Session', detail: 'this is tofu details', tooltip: 'Number of Sessions ' },
            { heading: 'CTR', detail: 'this is tofu details', tooltip: 'Number of Clicks / Total Number Of Impression' },
            { heading: 'Demographics', detail: 'this is tofu details', tooltip: 'Post Clicks ( M/F) – Post click on Gender, Age data to show up' },
            { heading: 'Best Ad contributing to ToFU', detail: 'this is tofu details', tooltip: 'Top 3 ad copies by CTR' }
        ],
        mofu: [
            { heading: 'Product Preference', detail: 'this is tofu details', tooltip: 'Rank or Top 5 Products by Total Visitors' },
            { heading: 'Product Engagement', detail: 'this is tofu details', tooltip: 'Count Of Product pages visited / Number Of Visitors' },
            { heading: 'OS Preference', detail: 'this is tofu details', tooltip: 'Device OS % (IOS, Android, Windows & Others)' },
            { heading: 'Avg. Pages per session', detail: 'this is tofu details', tooltip: ' Number of page views / Number of sessions' },
            { heading: 'Avg. Time Per Session (in secs)', detail: 'this is tofu details', tooltip: 'Total Website Duration / Total Number of Sessions' },
            { heading: 'Best Ad Contributing Avg Pages per session (in secs)', detail: 'this is tofu details', tooltip: 'Top 3 ads' }
        ],
        bofu: [
            { heading: 'Add To Cart', detail: 'this is tofu details', tooltip: 'Number of users who have created a cart' },
            { heading: 'Initiate Checkout', detail: 'this is tofu details', tooltip: 'Number of Users who have initiated checkout' },
            { heading: 'Checkout Value ($)', detail: 'this is tofu details', tooltip: 'Total value of orders added to cart. ' },
            { heading: 'Cost per Lead ($)', detail: 'this is tofu details', tooltip: 'Total Checkout value / total spends' },
            { heading: 'Visitor to Cart Conversion Rate %', detail: 'this is tofu details', tooltip: 'Leads or Carts created / Visitors * 100' },
            { heading: 'Best Ads Contribution to BoFU', detail: 'this is tofu details', tooltip: 'Top 3 ads that has resulted in maximum no. of visitors creating a cart' },
            { heading: 'Abandoned Cart', detail: 'this is tofu details', tooltip: 'Number of abandoned carts' },
            { heading: 'Abandoned Cart Value ($)', detail: 'this is tofu details', tooltip: 'Total sum of revenue abandoned' },
            { heading: 'Returning Users Vs New Users %', detail: 'this is tofu details', tooltip: '' }
        ],
        conversion: [
            { heading: 'Conversions', detail: 'this is tofu details', tooltip: 'Total Number of Sales ' },
            { heading: 'Revenue ($) ', detail: 'this is tofu details', tooltip: 'Total Revenue' },
            { heading: 'Cost Per Conversion ($)', detail: 'this is tofu details', tooltip: 'Total Spends / Number Of Sales' },
            { heading: 'ROAS', detail: 'this is tofu details', tooltip: 'Total Revenue / Total Spends' },
            { heading: 'Avg. Order Value ($)', detail: 'this is tofu details', tooltip: 'Total Revenue / Number Of Sales' }
        ]
    }

    const [colour, setColour] = useState('warning')
    const [funnel, setFunnel] = useState('tofu')
    const [top, setTop] = useState(25)
    const [marginleft, setMarginleft] = useState(182)

    const detail = (e) => {
        setColour(e.target.dataset.color)
        setFunnel(e.target.textContent.toLowerCase())
        setTop(e.target.dataset.top)
        setMarginleft(e.target.dataset.marginleft)
    }

    return (
        <>
            {res ? <div className="d-flex row rounded shadow">
                <div className="d-flex justify-content-center align-items-center flex-column col-lg-5 col-sm-12 p-0 py-1">
                    <div className="taper rectangle01" onClick={detail} data-toggle="tooltip" data-placement="top" title="Total Number Of Users" style={{ borderColor: '#FFC313 transparent', width: '360px' }}><p className='funnelPara text-center text-white' data-top={25} data-color="warning">TOFU</p></div>
                    <div className="rectangle02 h-none" style={{ width: 290 }} />
                    <div className="taper rectangle03" onClick={detail} data-toggle="tooltip" data-placement="top" title="User Engagement Behaviour (Number Of Users)" style={{ borderColor: '#4076DA transparent', width: '300px' }}><p data-color="primary" data-top={110} className='funnelPara text-center text-white'>MOFU</p></div>
                    <div className="rectangle04 h-none" style={{ width: 235 }} />
                    <div className="taper rectangle05" onClick={detail} style={{ borderColor: '#4acade transparent', width: '240px' }}><p data-color="secondary" data-top={190} className='funnelPara text-center text-white'>BOFU</p></div>
                    <div className="rectangle06 h-none" style={{ width: 175 }} />
                    <div className="taper rectangle07" onClick={detail} style={{ borderColor: '#27CA75 transparent', width: '180px' }}><p data-color="success" data-top={270} data-marginLeft={190} className='funnelPara text-center text-white'>Conversion</p></div>
                </div>
                <div className="d-flex flex-row col-lg-7 col-sm-12 p-1">
                    <div className="content-FFC313 hide1 w-100" style={{ height: 300 }}>
                        <div className={`d-none d-lg-block w-25 position-relative border-top-${colour}`} style={{ marginLeft: `-${marginleft}px`, top: `${top}px`, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className={`w-100 border-left-${colour}`}>
                            {data0[funnel].map((item) => {
                                return (
                                    <>
                                        <div className='d-block' data-toggle="tooltip" data-placement="top" title={item.tooltip} >
                                            <div className='d-flex align-items-center p-0 m-0'>
                                                <IoIosArrowRoundForward size={32} className={`text-${colour}`} />
                                                <p className={`fw-bold m-0 text-${colour}`}>{item.heading} –</p>
                                            </div>
                                            <div className='ml-1 mb-1'>
                                                {res?.mofu_productPreferences && res.mofu_productPreferences.map((val) => {
                                                    return (
                                                        <>
                                                            <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.user_count}</b></li>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </PerfectScrollbar>
                    </div>
                </div>
            </div> : ndivl}
        </>
    )
}
export default Funnel