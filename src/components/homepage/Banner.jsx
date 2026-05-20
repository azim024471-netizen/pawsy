'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPaw } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className="bg-[#140d04] text-[#eee2da] min-h-[600px] flex items-center py-12 lg:py-20 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* বাম পাশের টেক্সট এরিয়া (৫ কলাম) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-black tracking-tight leading-[1.1]">
                Find Your New <br />
                Best Friend <br />
                <span className="text-[#4eee89] inline-flex items-center gap-2">
                  Today <FaPaw className="text-3xl lg:text-5xl rotate-12" />
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#eee2da]/80 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                Every rescue pet has a unique story. Join thousands of happy families and 
                give these beautiful souls the loving home they truly deserve.
              </p>
            </div>
            
            <div className="pt-2">
              <Link href="/all-pets">
                <button 
                className="group relative bg-[#3D2516] text-[#FDF6EC] font-bold px-10 py-4 rounded-2xl transition-all duration-300 text-base shadow-xl flex items-center gap-3 mx-auto lg:mx-0 transform hover:scale-105 hover:bg-[#52321E]">
                  Adopt Now
                  <FaPaw className=" group-hover:scale-125 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative flex justify-center items-center w-full h-112 sm:h-137">
            
            <div className="absolute left-0 top-1/4 animate-bounce duration-3000ms">
               <FaPaw className="text-[#FDF6EC]/50 text-4xl" />
            </div>
            <div className="absolute right-10 bottom-20">
               <FaPaw className="text-[#FDF6EC]/50 text-6xl -rotate-45" />
            </div>

            <div className="relative w-full max-w-2xl h-full flex items-center justify-center gap-6">
              
              <div className="flex flex-col gap-6 w-1/2">
                
                <div className="relative w-full aspect-square max-w-66 rounded-full overflow-hidden border-8 border-white shadow-2xl 
                ml-auto hover:rotate-2 transition-transform duration-500">
                  <Image 
                    src="/bannerImage/cat.jpg" 
                    alt="Adopt a Cat" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="relative w-full aspect-square max-w-65 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl ml-auto hover:-rotate-2 transition-transform duration-500">
                  <Image 
                    src="/bannerImage/bird.jpg" 
                    alt="Adopt a Rabbit" 
                    fill 
                    className="object-cover"
                  />
                </div>
                
              </div>

              <div className="w-1/2 relative h-full flex items-center">
                
                <div className="relative w-full h-[80%] max-w-65 rounded-t-full rounded-b-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/bannerImage/rabbit.jpg" 
                    alt="Adopt a Bird" 
                    fill 
                    className="object-cover"
                  />
                  
                  <div className="absolute bottom-10 left-0 right-0 text-center bg-white/20 backdrop-blur-md py-2">
                    <span className="text-white font-bold text-sm tracking-widest">WAITING FOR YOU</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-10 bg-[#15803D] text-white px-6 py-2 rounded-full rotate-[-15deg] shadow-lg border-2 border-white">
                  <span className="text-lg font-black tracking-tighter">ADOPT US!</span>
                </div>
                
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;