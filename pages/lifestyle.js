import Link from 'next/link'
import Image from 'next/image'
import app from '../public/app.png'
import google from '../public/google.png'
import phone from '../public/mobile.png'
import Foot from '@/components/Foot'

const Lifestyle = () => {
  return (
    <>
    <div className='lifestyle'>
      <div className='lifestyle__title'>
        <h3>DOWNLOAD APP & GET THE VOUCHER!</h3>
        <p>
          Get 30% off for first transaction using Rondovision mobile app for now.
        </p>
        <div className='lifestyle__title-btn'>
          <Link href={'/'}>
          <Image className='app-img' alt='app' src={app}></Image>
          </Link>
          <Link href={'/'}>
          <Image className='app-img' alt='google' src={google}></Image>
          </Link>
        </div>
      </div>
      <div className='livestyle__img'>
        <div className='livestyle__img-dot'>
          <span></span>
        </div>
        <div className='livestyle__img-circle'>
          <span></span>
        </div>
        <div className='livestyle__img-phone'>
          <Image
            className='img'
            alt='phone'
            src={phone}
            width={'80%'}
            height={'auto'}></Image>
        </div>
      </div>
    </div>
   </>
  )
}

export default Lifestyle
