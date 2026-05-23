import { Button } from '@heroui/react';
import React from 'react';
import { FaCheck, FaPaw, FaTimes } from 'react-icons/fa';

const ApprovAndRejectButton = ({request, pet}) => {
  
    const {petId, _id:requestId, status} = request;

    console.log(petId, requestId)

    console.log(request, pet , "button ")

    const  handleApprove = async (requestId, petId)=>{
        await fetch(`http://localhost:1234/adoption-requests/${requestId}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ 
            setStatus: 'Approved',
            petId,    
        })
    }); }

     
    const handleReject= async(requestId)=>{

         await fetch(`http://localhost:1234/adoption-requests/${requestId}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ setStatus: 'Rejected' })
    }); }

    return (
        <div className='flex gap-2'>
         {
            status === 'Pending' && <>   

            <Button onClick={() => handleApprove(requestId, petId)}
             className="flex-1 bg-emerald-950 hover:bg-emerald-600 
              text-emerald-400 hover:text-white font-bold rounded-xl 
     border border-emerald-500/40 text-xs transition-all flex items-center justify-center gap-2">
         <FaCheck /> APPROVE
              </Button>

        <Button onClick={() => handleReject(requestId)} className="flex-1 bg-red-950 hover:bg-red-500 
                      text-red-400 hover:text-white font-bold rounded-xl 
             border border-red-500/40 text-xs 
                                transition-all flex items-center justify-center gap-2">
                   <FaTimes /> REJECT
        </Button> 
</> || status === 'Approved' && <>

<span 
             className="flex-1  bg-emerald-600 py-3
               text-white font-bold rounded-xl 
     border border-emerald-500/40 text-xs transition-all flex items-center justify-center gap-2">
         <FaPaw></FaPaw> ADOPTED {pet.petName.toUpperCase()}
              </span>

</>  ||
status === 'Rejected' && <>
        <span className="flex-1 bg-red-700 
                       text-white font-bold rounded-xl 
             border border-red-500/40 py-3 text-xs 
                                transition-all flex items-center justify-center gap-2">
                   <FaTimes /> REJECTED
        </span> 

</>
         }

        </div>
    );
};

export default ApprovAndRejectButton;