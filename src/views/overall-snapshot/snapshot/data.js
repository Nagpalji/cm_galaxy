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
// ** Source wise performance table1
export const serverSideColumns = [
  {
    name: 'Traffic Source',
    selector: 'Traffic Source',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Spends',
    selector: 'Spends',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'CTR(%)',
    selector: 'CTR',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'CPC',
    selector: 'CPC',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Leads',
    selector: 'Leads',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'CPL',
    selector: 'CPL',
    sortable: true,
    minWidth: '180px'
  }
  // {
  //   name: 'Leads',
  //   selector: 'start_date',
  //   sortable: true,
  //   minWidth: '20px'
  // },
  // {
  //   name: 'CPL',
  //   selector: 'salary',
  //   sortable: true,
  //   minWidth: '20px'
  // }
]

// CAse Of okana 
export const OkanaserverSideColumns = [
  {
    name: 'Traffic Source',
    selector: 'Traffic Source',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Spends',
    selector: 'Spends',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'CTR(%)',
    selector: 'CTR',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'CPC',
    selector: 'CPC',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Orders',
    selector: 'Leads',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Order Value',
    selector: 'CPL',
    sortable: true,
    minWidth: '180px'
  }
  // {
  //   name: 'Leads',
  //   selector: 'start_date',
  //   sortable: true,
  //   minWidth: '20px'
  // },
  // {
  //   name: 'CPL',
  //   selector: 'salary',
  //   sortable: true,
  //   minWidth: '20px'
  // }
]
// CAse Of theiv 
export const theivserverSideColumns = [
  {
    name: 'Traffic Source',
    selector: 'Traffic Source',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Spends',
    selector: 'Spends',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'CTR(%)',
    selector: 'CTR',
    sortable: true,
    minWidth: '75px'
  },
  {
    name: 'CPC',
    selector: 'CPC',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Conversions',
    selector: 'Leads',
    sortable: true,
    minWidth: '120px'
  },
  {
    name: 'Cost Per Conversions',
    selector: 'CPL',
    sortable: true,
    minWidth: '180px'
  }
  // {
  //   name: 'Leads',
  //   selector: 'start_date',
  //   sortable: true,
  //   minWidth: '20px'
  // },
  // {
  //   name: 'CPL',
  //   selector: 'salary',
  //   sortable: true,
  //   minWidth: '20px'
  // }
]


// ** Platform performance table 2
export const platformSideColumns = [
  {
    name: 'Campaign Name',
    selector: 'Campaign',
    sortable: true,
    minWidth: '280px'
  },
  {
    name: 'Spends',
    selector: 'Spends',
    sortable: true,
    minWidth: '120px',
    style: {
      justifyContent: 'center'
  }
  },
  {
    name: 'Impressions',
    selector: 'Impressions',
    sortable: true,
    minWidth: '120px',
    style: {
      justifyContent: 'right'
  }
  },
  {
    name: 'Clicks',
    selector: 'Clicks',
    sortable: true,
    minWidth: '120px',
    style: {
      justifyContent: 'center'
  }
  },
  {
    name: 'CTR(%)',
    selector: 'CTR',
    sortable: true,
    minWidth: '120px',
    style: {
      justifyContent: 'center'
  }
  }

]

// ** spends and leads table 3
export const spendsColumns = [
  {
    name: '',
    selector: 'names',
    sortable: true,
    minWidth: '20px'
  },
  {
    name: 'Last Month Avg.',
    justifyContent: 'center',
    selector: 'l1',
    sortable: true,
    minWidth: '20px'
  },
  {
    name: 'Current Month Avg.',
    selector: 'l2',
    sortable: true,
    minWidth: '20px'
  }
]


export default ExpandableTable
