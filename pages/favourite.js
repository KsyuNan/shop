import Image from 'next/image'
import fav_1 from '../public/fashion/fav_1.png'
import fav_2 from '../public/fashion/fav_2.png'

const Favourite = () => {
  return (
    <div className='favourite section'>
      <div className='favourite__title'>
        <h3>Young’s Favourite</h3>
      </div>
      <div className='favourite__card'>
        <div className='favourite__card-item'>
          <Image
            alt='img'
            width={'100%'}
            heigth={'auto'}
            href={{fav_1}} />
          <h6>Trending on instagram</h6>
          <p>
            Explore Now!
          </p>
        </div>
        <div className='favourite__card-item'>
          <Image
            alt='img'
            width={'100%'}
            heigth={'auto'}
            href={{fav_2}} />
          <h6>All Under $40</h6>
          <p>
            Explore Now!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Favourite
