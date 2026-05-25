



import Link from "next/link";
import { FaPaw } from "react-icons/fa"; 
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#ebcdbb] text-white">
      <div className="flex flex-col items-center bg-[#18120f] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md max-w-lg w-full text-center">
        
        <div className="flex items-center  justify-center gap-4 text-7xl
         md:text-8xl font-black text-[#FFEFD5]">
          <span className="drop-shadow-[0_4px_12px_rgba(255,239,213,0.2)]">4</span>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
            <FaPaw className="text-5xl md:text-6xl text-[#FFEFD5]/80 rotate-12" />
          </div>
          
          <span className="drop-shadow-[0_4px_12px_rgba(255,239,213,0.2)]">4</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mt-8 text-[#FFEFD5]">
          Oops! Lost in the Woods?
        </h1>

        <p className="text-[#ebd8c5]/70 text-sm md:text-base mt-3 leading-relaxed max-w-sm">
          We couldn't find the page you were looking for. Maybe our furry friends 
          hidden it or buried it in the backyard! 
        </p>

        <Link 
          href="/" 
          className="mt-8 inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-[#FFEFD5] text-[#3D2516] font-bold text-sm hover:bg-[#FFEFD5]/90 active:scale-95 transition-all shadow-lg group"
        >
          <HiOutlineArrowNarrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;