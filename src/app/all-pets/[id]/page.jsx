import AdoptionForm from '@/components/adopttion/AdoptionForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPaw, FaMapMarkerAlt, FaEnvelope, FaBriefcaseMedical, FaShieldAlt, FaClock, FaArrowLeft, 
} from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io5';

const PetDetailsPage = async ({ params }) => {
    const { id } = await params;

      const session = await auth.api.getSession({
        headers: await headers()
      });
        
      const user = session?.user
      const userId = session?.user?.id
       
    //   console.log(userId, 'user id from validation page,,,,,,,,,,,,,')

    const res = await fetch(`http://localhost:1234/allpets/${id}`, {
        cache: 'no-store'
    });
    const pet = await res.json();

    const {
         petName, species, breed,age,gender, image, healthStatus, vaccinationStatus, location, adoptionFee, description,
     ownerEmail, ownerId
    } = pet ;
     
    const canNotAdopt = ownerId === userId;    
    // console.log(canNotAdopt, 'adoptttttttt') 
    // console.log(pet)

const adoptionRes = await fetch(
    `http://localhost:1234/adoption-requests/check/${id}/${userId}`,
    { cache: 'no-store' }
);
const existingRequest = await adoptionRes.json();
//    console.log(existingRequest, 'this is  request for  this pet tyyyyyyyyyyyyyyyyyyyyyyyyyyyy')

   const  status = existingRequest?.status;
//    console.log(status, ' this is status sssssssssssssssssssss')


const  petRequestRes = await fetch(`http://localhost:1234/adoption-requests/pet/${id}`);
const petRequests = await  petRequestRes.json();
console.log(petRequests, 'allrequetsssssssssssssss')



const approvedReq = petRequests?.find(req => req.status === "Approved");

const adoptedBy = approvedReq?.applicantName;


const statusSet = {
  Pending: {
    text: "Your request is pending",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  Approved: {
    text: "You have adopted it! 🎉",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  Rejected: {
    text: "Your request is declined",
    className: "bg-red-500/10 text-red-400 border-red-500/30"
  }
}

const currentSatus = statusSet[status];



    return (
        <div className="min-h-screen bg-[#3D2516] text-white p-4 sm:p-6 md:p-8 lg:p-12 ">
            <div className="max-w-5xl mx-auto">
                
                <div className="mb-6">
                    <Link href="/all-pets">
                        <button className="flex items-center gap-2 text-xs font-bold tracking-widest text-gray-300
                         hover:text-[#22190b] hover:bg-[#fad8a5]  bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                            <FaArrowLeft /> ALL PETS
                        </button>
                    </Link>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden 
                shadow-2xl p-4 sm:p-6 lg:p-8 flex flex-col gap-8">
                    
                    <div className="relative w-full h-86 sm:h-120 md:h-138 rounded-xl overflow-hidden bg-[#2A190E]
                     border border-white/5 shadow-2xl">
                        <Image
                            src={image} alt={petName} fill priority className="object-cover object-center" 
                            sizes="100vw"
                        />

                        <span className={`absolute uppercase items-center top-4 flex  gap-1.5 left-4 text-xs font-black 
                         tracking-wider px-3.5 py-2 rounded-xl shadow-lg 
                            bg-[#f3d2be] text-[#3D2516] border-transparent`}>
                            <FaPaw></FaPaw> {species}
                        </span>

                        <span className={`absolute top-4 right-4 px-4 py-2
                         text-xs font-black rounded-xl uppercase tracking-wider border  ${
                            gender?.toLowerCase() === 'female' 
                            ? 'bg-pink-500 text-pink-200 border-pink-500/40' 
                            : 'bg-blue-500 text-blue-200 border-blue-500/40'
                        }`}>
                            {gender}
                        </span>
                    </div>

                    <div className="flex flex-col gap-6">
                        
                        <div className="flex sm:items-center justify-between gap-4 border-b
                         border-white/10 pb-5">
                            <div>
                                <h1 className="text-2xl sm:text-4xl font-black text-[#FFEFD5] tracking-tight 
                                flex items-center uppercase gap-2.5">
                                    <FaPaw className="text-2xl text-[#FFEFD5]/80" />
                                    {petName}
                                </h1>
                                <p className="text-[#FFEFD5]/60 text-sm font-semibold tracking-wide mt-1.5 uppercase ">
                                    {breed || "Unknown Breed"}
                                </p>
                            </div>
                            
                            <div className="bg-[#FFEFD5] text-[#3D2516] px-6 py-3 rounded-2xl shadow-lg border
                             border-[#FFEFD5]/20 flex items-center justify-center gap-2 self-start sm:self-center">

                                <span className="text-xs font-bold uppercase tracking-widest ">Fee:</span>
                                <span className="text-2xl font-black flex items-center tracking-tight">
                                    <IoLogoUsd className="text-xl -mr-0.5" />
                                    {Number(adoptionFee) === 0 ? "FREE" : adoptionFee}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            
                            <div className="bg-[#2A190E]/40 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                                <FaClock className="text-[#FFEFD5]/70 text-xl shrink-0" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Age</p>
                                    <p className="text-sm font-bold text-white/95">{age}</p>
                                </div>
                            </div>

                            <div className="bg-[#2A190E]/40 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                                <FaMapMarkerAlt className="text-[#FFEFD5]/70 text-xl shrink-0" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Location</p>
                                    <p className="text-sm font-bold text-white/90 truncate max-w-30">{location}</p>
                                </div>
                            </div>

                            <div className="bg-[#2A190E]/40 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                                <FaBriefcaseMedical className="text-emerald-400 text-xl shrink-0" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Health</p>
                                    <p className="text-sm font-bold text-emerald-400">{healthStatus}</p>
                                </div>
                            </div>

                            <div className="bg-[#2A190E]/40 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
                                <FaShieldAlt className="text-sky-400 text-xl shrink-0" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Vaccinated</p>
                                    <p className="text-sm font-bold text-sky-400  max-w-30 ">{vaccinationStatus}</p>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center
                         justify-between gap-4 w-full bg-[#2A190E]/30 p-3 rounded-2xl border border-white/5 mt-2">
    <div className="flex items-center gap-2 truncate w-full sm:w-auto">
        <FaEnvelope className="text-[#FFEFD5]/40 shrink-0" />
        <span className="text-[#FFEFD5]/70" >
            <strong >Owner Email:</strong > {ownerEmail}
        </span>
    </div>


      {
        adoptedBy? <>
        <span 
        className=' text-emerald-400 inline-flex items-center  text-xs tracking-widest px-5 py-2.5 rounded-xl border'>
        PET ADOPT BY{adoptedBy}</span>
        </> : <>
        
        
    {canNotAdopt ? (
  <span className="text-[#9b907e] font-bold">
    You Can't Adopt Your Own Pet
  </span>
) : (
  <>
    {!existingRequest ? (
      <AdoptionForm pet={pet} user={user} />
    ) : (


    <span className={`inline-flex items-center gap-2 text-xs font-black 
    uppercase tracking-widest px-5 py-2.5 rounded-xl border ${currentSatus.className}`}>
     <FaPaw></FaPaw>
       {currentSatus.text}
    </span>

    )}
  </>
)}
        
        </>


        
      }


 
</div>   

 <div className="bg-[#2A190E]/20 p-6 rounded-2xl  mt-2">
                            <h3 className="text-xs  tracking-widest font-black text-[#FFEFD5] mb-2.5">
                                ABOUT <span className='uppercase'>{petName}</span> </h3>
                            <p className="text-sm text-white/80 leading-relaxed font-medium">
                                {description}
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PetDetailsPage;








// {!existingRequest ? (
//   <AdoptionForm pet={pet} user={user} />
// ) : (
//   <span className={`inline-flex items-center gap-2 text-xs font-black 
//     uppercase tracking-widest px-5 py-2.5 rounded-xl border ${current.className}`}>
//     <span className="w-1.5 h-1.5 rounded-full bg-current" />
//     {current.text}
//   </span>
// )}