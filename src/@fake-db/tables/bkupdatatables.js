import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  },

  {
    responsive_id: '',
    campaign_name: "Austin Awareness",
    spend: '$40,359.83',
    impression: '600,703',
    click: '24,590',
    ctr: '8.59%',
    lead: '62',
    cpl: '$3'
  }
  
]

mock.onGet('/api/datatables/initial-data').reply(config => {
  return [200, data]
})

mock.onGet('/api/datatables/data').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    item =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.post.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.age.toLowerCase().includes(queryLowered) ||
      item.salary.toLowerCase().includes(queryLowered) ||
      item.start_date.toLowerCase().includes(queryLowered)
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
