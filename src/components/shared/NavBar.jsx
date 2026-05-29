'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaPaw, FaChevronDown, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { Avatar, toast } from '@heroui/react';
import { RxDropdownMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';
import { PiSignInBold } from 'react-icons/pi';
import { LuUserRoundPen } from 'react-icons/lu';

const Navbar = () => {

  const router = useRouter();

  const handelSignOut = async () => {
    setDropdownOpen(false);
    try {
      await authClient.signOut();
      router.push('/');
      toast.success('Sign Out Successful!!!', {
        description: "You have been logged out successfully.",
        indicator: true,
      })
    } catch (error) {

      toast.danger('Sign Out Failed!', {
        description: error.message || "Something went wrong during sign out.",
        indicator: true,
      });

    }
  };


  const {
    data: session,
    isPending,
  } = authClient.useSession()
  const user = session?.user;
  // console.log(user, isPending, 'from navvvvvvvvvvvvvvvv')


  const dropdownRef = useRef(null);

  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const isActive = (href) => pathname === href;

  const navLinkClass = (href) =>
    `transition-all font-semibold text-xs sm:text-sm whitespace-nowrap pb-0.5 border-b-2 ${isActive(href)
      ? 'text-[#3D2516] border-[#3D2516]'
      : 'text-[#3D2516]/70 hover:text-[#3D2516] border-transparent'
    }`;



  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const [menu, setMenu] = useState(true);


  return (
    <nav className="bg-[#FFEFD5] border-b border-[#3D2516]/10 text-[#3D2516] sticky top-0 z-50 backdrop-blur-md
     bg-opacity-95 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">


          {/* left ///////////// */}
          <div className="flex items-center gap-1 md:gap-2 group select-none">

            <div className="p-1.5 rounded-xl transition-transform duration-300 group-hover:scale-110 
             
            ">
              <Image src="/paw.png" alt="pawsy" height={46} width={46} className="object-contain"

              />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight block">Pawsy</span>
              <span className="text-[10px] text-[#3D2516]/60 font-medium tracking-widest -mt-1 block">
                Platform
              </span>
            </div>

          </div>
          <div className="flex items-center gap-5 sm:gap-8 overflow-x-auto no-scrollbar py-2 max-w-[60%] sm:max-w-none">
            <Link href="/" className={navLinkClass('/')}>Home</Link>
            <Link href="/all-pets" className={navLinkClass('/all-pets')}>All Pets</Link>
            {user && (
              <>

                <Link href="/add-pets" className={`${navLinkClass('/add-pets')} hidden md:block`}>
                  Add Pet
                </Link>
              </>
            )}
          </div>


          <div className="flex items-center">

            {
              isPending ? <>
                <div className="flex items-center gap-1 md:gap-2 bg-[#3D2516]/5 md:px-4 px-3 py-1 md:py-2 rounded-xl border
               border-[#3D2516]/10">
                  <FaPaw className="text-[#3D2516] md:text-sm text-xs animate-bounce" />
                  <span className="md:text-xs  text-[10px] font-extrabold text-[#3D2516] tracking-wide animate-pulse">
                    Loading...
                  </span>
                </div>
              </> :
                <>
                  {user ? (
                    <div className="relative" ref={dropdownRef}>

                      {
                        isPending ?
                          <>
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#3D2516]/5 animate-pulse rounded-xl w-32 h-10">
                              <div className="w-8 h-8 bg-[#3D2516]/20 rounded-full">loading.......</div>
                              <div className="w-16 h-3 bg-[#3D2516]/20 rounded-md hidden sm:block">wajit</div>
                            </div>
                          </> : <>

                            <button
                              onClick={() => setDropdownOpen((prev) => !prev)}
                              className="flex items-center gap-2 hover:bg-[#3D2516]/5 px-3 py-2 rounded-xl transition-all 
                  duration-200 "
                            >


                              <Avatar size="md">
                                <Avatar.Image
                                  referrerPolicy='no-referrer'
                                  alt="Medium Avatar"
                                  src={user.image}
                                />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                              </Avatar>
                              <span className="hidden sm:block text-sm font-bold max-w-30 truncate">
                                {user.name}
                              </span>

                              <FaChevronDown
                                className={`text-[10px] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                              />



                            </button>
                          </>
                      }

                      {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-52 bg-white border border-[#3D2516]/10 rounded-2xl shadow-xl overflow-hidden py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-4 py-3 border-b border-stone-100">
                            <p className="text-sm font-bold text-[#3D2516] truncate">{user.name}</p>
                            <p className="text-xs text-stone-400 truncate mt-0.5">{user.email}</p>
                          </div>

                          <Link
                            href="/dashboard/my-requests"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#3D2516] hover:bg-[#FFEFD5]/40 
                      transition-colors"
                          >
                            <FaTachometerAlt className="text-xs opacity-70" />
                            My Requests
                          </Link>

                          <Link
                            href="/dashboard/listings"
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#3D2516] hover:bg-[#FFEFD5]/40
                       transition-colors"
                          >
                            <FaTachometerAlt className="text-xs opacity-70" />
                            My Listings                    </Link>

                          <Link
                            href="/add-pets"
                            onClick={() => setDropdownOpen(false)}
                            className="flex md:hidden items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#3D2516] hover:bg-[#FFEFD5]/40 transition-colors"
                          >
                            <FaTachometerAlt className="text-xs opacity-70" />
                            Add Pet  </Link>




                          <button
                            onClick={handelSignOut}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors border-t border-stone-50 mt-1"
                          >
                            <FaSignOutAlt className="text-xs opacity-90" />
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  )

                    : (
                      <>
                        <div className='md:hidden relative'>


                          {
                            menu ? <RxDropdownMenu onClick={() => setMenu(!menu)} size={30} />
                              : <CgClose onClick={() => setMenu(!menu)} size={30} />
                          }
                          {!menu && (
                            <div className="absolute -right-3 mt-6 w-40 bg-white border border-[#3D2516]/10 rounded-2xl 
    shadow-xl overflow-hidden py-1 z-50 animate-in fade-in  slide-in-from-top-4 duration-650">



                              <Link href="/auth/signup"
                                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#381905]
         hover:bg-[#FFEFD5]/40 transition-colors"
                              >
                                <LuUserRoundPen />

                                Sign Up
                              </Link>

                              <Link
                                href="/auth/signin"
                                className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#f0630b] hover:bg-[#FFEFD5]/40
         transition-colors"
                              >
                                <PiSignInBold />
                                Sign In
                              </Link>


                            </div>
                          )}


                        </div>

                        <div className='md:flex hidden gap-2.5'>
                          <Link href="/auth/signin">
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
                </>
            }
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;


