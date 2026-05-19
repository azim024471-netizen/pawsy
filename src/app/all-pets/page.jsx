'use client'

import { authClient } from "@/lib/auth-client";

const AllPets = () => {
    
    const { 
        data: session, 
        isPending,
    } = authClient.useSession() 
   
    const user = session?.user;
 
    console.log(user, session, isPending, ' from all page')

    return (
        <div>
            Pets are coming
        </div>
    );
};

export default AllPets;