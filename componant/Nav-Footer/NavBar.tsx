// import Image from 'next/image'
// import React from 'react'
// import { FaBars } from "react-icons/fa";
// import Link from 'next/link';

// const NavBar = () => {
//   return (
//     <header className='w-full  absolute z-10'>
//         <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
//             <Link href='/' className='flex justify-center items-center'>
//                 <FaBars/>
//             </Link>
//             <Link href='/'>
//                 <Image src='/logo.svg'
//                    alt='logo'
//                    width={118}
//                    height={18}
//                    className='object-contain flex'/>   
//             </Link>
//             <div className='flex items-center gap-10'>
//                 <Link href='/' className='flex justify-center items-center'>
//                     <FaBars/>
//                 </Link>
//                 <Link href='/' className='flex justify-center items-center'>
//                     <FaBars/>
//                  </Link>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default NavBar

import Link from "next/link";
import Image from "next/image";

// import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full '>
    <nav className=' w-full mx-auto flex justify-between items-center sm:px-16 px-6 py-4 '>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
      {/* <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      /> */}
      <div className="flex"> hello world </div>
    </nav>
  </header>
);

export default NavBar;