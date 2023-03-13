// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
// const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

// const status = {
//   1: { title: 'Current', color: 'light-primary' },
//   2: { title: 'Professional', color: 'light-success' },
//   3: { title: 'Rejected', color: 'light-danger' },
//   4: { title: 'Resigned', color: 'light-warning' },
//   5: { title: 'Applied', color: 'light-info' }
// }

// export let data

// // ** Get initial Data
// axios.get('/api/datatables/initial-data').then(response => {
//   data = response.data
// })

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  // return (
  //   <div className='expandable-content p-2'>
  //     <p>
  //       <span className='font-weight-bold'>City:</span> {data.city}
  //     </p>
  //     <p>
  //       <span className='font-weight-bold'>Experience:</span> {data.experience}
  //     </p>
  //     <p className='m-0'>
  //       <span className='font-weight-bold'>Post:</span> {data.post}
  //     </p>
  //   </div>
  // )
}

// Start this Table
// ** Lead Management System table 1
export const serverSideColumns = [
  {
    name: 'Name',
    selector: 'Name',
    sortable: true,
    minWidth: '220px'
  },
  {
    name: 'Campaign',
    selector: 'Campaign',
    sortable: true,
    minWidth: '280px'
    // right: true,
    // style: {
    //   justifyContent: 'right'
    // }
  },
  {
    name: 'Email',
    selector: 'Email',
    sortable: true,
    minWidth: '280px'
    // right: true,
    // style: {
    //   justifyContent: 'right'
    // }
  },
  {
    name: 'Location',
    selector: 'Location',
    sortable: true,
    minWidth: '75px'
    // right: true,
    // style: {
    //   justifyContent: 'right'
    // }
  },
  {
    name: 'Contact',
    selector: 'Contact',
    sortable: true,
    minWidth: '75px'
    // right: true,
    // style: {
    //   justifyContent: 'right'
    // }
  },
  {
    name: 'Created At',
    selector: 'Created',
    sortable: true,
    minWidth: '120px'
    // right: true,
    
  },
  {
    name: 'Updated At',
    selector: 'Updated',
    sortable: true,
    minWidth: '120px'
    // right: true,
    // style: {
    //   justifyContent: 'right'
    // }
  }

]
export default ExpandableTable
