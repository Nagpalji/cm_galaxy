import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap"
import { Formik } from 'formik'

// Welcome to Css
import "@styles/react/libs/lpcss/css/bootstrap.min.css"
import "@styles/react/libs/lpcss/css/animate.css"
import "@styles/react/libs/lpcss/css/magnific-popup/magnific-popup.css"
import "@styles/react/libs/lpcss/css/spacing.css"
import "@styles/react/libs/lpcss/css/base.css"
import "@styles/react/libs/lpcss/css/shortcodes.css"
import "@styles/react/libs/lpcss/css/style.css"
import "@styles/react/libs/lpcss/css/responsive.css"
import "@styles/react/libs/lpcss/css/theme-color/color-4.css"
import "@styles/react/libs/lpcss/css/color-customize/color-customizer.css"

// Welcome to Java Script
// // import '@script/react/libs/lpcss/js/owl-carousel/owl.carousel.js'
// import "@styles/react/libs/lpcss/js/owl-carousel/owl.carousel.min.js"
// import * as OwlCarousel from 'react/libs/lpcss/js/owl-carousel/owl.carousel.js'
// import {Owlcarousel} from './Signin.jsx'
import CountUp from "react-countup"
import OwlCarousel from "react-owl-carousel"
import "@styles/react/libs/swiper/swiper.scss"
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from "swiper"
SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
])

const optionsservices = {
  loop: true,
  responsiveClass: true,
  margin: 10,
  items: 3,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5500,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 2
    },
    750: {
      items: 3
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
}
const optionsclients = {
  loop: true,
  margin: 10,
  dots: true,
  items: 5,
  margin: 30,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    300: {
      items: 2
    },
    400: {
      items: 2
    },
    768: {
      items: 4
    },
    999: {
      items: 5
    }
  }
}
const optionstestimonial = {
  loop: true,
  margin: 10,
  items: 2,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 5500,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 2
    },
    768: {
      items: 2
    }
  }
}
// const submit = (e) => {
//   e.preventDefault()
//   const fisrtname = document.getElementById('fname').value
//   const lastname = document.getElementById('lname').value
//   const businessemail = document.getElementById('email').value
//   const phonenumber = document.getElementById('phone').value
//   const lname = '&lname='
//   const bemail = '&email='
//   const phone = '&number='
//   const api = 'https://srvr1px.cyberads.io/landingpageleadform/?fname='
//   fetch(api + fisrtname + lname + lastname + bemail + businessemail + phone + phonenumber,
//     {
//       method: 'GET'

//     }).then(res => res.json())
//     .then(
//       (result) => {


//         if (result.status === 200) {
//           //alert("Recovery link is send on email.")
//           alert("Request submitted successfully!")

//         } else {
//           alert(result.status)
//         }

//       },
//       (error) => {
//         //setError({ error })
//       }
//     )

