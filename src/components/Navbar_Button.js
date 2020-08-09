import React from "react"
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const border = {
    hidden:{
        width: 0
    },
    animate: {
        width: "100%",
        transition: {duration: 0.2, type: "spring", damping: 8}
    },
    exit: {
        width: 0
    },
}

const NavbarButton = ({ text }) => {
    let location = useLocation()
    let isActive = location.pathname==="/"+text || (location.pathname==="/" && text==="Home")
    return (
        <Link to={"/"+text} className="navbar_link col-3 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
                {text}
                <AnimatePresence>
                    {isActive&&<motion.div 
                    className="border_bottom"
                    variants={border}
                    initial="hidden"
                    animate="animate"
                    exit="exit"
                    ></motion.div>} 
                </AnimatePresence>
            </div>
        </Link>
    )
}

export default NavbarButton;