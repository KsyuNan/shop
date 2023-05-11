import Link from "next/link"
import Social from "./Social"
import FooterNav from "./FooterNav"
const Foot = () => {
    return (
        <div className="footer">
            <div className="footer__main">
               <Link className="logo" href={'/'} passHref> Fashion</Link>
               <p>Complete your style with awesome clothes from us.</p>
            <Social/>
            </div>
            <div className="footer__navigation">
                <FooterNav/>
            </div>
            
        </div>
    )
}

export default Foot