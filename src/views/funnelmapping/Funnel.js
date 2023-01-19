import React, { useEffect, useState } from 'react'
import './Funnel.css'
import $ from 'jquery'

const Funnel = ({res}) => {  
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
        {res ? <div className="d-flex justify-content-center align-items-center row m-md-2">
                <div className="d-flex align-items-center row m-md-2">
                    <div className="d-flex justify-content-center align-items-center flex-column col-lg-5 col-sm-12 mb-1">
                        <div className="taper rectangle01"><p className='funnelPara'>TOFU</p></div>
                        <div className="rectangle02" />
                        <div className="taper rectangle03"><p className='funnelPara'>MOFU</p></div>
                        <div className="rectangle04" />
                        <div className="taper rectangle05"><p className='funnelPara'>BOFU</p></div>
                        <div className="rectangle06" />
                        <div className="taper rectangle07"><p className='funnelPara'>Conversion</p></div>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center flex-row col-lg-6 col-sm-12 overflow-hidden">
                        <div className="content-FFC313 hide1">
                            <div className="triangle-right-FFC313 d-none d-lg-block" />
                            <div className="content-box-FFC313 p-1">
                                <p className='DetailPara'>Avg. Session</p>
                                <ul>
                                    <li>{res && res?.tofu_avg_session}</li>
                                </ul>
                                <p className='DetailPara'>Pages Per Session</p>
                                <ul>
                                    <li>{res && res?.tofu_PagesPerSession}</li>
                                </ul>
                                <p className='DetailPara'>Avg. Time Per Session</p>
                                <ul>
                                    <li>{res && res?.tofu_avgTimePerSession}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-4076DA hide2">
                            <div className="triangle-right-4076DA d-none d-lg-block" />
                            <div className="content-box-4076DA p-1">
                                <p className='DetailPara'>Product Preference</p>
                                <ul>
                                    {res?.mofu_productPreferences && res.mofu_productPreferences.map((val) => {
                                        return (
                                            <>
                                            <li key={val.product_name}>{`${val.product_name} : ${val.user_count}`}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                                <p className='DetailPara'>Number Of Product Engaged</p>
                                <ul>
                                    {res?.mofu_productEngaged && res?.mofu_productEngaged.map((val) => {
                                        return (
                                            <>
                                            <li key={val.product_name}>{`${val.product_name} : ${val.user_count}`}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                                <p className='DetailPara'>Engagement Behaviour</p>
                                <ul>
                                    {res?.mofu_engagementBehavior && res?.mofu_engagementBehavior.map((val) => {
                                        return (
                                            <>
                                            <li key={val.product_name}>{`${val.product_name} : ${val.Priority}`}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                                <p className='DetailPara'>Visitor’s Device Preferences</p>
                                <ul>
                                    {res?.mofu_visitorDeviceCounts && res?.mofu_visitorDeviceCounts.map((val) => {
                                        return (
                                            <>
                                            <li key={val.Device}>{`${val.Device} : ${val.count}`}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="content-29A4F7 hide3">
                            <div className="triangle-right-29A4F7 d-none d-lg-block" />
                            <div className="content-box-29A4F7 pt-1 pl-1">
                                {/* <p className='DetailPara'>Heat Map Analysis</p>
                                <ul>
                                    <li> </li>
                                    <li> </li>
                                    <li> </li>
                                </ul> */}
                                <p className='DetailPara'>Number Of Days Last Purchase</p>
                                <ul>
                                    {res?.bofu_lastPurchase && res?.bofu_lastPurchase.map((val) => {
                                        return (
                                            <>
                                            <li key={val.product_name}>{`${val.product_name} : ${val.Date}`}</li>
                                            </>
                                        )
                                    })}
                                </ul>
                                <p className='DetailPara'>Customer Lifetime Value</p>
                                <ul>
                                    <li>{res && res?.bofu_customerLifetimeValues}</li>
                                </ul>
                                <p className='DetailPara'>High Value Customer</p>
                                <ul>
                                    <li>List number 1</li>
                                    <li>List number 2</li>
                                    <li>List number 3</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-27CA75 hide4">
                            <div className="triangle-right-27CA75 d-none d-lg-block" />
                            <div className="content-box-27CA75 p-1">
                                <p className='DetailPara'>Conversion</p>
                                <ul>
                                    <li>List number 1</li>
                                    <li>List number 2</li>
                                    <li>List number 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null }
        </>
    )
}
export default Funnel