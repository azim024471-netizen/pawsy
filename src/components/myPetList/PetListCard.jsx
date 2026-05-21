'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye,  FaTrash, FaClipboardList, FaMapMarkerAlt, FaPaw } from 'react-icons/fa';
import EditPetModal from './EditPetModal';

const PetListCard = ({ pet }) => {

    const {_id,petName, species,breed,age, gender, image,healthStatus,   vaccinationStatus,    location, adoptionFee } = pet;

    return (
        <div className="bg-[#3a2d17] border-b-3 border-r-2
         border-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.03] 
         transition-all duration-600">


            <div className="relative w-full h-64">
                <Image
                    src={image}
                    alt={petName}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5 flex flex-col gap-4">

                <div>
                    <h2 className="text-2xl font-extrabold text-[#FFEFD5] 
                    flex items-center gap-2">
                        <FaPaw />
                        {petName}
                    </h2>

                    <p className="text-[#FFEFD5]/70 text-sm mt-1">
                        {breed} • {species} • {gender}
                    </p>
                </div>

                <div className="space-y-2  flex justify-between text-sm text-[#FFEFD5]/85">

                  <div className='space-y-1'>
                      <p>
                        <span className="font-bold text-[#FFEFD5]">Age:</span> {age}
                    </p>

                    <p>
                        <span className="font-bold text-[#FFEFD5]">Health:</span> {healthStatus}
                    </p>
                  </div>

                    <div className='space-y-1'>
                        <p>
                        <span className="font-bold text-[#FFEFD5]">Vaccination:</span> {vaccinationStatus}
                    </p>

                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        {location}
                    </p>
                    </div>

                </div>

                <div className="bg-[#FFEFD5] text-[#3a2d17] py-2 rounded-sm text-center font-extrabold  shadow-md">
                    ${adoptionFee}
                </div>

                 <div className="grid grid-cols-2 gap-2">

                    <Link href={`/pet-requests/${_id}`} className="w-full">
                        <button className="w-full bg-white/5 hover:bg-emerald-600 text-[#FFEFD5] hover:text-white font-bold py-1.5 rounded-lg transition-all border border-emerald-600/30 flex items-center justify-center gap-1 text-[11px] active:scale-[0.97]">
                            <FaClipboardList className="text-emerald-400 group-hover:text-white text-xs" />
                            Requests
                        </button>
                    </Link>
 
           

                    <Link href={`/all-pets/${_id}`} className="w-full">
                        <button className="w-full bg-white/5 hover:bg-green-600 text-[#FFEFD5
                         hover:text-white font-bold py-1.5 rounded-lg transition-all border border-green-900 
                         flex items-center justify-center gap-1 text-[11px] active:scale-[0.97]">
                            <FaEye className="text-green-400 text-xs" />
                            View
                        </button>
                    </Link>

            
                      <EditPetModal pet={pet}></EditPetModal>
 
                    <button
                        className="w-full bg-white/5 hover:bg-red-600 text-[#FFEFD5] hover:text-white 
                        font-bold py-1.5 rounded-lg transition-all border border-red-600/30 flex items-center
                         justify-center gap-1 text-[11px] active:scale-[0.97]"
                    >
                        <FaTrash className="text-red-400 text-xs" />
                        Delete
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PetListCard;


