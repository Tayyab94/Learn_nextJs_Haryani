import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (

        <>
            <div className='container row-auto bg-emerald-700 text-rose-600'>
                <Link href={'/'} >Home</Link> <span className='px-3'></span>
                <Link href='/about' prefetch={false}>About</Link><span className='px-3'></span>
                <Link href="/about/programming">Program Link</Link>
            </div>
        </>

    )
}

export default Navbar