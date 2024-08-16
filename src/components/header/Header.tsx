import { NavBar } from "../navBar/NavBar";
import logo from '../../assets/logo.svg'

export function Header () {
    return (
        <header className="max-w-7xl flex justify-between px-4 mx-auto">
            <img className="w-44" src={logo}  alt="logo" />
            <NavBar />
        </header>
    )
}