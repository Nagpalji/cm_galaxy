// ** React Imports
import { Fragment, useState, useEffect, memo } from 'react'
import DropDown from './DropDown'
// ** Table Columns
import { serverSideColumns } from './data'
// import pdf from '../files/myfile.pdf'

// ** Store & Actions
import { getData } from './actions'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Download } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardText, Input, Label, Row, Col, Button, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Spinner } from 'reactstrap'

const DataTopCampaigns = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.dataTables)

  // ** States
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(7)
  const [searchValue, setSearchValue] = useState('')
  const [pages, setPages] = useState('')
  const [cur, setCur] = useState('')
  const [allData, setAllData] = useState([])
  // const [store, setStore] = useState([])
  const brand_name = localStorage.getItem("brand_name")
  const fett = 'https://srvr1px.cyberads.io/adword_impression/?brand_name='
  const fet = fett + brand_name
  const lead_download_apit = 'https://srvr1px.cyberads.io/adword_cpl/?brand_name='
  const lead_download_api = lead_download_apit + brand_name
  const sy = localStorage.getItem("sy")
  const sm = localStorage.getItem("sm")
  const sd = localStorage.getItem("sd")
  let ey = localStorage.getItem("ey")
  let em = localStorage.getItem("em")
  let ed = localStorage.getItem("ed")
  const sy1 = "&sy="
  const sm1 = "&sm="
  const sd1 = "&sd="
  const ey1 = "&ey="
  const em1 = "&em="
  const ed1 = "&ed="
  const op = "&leadsource="
  const val = sessionStorage.getItem('leadsource')

  const cam = '&cam='
  const val2 = sessionStorage.getItem('leadcampaign')


  if (ey === 'NaN') {
    ey = sy
  }
  if (em === 'NaN') {
    em = sm
  }
  if (ed === 'NaN') {
    ed = sd
  }
  const page = "&page="
  const x = 1
  useState(() => {

    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + page + x + op + val + cam + val2,
      {

        // fetch('https://srvr1px.cyberads.io/adword_clicks/?brand_name=gems&startdate=,${startdate},&enddate=${enddate}', {
        method: 'GET'
      })
      .then(res => res.json())
      .then((result) => {

        setAllData(result)
        result.map(res => {
          setPages(res.total_pages)

        })

      },
        (error) => {

        }
      )
  })

  // ** Get data on mount
  useEffect(() => {
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        q: searchValue
      })
    )
  }, [dispatch])


  // ** Function to handle filter
  const handleFilter = e => {
    setSearchValue(e.target.value)

    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        q: e.target.value
      })
    )
  }

  // ** Function to handle Pagination and get data
  const handlePagination = page => {
    const s = JSON.stringify(page).split(':')
    const sel = s[1].split('}')
    const sel_val = parseInt(sel[0]) + 1
    const page1 = "&page="
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + page1 + sel_val + op + val + cam + val2,
      {

        method: 'GET'
      })
      .then(res => res.json())
      .then((result) => {
        // setStore(result)

        setAllData(result)
        result.map(res => {
          setPages(res.total_pages)

        })

      },
        (error) => {

        }
      )


    setCurrentPage(page.selected + 1)
  }

  // ** Custom Pagination
  const CustomPagination = () => {

    //const count = Number((pages / rowsPerPage).toFixed(0))
    const count = pages

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakLabel='...'
        pageCount={count || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName={
          'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-2'
        }
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      q: searchValue
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.length > 0) {
      return store
    } else if (store.length === 0 && isFiltered) {
      return []
    } else {
      return allData.slice(0, rowsPerPage)
    }
  }

  const leads = lead_download_api + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + op + val + cam + val2
  if (allData.length === 0) {
    return (

      <Card>
        <Row className='match-height'>
          <Col lg='10' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Loading Data</CardTitle>
            </CardHeader>
          </Col>

          <Col lg='2' md='12'>
            <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30 }}>
              <Spinner color='primary' />
            </div>
            {/* <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts}  /> */}
            <div style={{ height: "430px", visibility: 'hidden' }} ></div>
          </Col>
        </Row>
      </Card>
    )
  } else if (allData === 0) {
    return (

      <Card>
        <Row className='match-height'>
          <Col lg='10' md='12'>
            <CardHeader>
              <CardTitle tag='h4'>Data Not Found!</CardTitle>
            </CardHeader>
          </Col>

          <Col lg='2' md='12'>
            {/* <div className='demo-inline-spacing justify-content-between loader_mobileal' style={{ marginLeft: 30 }}>
              <Spinner color='primary' />
            </div> */}
            {/* <PieChart containerProps={{ style: { height: "430px" } }} highcharts={Highcharts}  /> */}
            <div style={{ height: "430px", visibility: 'hidden' }} ></div>
          </Col>
        </Row>
      </Card>
    )
  } else {
    return (
      <Fragment>
        <Card>

          <Row className='mx-0 mt-1 mb-0'>
            <Col sm='3'>
              <div className='d-flex align-items-center mt-3 mb-1'>
                <Button.Ripple color='primary'>
                  <Download size={14} />
                  <a href={leads} style={{ color: '#FFF' }} download > Download Excel</a>
                  {/* <span className='align-middle ml-25'  >Download Excel</span> */}
                </Button.Ripple>
              </div>
            </Col>
            <Col sm='7' className='align-items-center justify-content-sm-end mt-0 mb-0'>
              <DropDown />
            </Col>

            <Col xl='2' lg='2' className='mt-3 m_responlead' xl='2' lg='2'>
              <Button.Ripple onClick={() => window.location.reload(false)} className='pull-right' color='primary'>Get Data</Button.Ripple>
            </Col>
          </Row>


          <DataTable
            noHeader
            pagination
            paginationServer
            className='react-dataTable'
            columns={serverSideColumns}
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            data={dataToRender()}
          />
        </Card>
      </Fragment>
    )
  }
}

export default memo(DataTopCampaigns)