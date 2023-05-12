import Image from 'next/image'
import fav_1 from '../public/fav_1.png'
import fav_2 from '../public/fav_2.png'

const Favourite = () => {
  return (
    <section className='favourite'>
      <div className='favourite__title title'>
        <h3>Young’s Favourite</h3>
      </div>
      <div className='favourite__card'>
        <div className='favourite__card-item'>
          <Image
            alt='img'
            width={656}
            heigth={462}
            src={fav_1} />
          <div className='favourite__card-item-sub'>
            <h6>Trending on instagram</h6>
            <p>
              Explore Now!
            </p>
          </div>
        </div>
        <div className='favourite__card-item'>
          <Image
            alt='img'
            width={656}
            heigth={462}
            src={fav_2} />
          <div className='favourite__card-item-sub'>
            <h6>All Under $40</h6>
            <p>
              Explore Now!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Favourite

{
  /*
  <div className='favourite__title title'>
          <span></span>
          <h3>Young’s Favourite</h3>
        </div>
        <div className='favourite__card'>
          <div className='favourite__card-item'>
            <Image
              alt='img'
              width={'100%'}
              heigth={'auto'}
              src={fav_1} />
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
              src={fav_2} />
            <h6>All Under $40</h6>
            <p>
              Explore Now!
            </p>
          </div>
        </div>

  */
}
