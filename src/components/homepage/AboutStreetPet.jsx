import React from 'react';
import Image from 'next/image';
import { FaHandshakeAngle, FaHeartCircleCheck } from 'react-icons/fa6';

const AboutStreetPet = () => {
    return (
        <div className="w-full bg-[#20120e] py-20 md:py-28 border-t border-b border-[#362a26]/40">
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <span className="inline-flex items-center gap-2 text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/30 font-semibold uppercase tracking-widest text-xs px-3 py-1.5 rounded-full">
                            <FaHeartCircleCheck className="text-sm" /> Be Their Hope
                        </span>

                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                            The Untold Stories of <br />
                            <span className="text-[#f59e0b]">Our Street Companions</span>
                        </h2>

                        <div className="space-y-4 text-stone-300 text-sm md:text-base leading-relaxed font-normal">
                            <p>
                                If you look closely at the streets, alleys, and sidewalks around us, you will
                                 find hundreds of neglected animals. Enduring scorching heat, heavy rainfall, 
                                 and biting winter cold, these speechless creatures fight a harsh daily battle just to survive.
                                  They often look towards us with hopeful eyes for a simple scrap of food or a drop of clean water.
                            </p>
                            <p>
                                Because they cannot speak, they cannot voice their pain or hunger. Sadly,
                                 many people treat them with unnecessary cruelty, which is deeply heartbreaking. 
                                 Yet, with just a little compassion, a small portion of leftover food, or a tiny safe
                                  corner to rest, these stray animals can transform into the most loyal and loving companions
                                   of your life.
                            </p>
                            <p className="text-[#f59e0b]  pl-4 italic">
                                "Street dogs and cats are not elements of nuisance; they are an integral part of our
                                 society and ecosystem. Keeping them safe and alive is a responsibility that belongs to 
                                 us all."
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="inline-flex items-center gap-2.5 bg-[#2dd4bf] text-[#1a1412] 
                            font-black text-sm px-7 py-3.5 rounded-xl hover:bg-[#2dd4bf]/80 active:scale-95 transition-all
                             shadow-lg shadow-[#2dd4bf]/5 group">
                                <FaHandshakeAngle className="text-lg group-hover:translate-x-1 transition-transform" />
                                Become a Street Volunteer
                            </button>
                        </div>
                    </div>

                  <div className="lg:col-span-5 w-full h-auto overflow-hidden 
                  rounded-2xl shadow-md shadow-[#e0e0dd] group transition-all duration-500">
    <Image 
        src="/images/streetpet.jpg" 
        alt="Street Pet and Human Interaction"
        width={500}       
        height={600}      
        priority
        className="w-full h-full object-cover filter grayscale-15 group-hover:grayscale-0 
        transition-all duration-700 transform group-hover:scale-102"
    />
</div>
                </div>
            </section>
        </div>
    );
};

export default AboutStreetPet;