import Image from "next/image"
const Partners = () => {
    return (
       <div className="partners-section">
        <div>
            <ul>
                <li><Image alt="img" src={'/public/hm.png'} width={50} height={75}/></li>
                <li><Image alt="img" src={'/public/obey.png'} width={50} height={75}/></li>
                <li><Image alt="img" src={'/public/shopify.png'} width={50} height={75}/></li>
                <li><Image alt="img" src={'/public/lacoste.png'} width={50} height={75}/></li>
                <li><Image alt="img" src={'/public/levis.png'} width={50} height={75}/></li>
                <li><Image alt="img" src={'/public/amazon.png'} width={50} height={75}/></li>
            </ul>
        </div>
       </div>
    )
}

export default Partners