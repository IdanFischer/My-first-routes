import { Link } from 'react-router-dom'
import logo from '../logo.jpeg'

export default function Welcome({ setIsLoggedIn }) {
    return (
        <>
            <img src={logo} alt="logo"></img>
            <h1>
                Welcome To React!
            </h1>
        <Link to='/home' className='App-link'>home</Link>
        </>
    )
}