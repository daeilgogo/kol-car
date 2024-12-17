import React from 'react';
import {  FaBars, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex w-full bg-transparent p-4">
      <div className="flex w-full justify-between   items-center">
        
        {/* Section des options */}
        <Link href='/' className="flex">
          <FaBars size={25}/>
        </Link>

        {/* Logo */}
        <Link href='' className="flex font-bold text-xl items-center gap-2">
          <Image src='/hero.png' alt='logo'  className='object-contain' width={75}
          height={18} />
          <span className='font-bold text-3xl'>KolCar</span>
        </Link>

        {/* Section de recherche et autres options */}
        <Link href='/' className="flex ">
          <FaSearch size={25}/>
        </Link>
        
      </div>
    </nav>
  );
};

export default NavBar;
