import Payday from '@/components/Payday'
import Image from 'next/image'
import hoodie from '/public/fashion/hoodie.png'

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
            href={{hoodie}} />
          <h6>Hoodies & Sweetshirt</h6>
          <p>
            Explore Now!
          </p>
        </div>
        <div className='fashion__card-item'>
          <Image
            alt='img'
            width={300}
            heigth={500}
            href={'/public/fashion/coats.png'} />
          <h6>Coats & Parkas</h6>
          <p>
            Explore Now!
          </p>
        </div>
        <div className='fashion__card-item'>
          <Image
            alt='img'
            width={300}
            heigth={500}
            href={'/public/fashion/shirt.png'} />
          <h6>Tees & T-Shirt</h6>
          <p>
            Explore Now!
          </p>
        </div>
      </div>
      <Payday />
    </section>
  )
}

export default FashionPage
