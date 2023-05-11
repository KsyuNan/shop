import Image from "next/image"
import Link from 'next/link'
import mainImg from '../public/main.png'

const Main = () => {
    return (
        <main>
          <div className="main">
             <div className="main__title">
               <h1><span className="white">LET’S</span> EXPLORE <span className="yellow">UNIQUE</span> CLOTHES.</h1>
               <h6>Live for Influential and Innovative fashion!</h6>      
             <div className="main__title-action">
               <div>
               <button href='/' className="mainBtn">Shop Now</button>
               </div>
               <div className="yellow-shape"></div>
             </div>
             </div>
             <div className="main__img">
                <Image className="headerImg" alt='image' src={mainImg} width={871} height={784} />
             </div>
          </div>
        </main>
    )
}

export default Main