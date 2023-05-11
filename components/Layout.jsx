import Header from '../components/Header'
import Foot from './Foot'

const Layout = ({children}) => {
 return (
    <>
    <Header/>
    <main>{children}</main>
    <Foot/>
    </>
 )
}

export default Layout
