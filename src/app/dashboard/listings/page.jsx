// done jwt ////////////////////////

import PetListCard from '@/components/myPetList/PetListCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { FaPaw, FaCheckCircle, FaHeart } from 'react-icons/fa';

const MyListingPage = async () => {
    

     const session = await auth.api.getSession({
    headers: await headers()
  });
    

  
      const {token} = await auth.api.getToken({
          headers : await headers()
      })
        
    //   const token = tokenObj?.token;

//   const token = session?.token;
  const userId = session?.user?.id
   
//   console.log(userId)
 

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/myPets/${userId}`,
        {
            cache: 'no-store',
             headers :{
                         'authorization' :`Bearer ${token}`
                    }
        }
        
    );

    const petLists = await res.json();

const totalListings = Array.isArray(petLists) ? petLists.length : 0;
   


    return (
        <div className="min-h-screen bg-[#3D2516] text-white p-4 sm:p-6 lg:p-8 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="bg-[#29170d] backdrop-blur-lg border border-[#311d10]
                rounded-3xl p-6 sm:p-8 shadow-2xl mb-8">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl font-black text-[#FFEFD5] tracking-tight">
                                My Listings
                            </h1>
                            <p className="text-[#8f8475] mt-1.5 text-xs sm:text-sm font-medium">
                                Manage and track your listed pets for adoption
                            </p>
                        </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">

                            
    <div className="bg-[#2A190E]/60 rounded-2xl p-4 border border-[#3D2516] shadow-lg flex items-center gap-3.5 min-w-45">
                                <div className="w-11 h-11 rounded-xl bg-[#FFEFD5] flex items-center justify-center text-[#3D2516]
                                 text-lg shadow-md shrink-0">
                                    <FaPaw />
                                </div>
                                <div >
                                    <p className="text-[#FFEFD5]/60 text-[10px] uppercase tracking-wider font-bold">
                                        Total Listings
                                    </p>
                                    <h2 className="text-2xl font-black text-[#FFEFD5] mt-0.5">
                                        {totalListings}
                                    </h2>
                                </div>
                            </div>

                            <div className="bg-[#2A190E]/60 rounded-2xl p-4 border border-[#3D2516] shadow-lg flex items-center
                             gap-3.5 min-w-45">
                                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border
                                 border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg shrink-0">
                                    <FaCheckCircle />
                                </div>
                                <div >
                                    <p className="text-[#FFEFD5]/60 text-[10px] uppercase tracking-wider font-bold">
                                        Available
                                    </p>
                                    <h2 className="text-2xl font-black text-emerald-400 mt-0.5">
                                        5
                                    </h2>
                                </div>
                            </div>

        <div className="bg-[#2A190E]/60 rounded-2xl p-4 
        border border-[#3D2516] shadow-lg flex items-center gap-3.5 min-w-45">
                                <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex
                                 items-center justify-center text-pink-400 text-lg shrink-0">
                                    <FaHeart />
                                </div>
                        <div className="truncate">
                                    <p className="text-[#FFEFD5]/60 text-[10px] uppercase tracking-wider font-bold">
                                        Adopted
                            </p>
                        <h2 className="text-2xl font-black text-pink-400 mt-0.5"> 45 </h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {
                    petLists.length === 0 ? (
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10
                         text-center shadow-xl backdrop-blur-sm">
                            <div className="w-25 h-25 bg-[#FFEFD5] border border-white/10 
                            rounded-xl flex items-center justify-center mx-auto mb-4 text-white/40">
                               <Image height={60} width={60} src={'/paw.png'} alt='logo'></Image>
                            </div>
                            <h2 className="text-xl font-bold text-[#FFEFD5]">
                                No Pets Listed Yet
                            </h2>
                            <p className="text-[#FFEFD5]/50 mt-1 text-sm font-medium">
                                Start adding lovely pets to make them available for adoption.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                petLists.map((pet) => (
                                    <PetListCard
                                        key={pet._id}
                                        pet={pet}
                                    />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyListingPage;