import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Col, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { Play, DollarSign, HelpCircle, FileText, Archive } from 'react-feather'

const SwiperCenterSlidesStyle = ({ isRtl }) => {
  const params = {
    className: 'swiper-centered-slides p-1',
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    navigation: true,
    slideToClickedSlide: true
  }

  return (
    <Card className='bg-transparent shadow-none'>
      <CardHeader>
        <Col style={{ marginBottom: -6 }} className='ml-2 mt-1' className='text-center' sm='12'>
          <h1 style={{ fontSize: 35 }}>Clients</h1>
        </Col>
      </CardHeader>
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide className='rounded swiper-shadow'>
            <Play size={28} />
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>GeMS B School</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <DollarSign size={28} />
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Apeejay</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <HelpCircle size={28} />
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Rusk Media</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <FileText size={28} />
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Biz Ad</p>
          </SwiperSlide>
          <SwiperSlide className='rounded swiper-shadow'>
            <Archive size={28} />
            <p className='swiper-text align-middle pt-md-1 pt-sm-50 mb-0'>Idea Clan</p>
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperCenterSlidesStyle
