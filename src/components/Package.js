import React from "react"
import Button from './Button'

const Package = ({ name, image, pages, rwd, domain, form, gallery, cms, animations, map, price }) => {
    return (
        <div className="package col-12 col-md-4 d-flex flex-column">
            <div className="name">
                <h4>{name}</h4>
            </div>
            <div className="image">
                {image}
            </div>
            <div className="functions">
                <ul>
                    <li>available pages: {pages}</li>
                    {rwd&&<li>responsive design</li>}
                    {domain&&<li>free .com domain for 12 months</li>}
                    {form&&<li>contact form</li>}
                    {cms&&<li>Content Management System</li>}
                    {gallery&&<li>image slider</li>}
                    {animations&&<li>animations</li>}
                    {map&&<li>Google Map</li>}
                </ul>
            </div>
            <div className="price d-flex align-items-center flex-column">
                <h4>${price}</h4>
                <Button text="Try now" handleClick={()=>console.log("tried")}/>
            </div>
            
        </div>
    )
}

export default Package;