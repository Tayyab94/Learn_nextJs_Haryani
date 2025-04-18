
import React from 'react';
import Link from 'next/link';
import Navbar from './Components/navbar';


export default function Home() {

  return (
    <>
      <div className='container row-auto bg-amber-300 text-rose-600'>
        <Navbar />
        <h2 className='font-bol'>Hello Worlds</h2>
      </div>
    </>
  );
}
