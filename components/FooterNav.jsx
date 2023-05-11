import Link from "next/link"

const FooterNav = () => {
    return (
           <div className="footer_nav">
                <nav className="footer_nav-item">
                    <ul>
                        <li>
                            <Link href={'/'} passHref>Company</Link>
                        </li> 
                        <li>
                            <Link href={'/'} passHref>About</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>Contact us</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>Support</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>Careers</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="footer_nav-item">
                    <ul>
                        <li>
                            <Link href={'/'} passHref>Quick Link</Link>
                        </li> 
                        <li>
                            <Link href={'/'} passHref>Share Location</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>Orders Tracking</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>Size Guide</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>FAQs</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="footer_nav-item">
                    <ul>
                        <li>
                            <Link href={'/'} passHref>Legal</Link>
                        </li> 
                        <li>
                            <Link href={'/'} passHref>Terms & conditions</Link>
                        </li>
                        <li>
                            <Link href={'/'} passHref>Privacy Policy</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

export default FooterNav