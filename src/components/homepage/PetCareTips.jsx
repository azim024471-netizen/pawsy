import Image from "next/image";
import { FaCheckCircle, FaPaw } from "react-icons/fa";

const checklist = [
  {
    id: 1,
    title: "Nutritional Diet & Food",
    desc: "Provide balanced, high-quality meals specific to your pet's breed and age. Clean and fresh water should always be accessible.",
  },
  {
    id: 2,
    title: "Regular Vet Checkups",
    desc: "Schedule routine vaccinations and health screenings. Early detection of health issues keeps your furry friend playful and safe.",
  },
  {
    id: 3,
    title: "Grooming & Hygiene",
    desc: "Brush their coat regularly, trim nails weekly, and maintain dental care. Clean paws and fresh fur prevent common skin infections.",
  },
  {
    id: 4,
    title: "Daily Exercise & Play",
    desc: "Spend at least 30 minutes in daily training or interactive games. Mental and physical activities reduce anxiety and lonely behaviors.",
  },
];

const PetCareTips = () => {
  return (
    <section className="bg-linear-to-br from-[#0f0f0c] via-[#1c1610] to-[#291f1a] py-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <div className="relative shrink-0 w-full
         sm:w-md md:w-120 h-95 sm:h-105 
         md:h-150 mx-auto  ">


          <div className="absolute left-0 top-4
           w-47  md:w-63  h-70 sm:h-80 md:h-110
            rounded-[110px] md:rounded-[130px] overflow-hidden shadow-2xl border-2 border-[#3a2e1e]
             transition-transform duration-500 hover:scale-[1.03]">
            <Image
              src="/careimage/care_rabbit.jpg"
              alt="Person with pet"
              fill
              className="object-cover"
              sizes="(max-w-7xl) 33vw"
              priority
            />
          </div>

          <div className="absolute right-2 sm:right-6 md:right-4 top-16 
          w-37 sm:w-45 md:w-50 h-55 sm:h-70 md:h-75 
           rounded-[90px] md:rounded-[110px] overflow-hidden shadow-2xl border-2 border-[#3a2e1e] transition-transform 
           duration-500 hover:scale-[1.03]">
            <Image
              src="/careimage/care_cat.jpg"
              alt="Cat in house"
              fill
              className="object-cover"
              sizes="(max-w-7xl) 33vw"
            />
          </div>

          <div className="absolute bottom-2 sm:bottom-4 left-4 md:left-6 font-black text-base sm:text-lg md:text-xl leading-tight
           -rotate-6 text-[#4ade80]" >
            READY TO<br />ADOPT?
          </div>

          <div className="absolute top-0 left-44 sm:left-52 md:left-60 text-[#e8a025] 
          text-2xl md:text-5xl rotate-12 select-none">✦</div>
          <div className="absolute top-6 right-6 sm:right-12 text-[#FFEFD5]/30 text-xl md:text-5xl select-none rotate-45">〜</div>
          <div className="absolute bottom-24 sm:bottom-28 left-1 text-[#f87171]/60 -rotate-12 text-lg md:text-xl select-none">
          <FaPaw></FaPaw>
          </div>
          <div className="absolute bottom-20 sm:bottom-32 left-80 text-[#5e541f41] -rotate-12 text-lg md:text-xl select-none">
          <FaPaw></FaPaw>
          </div>
         
        </div>

        <div className="flex-1 w-full">
          <span className="text-[#e8a025] text-xs inline-flex items-center gap-2 
          font-bold tracking-widest uppercase mb-4 border border-[#e8a025]/30 px-3 py-1 rounded-full">
            <FaPaw /> Pet Care Tips
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-[#FFEFD5] leading-tight mb-5">
            Nurturing Hearts,<br /> Happy Paws <br  />
            <span className="text-[#e8a025]">Through Proper Care</span>
          </h2>

          <p className="text-[#ebd8c5]/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            Taking care of a pet is a beautiful responsibility. With proper nutrition, 
            regular health monitoring, and endless love, you can ensure a long, 
            vibrant, and joyful life for your cute companions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {checklist.map((item) => (
              <div key={item.id} className="group">
                <div className="flex items-center gap-2 mb-2">
                  <FaCheckCircle className="text-[#e8a025] text-lg shrink-0" />
                  <h3 className="font-bold text-[#FFEFD5] text-base md:text-lg transition-colors 
                  duration-300 group-hover:text-[#e8a025]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#ebd8c5]/60 group-hover:text-[#e9cc9e] text-xs md:text-sm leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PetCareTips;