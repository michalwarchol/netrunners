import React from 'react'
import {motion} from 'framer-motion'

const variants = {
    hidden: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0 ,transition: {duration: 0.5, delay: 0.6}},
    exit: {opacity: 0, y: -60, transition: {duration: 0.5, ease: "easeInOut"}}
}

const About = () => {
    return(
        <motion.div className="about d-flex flex-column flex-lg-row"
        variants={variants}
        initial="hidden"
        animate="animate"
        exit="exit">
            <div className="info col-12 col-lg-6">
                <h1>About <span>Us</span></h1>
                <p>We are leading company in web technologies providing original solutions for big corporations as well as small players.</p>
                <p>It is our priority to cooperate with our customers, listen to them and advice when necessary.</p>
            </div>
            <div className="features col-12 col-lg-6">
                <div className="feature d-flex flex-row">
                    <h3 className="d-flex flex-grow-1 align-items-center">Solidity</h3>
                    <div className="triangle"></div>
                </div>
                <div className="feature d-flex flex-row">
                    <h3 className="d-flex flex-grow-1 align-items-center">Stability</h3>
                    <div className="triangle"></div>
                </div>
                <div className="feature d-flex flex-row">
                    <h3 className="d-flex flex-grow-1 align-items-center">Modernity</h3>
                    <div className="triangle"></div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;