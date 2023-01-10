import React from 'react'
import './Funnel.css'
import $ from 'jquery'

const Funnel = () => {
    $(document).ready(function () {
        $('.hide1').show()
        $('.hide2, .hide3, .hide4').hide()
        $('.rectangle01').click(function () {
            $('.hide2, .hide3, .hide4').hide(200)
            $('.hide1').show(300)
        })
        $('.rectangle03').click(function () {
            $('.hide1, .hide3, .hide4').hide(200)
            $('.hide2').show(300)
        })
        $('.rectangle05').click(function () {
            $('.hide1, .hide2, .hide4').hide(200)
            $('.hide3').show(300)
        })
        $('.rectangle07').click(function () {
            $('.hide1, .hide2, .hide3').hide(200)
            $('.hide4').show(300)
        })
    })

    return (
        <>
            <div className="d-flex justify-content-center align-items-center row m-2">
                <div className="d-flex justify-content-center align-items-center flex-column col-md-5">
                    <div className="taper rectangle01"><p className='funnelPara'>TOFU</p></div>
                    <div className="rectangle02" />
                    <div className="taper rectangle03"><p className='funnelPara'>MOFU</p></div>
                    <div className="rectangle04" />
                    <div className="taper rectangle05"><p className='funnelPara'>BOFU</p></div>
                    <div className="rectangle06" />
                    <div className="taper rectangle07"><p className='funnelPara'>Convertion</p></div>
                </div>
                <div className=" justify-content-center align-items-center flex-row col-md-5 overflow-hidden">
                    <div className="content-FFC313 hide1">
                        <div className="triangle-right-FFC313" />
                        <div className="content-box-FFC313">
                            <p className='DetailPara'>Convertion</p>
                            <ul>
                                <li>List number 1</li>
                                <li>List number 2</li>
                                <li>List number 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-4076DA hide2">
                        <div className="triangle-right-4076DA" />
                        <div className="content-box-4076DA">
                            <p className='DetailPara'>Convertion</p>
                            <ul>
                                <li>List number 1</li>
                                <li>List number 2</li>
                                <li>List number 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-29A4F7 hide3">
                        <div className="triangle-right-29A4F7" />
                        <div className="content-box-29A4F7">
                            <p className='DetailPara'>Convertion</p>
                            <ul>
                                <li>List number 1</li>
                                <li>List number 2</li>
                                <li>List number 3</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-27CA75 hide4">
                        <div className="triangle-right-27CA75" />
                        <div className="content-box-27CA75">
                            <p className='DetailPara'>Convertion</p>
                            <ul>
                                <li>List number 1</li>
                                <li>List number 2</li>
                                <li>List number 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Funnel