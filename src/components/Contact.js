import React from 'react'
import {motion} from 'framer-motion'

import Button from "./Button"

const variants = {
    hidden: {opacity: 0, y: 60},
    animate: {opacity: 1, y: 0 ,transition: {duration: 0.5, delay: 0.6}},
    exit: {opacity: 0, y: -60, transition: {duration: 0.5, ease: "easeInOut"}}
}

const Contact = () => {
    return (
        <motion.div className="contact"
        variants={variants}
        initial="hidden"
        animate="animate"
        exit="exit">
            <div className='form d-flex flex-column align-items-center'>
            <h3>Send Us a <span>Mail</span></h3>
                <div className="input d-flex col-12 col-md-6 flex-column">
                    <label htmlFor="inp1" className="inp">
                        <input
                            type="text"
                            id="inp1"
                            autoComplete="off"
                            placeholder="&nbsp;" />
                        <span className="label">First Name</span>
                        <span className="focus-bg"></span>
                    </label>
                </div>
                <div className="input d-flex col-12 col-md-6 flex-column">
                    <label htmlFor="inp2" className="inp">
                        <input
                            type="text"
                            id="inp2"
                            autoComplete="off"
                            placeholder="&nbsp;" />
                        <span className="label">Surname</span>
                        <span className="focus-bg"></span>
                    </label>
                </div>
                <div className="input d-flex col-12 col-md-6 flex-column">
                    <label htmlFor="inp3" className="inp">
                        <input
                            type="email"
                            id="inp3"
                            autoComplete="off"
                            placeholder="&nbsp;" />
                        <span className="label">E-mail</span>
                        <span className="focus-bg"></span>
                    </label>
                </div>
                <div className="input d-flex col-12 col-md-6 flex-column">
                    <label htmlFor="inp4" className="inp">
                        <textarea 
                            id="inp4"
                            placeholder="&nbsp;">
                        </textarea>
                        <span className="label">Message</span>
                        <span className="focus-bg"></span>
                    </label>
                </div>
                <div className="d-flex col-12 col-md-6 justify-content-end">
                    <Button text="Send" handleClick={()=>console.log("sent")} />
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;