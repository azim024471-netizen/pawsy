'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPaw, FaChevronDown, FaTachometerAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  
  const [user, setUser] = useState({
    name: 'Azim',
    email: 'azim.com',
    image: null,
  });

  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  const isActive = (href) => pathname === href;

  const navLinkClass = (href) =>
    `transition-all font-semibold text-xs sm:text-sm whitespace-nowrap pb-0.5 border-b-2 ${
      isActive(href)
        ? 'text-[#3D2516] border-[#3D2516]'
        : 'text-[#3D2516]/70 hover:text-[#3D2516] border-transparent'
    }`;

  return (
    <nav className="bg-[#FFEFD5] border-b border-[#3D2516]/10 text-[#3D2516] sticky top-0 z-50 backdrop-blur-md bg-opacity-95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          <Link href="/" className="flex items-center gap-2 group select-none">
            <div className="p-1.5 rounded-xl transition-transform duration-300 group-hover:scale-110">
              <Image src="/paw.png" alt="pawsy" height={46} width={46} className="object-contain" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight block">Pawsy</span>
              <span className="text-[10px] text-[#3D2516]/60 font-medium tracking-widest -mt-1 block">
                Platform
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-5 sm:gap-8 overflow-x-auto no-scrollbar py-2 max-w-[60%] sm:max-w-none">
            <Link href="/" className={navLinkClass('/')}>Home</Link>
            <Link href="/all-pets" className={navLinkClass('/all-pets')}>All Pets</Link>
            {user && (
              <>
                <Link href="/dashboard/my-requests" className={navLinkClass('/dashboard/my-requests')}>
                  My Requests
                </Link>
                <Link href="/dashboard/add-pet" className={navLinkClass('/dashboard/add-pet')}>
                  Add Pet
                </Link>
              </>
            )}
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="relative" ref={dropdownRef}>

                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 hover:bg-[#3D2516]/5 px-3 py-2 rounded-xl transition-all duration-200 focus:outline-none"
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover ring-2 ring-[#3D2516]/20"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#3D2516] text-[#FFEFD5] flex items-center justify-center text-sm font-bold shadow-inner">
                      {user.name?.[0]?.toUpperCase() ?? <FaUserCircle />}
                    </div>
                  )}
                  <span className="hidden sm:block text-sm font-bold max-w-[120px] truncate">
                    {user.name}
                  </span>
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-[#3D2516]/10 rounded-2xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-3 border-b border-stone-100">
                      <p className="text-sm font-bold text-[#3D2516] truncate">{user.name}</p>
                      {user.email && (
                        <p className="text-xs text-stone-400 truncate mt-0.5">{user.email}</p>
                      )}
                    </div>
                    
                    <Link
                      href="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#3D2516] hover:bg-[#FFEFD5]/40 transition-colors"
                    >
                      <FaTachometerAlt className="text-xs opacity-70" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors border-t border-stone-50 mt-1"
                    >
                      <FaSignOutAlt className="text-xs opacity-90" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>


     <div  className='flex gap-2.5'>
      <Link href="/auth/login">
    <button className="text-[#3D2516] border-2 border-[#3D2516] hover:bg-[#3D2516] hover:text-[#FFEFD5] font-bold px-5 py-2 rounded-xl transition-all duration-300 text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap">
      Sign In <FaPaw className="text-[10px] sm:text-xs" />
    </button>
  </Link>

  <Link href="/auth/signup">
    <button className="bg-[#3D2516] text-[#FFEFD5] hover:bg-[#52321E] font-bold px-5 py-2.5 rounded-xl transition-all duration-300 text-xs sm:text-sm shadow-sm flex items-center gap-2 whitespace-nowrap">
      Sign Up <FaPaw className="text-[10px] sm:text-xs" />
    </button>
  </Link>
     </div>

     </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;




