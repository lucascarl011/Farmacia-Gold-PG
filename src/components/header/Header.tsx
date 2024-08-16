import { NavBar } from "../navBar/NavBar";
import logo from '../../assets/logo.png'

export function Header () {
    return (
        <header className="max-w-7xl flex items-center justify-between p-4">
            <img className="w-11" src={logo}  alt="logo" />
            <NavBar />
        </header>
    )
}