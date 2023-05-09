import Image from "next/image"
import Link from "next/link"
import payday from '../public/fashion/payday.png'
const Payday = () => {
  return (
    <div className="payday">
        <div className="payday_img">
            <Image alt="img" href="/public/fashion/payday.png"/>
        </div>
        <div className="payday__title"> 
           <h1><span className="white">PAYDAY</span> SALE NOW</h1>
           <h6>Spend minimal $100 get 30% off voucher code for your next purchase</h6>
        <div className="payday__title-data">
           <h5>1 June - 10 June 2021</h5>
           <h6>*Terms & Conditions apply</h6>
        </div>
           <Link className='mainBtn' href={'/'}>Shop now</Link>
        </div>
        
    </div>
  )
}

export default Payday