// }

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        {/* preloader start */}
        {/* <div id="ht-preloader">
          <div className="clear-loader">
            <div className="loader">
              <div className="loader-div"><span /><img src="assets/images/CMLogo.png" alt />
              </div>
            </div>
          </div>
        </div> */}
        {/* preloader end */}
        {/*header start*/}
        <header id="site-header" className="header header-3">
          <div id="header-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Navbar */}
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand logo" href="/index">
                      <img
                        id="logo-img"
                        className="img-fluid"
                        src="assets/images/logo.png"
                        alt
                      />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      {" "}
                      <span />
                      <span />
                      <span />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul
                        className="navbar-nav mx-auto"
                        style={{ "font-size": "18px!important" }}
                      >
                        {/* Home */}
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link active" href="#about">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="#product">
                            Product
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="#services">
                            Services
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a className="nav-link" href="#contactus">
                            Contact Us
                          </a>
                        </li>
                        <li className="nav-item desktop-none">
                          {" "}
                          <a className="nav-link" href="/login">
                            Login
                          </a>
                        </li>
                        <li className="nav-item desktop-none">
                          {" "}
                          <a className="nav-link" href="#contactus">
                            Try Now
                          </a>
                        </li>
                      </ul>
                      {/* mobile try now button start */}
                      {/* <div className="desktop-none" style={{ "margin-left": "11px", "margin-top": "5px", "margin-bottom": "15px" }}>
                        <a className="btn btn-theme btn-sm" href="/login">
                          <span>Login</span>
                        </a>
                      </div>
                      <div className="desktop-none" style={{ "margin-left": "11px", "margin-top": "5px", "margin-bottom": "15px" }}>
                        <a className="btn btn-theme btn-sm" href="#contactus">
                          <span>Try Now</span>
                        </a>
                      </div> */}
                      {/* mobile try now button end */}
                    </div>
                    <div className="right-nav d-sm-block d-none">
                      <a className="btn btn-theme btn-sm" href="/login">
                        <span>Login</span>
                      </a>
                    </div>
                    <div
                      className="right-nav d-sm-block d-none"
                      style={{ "margin-left": "1rem", "margin-right": "1rem" }}
                    >
                      <a className="btn btn-theme btn-sm" href="#contactus">
                        <span>Try Now</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*header end*/}

        {/*hero section start*/}
        <section
          id="about"
          className="banner p-0 position-relative fullscreen-banner"
        >
          <div id="particles-js" />
          <div className="hero-shape6"></div>
          <div className="align-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 order-lg-1">
                  <img
                    className="img-fluide topBottom"
                    style={{ "margin-right": "20px" }}
                    src="assets/images/banner/07.png"
                    alt
                  />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                  <h2
                    className="mb-4 font-w-4 wow fadeInLeft"
                    data-wow-duration="1.5s"
                  >
                    CMGalaxy is <span className="font-w-7" id="spin" /> for
                    Business Startup
                  </h2>
                  <p
                    className="text-black lead mb-4 wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay="0.3s"
                  >
                    CMGalaxy leverages the benefits of marketing automation to
                    provide clarity of Insight, Execution, Ease Customer
                    Delight. CMGalaxy is an AI/ML driven unified dashboard
                    solving for your performance marketing needs.
                  </p>{" "}
                  <a className="btn btn-theme btn-space" href="#contactus">
                    <span>Try Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="banner-wave">
            <div className="wave wave1" style={{}} />
            <div className="wave wave2" style={{}} />
          </div> */}
        </section>
        {/*hero section end*/}

        {/*body content start*/}
        <div className="page-content">
          {/*counter start*/}
          <section className="pt-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-sm-0">
                  <div className="counter style-4">
                    <div className="counter-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/counter1.png"
                        height={"60px"}
                        width={"60px"}
                        alt
                      />
                    </div>
                    <div className="counter-desc mt-3">
                      <CountUp end={9154} duration={50} />
                      <strong style={{ "font-size": "24px", color: "#322f55" }}>
                        {"+"}
                      </strong>
                      <p className="text-black">Campaigns Managed</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-sm-0">
                  <div className="counter style-4">
                    <div className="counter-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/counter2.png"
                        height={"50px"}
                        width={"50px"}
                        alt
                      />
                    </div>
                    <div className="counter-desc mt-3">
                      <CountUp end={82} duration={30} />
                      <strong style={{ "font-size": "24px", color: "#322f55" }}>
                        {"+"}
                      </strong>
                      <p className="text-black">Enterprise Users</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
                  <div className="counter style-4">
                    <div className="counter-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/counter3.png"
                        height={"50px"}
                        width={"50px"}
                        alt
                      />
                    </div>
                    <div className="counter-desc mt-3">
                      <CountUp end={61} duration={50} />
                      <strong style={{ "font-size": "24px", color: "#322f55" }}>
                        {"+"}
                      </strong>
                      <p className="text-black">Agency Users</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-lg-0">
                  <div className="counter style-4">
                    <div className="counter-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/counter4.png"
                        height={"60px"}
                        width={"60px"}
                        alt
                      />
                    </div>
                    <div className="counter-desc mt-3">
                      <CountUp end={253590} duration={50} />
                      <strong style={{ "font-size": "24px", color: "#322f55" }}>
                        {"+"}
                      </strong>
                      <p className="text-black">Leads Generated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*counter end*/}
          {/*About Company start*/}
          <section id="company" style={{ "margin-top": "-50px" }}>
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-12 position-relative"
                  style={{ "padding-right": "30px" }}
                >
                  <img
                    className="img-fluide topBottom"
                    src="assets/images/about/25.png"
                    alt
                  />
                </div>
                <div className="col-lg-5 col-md-12 ms-auto">
                  <div className="section-title">
                    {/* <h3 className="title2" data-title="About Company" /> */}
                    <h2 className="title">
                      <span>CMGalaxy is the Super Platform</span>
                    </h2>
                    <div className="title-bdr">
                      <div className="left-bdr" />
                      <div className="right-bdr" />
                    </div>
                    <p
                      className="text-black"
                      style={{
                        "-webkit-text-align": "left",
                        "text-align": "left"
                      }}
                    >
                      Bring all your Campaigns on the Same Dashboard with the
                      Power of AI/ML. CMGalaxy brings in clarity by integrating
                      scattered stand alone campaigns. Which allows you to focus
                      and supercharge your efforts to achieve your Core Campaign
                      objective with the horsepower of marketing automation at
                      Core.
                    </p>
                    <a className="btn btn-theme mt-5" href="#contactus">
                      <span>Try Now</span>
                    </a>
                  </div>
                  {/* <ul className="list-unstyled list-icon">
                    <p
                      className="text-black"
                      style={{
                        "-webkit-text-align": "left",
                        "text-align": "left"
                      }}
                    >
                      Explore more CTAs
                    </p>
                    <li className="mb-3 text-black">
                      <i className="fas fa-check-circle" /> Save time. Add
                      Horsepower to your Marketing
                    </li>
                    <li className="text-black">
                      <i className="fas fa-check-circle" /> Add KWs -
                      automation, AI/ML, data integration, ease
                    </li>
                  </ul>
                  <a className="btn btn-white btn-circle mt-7" href="#">
                    <span>Try Now</span>
                  </a> */}
                </div>
              </div>
            </div>
            <div id="product"></div>
          </section>
        </div>
        {/*About Company end*/}
        {/*Our Product start*/}
        <div id="product">
          <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-12">
                  <div className="section-title">
                    <h2 className="title">
                      <span>Our </span>Product
                    </h2>
                    <div className="title-bdr">
                      <div className="left-bdr" />
                      <div className="right-bdr" />
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-12 mb-5">
                  <div className="featured-item style-2">
                    <div className="featured-icon mr-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/icon1.png"
                        height={"100px"}
                        width={"100px"}
                        alt
                      />
                    </div>
                    <div className="featured-title">
                      <h5>Easy to get Started</h5>
                      <br></br>
                    </div>
                    <div className="featured-desc">
                      <p>
                        It’s easy - API integrated, powered data, omni-channel tracking.Super easy to get started. Plug your data sources and we are Up
                      </p>{" "}
                      <br></br>
                      {/* <a className="btn-iconic mt-4" href="#">
                      <i className="la la-long-arrow-right" />
                    </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-5 mt-lg-0">
                  <div className="featured-item style-2">
                    <div className="featured-icon mr-5">
                      <img
                        className="img-fluid"
                        src="assets/images/client/icon2.png"
                        height={"100px"}
                        width={"100px"}
                        alt
                      />
                    </div>
                    <div className="featured-title">
                      <h5>The Only Dashboard you need</h5>
                      <br></br>
                    </div>
                    <div className="featured-desc">
                      <p>
                        CMGalaxy is at the core of all marketing and keeps track of your Campaign Success, in one single window
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-5 mt-lg-0">
                  <div className="featured-item style-2">
                    <div className="featured-icon mr-5">
                      <img
                        className="img-fluid"
                        src="assets/images/client/icon3.png"
                        height={"100px"}
                        width={"100px"}
                        alt
                      />
                    </div>
                    <div className="featured-title">
                      <h5>Omni-Channel Marketing Automation</h5>
                      <br></br>
                    </div>
                    <div className="featured-desc">
                      <p>
                        CMGalaxy seamlessly integrates multiple data sources, allowing you to make the right decision Now
                      </p>{" "}
                      <br></br>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="featured-item style-2">
                    <div className="featured-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/icon4.png"
                        height={"110px"}
                        width={"110px"}
                        alt
                      />
                    </div>
                    <div className="featured-title">
                      <h5>Personalization</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        Yes, it has the ability to adapt as per your customer needs across newsletter, Whatsapp, SMS, and more
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="featured-item style-2">
                    <div className="featured-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/icon5.png"
                        height={"100px"}
                        width={"100px"}
                        alt
                      />
                    </div>
                    <div className="featured-title">
                      <h5>Multi Platform Insights</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        Get marketing intelligence at your fingertips. Save costs and save time! No more being ping-pong on multiple dashboards
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="featured-item style-2">
                    <div className="featured-icon">
                      <img
                        className="img-fluid"
                        src="assets/images/client/icon6.png"
                        height={"100px"}
                        width={"100px"}
                        alt
                      />
                    </div>
                    <div className="featured-title">
                      <h5>Empower your Data</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        Choose from pre-set notification that you want to receive and when you want to receive. Activate your marketing triggers
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="services"></div>
          </section>
        </div>
        {/*Our Product end*/}

        {/*services start*/}
        <div id="services" />
        <section id className="position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-12">
              {/* <div className="section-title">
                <h2 className="title">
                  <span>Great </span>Services
                </h2>
                <div className="title-bdr">
                  <div className="left-bdr" />
                  <div className="right-bdr" />
                </div>
                <br />
              </div> */}
            </div>
          </div>
          <div className="round-anim right" />
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 ps-lg-5">
                <div className="section-title">
                  <h2 className="title">
                    <span>CMGalaxy Provide </span>Great Services
                  </h2>
                  <div className="title-bdr">
                    <div className="left-bdr" />
                    <div className="right-bdr" />
                  </div>
                  <p className="text-black">
                    Great Services backed by Great Product to help you achieve your Marketing goals.
                  </p>
                </div>{" "}
                <a className="btn btn-theme mt-5" href="#contactus">
                  Try Now
                </a>
              </div>

              <div className="col-lg-8 col-md-12">
                <OwlCarousel
                  className="owl-theme"
                  {...optionsservices}
                >
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-google" />
                      </div>
                      <div className="featured-title">
                        <h5>Google Performance</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Keeping up with Multiple Campaigns on Google Ads, becomes a lot more simple and resourceful with easy integration on CMGalaxy Dashboard.
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-facebook" />
                      </div>
                      <div className="featured-title">
                        <h5>Facebook Performance</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Integrated Facebook tools to measure the performance of your Campaigns and improve your results for Present and future campaigns.
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-linkedin" />
                      </div>
                      <div className="featured-title">
                        <h5>Linkedin Performance</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Discover tips for measuring performance, gaining insights, and optimising your ads on Linkedin campaigns.
                        </p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-youtube" />
                      </div>
                      <div className="featured-title">
                        <h5>Youtube Performance</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          With Youtube dashboard, unlock reports to help understand the strengths and weaknesses of videos. Use these insights for new videos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-amazon" />
                      </div>
                      <div className="featured-title">
                        <h5>Amazon Performance</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          With Amazon, monitoring performance is essential to your success.Never miss an order.CMGalaxy helps you monitor your growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-user-plus" />
                      </div>
                      <div className="featured-title">
                        <h5>CRM Integration</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          We support all major CRM, Ask for Custom CRM integration to track your journey of revenue and effort from Campaigns to Customers.
                        </p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-play" />
                      </div>
                      <div className="featured-title">
                        <h5>DV360 Performance</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          DV360 is an essential tool today, Unlock the advance omni platform analytics to keep up the momentum of your campaigns.
                        </p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item style-4">
                      <div className="featured-icon">
                        {" "}
                        <i className="la la-filter" />
                      </div>
                      <div className="featured-title">
                        <h5>Lead Management</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          We all Strive for Leads, Keep up to date with Prompt triggers and multiplatform results analysis and you can plug-in your CRM.
                        </p>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
        {/*services end*/}
        {/*client start*/}
        <div></div>
        <section className="custom-pt-2 custom-mt-20 z-index-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h2 className="title">
                    <span>Our </span>Customers
                  </h2>
                  <div className="title-bdr">
                    <div className="left-bdr" />
                    <div className="right-bdr" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 mt-7 pl-35">
                <OwlCarousel {...optionsclients}>
                  {/* <div
                  className="owl-carousel no-pb"
                  data-dots="false"
                  data-items={5}
                  data-md-items={4}
                  data-sm-items={3}
                  data-margin={30}
                  data-autoplay="true"
                > */}
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/001.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/002.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/003.png"
                        height={"140px"}
                        width={"140px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/004.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/005.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/006.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/007.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/008.png"
                        height={"110px"}
                        width={"110px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/009.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/010.png"
                        height={"110px"}
                        width={"110px"}
                        alt
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo style-2">
                      <img
                        className="img-fluid"
                        src="assets/images/client/011.png"
                        height={"120px"}
                        width={"120px"}
                        alt
                      />
                    </div>
                  </div>
                </OwlCarousel>
                {/* </div> */}
                <div id="testimonial"></div>
              </div>
            </div>
          </div>
        </section>

        {/*client end*/}
        {/*testimonial start*/}
        {/* <section id className="position-relative">
          <div className="round-anim" />
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 order-lg-1">
                <div className="section-title mb-0">
                  <h2 className="title">
                    <span>Discover Our </span><br></br>Client Feedback
                  </h2>
                  <div className="title-bdr">
                    <div className="left-bdr" />
                    <div className="right-bdr" />
                  </div>
                  <p className="text-black">
                    We make our Clients Proud and make a positive difference in
                    their work.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
                <OwlCarousel
                  {...optionstestimonial} >
                  <div className="item">
                    <div className="testimonial style-3">
                      <div className="testimonial-caption">
                        <h5>Manish Purohit</h5>
                      </div>
                      <div className="testimonial-img">
                        <img
                          className="img-fluid"
                          src="assets/images/testimonial/Britannica.png"
                          height={"47px"}
                          width={"145px"}
                          alt
                        />
                      </div>
                      <div className="testimonial-content">
                        <p>
                        CyberMedia truly defined the word partner. They would take complete ownership of the project, which is sign of an ideal partner to have.
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial style-3">
                      <div className="testimonial-caption">
                        <h5>Vikram Jha</h5>
                      </div>
                      <div className="testimonial-img">
                        <img
                          className="img-fluid"
                          src="assets/images/testimonial/World Book.png"
                          height={"47px"}
                          width={"145px"}
                          alt
                        />
                      </div>
                      <div className="testimonial-content">
                        <p>
                          CyberMedia has been our technology partners for both
                          our digital and online portfolio of products for the
                          past five years.
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
          <div id="contactus"></div>
        </section> */}
        <div></div>
        {/*testimonial end*/}
        {/*subscribe start*/}
        <div id="contactus" />
        <section id="contact-us">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h2 className="title">
                    <span>Request Here For </span>Live Demo
                  </h2>
                  <div className="title-bdr">
                    <div className="left-bdr" />
                    <div className="right-bdr" />
                  </div>
                  <p>
                    Please complete the form below and we will get in touch
                    ASAP!
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 position-relative">
                <img
                  className="img-fluide topBottom"
                  src="assets/images/client/contactus.jpg"
                  alt
                />
              </div>
              <div className="col-lg-5 col-md-12 ms-auto">
                <div className="subscribe-form">
                  <Formik
                    initialValues={{ fname: '', lname: '', email: '', phone: '' }}
                    validate={values => {
                      const errors = {}
                      if (!values.fname) {
                        errors.fname = 'First name is required'
                      }
                      // if (!values.lname) {
                      //   errors.lname = 'Last name is required'
                      // }
                      if (!values.email) {
                        errors.email = 'Email is required'
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                      ) {
                        errors.email = 'Invalid email address'
                      }

                      if (!values.phone) {
                        errors.phone = 'Phone number is required'
                      } else if (values.phone.length !== 10) {
                        errors.phone = 'Phone number must be 10 digits long'
                      }
                      return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      // alert(JSON.stringify(values, null, 2))
                      const api = 'https://srvr1px.cyberads.io/landingpageleadform/'
                      fetch(api, {
                        method: "POST", // or 'PUT'
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          fisrtname: values.fname,
                          lname: values.lname,
                          bemail: values.email,
                          businessemail: values.email,
                          phonenumber: values.phone
                        })
                      }).then(res => res.json())
                        .then(
                          (result) => {


                            if (result.status === 200) {
                              //alert("Recovery link is send on email.")
                              alert("Request submitted successfully!")

                            } else {
                              alert(result.status)
                            }

                          },
                          (error) => {
                            //setError({ error })
                          }
                        )
                      setSubmitting(false)

                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                      /* and other goodies */
                    }) => (
                      <>
                        <Form id="mc-form" onSubmit={handleSubmit}>
                          <div className="group d-md-flex align-items-center flex-column" style={{ "padding-bottom": "20px" }} >
                            <div className="group d-md-flex align-items-center" >
                              <Input
                                type="text"
                                name="fname"
                                className="fname"
                                placeholder="First Name"
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fname}
                              />

                              <Input
                                type="text"
                                name="lname"
                                placeholder="Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lname}
                              />
                            </div>
                            <small className="text-danger"> {errors.fname && touched.fname && errors.fname} </small>
                            {/* <small className="text-danger"> {errors.lname && touched.lname && errors.lname} </small> */}
                          </div>
                          <div className="group d-md-flex align-items-center flex-column">
                            <Input
                              type="email"
                              name="email"
                              className="email"
                              id="email"
                              placeholder="Business Email"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            <small className="text-danger"> {errors.email && touched.email && errors.email} </small>
                          </div>
                          <div
                            className="group d-md-flex align-items-center flex-column"
                            style={{ "margin-top": "20px" }}
                          >
                            <Input
                              type="phone"
                              name="phone"
                              className="phone"
                              id="phone"
                              placeholder="Mobile No."
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                            />
                            <small className="text-danger"> {errors.phone && touched.phone && errors.phone} </small>
                          </div>
                          <div
                            className="group align-items-center"
                          >
                            <button
                              className="btn btn-theme mt-4"
                              style={{ "margin-left": "0", "margin-right": "20px" }}
                              name="submit"
                              type="submit" disabled={isSubmitting} >Submit </button>
                          </div>

                        </Form>
                      </>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div></div>
        {/* Subscribe start */}
        {/* <section>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h2 className="title">
                    <span>Get Started With </span>CMGalaxy Newsletter
                  </h2>
                  <div className="title-bdr">
                    <div className="left-bdr" />
                    <div className="right-bdr" />
                  </div>
                  <p>Stay tuned for latest updates</p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="subscribe-form">
                  <form
                    id="mc-form1"
                    className="group d-md-flex align-items-center"
                  >
                    <input
                      style={{ "margin-top": "0px!important" }}
                      type="name"
                      name="NAME"
                      className="name"
                      id="mc-name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="EMAIL"
                      className="email"
                      id="mc-email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="btn btn-theme mt-4"
                      type="submit"
                      name="subscribe"
                      defaultValue="Subscribe Now"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*subscribe end*/}
      </div>
      {/*body content end*/}
      {/*footer start*/}
      <div id="waterdrop" />
      <footer className="footer theme-bg">
        <div className="primary-footer">
          <div className="container">
            <div className="row align-items-top">
              <div className="col-lg-3 col-md-12 mt-5 mt-lg-0">
                <div className="footer-cntct">
                  <h5 className="mb-4 text-white">Our Offices</h5>
                  <div className="row align-items-top pl-12">
                    <div className="col-lg-12 col-md-6 p-0">
                      <h4
                        className="mb-2 text-white"
                        style={{ "font-size": "14px" }}
                      >
                        Singapore Office
                      </h4>
                      <ul className="media-icon list-unstyled">
                        <li>
                          <p className="mb-0 footer-address">
                            <i className="la la-map-o" />
                            <span style={{ "font-size": "13px" }}>
                              1 North Bridge Road, #07-10 High Street Center
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 col-md-6 p-0 pblg-footer">
                      <h4
                        className="mb-2 text-white .mt-15-footer .mtr-footer"
                        style={{ "font-size": "14px" }}
                      >
                        India Office
                      </h4>
                      <ul className="media-icon list-unstyled">
                        <li>
                          <p className="mb-0 footer-address">
                            <i className="la la-map-o" />
                            <span style={{ "font-size": "13px" }}>
                              Cyber House B-35, Sector-32, Gurgaon (NCR Delhi)
                              India - 122001
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="social-icons mt-3">
                    <ul className="list-inline">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="la la-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="la la-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0 pl-50">
                <h5 className="mb-4 text-white">Useful Section</h5>
                <div className="footer-list justify-content-between d-flex">
                  <ul className="list-unstyled w-100">
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#product">Product</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#contactus">Contact Us</a>
                    </li>
                    <li>
                      <a href="#testimonial">Testimonial</a>
                    </li>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                    <li>
                      <a href="#contactus">Try Now</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0 plr-50r">
                <h5 className="mb-4 text-white">Our Services</h5>
                <div className="footer-list justify-content-between d-flex">
                  <ul className="list-unstyled w-100">
                    <li>
                      <a href="#services">Google Performance</a>
                    </li>
                    <li>
                      <a href="#services">Facebook Performance</a>
                    </li>
                    <li>
                      <a href="#services">Linkedin Performance</a>
                    </li>
                    <li>
                      <a href="#services">Youtube Performance</a>
                    </li>
                    <li>
                      <a href="#services">Amazon Performance</a>
                    </li>
                    <li>
                      <a href="#services">CRM Integration</a>
                    </li>
                    <li>
                      <a href="#services">DV360 Performance</a>
                    </li>
                    <li>
                      <a href="#services">Lead Management</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0 plr-50">
                <h5 className="mb-4 text-white">Contact</h5>
                <div className="footer-list justify-content-between d-flex">
                  <ul className="list-unstyled w-100">
                    <li>
                      <a
                        href="mailto:enquiry@cmrsl.net"
                        style={{
                          "-webkit-text-transform": "none",
                          "text-transform": "none"
                        }}
                      >
                        <strong>Email : </strong>enquiry@cmrsl.net
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-logo mb-3">
                  <img
                    id="footer-logo-white-img"
                    src="assets/images/logo1.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer mt-5 text-center">
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-12">
                  {" "}
                  <span style={{ "font-size": "13px" }}>
                    Copyright © 2022{" "}
                    <b style={{ "font-size": "13px" }}>
                      <a href="#">CMGalaxy </a>
                    </b>
                    | All Rights Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*footer end*/}
      {/* page wrapper end */}
      {/*back-to-top start*/}
      <div className="scroll-top">
        <a className="smoothscroll" href="#top">
          <i className="la la-hand-pointer-o" />
        </a>
      </div>
    </React.Fragment>
  )
}
export default Home 
