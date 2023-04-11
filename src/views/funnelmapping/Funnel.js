import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowRoundForward, IoIosArrowForward } from "react-icons/io"
import PerfectScrollbar from "react-perfect-scrollbar"
import "./Funnel.css"
import { rectangle } from "leaflet"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import Table from "./Table"

export default function Funnel({ res, table }) {
    const [category, setcategory] = useState("tofu")
    const handleChange = (e) => {
        setcategory(e.target.textContent.toLowerCase())
        const spans = (e.target).classList

        const lists = document.getElementsByClassName('data')
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.add('d-none')
        }
        const table = document.getElementsByClassName('funneltable')
        for (let i = 0; i < table.length; i++) {
            table[i].classList.add('d-none')
        }
        for (let i = 0; i < spans.length; i++) {
            if (['hide1', 'hide2', 'hide3', 'hide4'].includes(spans[i])) {
                const doc = document.getElementsByClassName(spans[i])
                for (let ind = 0; ind < doc.length; ind++) {
                    if (ind > 0) {
                        doc[ind].classList.remove('d-none')
                    }
                }
            }
        }
    }
    useEffect(() => {
        document.getElementsByClassName("hide1")[1].classList.remove('d-none')
        document.getElementsByClassName("hide1")[2].classList.remove('d-none')
    }, [])

    return (
        <>
            {res && (
                <div className="row rounded shadow">
                    {/* ---- Funnel Start Here ---- */}
                    <div className="d-flex justify-content-center align-items-center flex-column col-lg-5 col-sm-12 p-0 py-1">
                        <div onClick={handleChange} className="taper rectangle01" data-toggle="tooltip" data-placement="top" title="Total Number Of Users" style={{ borderColor: "#FFC313 transparent", width: "360px" }}>
                            <p data-id={"1"} className="hide1 funnelPara text-center text-white">TOFU</p>
                        </div>
                        <div className="rectangle02 h-none" style={{ width: 290 }} />
                        <div onClick={handleChange} className="taper rectangle03" data-toggle="tooltip" data-placement="top" title="User Engagement Behaviour (Number Of Users)" style={{ borderColor: "#4076DA transparent", width: "300px" }}>
                            <p data-id={"2"} className="hide2 funnelPara text-center text-white">MOFU</p>
                        </div>
                        <div className="rectangle04 h-none" style={{ width: 235 }} />
                        <div onClick={handleChange} className="taper rectangle05" style={{ borderColor: "#4acade transparent", width: "240px" }} >
                            <p data-id={"3"} className="hide3 funnelPara text-center text-white">BOFU</p>
                        </div>
                        <div className="rectangle06 h-none" style={{ width: 175 }} />
                        <div onClick={handleChange} className="taper rectangle07" style={{ borderColor: "#27CA75 transparent", width: "180px" }} >
                            <p data-id={"4"} className="hide4 funnelPara text-center text-white">Conversion</p>
                        </div>
                    </div>{" "}
                    {/* ---- Funnel End Here ---- */}

                    {/* ---- Funnel's Detail Start Here ---- */}
                    <div className="d-flex flex-row col-lg-7 col-sm-12 p-1" style={{ minHeight: 350 }}>
                        {/* ---- ToFu Funnel-Detail Start Here ---- */}
                        <div className="content-FFC313 hide1 w-100 d-none data" style={{ height: 250 }}>
                            <div className="d-none d-lg-block w-25 position-relative border-top-warning" style={{ marginLeft: "-182px", top: 30, height: 0, zIndex: "-1000" }} />
                            <div className="w-100">
                                <div className="w-100 align-items-center flex-column">
                                    <p className="m-0 border-left-warning border-top-warning lh-sm" style={{ padding: 6 }}><strong>ToFu - </strong>Marketing outreach via omni-channels where brands can interact with target audiences. Goals are to increase awareness, build trust and bring users to relevant content assets.</p>
                                    <p className="border-left-warning m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Last 7 day data</p>
                                </div>
                                <PerfectScrollbar className="w-100 border-left-warning">
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Number Of People Reached" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-warning" />
                                            <p className="fw-bold text-warning m-0">Reach –</p>
                                        </div>
                                        <div className="ml-3">
                                            <p>
                                                <b>{res?.Tofu?.Reach?.toLocaleString()}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number Of Unique People" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-warning" />
                                            <p className="fw-bold text-warning m-0">Unique Reach –</p>
                                        </div>
                                        <div className="ml-3">
                                            <p>
                                                <b>{res?.Tofu?.Unique_Reach?.toLocaleString()}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Sum Of Total Spends" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-warning" />
                                            <p className="fw-bold text-warning m-0">Spends ($) –</p>
                                        </div>
                                        <div className="ml-3">
                                            <p>
                                                <b>{res?.Tofu?.Spends?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number of Sessions" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-warning" />
                                            <p className="fw-bold text-warning m-0">Session –</p>
                                        </div>
                                        <div className="ml-3">
                                            <p>
                                                <b>{res?.Tofu?.Session?.toLocaleString()}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number of Clicks / Total Number Of Impression" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward
                                                size={32}
                                                className="text-warning"
                                            />
                                            <p className="fw-bold text-warning m-0">CTR % –</p>
                                        </div>
                                        <div className="ml-3">
                                            <p>
                                                <b>{res?.Tofu?.CTR?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Post Clicks ( M/F) – Post click on Gender, Age data to show up" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-warning" />
                                            <p className="fw-bold text-warning m-0">Demographics –</p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Tofu?.Demographics &&
                                                res?.Tofu?.Demographics.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val.Gender}>
                                                                {val?.Gender?.charAt(0).toUpperCase() + val?.Gender?.slice(1)}{" "}
                                                                <b>: {val.Sessions?.toLocaleString()}</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </div>
                        {/* ---- ToFu Funnel-Detail End Here ---- */}

                        {/* ---- MoFu Funnel-Detail Start Here ---- */}
                        <div className="content-4076DA hide2 w-100 d-none data" style={{ height: 250 }}>
                            <div className="d-none d-lg-block w-25 position-relative border-top-primary" style={{ marginLeft: "-185px", top: 120, height: 0, zIndex: "-1000" }} />
                            <div className="w-100">
                                <div className="w-100 align-items-center flex-column">
                                    <p className="m-0 border-left-primary border-top-primary lh-sm" style={{ padding: 6 }}><strong>MoFu - </strong>User engage with brand across multiple content assets. Goals are to map audience engagement analytics, understand who they are, and their behavioural patterns.</p>
                                    <p className="border-left-primary m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Last 7 day data</p>
                                </div>
                                <PerfectScrollbar className="w-100 border-left-primary">
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-primary" />
                                            <p className="fw-bold text-primary m-0">
                                                Product Preference –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Mofu?.product_Preference &&
                                                res?.Mofu?.product_Preference.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val.product_name}>
                                                                {val.product_name}{" "}
                                                                <b>: {val.visitors_count.toLocaleString()}</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Count Of Product pages visited / Number Of Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-primary" />
                                            <p className="fw-bold text-primary m-0">
                                                Product Engagement –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Mofu?.product_Engagement &&
                                                res?.Mofu?.product_Engagement.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val.product_name}>
                                                                {val.product_name}{" "}
                                                                <b>: {val.Engagement?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Device OS % (IOS, Android, Windows & Others)" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-primary" />
                                            <p className="fw-bold text-primary m-0">OS Preference – </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Mofu?.os_Preference &&
                                                res?.Mofu?.os_Preference.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val.OS}>
                                                                {val.OS} <b>: {val.percentage?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} %</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number of page views / Number of sessions" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-primary" />
                                            <p className="fw-bold text-primary m-0">
                                                Avg. Pages per session –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>
                                                    {res?.Mofu?.avg_pages_per_session?.toLocaleString()}
                                                </b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Website Duration / Total Number of Sessions" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-primary" />
                                            <p className="fw-bold text-primary m-0">
                                                Avg. Time Per Session (in secs) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Mofu?.avg_time_per_session?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </div>
                        {/* ---- MoFu Funnel-Detail End Here ---- */}

                        {/* ---- BoFu Funnel-Detail Start Here ---- */}
                        <div className="content-29A4F7 hide3 w-100 p-0 m-0 d-none data" style={{ height: 250 }} >
                            <div className="d-none d-lg-block w-25 position-relative border-top-secondary" style={{ marginLeft: "-187px", top: 215, height: 0, zIndex: "-1000" }} />
                            <div className="w-100">
                                <div className="w-100 align-items-center flex-column">
                                    <p className="m-0 border-left-secondary border-top-secondary lh-sm" style={{ padding: 6 }}><strong>BoFu - </strong>Users show intent towards continued brand engagement. Goals are to track captured leads or e-cart creation. This stage also helps identify effective conversion focused retargeting.</p>
                                    <p className="border-left-secondary m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Last 7 day data</p>
                                </div>
                                <PerfectScrollbar className=" w-100 p-0 border-left-secondary">
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number of users who have created a cart" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary" />
                                            <p className="fw-bold m-0 text-secondary">Add To Cart – </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.add_to_cart?.toLocaleString()}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number of Users who have initiated checkout" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Initiate Checkout –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.initiate_checkout?.toLocaleString()}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total value of orders added to cart. " >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Checkout Value ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.checkout_value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Checkout value / total spends" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Cost per Lead ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.cost_per_lead?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Leads or Carts created / Visitors * 100" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Visitor to Cart Conversion Rate % –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <strong>
                                                    {res?.Bofu?.visitor_to_cart_conversion_rate?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                                                </strong>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Number of abandoned carts" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Abandoned Cart –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.abandoned_cart}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total sum of revenue abandoned" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Abandoned Cart Value ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.abandoned_cart_value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Cart Value for Returning/ No. of Returning Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                Returning Users Cart Value ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.returning_users_cart_value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Cart Value for New Visitors/ No. of New Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                            <p className="fw-bold m-0 text-secondary">
                                                New Users Cart Value ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Bofu?.new_users_cart_value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-secondary" />
                                            <p className="fw-bold text-secondary m-0">
                                                Source –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Bofu?.soure &&
                                                res?.Bofu?.soure.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val?.source}>
                                                                {val?.source === "" ? 'Organic' : val?.source?.charAt(0).toUpperCase() + val?.source?.slice(1)}{" "}
                                                                <b>: {val.count.toLocaleString()}</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </div>
                        {/* ---- BoFu Funnel-Detail End Here ---- */}

                        {/* ---- Conversion Funnel-Detail Start Here ---- */}
                        <div className="content-27CA75 hide4 w-100 d-none data" style={{ height: 250 }}>
                            <div
                                className="d-none d-lg-block w-25 position-relative border-top-success"
                                style={{ marginLeft: "-190px", top: 300, height: 0, zIndex: "-1000" }} />
                            <div className="w-100">
                                <div className="w-100 align-items-center flex-column">
                                    <p className="m-0 border-left-success border-top-success lh-sm" style={{ padding: 6 }}><strong>Conversion - </strong>Comprehensive omni-channel strategy leads to effective customer acquisition. Goals are to map CRM sales data with marketing funnel and build a comprehensive picture of ROAS across channels.</p>
                                    <p className="border-left-success m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Last 7 day data</p>
                                </div>
                                <PerfectScrollbar className="w-100 p-0 border-left-success">
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Number of Sales" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                            <p className="fw-bold text-success m-0">Conversions – </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Conversion?.conversions}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Revenue" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                            <p className="fw-bold text-success m-0">Revenue ($) – </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Conversion?.revenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Spends / Number Of Sales" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                            <p className="fw-bold text-success m-0">
                                                Cost Per Conversion ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Conversion?.cost_per_conversion?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Revenue / Total Spends" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                            <p className="fw-bold text-success m-0">ROAS – </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Conversion?.roas?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Total Revenue / Number Of Sales " >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                            <p className="fw-bold text-success m-0">
                                                Avg. Order Value ($) –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            <p className="m-0 ml-2">
                                                {" "}
                                                <b>{res?.Conversion?.avg_order_value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success" />
                                            <p className="fw-bold text-success m-0">
                                                Source –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Conversion?.soure &&
                                                res?.Conversion?.soure.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val?.source}>
                                                                {val?.source === "" ? 'Organic' : val?.source?.charAt(0).toUpperCase() + val?.source?.slice(1)}{" "}
                                                                <b>: {val.sum.toLocaleString()}</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    <div className="d-block" data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors" >
                                        <div className="d-flex align-items-center p-0 m-0">
                                            <IoIosArrowRoundForward size={32} className="text-success" />
                                            <p className="fw-bold text-success m-0">
                                                OS –{" "}
                                            </p>
                                        </div>
                                        <div className="ml-1 mb-1">
                                            {res?.Conversion?.os_counts &&
                                                res?.Conversion?.os_counts.map((val) => {
                                                    return (
                                                        <>
                                                            <li className="m-0" key={val?.source}>
                                                                {val?.source === "" ? 'Organic' : val?.source}{" "}
                                                                <b>: {val.sum.toLocaleString()}</b>
                                                            </li>
                                                        </>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </div>
                        {/* ---- Conversion Funnel-Detail End Here ---- */}
                    </div>
                    {/* ---- Funnel's Detail Start Here ---- */}

                    <Row className="match-height">
                        <hr />
                        <Col xs="12">
                            <Table data={table} selectedCategory={category} />
                        </Col>
                    </Row>
                </div>
            )}
        </>
    )
}
