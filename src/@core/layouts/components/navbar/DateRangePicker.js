// New Date Range Picker start 1
// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'
// import Flatpickr from 'react-flatpickr'

// const DateRangePicker = () => {
//   const [picker, setPicker] = useState(new Date())
//   return (
//     <Fragment>
//       <Flatpickr
//         value={picker}
//         data-enable-time
//         id='date-time-picker'
//         className='form-control'
//         onChange={date => setPicker(date)}
//       />
//     </Fragment>
//   )
// }

// export default DateRangePicker


// New Date Range Picker start 2
// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'

// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
// import { DateRange } from 'react-date-range'

// const DateRangePicker = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: 'selection'
//     }
//   ]
//   )

//   return (
//     <Fragment>
//   <DateRange
//   editableDateInputs={true}
//   onChange={item => setState([item.selection])}
//   moveRangeOnFirstSelection={false}
//   ranges={state}
// />
//     </Fragment>
//   )
// }

// export default DateRangePicker


// New Date Range Picker start 3
// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'

// import { addDays } from 'date-fns'
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
// import { DateRange } from 'react-date-range'

// const DateRangePicker = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: 'selection'
//     }
//   ])

//   return (
//     <Fragment>
// <DateRange
//   onChange={item => setState([item.selection])}
//   showSelectionPreview={true}
//   moveRangeOnFirstSelection={false}
//   months={2}
//   ranges={state}
//   direction="horizontal"
// />
//     </Fragment>
//   )
// }

// export default DateRangePicker

// New Date Range Picker start 4
// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'
// import Flatpickr from 'react-flatpickr'

// const DateRangePicker = () => {
//   const [picker, setPicker] = useState(new Date())
//   return (
//     <Fragment>
//       <Flatpickr
//         value={picker}
//         data-enable-time
//         id='date-time-picker'
//         className='form-control'
//         onChange={date => setPicker(date)}
//       />
//     </Fragment>
//   )
// }

// export default DateRangePicker

// New Date Range Picker start 5

// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'

// import { addDays } from 'date-fns'
// import 'react-date-range/dist/styles.css'
// import 'react-date-range/dist/theme/default.css'
// import { DateRange } from 'react-date-range'

// const DateRangePicker = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: 'selection'
//     }
//   ])

//   return (
//     <Fragment>
// <DateRange
//   onChange={item => setState([item.selection])}
//   showSelectionPreview={true}
//   moveRangeOnFirstSelection={false}
//   months={1}
//   ranges={state}
//   direction="horizontal"
//       />
//     </Fragment>
//   )
// }

// export default DateRangePicker

// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'
// import Flatpickr from 'react-flatpickr'

// import Cookies from 'universal-cookie'
// const cookies = new Cookies()
// cookies.set('myCat', 'Pacman', { path: '/' })
// console.log(cookies.get('myCat')) // Pacman

// const sy = localStorage.getItem("sy")  
// const sm = localStorage.getItem("sm")
// const sd = localStorage.getItem("sd")
// const ey = localStorage.getItem("ey")
// const em = localStorage.getItem("em") 
// const ed = localStorage.getItem("ed")
// const x = "-"
// const c = "to"
// const DateRangePicker = () => {
//   const [picker, setPicker] = useState([sy + x + sm + x + sd + sd, c + ey + x + em + x + ed])
//   return (
//     <Fragment>
//       <Flatpickr
//         value={picker}

