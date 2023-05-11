import Link from 'next/link'
//import Image from 'next/link'
//import logo from '../public/logo.svg'
const Header = () => {
  return (
    <header className='header'>
      <div className="navTop">
        <div className="logo">
          {/* 
          <Image alt={'logo'} src={logo} width={'100%'} height={'auto'}></Image>
  */}
          Fashion</div>
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