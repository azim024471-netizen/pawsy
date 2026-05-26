import React from 'react';
import { FaHeart, FaHome, FaShieldAlt, FaHandHoldingHeart, FaSmile, FaCheckCircle } from 'react-icons/fa';

const WhyAdoptPets = () => {
  const adoptReasons = [
    {
      id: 1,
      title: "Save a Precious Life",
      desc: "Every year, millions of stray animals face harsh realities. By adopting, you give a beautiful soul a second chance at life and a warm home.",
      icon: FaHeart,
    },
    {
      id: 2,
      title: "Stop Illegal Breeding",
      desc: "Choosing adoption directly fights against commercial puppy mills and cruel breeding businesses, promoting a more humane pet culture.",
      icon: FaShieldAlt,
    },
    {
      id: 3,
      title: "Unconditional Love",
      desc: "Rescued pets are incredibly grateful and loyal. The bond you form with an adopted pet is uniquely deep, filled with pure, raw affection.",
      icon: FaHandHoldingHeart,
    },
    {
      id: 4,
      title: "Perfect Companionship",
      desc: "Pets are proven to reduce stress, anxiety, and loneliness. An adopted furry friend brings endless joy, laughter, and warmth to your family.",
      icon: FaSmile,
    },
    {
      id: 5,
      title: "Health & Vaccination",
      desc: "Most shelter or platform pets come with initial health checkups and vaccinations already managed, making your transition smoother.",
      icon: FaCheckCircle,
    },
    {
      id: 6,
      title: "Give Them a Forever Home",
      desc: "Instead of being locked away or left on cold streets, these animals get to experience what a real, loving family feels like.",
      icon: FaHome,
    },
  ];

  return (
    <section className="relative py-20 px-4 
    bg-linear-to-br from-[#0f0f0c] via-[#1c1610] to-[#291f1a]
     sm:px-8 overflow-hidden">
      <section className="w-full text-white py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          <div className="lg:col-span-2 flex flex-col justify-center pr-2 lg:pr-6 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-[#FFEFD5] leading-tight">
             Every Pet Deserves, <br />
          <span className="text-[#e8a025]">a Loving Home</span>
            </h2>
            <p className="text-[#ebd8c5]/70 text-sm md:text-base leading-relaxed">
              Pets bring unparalleled joy to our lives, yet thousands remain homeless.
              Adoption isn't just about bringing a pet home it's a compassionate act
              that saves lives, fights cruelty, and builds a kinder society for our
              voiceless furry friends.
            </p>
          </div>

          {adoptReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                className="group bg-white/5 border-b-2 border-[#8a7e6c] p-6 rounded-3xl
                           backdrop-blur-sm flex flex-col justify-between
                           hover:-translate-y-1 hover:border-[#0c0a06] hover:bg-[#FFEFD5]
                           transition-all duration-300 shadow-xl cursor-pointer"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-[#251a08]
                                  flex items-center justify-center mb-5 shadow-inner
                                  group-hover:bg-[#bb9d74] transition-all duration-300">
                    <Icon className="text-xl text-[#f3a51d] group-hover:text-[#36260d]" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#FFEFD5]
                                 group-hover:text-[#16120c] mb-2 transition-all duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-[#ebd8c5]/70 text-xs md:text-sm leading-relaxed
                                group-hover:text-[#3a2e1e]/80 transition-colors duration-300">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </section>
  );
};

export default WhyAdoptPets;