//         id='range-picker'
//         className='form-control'
//         onChange={(date) => {
//           setPicker(date)
//           const selecteddate = date[0]
//           const date2 = date[1]
//           const fd = new Date(selecteddate)
//           const fd2 = new Date(date2)
//           const sy = fd.getFullYear()
//           const sm =  fd.getMonth()
//           const sd = fd.getDate()
//           const ey = fd2.getFullYear()
//           const em =  fd2.getMonth()
//           const ed = fd2.getDate()
//           const mi = "-"
//           const sy1 = "&sy="
//           const sm1 = "&sm="
//           const sd1 = "&sd="
//           const ey1 = "&ey="
//           const em1 = "&em="
//           const ed1 = "&ed="
//           console.log("date1", selecteddate)
//           console.log("date2", date2)
//           localStorage.setItem("startdate", [sy + mi + sm + mi + sd])
//           localStorage.setItem("enddate", [ey + mi + em + mi + ed])
//           localStorage.setItem("sy1", [sy1])
//           localStorage.setItem("sm1", [sm1])
//           localStorage.setItem("sd1", [sd1])
//           localStorage.setItem("ey1", [ey1])
//           localStorage.setItem("em1", [em1])
//           localStorage.setItem("ed1", [ed1])
//           localStorage.setItem("sy", [sy])
//           localStorage.setItem("sm", [sm + 1])
//           localStorage.setItem("sd", [sd])
//           localStorage.setItem("ey", [ey])
//           localStorage.setItem("em", [em + 1])
//           localStorage.setItem("ed", [ed])
//           window.location.reload()
//         }}
//         options={{
//           mode: 'range',
//           defaultDate: [Date() - 1, Date() - 7]
//           // defaultDate: ['2021-10-01', '2021-10-03']
//         }}

//       />
//     </Fragment>
//   )
  
// }
  
// export default DateRangePicker

// import { Fragment, useState } from 'react'
// import { Label } from 'reactstrap'
// import Flatpickr from 'react-flatpickr'

// import Cookies from 'universal-cookie'
// const cookies = new Cookies()
// cookies.set('myCat', 'Pacman', { path: '/' })
// // console.log(cookies.get('myCat')) // Pacman

// const sy = localStorage.getItem("sy")  
// const sm = localStorage.getItem("sm")
// const sd = localStorage.getItem("sd")
// const ey = localStorage.getItem("ey")
// const em = localStorage.getItem("em") 
// const ed = localStorage.getItem("ed")
// const x = "-"
// const c = "to"
// const d = new Date()
// d.setDate(d.getDate() - 7)
// const d1 = new Date()
// d1.setDate(d1.getDate() - 1)
// let picker1

// // console.log("conditionoutside")
// const DateRangePicker = () => {
//   if (sd === 'NaN') {
//     picker1 = [d, d1]
//     localStorage.setItem("sy", d.getFullYear())
//     localStorage.setItem("sm", d.getMonth())
//     localStorage.setItem("sd", d.getDate())
//     localStorage.setItem("ey", d1.getFullYear())
//     localStorage.setItem("em", d1.getMonth())
//     localStorage.setItem("ed", d1.getDate())
//     // console.log("condition1")
//     // const [picker, setPicker] = useState([d, d1])
//   } else {
//     picker1 = [sy + x + sm + x + sd, c + ey + x + em + x + ed]
//     // console.log("conditionelse")
//     // const [picker, setPicker] = useState([sy + x + sm + x + sd, c + ey + x + em + x + ed])
//   }
//   // const [picker, setPicker] = useState([sy + x + sm + x + sd, c + ey + x + em + x + ed])
//   // console.log("line259")
//   const [picker, setPicker] = useState(picker1)
//   return (
//     <Fragment>
//       <Flatpickr
//         value={picker}

//         id='range-picker'
//         className='form-control'
//         onChange={(date) => {
//           setPicker(date)
//           const selecteddate = date[0]
//           const date2 = date[1]
//           const fd = new Date(selecteddate)

//           const fd2 = new Date(date2)
//           const sy = fd.getFullYear()
//           const sm =  fd.getMonth()
//           const sd = fd.getDate()
//           const ey = fd2.getFullYear()
//           const em =  fd2.getMonth()
//           // console.log(fd2)
//           // const ed = new Cookies()
//           // ed.set('myCat', fd2.getDate(), { path: '/' })
//           // console.log(cookies.get('myCat'))

//           const ed = fd2.getDate()
//           const mi = "-"
//           // console.log("date1", selecteddate)
//           // console.log("date2", date2)
//           localStorage.setItem("startdate", [sy + mi + sm + mi + sd])
//           localStorage.setItem("enddate", [ey + mi + em + mi + ed])
//           localStorage.setItem("sy", [sy])
//           localStorage.setItem("sm", [sm + 1])
//           localStorage.setItem("sd", [sd])
//           localStorage.setItem("ey", [ey])
//           localStorage.setItem("em", [em + 1])

