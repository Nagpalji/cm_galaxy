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
/*axios.get('https://srvr1px.cyberads.io/adword_dattribution/?brand_name=Asia_pacific&sy=2021&sm=07&sd=01&ey=2021&em=07&ed=03').then(response => {
  data = response.data
})*/

// ** Dashboard Table
export const basicColumns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    maxWidth: '180px'
  },
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Position',
    selector: 'post',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '75px'
  }
]

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
// ** Top Campaign table One
export const serverSideColumns = [
  {
    name: 'Campaign Name',
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
    name: 'CTR (%)',
    selector: 'CTR',
    sortable: true,
    minWidth: '75px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  }
  
]

// ** Audience Overview table Second
export const audienceoverviewColumns = [
  {
    name: 'AdGroup',
    selector: 'Ad group',
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
    name: 'CPC',
    selector: 'CPC',
    sortable: true,
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  }
  
]

// ** CampaignTypePerformance table Third
export const campaigntypeperformanceColumns = [
  {
    name: 'Search Keyword',
    selector: 'Keyword / Placement',
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
    minWidth: '120px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'CPC',
    selector: 'CPC',
    sortable: true,
    minWidth: '75px',
    right: true,
    style: {
      justifyContent: 'right'
  }
  }
]

export default ExpandableTable
