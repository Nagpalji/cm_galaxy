import React, { useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import './details.css'


const Templete1 = () => {
    const [options, setOption] = useState(['Option-1', 'Option-2', 'Option-3', 'Option-4', 'Option-5'])

    return (
        <>
            <div className='d-flex'>
                <div className='col-4 shadow bg-white rounded mr-1 vh-75'>
                    <label htmlFor="">User IP</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Devide Tracking</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Operation System</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Geographic</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Demographic</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Avg. Sessions</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Page Per Session</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Avg. Time Per Session</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Bounce Rate</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Product Preference</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">No. Of Product Engaged</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Engagement Behaviour</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Visitors Device Preferences</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Number Of Day Last Purchase</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">Customer Lifetime Value</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                    <label htmlFor="">High Value Customer</label>
                    <Multiselect isObject={false} options={options} showCheckbox className='multiSelect mb-1' />
                </div>
                <div className="bg-white shadow rounded p-1 col-10">
                    <div className="">
                        <img className='logo1 border rounded-circle bg-dark' src="" alt="" />
                    </div>
                    <div className="justify-content-center align-items-center d-flex ">
                        <div className="d-flex align-items-center">
                            <img className='uImage1 bg-dark border rounded-circle' src="" alt="" />
                            <div className='m-1'>
                                <label htmlFor="uFile" className='btn btn-primary btn-sm'>Choose Image</label>
                                <input type="file" className="uFile" id='uFile' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Message</h4>
                        <div className="d-flex flex-column justify-content-center">
                            <textarea name="Message" id="Message" cols="80" rows="5" placeholder='Write message...'></textarea>
                        </div>
                        <div className='d-flex justify-content-center m-1'>
                            <button className="btn btn-sm btn-primary">Send</button>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Templete1