//           // (cookies.get('myCat'))

//           localStorage.setItem("ed", [ed])
//           if (fd2 !== 'Invalid Date') {
//             window.location.reload()
//           } else {
//             cons
//           }
//           // window.location.reload()
//         }}
//         options={{
//           mode: 'range',
//           defaultDate: ["2021-10-05", "2021-10-10"]
//           // defaultDate: ['2021-10-01', '2021-10-03']
//         }}

//       />
//     </Fragment>
//   )
  
// }
  
// export default DateRangePicker
import { Fragment, useState } from 'react'
import { Label } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

import Cookies from 'universal-cookie'
import { string } from 'prop-types'
// const cookies = new Cookies()
// cookies.set('myCat', 'Pacman', { path: '/' })
// console.log(cookies.get('myCat')) // Pacman

const x = "-"
// const c = "till"
const d = new Date()
d.setDate(d.getDate() - 7)
const d1 = new Date()
d1.setDate(d1.getDate())
let picker1
const last = new Date()
last.setDate(last.getDate() - 90)
// const last1 =  last.getMonth()
// const last2 = last.getFullYear()
// const last3 = '1'
// const last4 = ' '
// fix.setDate(fix.getDate() - 90)
// const ft =  (fix.getMonth())
// localStorage.setItem("testing", [ft])

// console.log("conditionoutside")
const DateRangePicker = () => {
  const sy = localStorage.getItem("sy")  
const sm = localStorage.getItem("sm")
const sd = localStorage.getItem("sd")
const ey = localStorage.getItem("ey")
const em = localStorage.getItem("em") 
const ed = localStorage.getItem("ed")

  // const picker1 = [sy + x + sm + x + sd, c + ey + x + em + x + ed]
  const picker1 = [new Date(sy + x + sm + x + sd), new Date(ey + x + em + x + ed)]
  // const picker1 = [sd + x + sm + x + sy, c + ed + x + em + x + ey]
  const [picker, setPicker] = useState(picker1)
  const path = window.location.pathname
  console.log({path})
  return (
    <Fragment>
      {path !== '/funnelattribution/index' && <Flatpickr
        value={picker}

        id='range-picker'
        className='form-control'
        onChange={(date) => {
          setPicker(date)
          const selecteddate = date[0]
          const date2 = date[1]
          const fd = new Date(selecteddate)

          const fd2 = new Date(date2)
          const sy = fd.getFullYear()
          const sm =  fd.getMonth()
          const sd = fd.getDate()
          const ey = fd2.getFullYear()
          const em =  fd2.getMonth()
       
          const ed = fd2.getDate()
          const startDate = `${sy}-${(sm + 1) < 10 ? '0' : ''}${sm + 1}-${sd}`
          const endDate = `${ey}-${(em + 1) < 10 ? '0' : ''}${em + 1}-${ed}`

          localStorage.setItem("sy", [sy])
          localStorage.setItem("sm", [sm + 1])
          localStorage.setItem("sd", [sd])
          localStorage.setItem("ey", [ey])
          localStorage.setItem("em", [em + 1])
          localStorage.setItem("ed", [ed])
          localStorage.setItem("date_from", [startDate])
          localStorage.setItem("date_to", [endDate])

          if (isNaN(fd2.getTime())) {
            console.log("iff")
          } else {
            window.location.reload()
          }
          // window.location.reload()
        }}
        options={{
          mode: 'range',
          
          // placeholder: "-" - String,
          // defaultDate: ["2021-10-05", "2021-10-10"]
          dateFormat: 'j M Y',
          
          // minDate: ["2021-12-01"],
          minDate: new Date().fp_incr(-90),
          maxDate: d1
          
          // maxDate: d1
          // defaultDate: ['2021-10-01', '2021-10-03']
        }}

      />}
    </Fragment>
  )
  
}
  
export default DateRangePicker