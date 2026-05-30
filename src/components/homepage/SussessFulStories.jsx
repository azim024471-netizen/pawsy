import Image from 'next/image';
import React from 'react';
import { FaCat, FaDog, FaHeart, FaUserCheck } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';

const SussessFulStories = () => {
    const stories = [
        {
            id: 1,
            image: "/images/customer1.jpg",
            date: "Adopted: Jan 04, 2026",
            tag: "CAT ADOPTION",
            icon: <FaCat className="text-amber-500 text-sm" />,
            title: "Finding Peace After an Injury: Luna's Journey",
            description: "Luna was rescued from the streets with an injured paw. After being listed here, a loving couple adopted her. She is now fully recovered, healthy, and fills their entire home with endless purrs."
        },
        {
            id: 2,
            image: "/images/customer2.jpg",
            date: "Adopted: Nov 12, 2025",
            tag: "DOG ADOPTION",
            icon: <FaDog className="text-amber-500 text-sm" />,
            title: "From a Lonely Shelter Cage to a Backyard Paradise",
            description: "Rocky spent over 6 months waiting for a home. Thanks to this platform, the Rahman family found him, and now he spends his days chasing balls and sleeping safely at the foot of their bed."
        },
        {
            id: 3,
            image: "/images/customer3.jpg",
            date: "Adopted: Feb 18, 2026",
            tag: "DOG ADOPTION",
            icon: <FaDog className="text-amber-500 text-sm" />,
            title: "A Brave New Journey for Buster",
            description: "Buster was terrified of loud noises and human contact when he first arrived at the shelter. Today, with consistent love and a patient adopter, he has become the most playful guardian of his new family."
        }
    ];

    return (
        <div className='w-full bg-linear-to-br from-[#0f0f0c] via-[#1c1610] to-[#291f1a] py-16 md:py-24'>
            <section className="px-4 md:px-8 max-w-7xl mx-auto">
            
                <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="inline-flex items-center gap-2 text-[#fddca3] bg-[#f59e0b]/10 border border-[#f59e0b]/30 font-medium uppercase tracking-widest text-xs px-3 py-1.5 rounded-full mb-4">
                            <FaHeart className="animate-pulse" /> ADOPTION SUCCESS STORIES
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
                            <span className='text-[#f59e0b]'> Happy Tails & New </span>
                            <br /> <span className='text-[#fadfb3]'> Beginnings</span> 
                        </h2>
                    </div>
                    <p className="text-stone-400 text-sm md:text-base max-w-md leading-relaxed md:mb-2 hover:text-[#f59e0b]">
                        Every adoption is a life saved. Read the heartwarming journeys of our rescued pets who found their perfect, forever families through our platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div 
                            key={story.id} 
                            className="bg-[#241c19] rounded-2xl border border-[#362a26] shadow-2xl overflow-hidden flex flex-col h-full hover:border-[#f59e0b]/40 hover:shadow-[0_10px_30px_rgba(245,158,11,0.06)] transition-all duration-300 group"
                        >
                            <div className="p-4 pb-0 overflow-hidden">
    <div className="w-full h-56 md:h-64 rounded-xl overflow-hidden border border-[#362a26] group-hover:border-[#f59e0b]/30 transition-colors duration-300 relative">
        
        <Image 
            src={story.image} 
            alt={story.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover filter  group-hover:grayscale-0 transform group-hover:scale-105 
            transition-all duration-500"
        /> 

    </div>
</div>

                            <div className="p-6 flex flex-col grow justify-between">
                                <div>
                                    <div className="flex items-center gap-4 text-xs font-medium text-stone-500 mb-3 tracking-wider">
                                        <span className="flex items-center gap-1.5">
                                            <FaUserCheck className="text-stone-400" /> ADOPTED
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5">
                                            <FiCalendar className="text-stone-400" /> {story.date}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-bold 
                                    uppercase mb-3 bg-[#f59e0b]/5 border border-[#f59e0b]/10 w-max px-2 py-1 rounded">
                                        {story.icon}
                                        <span>{story.tag}</span>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-stone-100 mb-3  group-hover:text-[#f59e0b] transition-colors duration-300 line-clamp-2">
                                        {story.title}
                                    </h3>
                                </div>

                                <p className="text-stone-400 text-sm mt-2 font-normal line-clamp-3">
                                    {story.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SussessFulStories;