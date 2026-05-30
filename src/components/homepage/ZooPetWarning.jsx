'use client'
import React, { useState } from 'react';
import { FaTriangleExclamation, FaLockOpen, FaUsers } from 'react-icons/fa6';

const ZooPetWarning = () => {
    const [supporterCount, setSupporterCount] = useState(99999);
    const [hasSupported, setHasSupported] = useState(false);

    const handleSupportClick = () => {
        if (!hasSupported) {
            setSupporterCount(prev => prev + 1);
            setHasSupported(true);
        }
    };

    return (
        <div className="w-full bg-[#072036] py-20 md:py-28 border-t border-b border-[#1e293b]/50 relative overflow-hidden">
            
            <div className="absolute -top-10 -right-10 text-slate-800/20 text-9xl font-black 
            select-none pointer-events-none">
                <FaLockOpen />
            </div>

            <section className="px-4 md:px-8 max-w-4xl mx-auto text-center space-y-10">
                
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 text-amber-500 bg-amber-500/10 
                    border border-amber-500/30 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full">
                        <FaTriangleExclamation className="text-sm animate-bounce" /> ETHICAL AWARENESS
                    </span>
                </div>

                <div className="bg-[#020c20] border border-slate-800 p-6 rounded-2xl max-w-sm mx-auto
                 shadow-2xl transition-all">
                    <div className="flex items-center justify-center gap-3 text-slate-400 text-xs uppercase tracking-widest font-black mb-1">
                        <FaUsers className="text-sm text-[#2dd4bf]" /> Live Support Count
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-white tracking-wider animate-pulse">
                        {supporterCount.toLocaleString()}
                    </div>
                    <p className="text-stone-400 text-[11px] mt-1">
                        People stood against wildlife captivity
                    </p>
                </div>

                <div className="space-y-2">
                    <p className="text-[#ee1149] text-xs uppercase tracking-widest font-medium">
                        — Traditional Wisdom —
                    </p>
                    <blockquote className="text-xl md:text-3xl font-serif font-bold text-[#f59e0b] italic leading-relaxed max-w-2xl mx-auto">
                        "Wild animals belong to the forest, just as children belong in the arms of their mother."
                    </blockquote>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                        Caging Freedom for Entertainment <br />
                        <span className="text-red-500/90">Is Simply Unfair.</span>
                    </h3>
                    
                    <div className="space-y-4 text-stone-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        <p>
                            Wild animals are born to roam free, hunt, and thrive in their natural habitats. Trapping these majestic creatures behind cold iron bars and stripping away their ultimate freedom just for human amusement is a profound injustice. A concrete enclosure can never replace the vastness of the wild.
                        </p>
                        <p>
                            At <span className="text-[#2dd4bf] font-bold">Pawsy</span>, we firmly believe that true entertainment should never come at the cost of another living being's freedom. Let us speak up against wildlife captivity, support genuine conservation reserves, and respect their right to live freely in nature.
                        </p>
                    </div>
                </div>

                <div className="pt-4">
                    <button 
                        onClick={handleSupportClick}
                        disabled={hasSupported}
                        className={`inline-flex items-center gap-2.5 font-black text-sm px-8 py-4 rounded-xl active:scale-95 transition-all shadow-lg text-white
                            ${hasSupported 
                                ? 'bg-emerald-600 cursor-not-allowed shadow-emerald-950/50' 
                                : 'bg-red-500 hover:bg-red-600 shadow-red-950/50 group'
                            }`}
                    >
                        <FaLockOpen className={`text-base ${!hasSupported && 'group-hover:-translate-y-0.5 transition-transform'}`} />
                        {hasSupported ? 'Thank You For Your Support!' : 'Click to Support Wildlife Freedom'}
                    </button>
                </div>

            </section>
        </div>
    );
};

export default ZooPetWarning;