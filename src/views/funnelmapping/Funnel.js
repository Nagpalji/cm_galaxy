import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io'
import PerfectScrollbar from 'react-perfect-scrollbar'
import './Funnel.css'
import $ from 'jquery'

const Funnel = ({ res }) => {
    $(document).ready(function () {
        $('.hide1').show()
        $('.hide2, .hide3, .hide4').hide()
        $('.rectangle01').click(function () {
            $('.hide2, .hide3, .hide4').hide()
            $('.hide1').show()
        })
        $('.rectangle03').click(function () {
            $('.hide1, .hide3, .hide4').hide()
            $('.hide2').show()
        })
        $('.rectangle05').click(function () {
            $('.hide1, .hide2, .hide4').hide()
            $('.hide3').show()
        })
        $('.rectangle07').click(function () {
            $('.hide1, .hide2, .hide3').hide()
            $('.hide4').show()
        })
    })

    return (
        <>
            {res ? <div className="d-flex row rounded shadow">
                <div className="d-flex justify-content-center align-items-center flex-column col-lg-5 col-sm-12 p-0 py-1">
                    <div className="taper rectangle01" data-toggle="tooltip" data-placement="top" title="Total Number Of Users" style={{ borderColor: '#FFC313 transparent', width: '360px' }}><p className='funnelPara text-center text-white'>TOFU</p></div>
                    <div className="rectangle02 h-none" style={{ width: 290 }} />
                    <div className="taper rectangle03" data-toggle="tooltip" data-placement="top" title="User Engagement Behaviour (Number Of Users)" style={{ borderColor: '#4076DA transparent', width: '300px' }}><p className='funnelPara text-center text-white'>MOFU</p></div>
                    <div className="rectangle04 h-none" style={{ width: 235 }} />
                    <div className="taper rectangle05" style={{ borderColor: '#4acade transparent', width: '240px' }}><p className='funnelPara text-center text-white'>BOFU</p></div>
                    <div className="rectangle06 h-none" style={{ width: 175 }} />
                    <div className="taper rectangle07" style={{ borderColor: '#27CA75 transparent', width: '180px' }}><p className='funnelPara text-center text-white'>Conversion</p></div>
                </div>
                <div className="d-flex flex-row col-lg-7 col-sm-12 p-1">
                    <div className="content-FFC313 hide1 w-100" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-warning" style={{ marginLeft: '-182px', top: 25, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className="w-100 border-left-warning">
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Number Of People Reached" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>Reach –</p>
                                </div>
                                <div className='ml-2'>
                                    <p><b>{res?.Tofu?.Reach}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number Of Unique People" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>Unique Reach –</p>
                                </div>
                                <div className='ml-2'>
                                    <p><b>{res?.Tofu?.Unique_Reach}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Sum Of Total Spends" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>Spends ($) –</p>
                                </div>
                                <div className='ml-2'>
                                    <p><b>{parseFloat(res?.Tofu?.Spends).toFixed(2)}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number of Sessions" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>Session –</p>
                                </div>
                                <div className='ml-2'>
                                    <p><b>{res?.Tofu?.Session}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number of Clicks / Total Number Of Impression" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>CTR % –</p>
                                </div>
                                <div className='ml-2'>
                                    <p><b>{parseFloat(res?.Tofu?.CTR).toFixed(1)}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Post Clicks ( M/F) – Post click on Gender, Age data to show up" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>Demographics –</p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.Tofu?.Demographics && res?.Tofu?.Demographics.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.Gender}>{val.Gender} <b>: {val.Clicks}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* <div className='d-block' data-toggle="tooltip" data-placement="top" title="Top 3 ad copies by CTR" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-warning' />
                                    <p className='fw-bold text-warning m-0'>Best Ad contributing to ToFU –</p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p><b>{0}</b></p>
                                </div>
                            </div> */}
                        </PerfectScrollbar>
                    </div>
                    <div className="content-4076DA hide2 w-100" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-primary" style={{ marginLeft: '-185px', top: 110, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className="w-100 border-left-primary">
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-primary' />
                                    <p className='fw-bold text-primary m-0'>Product Preference – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.Mofu?.product_Preference && res?.Mofu?.product_Preference.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.visitors_count}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Count Of Product pages visited / Number Of Visitors" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-primary' />
                                    <p className='fw-bold text-primary m-0'>Product Engagement – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.Mofu?.product_Engagement && res?.Mofu?.product_Engagement.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Engagement}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Device OS % (IOS, Android, Windows & Others)" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-primary' />
                                    <p className='fw-bold text-primary m-0'>OS Preference – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.Mofu?.os_Preference && res?.Mofu?.os_Preference.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.OS}>{val.OS} <b>: ${val.count}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number of page views / Number of sessions" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-primary' />
                                    <p className='fw-bold text-primary m-0'>Avg. Pages per session </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Mofu?.avg_pages_per_session}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Website Duration / Total Number of Sessions" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-primary' />
                                    <p className='fw-bold text-primary m-0'>Avg. Time Per Session (in secs) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Mofu?.avg_time_per_session}</b></p>
                                </div>
                            </div>
                            {/* <div className='d-block' data-toggle="tooltip" data-placement="top" title="Top 3 ads" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-primary' />
                                    <p className='fw-bold text-primary m-0'>Best Ad Contributing Avg Pages per session (in secs) – </p>
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
                            </div> */}

                        </PerfectScrollbar>
                    </div>
                    <div className="content-29A4F7 hide3 w-100 p-0 m-0" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-secondary" style={{ marginLeft: '-187px', top: 190, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className=" w-100 p-0 border-left-secondary">
                            <div className='d-flex align-items-center bg-secondary'>
                                <p className='fw-bold text-white m-0' style={{ padding: 5 }}>For E-Commerce </p>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number of users who have created a cart" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary' />
                                    <p className='fw-bold m-0 text-secondary'>Add To Cart – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.add_to_cart}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number of Users who have initiated checkout" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary' />
                                    <p className='fw-bold m-0 text-secondary'>Initiate Checkout – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.initiate_checkout}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total value of orders added to cart. " >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Checkout Value ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.checkout_value}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Checkout value / total spends" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Cost per Lead ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.cost_per_lead}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Leads or Carts created / Visitors * 100" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Visitor to Cart Conversion Rate % – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.visitor_to_cart_conversion_rate}</b></p>
                                </div>
                            </div>
                            {/* <div className='d-block' data-toggle="tooltip" data-placement="top" title="Top 3 ads that has resulted in maximum no. of visitors creating a cart" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Best Ads Contribution to BoFU – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.add_to_cart}</b></p>
                                </div>
                            </div> */}
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Number of abandoned carts" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Abandoned Cart – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.abandoned_cart}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total sum of revenue abandoned" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Abandoned Cart Value ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.abandoned_cart_value}</b></p>
                                </div>
                            </div>
                            {/* <div className='d-block' data-toggle="tooltip" data-placement="top" title="Returning Users Vs New Users %" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Returning Users Vs New Users % – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.add_to_cart}</b></p>
                                </div>
                            </div> */}
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Cart Value for Returning/ No. of Returning Visitors" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Returning Users Cart Value ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.returning_users_cart_value}</b></p>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Cart Value for New Visitors/ No. of New Visitors" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>New Users Cart Value ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <p className='m-0 ml-2' > <b>{res?.Bofu?.new_users_cart_value}</b></p>
                                </div>
                            </div>
                            {/* <div className='d-flex align-items-center bg-secondary'>
                                <p className='fw-bold text-white m-0' style={{ padding: 5 }}>For Performance Marketing: </p>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total number of leads" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Leads – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <li className='m-0' >{res && res?.bofu_customerLifetimeValues}</li>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Number of qualified Leads" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Qualified Leads – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <li className='m-0' >{res && res?.bofu_customerLifetimeValues}</li>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="otal Cost / Total Number of Leads" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>CPL($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <li className='m-0' >{res && res?.bofu_customerLifetimeValues}</li>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Leads or Carts created / Visitors * 100" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Visitor to Lead Conversion Rate % – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <li className='m-0' >{res && res?.bofu_customerLifetimeValues}</li>
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Top 3 ad that has resulted in maximum no. of visitors creating a cart" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                    <p className='fw-bold m-0 text-secondary'>Best Ads Contribution to BoFU – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    <li className='m-0' >{res && res?.bofu_customerLifetimeValues}</li>
                                </div>
                            </div> */}

                        </PerfectScrollbar>
                    </div>
                    <div className="content-27CA75 hide4 w-100" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-success" style={{ marginLeft: '-190px', top: 270, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className="w-100 p-0 border-left-success">
                            <div className='d-flex align-items-center bg-success'>
                                <p className='fw-bold text-white m-0' style={{ padding: 5 }}>For E-Commerce </p>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Number of Sales" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Conversions – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Revenue" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Revenue ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Spends / Number Of Sales" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Cost Per Conversion ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Revenue / Total Spends" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>ROAS – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Revenue / Number Of Sales " >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Avg. Order Value ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-flex align-items-center bg-success'>
                                <p className='fw-bold text-white m-0' style={{ padding: 5 }}>For Performance Marketing </p>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Number of Sales" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Conversions – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Revenue" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Revenue ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Spends / Total Conversions No" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Cost Per Conversion ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Revenue/ Total Spends" >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>ROAS – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='d-block' data-toggle="tooltip" data-placement="top" title="Total Revenue/ Number of sales." >
                                <div className='d-flex align-items-center p-0 m-0'>
                                    <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                    <p className='fw-bold text-success m-0'>Avg. Order Value ($) – </p>
                                </div>
                                <div className='ml-1 mb-1'>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                                <li className='m-0' key={val.product_name}>{val.product_name} <b>: {val.Date}</b></li>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div> : ndivl}
        </>
    )
}
export default Funnel