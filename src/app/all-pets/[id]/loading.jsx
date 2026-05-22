import React from 'react';
import { FaPaw } from 'react-icons/fa';

const LoadingPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#ece4d9] text-slate-800">
            <div className="animate-spin rounded-full h-16 w-16 border-t-6 border-b-4 border-[#1f170c]
             mb-4"></div>
            
            <h1 className="text-2xl font-bold flex items-center gap-2 tracking-wide animate-pulse">
                Loading details... <FaPaw className="text-[#1f170c]" />
            </h1>
            <p className="text-slate-500 text-sm mt-2">Fetching tail-wagging moments</p>
        </div>
    );
};

export default LoadingPage;