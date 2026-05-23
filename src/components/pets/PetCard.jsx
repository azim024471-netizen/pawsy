

// "_id": "6a0cc395a4608ddaba434c1d",
// "petName": "micky",
// "species": "cat",
// "breed": "Goldren",
// "age": "2 yeats",
// "gender": "female",
// "image": "https://static.vecteezy.com/system/resources/thumbnails/021/185/682/small/man-in-motocross-helmet-racer-rider-cyclist-concept-suitable-for-avatar-profiles-t-shirt-design-print-sticker-poster-vector.jpg",
// "healthStatus": "good",
// "vaccinationStatus": "Partially Vaccinated",
// "location": "dhaka",
// "adoptionFee": "442",
// "ownerEmail": "david12@gmail.com",
// "description": "this is my fav pet",
// "ownerId": "6a0c047e3cfd01c480a84997"


'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { IoLocationOutline, IoLogoUsd } from 'react-icons/io5';
import { MdOutlineCalendarMonth, MdOutlinePets } from 'react-icons/md';

const PetCard = ({ pet }) => {
    const {
        _id,
        petName,
        breed, age, gender, image, healthStatus, vaccinationStatus, location, adoptionFee } = pet;
    return (
        <div className="bg-[#271709] backdrop-blur-md rounded-xl border-l-4 border-white overflow-hidden group hover:border-[#FFEFD5]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

            <div className="relative rounded-xl h-52 w-full overflow-hidden ">
                <Image
                    alt={petName}
                                      
                    src={image}


                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />





                <span className="absolute bottom-3 right-3 bg-[#2A190E]/80 backdrop-blur-sm text-[#FFEFD5] text-xs font-bold px-3 py-1 rounded-xl border border-white/10 flex items-center gap-0.5">
                    <IoLogoUsd className="text-sm" />
                    {Number(adoptionFee) === 0 ? "Free" : `${adoptionFee}`}
                </span>
            </div>


            <div className="p-5 flex flex-col grow justify-between">
                <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-extrabold text-[#FFEFD5] tracking-tight truncate">
                            {petName}
                        </h3>
                        <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-lg uppercase tracking-wider border ${gender?.toLowerCase() === 'female'
                                ? 'bg-pink-500/10 text-pink-300 border-pink-500/20'
                                : 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                            }`}>
                            {gender}
                        </span>
                    </div>

                    <p className="text-white/60 text-xs font-medium mb-4 flex items-center gap-1.5">
                        <MdOutlinePets className="text-[#FFEFD5]/40 text-sm" />
                        {breed || "Unknown Breed"}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-5">

                        <div className="flex items-center gap-2 bg-[#2A190E]/40 p-2 rounded-xl border-r-4 border-l-2 border-[#FFEFD5]/70">
                            <MdOutlineCalendarMonth className='text-[#FFEFD5]/60 text-lg shrink-0' />
                            <div className="truncate">
                                <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Age</p>
                                <p className="text-xs font-bold text-white/90 truncate">{age}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-[#2A190E] p-2 rounded-xl border-r-4 border-l-2 border-[#FFEFD5]/70">
                            <IoLocationOutline className='text-[#FFEFD5]/60 text-lg shrink-0' />
                            <div className="truncate">
                                <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Location</p>
                                <p className="text-xs font-bold uppercase text-white/90 truncate">{location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                        <span className="text-[10px] font-medium bg-emerald-500/10
                         text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                            ✓ {vaccinationStatus || "Not Verified"}
                        </span>
                        {healthStatus && (
                            <span className="text-[10px] font-medium bg-amber-500/10
                             text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded-md truncate max-w-37">
                                {healthStatus}
                            </span>
                        )}
                    </div>
                </div>

                <div>
                    <Link href={`/all-pets/${_id}`}>
                        <button className="w-full text-[#FFEFD5] hover:bg-[#FFEFD5] hover:text-[#3D2516] bg-[#3D2516]
                         font-extrabold py-2.5 rounded-xl transition-all duration-300 flex items-center
                          justify-center gap-2 text-sm shadow-sm shadow-[#FFEFD5]">
                            View Details <FaPaw className="text-xs" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PetCard;