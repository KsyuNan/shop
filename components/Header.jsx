import Link from 'next/link'
import Image from 'next/link'
const Header = () => {
  return (
    <header className='header'>
      <div className="navTop">
        <div className="logo">Fashion</div>
        <nav >
           <ul>
            <li>
              <Link href='/'>Catalogue</Link>
            </li>
            <li>
              <Link href='/fashion'>Fashion</Link>
            </li>
            <li>
              <Link href='/favourite'>Favourite</Link>
            </li>
            <li>
              <Link href='/lifestyle'>Lifestyle</Link>
            </li>
            <li>
              <Link href='/sign_up'>SignUp</Link>
            </li>
           </ul>
        </nav>
    </div>
    </header>
  )
}

export default Header