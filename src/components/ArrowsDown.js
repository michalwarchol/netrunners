import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'

const colors = {
    hidden: {color: "#eeeeee"},
    animate1: {
        color: ["#eeeeee", "#A3CCCD", "#00adb5", "#A3CCCD", "#eeeeee" , "#eeeeee" , "#eeeeee"],
        transition: {loop: "Infinity", duration: 1.5}
    },
    animate2: {
        color: ["#eeeeee", "#A3CCCD", "#00adb5", "#A3CCCD", "#eeeeee", "#eeeeee", "#eeeeee"],
        transition: {loop: "Infinity", duration: 1.5, delay: 0.5}
    },
    animate3: {
        color: ["#eeeeee", "#A3CCCD", "#00adb5", "#A3CCCD", "#eeeeee", "#eeeeee", "#eeeeee"],
        transition: {loop: "Infinity", duration: 1.5, delay: 1}
    }
}

const ArrowsDown = () => {

    let location = useLocation()

    const checkLink = () => {
        let link;
        switch(location.pathname){
            case "/":
            case "/Home":
                link = "/About"
                break;
            case "/About": 
                link = "/Services"
                break;
            case "/Services":
                link = "/Contact"
                break;
            default:
                link = "/Home"
        }
        return link;
    }

    return (
        <div className="arrowsdown d-flex justify-content-center">
            <Link to={checkLink()}
            className="arrowsinner d-flex flex-column">
                <motion.i 
                    className="icon-down-open-big"
                    variants={colors}
                    initial="hidden"
                    animate="animate1"
                    ></motion.i>
                <motion.i 
                    className="icon-down-open-big"
                    variants={colors}
                    initial="hidden"
                    animate="animate2"
                    ></motion.i>
                <motion.i 
                    className="icon-down-open-big"
                    variants={colors}
                    initial="hidden"
                    animate="animate3"
                    ></motion.i>
            </Link>
        </div>
    )
}

export default ArrowsDown;