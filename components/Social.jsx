import Link from "next/link"

const Social = () => {
    return (
        <div className="socialIcon">
                <ul className="socialIcon__list">
                    <li>
                        <Link href={'/'}>1</Link>
                    </li>
                    <li>
                        <Link href={'/'}>2</Link>
                    </li>
                    <li>
                        <Link href={'/'}>3</Link>
                    </li>
                    <li>
                        <Link href={'/'}>4</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Social

{/*
//import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin} from 'react-icons/ti'

                <ul>
                    <li>
                        <Link  href="/">
                          <TiSocialFacebook/>
                        </Link>
                    </li>
                    <li>
                        <Link  href="/">
                          <TiSocialInstagram/>
                        </Link>
                    </li>
                    <li>
                        <Link  href="/">
                          <TiSocialTwitter/>
                        </Link>
                    </li>
                    <li>
                        <Link  href="/">
                          <TiSocialLinkedin/>
                        </Link>
                    </li>
                </ul>
*/}