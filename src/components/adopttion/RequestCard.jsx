
"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RequestCard = ({ request }) => {
    const router = useRouter();
    const { _id, petName, petId, requestedAt, pickup_date, status } = request;

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 items-center px-6 py-5 md:py-4 transition-colors
         hover:bg-[#271E10]/40">
            
            <div className="flex items-center gap-2">
                <span className="md:hidden text-xs font-bold text-[#D4C3A3] uppercase">Pet Name:</span>
                <span className="font-bold text-[#FFF] text-sm md:text-base">{petName}</span>
            </div>

            <div className="flex items-center md:block">
                <span className="md:hidden text-xs font-bold text-[#D4C3A3] uppercase mr-2">Request Date:</span>
                <span className="text-[#D4C3A3] text-sm">{requestedAt}</span>
            </div>

            <div className="flex items-center md:block">
                <span className="md:hidden text-xs font-bold text-[#D4C3A3] uppercase mr-2">Pickup Date:</span>
                <span className="text-[#D4C3A3] text-sm">{pickup_date}</span>
            </div>

            <div className="flex items-center justify-between md:justify-center">
                <span className="md:hidden text-xs font-bold text-[#D4C3A3] uppercase">Status:</span>
                <span className={`text-xs px-3 py-1 rounded-full font-medium border capitalize `}>
                    {status}
                </span>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 md:pt-0">
                <Link 
                    href={`/all-pets/${petId}`}
                    className="px-3 py-1.5 text-xs font-semibold bg-[#271E10] hover:bg-[#3A2E1A]
                     text-[#FACC15] border border-[#CA8A04]/40 rounded-lg transition-all flex items-center gap-1 "
                >
                     View
                </Link>
                
                <button 
                    // onClick={handleCancelRequest}
                    className="px-3 py-1.5 text-xs font-semibold bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/20 rounded-lg transition-all shadow-sm active:scale-95"
                >
                    Cancel
                </button>
            </div>

        </div>
    );
};

export default RequestCard;