import Image from 'next/Image'
import logo from "../public/logo.png"
import navbarStyles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <div className={navbarStyles.styles}>
            <div className={navbarStyles.logo}><Image src={logo}  alt="Pstream" width={40} height={40}/></div>
        </div>
    )
}
