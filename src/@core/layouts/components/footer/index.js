// ** Icons Import
import { Heart } from 'react-feather'

// Logo component start
import img1 from '@src/assets/images/avatars/cybermedia.png'
import { CardImg } from 'reactstrap'
// Logo component End

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-center d-block d-md-inline-block mt-25 mtt10'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='http://cmgalaxy.com/' target='_blank' rel='noopener noreferrer'>
          CMGalaxy
        </a>
        <span className='d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='d-none float-md-left d-md-block'>
      <img src="https://safedemo.cmil.com/cmgalaxy_logo/logo.png" height="35" width="150" alt="Logo"></img>
      {/* <CardImg top src={img1} imgHeight='35' imgWidth='15' alt='card1' /> */}
      </span>
    </p>
  )
}

export default Footer
