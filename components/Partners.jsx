import Image from "next/image"
import hm from '../public/hm.png'
import obey from '../public/obey.png'
import shopify from '../public/shopify.png'
import lacoste from '../public/lacoste.png'
import levis from '../public/levis.png'
import amazon from '../public/amazon.png'

const Partners = () => {
    return (
       <div className="partners-section">
        <div>
            <ul>
                <li><Image alt="img" src={hm} width={"100%"} height={'auto'}/></li>
                <li><Image alt="img" src={obey} width={"100%"} height={'auto'}/></li>
                <li><Image alt="img" src={shopify} width={"100%"} height={'auto'}/></li>
                <li><Image alt="img" src={lacoste} width={"100%"} height={'auto'}/></li>
                <li><Image alt="img" src={levis} width={"100%"} height={'auto'}/></li>
                <li><Image alt="img" src={amazon} width={"100%"} height={'auto'}/></li>
            </ul>
        </div>
       </div>
    )
}

export default Partners