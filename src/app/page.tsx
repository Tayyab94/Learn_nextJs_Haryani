
import React from 'react';
import Link from 'next/link';


export default function Home() {

  return (
    <>
      <div className='container row-auto bg-amber-300 text-rose-600'>

        <Link href='/about'>About</Link>
        <h2 className='font-bol'>Hello Worlds</h2>
        <Link href="/about/programming">Program Link</Link>
      </div>
    </>
  );
}
