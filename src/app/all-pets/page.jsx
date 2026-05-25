


import PetCard from '@/components/pets/PetCard';
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import SearchAndFilter from "@/components/searchAndFilter/SearchAndFilter";

const AllPets = async ({ searchParams }) => {

    const sParams = await searchParams;
    const search = sParams?.search || "";
    const species = sParams?.species || "";

    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (species) params.append('species', species);

    
    const res = await fetch(`http://localhost:1234/allpets?${params.toString()}`, { cache: 'no-store' });
    const allpets = await res.json();
    
    const totalPets = allpets.length;

    return (
        <div className="min-h-screen bg-[#3D2516] text-white p-4 sm:p-8 md:p-12 ">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center md:text-left mb-10 border-b border-white/10 pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className='space-y-4 flex flex-col items-center md:items-start'>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="bg-[#FFEFD5] text-[#3D2516] p-1.5 rounded-lg text-sm shadow-md">
                                <FaPaw />
                            </span>
                            <h4 className="text-xs tracking-widest font-bold text-[#FFEFD5]/70 uppercase">PAWSY ADOPTION</h4>
                        </div>
                        
                        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#FFEFD5]">
                            Meet Your New Best Friend
                        </h1>

                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl backdrop-blur-sm inline-block self-center md:self-auto">
                            <p className="text-sm font-medium text-white/80">
                                <span className="text-[#FFEFD5] font-extrabold text-lg mr-1">{totalPets}</span> 
                                lovely pets available for adoption
                            </p>
                        </div>
                    </div>

                    <SearchAndFilter />
                </div>

                {totalPets === 0 ? (
                    <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl">
                        <p className="text-lg font-medium text-white/60">No pets available right now. Check back later!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {allpets.map((pet) => (
                            <PetCard key={pet._id} pet={pet} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default AllPets;

