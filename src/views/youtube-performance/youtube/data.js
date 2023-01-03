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
    selector: 'Campaign',
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
    name: 'View Rate (%)',
    selector: 'View rate',
    sortable: true,
    minWidth: '175px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  }
]

// ** Video Performance Overview table 2
export const videoColumns = [
  {
    name: 'Campaign Name',
    selector: 'Campaign',
    sortable: true,
    minWidth: '230px'
  },
  {
    name: 'Views',
    selector: 'Views',
    sortable: true,
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Video played to 25%',
    selector: 'Video Played to 25%',
    sortable: true,
    minWidth: '160px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Video played to 50%',
    selector: 'Video Played to 50%',
    sortable: true,
    minWidth: '160px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Video played to 75%',
    selector: 'Video Played to 75%',
    sortable: true,
    minWidth: '160px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Video played to 100%',
    selector: 'Video Played to 100%',
    sortable: true,
    minWidth: '160px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Engagements',
    selector: 'Engagements',
    sortable: true,
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  }
]


export default ExpandableTable
