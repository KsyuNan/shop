import Link from 'next/link'
import Image from 'next/image'
import app from '../public/app.png'
import google from '../public/google.png'

const Lifestyle = () => {
  return (
    <div className='lifestyle'>
      <div className='lifestyle__title'>
        <h3>DOWNLOAD APP & GET THE VOUCHER!</h3>
        <p>
          Get 30% off for first transaction using Rondovision mobile app for now.
        </p>
        <div className='lifestyle__title-btn'>
          <Link href={'/'}>
          <Image alt='app' src={app}></Image>
          </Link>
          <Link href={'/'}>
          <Image alt='google' src={google}></Image>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Lifestyle
