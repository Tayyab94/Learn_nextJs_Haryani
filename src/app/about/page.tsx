import React from 'react'
import Navbar from '../../Components/navbar'

const AboutPage = async () => {

    await new Promise((resolve) => {
        setTimeout(resolve, 6000);
    })
    return (
        <div>
            <h2 className='font-bold'>About Page</h2>
        </div>
    )
}

export default AboutPage
