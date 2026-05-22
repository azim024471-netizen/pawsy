import Link from 'next/link';
import React from 'react';
import { PiWarningOctagon } from 'react-icons/pi';

const NotFoundPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-50 text-slate-800 px-4">
            <div className="flex items-center gap-2 text-8xl font-black text-orange-500 animate-bounce">
                <span>4</span>
                <PiWarningOctagon className="text-7xl text-orange-400 animate-pulse" />
                <span>4</span>
            </div>

            <h1 className="text-3xl font-bold mt-6 text-center">Oops! Page Not Found</h1>
            <p className="text-slate-500 text-center mt-2 max-w-md">
                We couldn't find the page you were looking for. Maybe our furry friends buried it in the backyard! 🐾
            </p>

            <Link
                href="/" 
                className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;