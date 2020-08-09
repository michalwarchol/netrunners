import React, {useState, useEffect} from 'react'
import NavbarButton from './Navbar_Button';
import NavbarSmallButton from './NavbarSmallButton';

const Navbar = () => {

    const [small, setSmall] = useState(window.innerWidth<=768)
    const [menu, setMenu] = useState(false)

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            if(window.innerWidth<=768){
                setSmall(true)
            }else setSmall(false)
        })
    },[])

    const showMenu = () => {
        setMenu(!menu)
    }

    return(
        <div className="navbar d-flex flex-row justify-content-end">
            {small
            ?<><i className="icon-menu" onClick={showMenu}></i>
                {menu&&
                <div className="menu">
                    <NavbarSmallButton key={1} text="Home" />
                    <NavbarSmallButton key={2} text="About" />
                    <NavbarSmallButton key={3} text="Services" />
                    <NavbarSmallButton key={4} text="Contact" />
                </div>
                }
            </> 
            :<>
                <NavbarButton key={1} text="Home" />
                <NavbarButton key={2} text="About" />
                <NavbarButton key={3} text="Services" />
                <NavbarButton key={4} text="Contact" />
            </>
            }
        </div>
    )
}

export default Navbar;