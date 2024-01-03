// import './App.css'
import '../App.css'
import { Button } from '@tremor/react'
import pfp from '../assets/profile_pic.jpg'
import logo from '../assets/flowfit_logo.png'
import { Link } from 'react-router-dom';

function NavBar() {
    // const navigate = useNavigate(); //this makes navigayge object
    return (
        <>
            <div className='bg-navbar-bg text-navbar-text flex flex-row items-center gap-10 justify-between drop-shadow-md outline outline-navbar-outline outline-2'>
                <div className='flex flex-row items-center justify-start gap-10'>
                    <img className="max-h-20" src = {logo}/>
                    <ul className='flex flex-row justify-item-center gap-10'>
                        <Button><Link to="/home"><li>Home</li></Link></Button>
                        <Button><Link to="/newexercise"><li>Exercises</li></Link></Button>
                        <Button><li>About</li></Button>
                    </ul>
                </div>

                <ul className='flex flex-row items-center justify-end gap-5'>
                    <li>Profile</li> 
                    <img className="max-h-10 pr-3" src={pfp}/>
                </ul>
                
            </div>
        </>
    );
}

export default NavBar;