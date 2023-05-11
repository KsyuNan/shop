import Payday from '@/components/Payday'
import Image from 'next/image'
import hoodie from '../public/hoodie.png'
import coats from '../public/coats.png'
import shirt from '../public/shirt.png'

const FashionPage = () => {
  return (
    <section className='fashion'>
      <div className='fashion__title'>
        <h3>New arrivals</h3>
      </div>
      <div className='fashion__card'>
        <div className='fashion__card-item'>
          <Image
            alt='img'
            width={300}
            heigth={500}
            src={hoodie} />
          <div className='fashion__card-sub'>
            <h6>Hoodies & Sweetshirt</h6>
            <p>
              Explore Now!
            </p>
          </div>
        </div>
        <div className='fashion__card-item'>
          <Image
            alt='img'
            width={300}
            heigth={500}
            src={coats} />
          <div className='fashion__card-sub'>
            <h6>Coats & Parkas</h6>
            <p>
              Explore Now!
            </p>
          </div>
        </div>
        <div className='fashion__card-item'>
          <Image
            alt='img'
            width={300}
            heigth={500}
            src={shirt} />
          <div className='fashion__card-sub'>
            <h6>Tees & T-Shirt</h6>
            <p>
              Explore Now!
            </p>
            <div className='arrow'></div>
          </div>
        </div>
      </div>
      <Payday />
    </section>
  )
}

export default FashionPage
