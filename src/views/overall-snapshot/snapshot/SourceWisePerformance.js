// ** React Imports
import { Fragment, useState, useEffect, memo } from 'react'

// ** Table Columns
import { OkanaserverSideColumns, serverSideColumns, theivserverSideColumns } from './data'

// ** Store & Actions
import { getData } from './actions'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Spinner } from 'reactstrap'

const DataAudienceOverview = () => {
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
  const fett = 'https://srvr1px.cyberads.io/common_sourceprformance/?brand_name='
  const fet = fett + brand_name
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

  const c_product = sessionStorage.getItem("overall_product")
  const c_campaign = sessionStorage.getItem("overall_campaign")
  const c_traffic = sessionStorage.getItem("overall_traffic")
  const c_geo = sessionStorage.getItem("overall_geo")
  const product = '&product='
  const campaign = '&campaign='
  const traffic = '&traffic='
  const geo = "&geo="
  
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
                   
    fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + page + x + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, 
    {
      
      // fetch('https://srvr1px.cyberads.io/adword_clicks/?brand_name=gems&startdate=,${startdate},&enddate=${enddate}', {
         method: 'GET'
    })
      .then(res => res.json())  
      .then((result) => {
        
            // setStore(result)
            
            setAllData(result)
            result.map(res => {
            setPages(res.total_pages)
            //setCur(res.current_page)
          })
          
          },
            (error) => {
            //this.setState({ error });
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
       //  const pagesel = "https://srvr1px.cyberads.io/adword_clicks/?brand_name=Asia_pacific&sy=2021&sm=07&sd=01&ey=2021&em=07&ed=03&page="
       fetch(fet + sy1 + sy + sm1 + sm + sd1 + sd + ey1 + ey + em1 + em + ed1 + ed + page1 + sel_val + product + c_product + campaign + c_campaign + traffic + c_traffic + geo + c_geo, 
         {
          
          // fetch('https://srvr1px.cyberads.io/adword_clicks/?brand_name=gems&startdate=,${startdate},&enddate=${enddate}', {
             method: 'GET'
        })
          .then(res => res.json())  
          .then((result) => {
                // setStore(result)
                
                setAllData(result)
                result.map(res => {
                setPages(res.total_pages)
                //setCur(res.current_page)
              })
              
              },
                (error) => {
                //this.setState({ error });
                }
              )
      /*getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        q: searchValue
      })*/
    
    setCurrentPage(page.selected + 1)
  }

  // ** Function to handle per page
  const handlePerPage = e => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        q: searchValue
      })
    )
    setRowsPerPage(parseInt(e.target.value))
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
  if (allData.length === 0) {
    return (

     <Card>
          <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Source Wise Performance</CardTitle>
          <div className='demo-inline-spacing'>
              <Spinner color='primary' />
            </div>
 
          </CardHeader>
        </Card>
        )
  } else {
  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Source Wise Performance</CardTitle>
        </CardHeader>
        {/* <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>show</Label>
              <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                value={rowsPerPage}
                onChange={e => handlePerPage(e)}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>entries</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row> */}
        <DataTable
          noHeader 
          pagination
          paginationServer
          className='react-dataTable'
          columns={['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? OkanaserverSideColumns : (['cmgalaxy.okana@cmgalaxy.com'].includes(localStorage.getItem('user_name')) ? theivserverSideColumns : serverSideColumns)}
          sortIcon={<ChevronDown size={10} />}
          paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>
    </Fragment>
  )
}
}

export default memo(DataAudienceOverview)