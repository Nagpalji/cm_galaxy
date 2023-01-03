// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// Start this Table
// ** Top Campaigns table 1
export const serverSideColumns = [
  {
    name: 'Campaign',
    selector: 'full_name',
    sortable: true,
    minWidth: '180px'
    // style: { whiteSpace: 'normal' }
    
  },
  {
    name: 'Spends',
    selector: 'email',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Impressions',
    selector: 'post',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Clicks',
    selector: 'city',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'Leads',
    selector: 'start_date',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'AVG Frequency',
    selector: 'start_date',
    sortable: true,
    minWidth: '180px'
  }
]

// ** Overall Performance table 2
export const overColumns = [
  {
    name: 'Campaign Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Spends',
    selector: 'email',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Impressions',
    selector: 'post',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Clicks',
    selector: 'city',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'Leads',
    selector: 'city',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'Engagement',
    selector: 'city',
    sortable: true,
    minWidth: '75px'
  }
]

// ** Lead Performance table 3
export const leadColumns = [
  {
    name: 'Campaign Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Leads',
    selector: 'email',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Leads Form Completion Rate',
    selector: 'post',
    sortable: true,
    minWidth: '270px'
  },
  {
    name: 'Leads Form Open',
    selector: 'city',
    sortable: true,
    minWidth: '165px'
  }
]


export default ExpandableTable
