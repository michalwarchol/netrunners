import React from 'react'
import Package from './Package'
import {motion} from 'framer-motion'

const variants = {
    hidden: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0 ,transition: {duration: 0.5, delay: 0.6}},
    exit: {opacity: 0, y: -60, transition: {duration: 0.5, ease: "easeInOut"}}
}

const Services = () => {
    return(
        <motion.div className="services d-flex flex-column flex-md-row"
        variants={variants}
        initial="hidden"
        animate="animate"
        exit="exit">
            <Package 
                name="Basic"
                image={<i className="icon-star"></i>}
                pages={1} 
                rwd={true} 
                domain={true} 
                form={false} 
                cms={false} 
                gallery={false} 
                animations={false} 
                map={false} 
                price={899} />
            <Package 
                name="Pro" 
                image={<><i className="icon-star"></i><i className="icon-star"></i></>}
                pages={6} 
                rwd={true} 
                domain={true} 
                form={true} 
                cms={true} 
                gallery={false} 
                animations={false} 
                map={false} 
                price={1199} />
            <Package 
                name="Ultimate" 
                image={<><i className="icon-star"></i><i className="icon-star"></i><i className="icon-star"></i></>}
                pages={12} 
                rwd={true} 
                domain={true} 
                form={true} 
                cms={true} 
                gallery={true} 
                animations={true} 
                map={true} 
                price={1349} />
        </motion.div>
    )
}

export default Services;