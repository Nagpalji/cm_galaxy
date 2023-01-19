import React, { useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown'
export default function DropDown() {
    const [options, setOption] = useState(['Option-1', 'Option-2', 'Option-3', 'Option-4', 'Option-5'])
    const [text, setText] = useState('')

    const textChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
         <div className='template1 shadow bg-white rounded p-1 col-lg-3 col-md-10 col-sm-10 overflow-auto'>
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
    </>
  )
}
