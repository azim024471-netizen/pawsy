import React from 'react';
import PetCard from '../pets/PetCard';
import { FaPaw } from 'react-icons/fa';
import Link from 'next/link';

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
        cache: 'no-store'
    });
    const featuredPets = await res.json();

    return (
        <div className="relative py-20 px-4 bg-linear-to-br from-[#0f0f0c] via-[#291f1a] 
         to-[#3b372c] sm:px-8 overflow-hidden"> 
        
        
            
            

            <div className="max-w-7xl mx-auto   ">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center  mb-6">
                        <div className="bg-[#e6e0d2] p-7 text-[#3D2516] text-4xl rounded-full">
                           
                   <FaPaw></FaPaw>
                        </div>
                    </div>

                    <h2 className="text-5xl sm:text-6xl font-black text-[#FFEFD5] tracking-tighter 
                     mb-4">
                        Featured Pets
                    </h2>

                    <p className="text-[#FFEFD5]/80 text-lg max-w-lg">
                        Carefully chosen companions ready to bring love and joy into your home
                    </p>

                    <Link href="/all-pets" className="mt-8">
                        <button className="group flex items-center gap-3 bg-[#FFEFD5]
                         hover:bg-[#F5D89A] 
                            text-[#3D2516] font-bold text-sm tracking-widest 
                            px-8 py-4 rounded-2xl transition-all duration-300 
                            hover:scale-105 hover:shadow-xl hover:shadow-[#000000]">
                            <FaPaw className="group-hover:rotate-12 transition-transform" />
                            VIEW ALL PETS
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                    {featuredPets.map(pet => (
                        <PetCard pet={pet} key={pet?._id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;