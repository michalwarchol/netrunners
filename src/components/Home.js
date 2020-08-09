import React from 'react'
import Button from "./Button"
import {motion} from "framer-motion"

const variants = {
    hidden: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0 ,transition: {duration: 0.5, delay: 0.6}},
    exit: {opacity: 0, y: -60, transition: {duration: 0.5, ease: "easeInOut"}}
}

const Home = () => {
    return(
        <motion.div 
        className="home"
        variants={variants}
        initial="hidden"
        animate="animate"
        exit="exit">
            <h1>We Run <span>The Net</span></h1>
            <p className="col-12 col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et felis vitae justo mollis egestas vitae et nulla. Duis non diam vitae lacus dignissim hendrerit. Ut eget metus at ligula venenatis varius et eu dui. In ut eros bibendum, auctor ex ornare, dignissim ante. Nulla eget vehicula turpis. </p>
            <Button text="Get Started" handleClick={()=>console.log("elo")} />
        </motion.div>
    )
}

export default Home;