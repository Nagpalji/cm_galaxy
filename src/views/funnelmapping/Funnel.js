import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward, IoIosArrowForward } from 'react-icons/io'
import { GiCheckMark } from 'react-icons/gi'
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
                    <div className="taper rectangle01" style={{ borderColor: '#FFC313 transparent', width: '360px' }}><p className='funnelPara text-center text-white'>TOFU</p></div>
                    <div className="rectangle02 h-none" style={{ width: 290 }} />
                    <div className="taper rectangle03" style={{ borderColor: '#4076DA transparent', width: '300px' }}><p className='funnelPara text-center text-white'>MOFU</p></div>
                    <div className="rectangle04 h-none" style={{ width: 235 }} />
                    <div className="taper rectangle05" style={{ borderColor: '#4acade transparent', width: '240px' }}><p className='funnelPara text-center text-white'>BOFU</p></div>
                    <div className="rectangle06 h-none" style={{ width: 175 }} />
                    <div className="taper rectangle07" style={{ borderColor: '#27CA75 transparent', width: '180px' }}><p className='funnelPara text-center text-white'>Conversion</p></div>
                </div>
                <div className="d-flex flex-row col-lg-7 col-sm-12 p-1">
                    <div className="content-FFC313 hide1 w-100 h-100" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-warning" style={{ marginLeft: '-182px', top: 25, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className="w-100 border-left-warning">
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-warning' />
                                <p className='fw-bold text-warning m-0'>Total User</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <IoIosArrowForward />
                                {0}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-warning' />
                                <p className='fw-bold text-warning m-0'>Avg. Session</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <IoIosArrowForward />
                                {res && res?.tofu_avg_session}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-warning' />
                                <p className='fw-bold text-warning m-0'>Pages Per Session</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <IoIosArrowForward />
                                {res && res?.tofu_PagesPerSession}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-warning m-0 p-0' />
                                <p className='fw-bold text-warning m-0'>Avg. Time Per Session</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <IoIosArrowForward />
                                {res && res?.tofu_avgTimePerSession}
                            </div>
                        </PerfectScrollbar>
                    </div>
                    <div className="content-4076DA hide2 w-100" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-primary" style={{ marginLeft: '-182px', top: 110, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className="w-100 border-left-primary">
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-primary' />
                                <p className='fw-bold text-primary m-0'>Total User</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <IoIosArrowForward />
                                {0}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-primary' />
                                <p className='fw-bold m-0 text-primary'>Product Preference</p>
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
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-primary' />
                                <p className='fw-bold m-0 text-primary'>Number Of Product Engaged</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                {res?.mofu_productEngaged && res?.mofu_productEngaged.map((val) => {
                                    return (
                                        <>
                                            <p className='m-0' key={val.product_name}><IoIosArrowForward />{val.product_name} <b> : {val.user_count}</b></p>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-primary' />
                                <p className='fw-bold m-0 text-primary'>Engagement Behaviour</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                {res?.mofu_engagementBehavior && res?.mofu_engagementBehavior.map((val) => {
                                    return (
                                        <>
                                            <p className='m-0' key={val.product_name}><IoIosArrowForward />{val.product_name} <b>: {val.Priority}</b></p>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-primary' />
                                <p className='fw-bold m-0 text-primary'>Visitor’s Device Preferences</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                {res?.mofu_visitorDeviceCounts && res?.mofu_visitorDeviceCounts.map((val) => {
                                    return (
                                        <>
                                            <p className='m-0' key={val.Device}><IoIosArrowForward />{val.Device} <b>: ${val.count}</b></p>
                                        </>
                                    )
                                })}
                            </div>
                        </PerfectScrollbar>
                    </div>
                    <div className="content-29A4F7 hide3 w-100 p-0 m-0" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-secondary" style={{ marginLeft: '-182px', top: 190, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className=" w-100 p-0 border-left-secondary">
                            {/* <p className='fw-bold'>Heat Map Analysis</p>
                                <div>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                </div> */}
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-secondary' />
                                <p className='fw-bold m-0 text-secondary'>Number Of Days Last Purchase</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                    return (
                                        <>
                                            <p className='m-0' key={val.product_name}><IoIosArrowForward />{val.product_name} <b>: {val.Date}</b></p>
                                        </>
                                    )
                                })}
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-secondary' />
                                <p className='fw-bold m-0 text-secondary'>Customer Lifetime Value</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <p className='m-0' ><IoIosArrowForward />{res && res?.bofu_customerLifetimeValues}</p>
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-secondary p-0 m-0' />
                                <p className='fw-bold m-0 text-secondary'>High Value Customer</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <p className='m-0'><IoIosArrowForward />List number 1</p>
                                <p className='m-0'><IoIosArrowForward />List number 2</p>
                                <p className='m-0'><IoIosArrowForward />List number 3</p>
                            </div>
                        </PerfectScrollbar>
                    </div>
                    <div className="content-27CA75 hide4 w-100" style={{ height: 300 }}>
                        <div className="d-none d-lg-block w-25 position-relative border-top-success" style={{ marginLeft: '-182px', top: 270, height: 0, zIndex: '-1000' }} />
                        <PerfectScrollbar className="w-100 p-0 border-left-success">
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                <p className='fw-bold text-success m-0'>Total Conversion</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <p className='m-0'><IoIosArrowForward />List number 1</p>
                                <p className='m-0'><IoIosArrowForward />List number 2</p>
                                <p className='m-0'><IoIosArrowForward />List number 3</p>
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                <p className='fw-bold text-success m-0'>Conversion</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <p className='m-0'><IoIosArrowForward />List number 1</p>
                                <p className='m-0'><IoIosArrowForward />List number 2</p>
                                <p className='m-0'><IoIosArrowForward />List number 3</p>
                            </div>
                            <div className='d-flex align-items-center p-0 m-0'>
                                <IoIosArrowRoundForward size={32} className='text-success p-0 m-0' />
                                <p className='fw-bold text-success m-0'>Conversion</p>
                            </div>
                            <div className='ml-1 mb-1'>
                                <p className='m-0'><IoIosArrowForward />List number 1</p>
                                <p className='m-0'><IoIosArrowForward />List number 2</p>
                                <p className='m-0'><IoIosArrowForward />List number 3</p>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div> : ndivl}
        </>
    )
}
export default Funnel