import React, { useEffect, useRef, useState } from "react"
import { IoIosArrowRoundForward, IoIosArrowForward } from "react-icons/io"
import PerfectScrollbar from "react-perfect-scrollbar"
import "./Funnel.css"
import { rectangle } from "leaflet"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import Table from "./Table"
import moment from "moment"

export default function Funnel({ res, table, refreshfunction }) {
    function loadMore() {
        console.log("loadMOre")
        refreshfunction()
    }
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
        <Card>
            {res && (
                <>
                    <CardBody>
                        <Row className="row">
                            {/* ---- Funnel Start Here ---- */}
                            <Col xl='5' lg='6' sm='12' className="d-flex justify-content-center align-items-center flex-column p-0 py-1">
                                <div onClick={handleChange} className="taper rectangle01" data-toggle="tooltip" data-placement="top" title="Total Number Of Users" style={{ borderColor: "#FFC313 transparent", width: "360px", zIndex: '1000' }}>
                                    <h6 data-id={"1"} className="hide1 funnelPara text-center text-white">TOFU</h6>
                                </div>
                                <div className="rectangle02 h-none" style={{ width: 290 }} />
                                <div onClick={handleChange} className="taper rectangle03" data-toggle="tooltip" data-placement="top" title="User Engagement Behaviour (Number Of Users)" style={{ borderColor: "#4076DA transparent", width: "300px", zIndex: '1000' }}>
                                    <h6 data-id={"2"} className="hide2 funnelPara text-center text-white">MOFU</h6>
                                </div>
                                <div className="rectangle04 h-none" style={{ width: 235 }} />
                                <div onClick={handleChange} className="taper rectangle05" style={{ borderColor: "#4acade transparent", width: "240px", zIndex: '1000' }} >
                                    <h6 data-id={"3"} className="hide3 funnelPara text-center text-white">BOFU</h6>
                                </div>
                                <div className="rectangle06 h-none" style={{ width: 175 }} />
                                <div onClick={handleChange} className="taper rectangle07" style={{ borderColor: "#27CA75 transparent", width: "180px", zIndex: '1000' }} >
                                    <h6 data-id={"4"} className="hide4 funnelPara text-center text-white">Conversion</h6>
                                </div>
                            </Col>{" "}
                            {/* ---- Funnel End Here ---- */}

                            {/* ---- Funnel's Detail Start Here ---- */}
                            <Col xl='7' lg='6' sm='12' className="d-flex flex-row p-1" style={{ minHeight: 350 }}>
                                {/* ---- ToFu Funnel-Detail Start Here ---- */}
                                <div className="content-FFC313 hide1 w-100 d-none data" style={{ height: 250 }}>
                                    <div className="d-none d-lg-block w-25 position-relative border-top-warning" style={{ marginLeft: "-182px", top: 30, height: 0 }} />
                                    <div className="w-100">
                                        <div className="w-100 align-items-center flex-column">
                                            <p className="m-0 border-left-warning border-top-warning lh-sm" style={{ padding: 6 }}><strong>ToFu - </strong>Marketing outreach via omni-channels where brands can interact with target audiences. Goals are to increase awareness, build trust and bring users to relevant content assets.</p>
                                            <p className="border-left-warning m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Data From {`${moment(res?.Tofu?.startDate).format('DD-MMM-YYYY')} to ${moment(res?.Tofu?.endDate).format('DD-MMM-YYYY')}`}</p>
                                        </div>
                                        <PerfectScrollbar className="w-100 border-left-warning">
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-warning" />
                                                <p className="fw-bold text-warning m-0">Impressions</p>
                                            </div>
                                            <div className="ml-1">
                                                <p className="ml-2">
                                                    <strong data-toggle="tooltip" data-placement="top" title="Total Number Of People Reached" >{res?.Tofu?.impressions?.toLocaleString()}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-warning" />
                                                <p className="fw-bold text-warning m-0">Clicks</p>
                                            </div>
                                            <div className="ml-1">
                                                <p className="ml-2">
                                                    <strong data-toggle="tooltip" data-placement="top" title="Total Number Of People Reached" >{res?.Tofu?.clicks?.toLocaleString()}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-warning" />
                                                <p className="fw-bold text-warning m-0">Spends</p>
                                            </div>
                                            <div className="ml-1">
                                                <p className="ml-2">
                                                    <strong data-toggle="tooltip" data-placement="top" title="Sum Of Total Spends" >{res?.Tofu?.spends?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-warning" />
                                                <p className="fw-bold text-warning m-0">CTR %</p>
                                            </div>
                                            <div className="ml-1">
                                                <p className="ml-2">
                                                    <strong data-toggle="tooltip" data-placement="top" title="Number of Clicks / Total Number Of Impression">{res?.Tofu?.ctr?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-warning" />
                                                <p className="fw-bold text-warning m-0">Demographics Age</p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                {res?.Tofu?.age &&
                                                    res?.Tofu?.age.map((val) => {
                                                        return (
                                                            <>
                                                                <li className="m-0" key={val?.Gender}>
                                                                    <span data-toggle="tooltip" data-placement="top" title="Post Clicks ( M/F) – Post click on Gender, Age data to show up">{val?.Age} <strong>: {val?.Total_Clicks?.toLocaleString()}</strong></span>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-warning" />
                                                <p className="fw-bold text-warning m-0">Demographics Gender</p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                {res?.Tofu?.gender &&
                                                    res?.Tofu?.gender.map((val) => {
                                                        return (
                                                            <>
                                                                <li className="m-0" key={val.Gender}>
                                                                    <span data-toggle="tooltip" data-placement="top" title="Post Clicks ( M/F) – Post click on Gender, Age data to show up"> {val.Gender} <strong>: {val?.Total_Clicks?.toLocaleString()}</strong></span>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                            </div>
                                        </PerfectScrollbar>
                                    </div>
                                </div>
                                {/* ---- ToFu Funnel-Detail End Here ---- */}

                                {/* ---- MoFu Funnel-Detail Start Here ---- */}
                                <div className="content-4076DA hide2 w-100 d-none data" style={{ height: 250 }}>
                                    <div className="d-none d-lg-block w-25 position-relative border-top-primary" style={{ marginLeft: "-182px", top: 120, height: 0 }} />
                                    <div className="w-100">
                                        <div className="w-100 align-items-center flex-column">
                                            <p className="m-0 border-left-primary border-top-primary lh-sm" style={{ padding: 6 }}><strong>MoFu - </strong>User engage with brand across multiple content assets. Goals are to map audience engagement analytics, understand who they are, and their behavioural patterns.</p>
                                            <p className="border-left-primary m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Data From {`${moment(res?.Mofu?.startDate).format('DD-MMM-YYYY')} to ${moment(res?.Mofu?.endDate).format('DD-MMM-YYYY')}`}</p>
                                        </div>
                                        <PerfectScrollbar className="w-100 border-left-primary">
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Users{" "}
                                                </p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                <p className="m-0 ml-2">
                                                    {" "}
                                                    <strong data-toggle="tooltip" data-placement="top" title="Total Website Duration / Total Number of Sessions">{res?.Mofu?.user?.toLocaleString() || 0}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Sessions{" "}
                                                </p>
                                            </div>
                                            <div className="ml-1">
                                                <p className="ml-2">
                                                    <strong data-toggle="tooltip" data-placement="top" title="Total Website Duration / Total Number of Sessions">{res?.Mofu?.sessions?.toLocaleString() || 0}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Product Preference{" "}
                                                </p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                {res?.Mofu?.product_info &&
                                                    res?.Mofu?.product_info.map((val) => {
                                                        return (
                                                            <>
                                                                <li className="m-0" key={val.product_name}>
                                                                    <span data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors"> {val.title}{" "}
                                                                        <strong>: {val?.count?.toLocaleString()}</strong></span>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Product Engagement
                                                </p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                {res?.Mofu?.product_info &&
                                                    res?.Mofu?.product_info
                                                        .slice() // Create a shallow copy of the array
                                                        .sort((a, b) => b.average_time_diff - a.average_time_diff) // Sort in descending order
                                                        .map((val) => {
                                                            return (
                                                                <>
                                                                    <li className="m-0" key={val.product_name}>
                                                                        <span
                                                                            data-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="Count Of Product pages visited / Number Of Visitors"
                                                                        >
                                                                            {val.title}{" "}
                                                                            <strong>
                                                                                :{" "}
                                                                                {val.average_time_diff?.toLocaleString(undefined, {
                                                                                    minimumFractionDigits: 2,
                                                                                    maximumFractionDigits: 2
                                                                                })}
                                                                            </strong>
                                                                        </span>
                                                                    </li>
                                                                </>
                                                            )
                                                        })}
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Avg. Pages per session{" "}
                                                </p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                <p className="m-0 ml-2">
                                                    {" "}
                                                    <strong data-toggle="tooltip" data-placement="top" title="Number of page views / Number of sessions">
                                                        {res?.Mofu?.avg_pages_per_session?.toLocaleString()}
                                                    </strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Avg. Time Per Session (in secs){" "}
                                                </p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                <p className="m-0 ml-2">
                                                    {" "}
                                                    <strong data-toggle="tooltip" data-placement="top" title="Total Website Duration / Total Number of Sessions">{res?.Mofu?.avg_time_per_session?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">
                                                    Bounce Rate{" "}
                                                </p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                <p className="m-0 ml-2">
                                                    {" "}
                                                    <strong data-toggle="tooltip" data-placement="top" title="Total Website Duration / Total Number of Sessions">{res?.Mofu?.bounce_rate?.toFixed(2) || 0}%</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex align-items-center p-0 m-0">
                                                <IoIosArrowRoundForward size={32} className="text-primary" />
                                                <p className="fw-bold text-primary m-0">OS Preference</p>
                                            </div>
                                            <div className="ml-1 mb-1">
                                                {res?.Mofu?.os &&
                                                    res?.Mofu?.os.map((val) => {
                                                        return (
                                                            <>
                                                                <li className="m-0" key={val.OS}>
                                                                    <span data-toggle="tooltip" data-placement="top" title="Device OS % (IOS, Android, Windows & Others)">{val?.source === "" ? 'Organic' : val?.OS}{" "}
                                                                        <strong>: {val?.Percentage?.toLocaleString()}% </strong></span>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                            </div>
                                        </PerfectScrollbar>
                                    </div>
                                </div>
                                {/* ---- MoFu Funnel-Detail End Here ---- */}

                                {/* ---- BoFu Funnel-Detail Start Here ---- */}
                                <div className="content-29A4F7 hide3 w-100 p-0 m-0 d-none data" style={{ height: 250 }} >
                                    <div className="d-none d-lg-block w-25 position-relative border-top-secondary" style={{ marginLeft: "-187px", top: 215, height: 0 }} />
                                    <div className="w-100">
                                        <div className="w-100 align-items-center flex-column">
                                            <p className="m-0 border-left-secondary border-top-secondary lh-sm" style={{ padding: 6 }}><strong>BoFu - </strong>Users show intent towards continued brand engagement. Goals are to track captured leads or e-cart creation. This stage also helps identify effective conversion focused retargeting.</p>
                                            <p className="border-left-secondary m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Data From {`${moment(res?.Bofu?.startDate).format('DD-MMM-YYYY')} to ${moment(res?.Bofu?.endDate).format('DD-MMM-YYYY')}`}</p>
                                        </div>
                                        <PerfectScrollbar className=" w-100 p-0 border-left-secondary">
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary" />
                                                    <p className="fw-bold m-0 text-secondary">Add To Cart</p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        <span data-toggle="tooltip" data-placement="top" title="Number of Users who have initiated checkout">
                                                            User <strong>: {res?.Bofu?.add_to_cart?.toLocaleString()}</strong>
                                                            <br />
                                                            Value <strong>: {res?.Bofu?.crat_value?.toLocaleString()}</strong>
                                                        </span>

                                                        {/* {" "}
                                                        <strong data-toggle="tooltip" data-placement="top" title="Number of users who have created a cart">{res?.Bofu?.add_to_cart?.toLocaleString()}</strong> */}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary" />
                                                    <p className="fw-bold m-0 text-secondary">
                                                        Initiate Checkout{" "}
                                                    </p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <span data-toggle="tooltip" data-placement="top" title="Number of Users who have initiated checkout">
                                                            User <strong>: {res?.Bofu?.initiate_checkout?.count?.toLocaleString()}</strong>
                                                            <br />
                                                            Value <strong>: {res?.Bofu?.initiate_checkout?.value?.toLocaleString()}</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                                    <p className="fw-bold m-0 text-secondary">
                                                        Users to Cart Conversion Creation %
                                                    </p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <strong data-toggle="tooltip" data-placement="top" title="Total value of orders added to cart.">{res?.Bofu?.user_to_cart_conversion_rate?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                                    <p className="fw-bold m-0 text-secondary">
                                                        Abandoned Checkout
                                                    </p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <span data-toggle="tooltip" data-placement="top" title="Total Checkout value / total spends">
                                                            User <strong>: {res?.Bofu?.abandoned_cart?.count?.toLocaleString()}</strong>
                                                            <br />
                                                            Value <strong>: {res?.Bofu?.abandoned_cart?.value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                                    <p className="fw-bold m-0 text-secondary">
                                                        Returning Users Cart Value
                                                    </p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <span data-toggle="tooltip" data-placement="top" title="Leads or Carts created / Visitors * 100">
                                                            User <strong>: {res?.Bofu?.returning_users_cart_value?.count?.toLocaleString()}</strong>
                                                            <br />
                                                            Avg. Value <strong>: {res?.Bofu?.returning_users_cart_value?.value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary p-0 m-0" />
                                                    <p className="fw-bold m-0 text-secondary">
                                                        New Users Cart Value
                                                    </p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <span data-toggle="tooltip" data-placement="top" title="Number of abandoned carts">
                                                            Users <strong>: {res?.Bofu?.new_users_cart_value?.count?.toLocaleString()} </strong>
                                                            <br />
                                                            Avg Value <strong>: {res?.Bofu?.new_users_cart_value?.avg?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </span>

                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-secondary" />
                                                    <p className="fw-bold text-secondary m-0">
                                                        Source{" "}
                                                    </p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    {res?.Bofu?.soure &&
                                                        res?.Bofu?.soure.map((val) => {
                                                            return (
                                                                <>
                                                                    <li className="m-0" key={val?.source}>
                                                                        <span data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors">
                                                                            {val?.source === "" ? 'Organic' : val?.source?.charAt(0).toUpperCase() + val?.source?.slice(1)}{" "}
                                                                            <strong>: {val.count.toLocaleString()}</strong>
                                                                        </span>
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
                                        style={{ marginLeft: "-190px", top: 300, height: 0 }} />
                                    <div className="w-100">
                                        <div className="w-100 align-items-center flex-column">
                                            <p className="m-0 border-left-success border-top-success lh-sm" style={{ padding: 6 }}><strong>Conversion - </strong>Comprehensive omni-channel strategy leads to effective customer acquisition. Goals are to map CRM sales data with marketing funnel and build a comprehensive picture of ROAS across channels.</p>
                                            <p className="border-left-success m-0" style={{ paddingLeft: 5, paddingTop: 4 }}>Data From {`${moment(res?.Tofu?.startDate).format('DD-MMM-YYYY')} to ${moment(res?.Tofu?.endDate).format('DD-MMM-YYYY')}`}</p>
                                        </div>
                                        <PerfectScrollbar className="w-100 p-0 border-left-success">
                                            <div className="d-block" >
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                    <p className="fw-bold text-success m-0">Conversions</p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <strong data-toggle="tooltip" data-placement="top" title="Total Number of Sales">{res?.Conversion?.conversions_revenue?.conversions?.toLocaleString()}</strong>
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                    <p className="fw-bold text-success m-0">Revenue</p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <strong data-toggle="tooltip" data-placement="top" title="">{res?.Conversion?.conversions_revenue?.revenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center p-0 m-0">
                                                    <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                    <p className="fw-bold text-success m-0">Cart to conversion user %</p>
                                                </div>
                                                <div className="ml-1 mb-1">
                                                    <p className="m-0 ml-2">
                                                        {" "}
                                                        <strong data-toggle="tooltip" data-placement="top" title="">{''}</strong>
                                                    </p>
                                                </div>
                                                <div className="d-block" >
                                                    <div className="d-flex align-items-center p-0 m-0">
                                                        <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                        <p className="fw-bold text-success m-0">
                                                            Customer Aquisition Cost (CAC){" "}
                                                        </p>
                                                    </div>
                                                    <div className="ml-1 mb-1">
                                                        <p className="m-0 ml-2">
                                                            {" "}
                                                            <strong data-toggle="tooltip" data-placement="top" title="Total Spends / Number Of Sales">{res?.Conversion?.cac?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-block" >
                                                    <div className="d-flex align-items-center p-0 m-0">
                                                        <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                        <p className="fw-bold text-success m-0">
                                                            Avg. Order Value ($)
                                                        </p>
                                                    </div>
                                                    <div className="ml-1 mb-1">
                                                        <p className="m-0 ml-2">
                                                            {" "}
                                                            <strong data-toggle="tooltip" data-placement="top" title="Total Revenue / Number Of Sales ">{res?.Conversion?.avg_order_value?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-block" >
                                                    <div className="d-flex align-items-center p-0 m-0">
                                                        <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                        <p className="fw-bold text-success m-0">Return on Ad Spends (ROAS)</p>
                                                    </div>
                                                    <div className="ml-1 mb-1">
                                                        <p className="m-0 ml-2">
                                                            {" "}
                                                            <strong data-toggle="tooltip" data-placement="top" title="Total Revenue / Total Spends">{res?.Conversion?.roas?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* <div className="d-block" >
                                                    <div className="d-flex align-items-center p-0 m-0">
                                                        <IoIosArrowRoundForward size={32} className="text-success p-0 m-0" />
                                                        <p className="fw-bold text-success m-0">ROAS by Paid Source</p>
                                                    </div>
                                                    <div className="ml-1 mb-1">
                                                        <p className="m-0 ml-2">
                                                            {" "}
                                                            <strong data-toggle="tooltip" data-placement="top" title="Total Revenue / Total Spends">{res?.Conversion?.roas_by_source?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
                                                        </p>
                                                    </div>
                                                </div> */}

                                                <div className="d-block" >
                                                    <div className="d-flex align-items-center p-0 m-0">
                                                        <IoIosArrowRoundForward size={32} className="text-success" />
                                                        <p className="fw-bold text-success m-0">
                                                            Sales By Source (based on last click attribution)
                                                        </p>
                                                    </div>
                                                    <div className="ml-1 mb-1">
                                                        {res?.Conversion?.sales_by_source &&
                                                            res?.Conversion?.sales_by_source.map((val) => {
                                                                return (
                                                                    <>
                                                                        <li className="m-0" key={val?.source}>
                                                                            <span data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors">
                                                                                {val?.source === '' ? 'Organic' : val?.source.charAt(0).toUpperCase() + val?.source.slice(1)} <strong>: {val?.count?.toLocaleString() || 0}  | {val?.total_price?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</strong>
                                                                            </span>
                                                                        </li>
                                                                    </>
                                                                )
                                                            })}
                                                    </div>
                                                </div>
                                                <div className="d-block" >
                                                    <div className="d-flex align-items-center p-0 m-0">
                                                        <IoIosArrowRoundForward size={32} className="text-success" />
                                                        <p className="fw-bold text-success m-0">
                                                            Sales By OS (based on last click attribution)
                                                        </p>
                                                    </div>
                                                    <div className="ml-1 mb-1">
                                                        {res?.Conversion?.os_counts &&
                                                            res?.Conversion?.os_counts.map((val) => {
                                                                return (
                                                                    <>
                                                                        <li className="m-0" key={val?.OS}>
                                                                            <span data-toggle="tooltip" data-placement="top" title="Rank or Top 5 Products by Total Visitors">
                                                                                {val?.OS}{" "}
                                                                                <strong>: {val?.Count?.toLocaleString()} | {val?.Sum_of_Prices?.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })}</strong>
                                                                            </span>
                                                                        </li>
                                                                    </>
                                                                )
                                                            })}
                                                    </div>
                                                </div>
                                            </div>
                                        </PerfectScrollbar>
                                    </div>
                                </div>
                                {/* ---- Conversion Funnel-Detail End Here ---- */}
                            </Col>
                            {/* ---- Funnel's Detail Start Here ---- */}
                        </Row>
                    </CardBody>
                    <hr />
                    {/* ---- Table Data Start Here ---- */}
                    <Row className="match-height">
                        <Col xs="12">
                            <Table data={table} selectedCategory={category} loadMore={loadMore} />
                        </Col>
                    </Row>
                    {/* ---- Table Data Start Here ---- */}
                </>
            )}
        </Card>
    )
}
