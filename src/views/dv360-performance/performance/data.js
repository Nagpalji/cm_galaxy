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
// ** Inventory Detailed Breakdown table 1
export const inventorySideColumns = [
  {
    name: 'App/URL',
    selector: 'App/URL',
    sortable: true,
    minWidth: '230px'
  },
  {
    name: 'Spends',
    selector: 'Spends',
    sortable: true,
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Impressions',
    selector: 'Impressions',
    sortable: true,
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Clicks',
    selector: 'Clicks',
    sortable: true,
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'CTR (%)',
    selector: 'CTR',
    sortable: true,
    minWidth: '75px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  
  {
    name: 'CPM',
    selector: 'CPM',
    sortable: true,
    minWidth: '75px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  }
]

// ** App URL Impressions Spend Distribution table 2
export const appColumns = [
  {
    name: 'App/URL',
    selector: 'App/URL',
    sortable: true,
    minWidth: '230px'
  },
  {
    name: 'Spends',
    selector: 'Spends',
    sortable: true,
    minWidth: '75px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: '% of Total Spends',
    selector: '% of Total Spends',
    sortable: true,
    minWidth: '60px',
    right: true,
    style: {
      justifyContent: 'center'
  }
  },
  {
    name: 'Impressions',
    selector: 'Impressions',
    sortable: true,
    minWidth: '60px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: '% of Total Impression',
    selector: '% of Total Impressions',
    sortable: true,
    minWidth: '60px',
    right: true,
    style: {
      justifyContent: 'center'
  }
  }
  
]


export default ExpandableTable
