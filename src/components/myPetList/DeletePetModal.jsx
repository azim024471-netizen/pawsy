'use client'
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button,  toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const DeletePetModal = ({pet}) => {
    const {_id, petName} = pet;
    const router = useRouter();
 
    const handleDelete = async ()=>{

          try {
             const {data:tokenData} = await authClient.token();
       const token = tokenData?.token;
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                                       'authorization' : `Bearer ${token}`

                }
            });

            const data = await res.json();

            if (data.deletedCount > 0) {
                toast.success("Pet Removed", {
                    description: `${petName} has been successfully removed from your  Pet listings.`,
                    actionProps: {
                        
                        variant: "flat",
                    },
                });
                
                router.push('/dashboard/listings');
                router.refresh();
            } else {
                toast.warning("Not Found", {
                    description: "We couldn't find this Pet to delete.",
                });
            }

        } catch (error){
            to.danger("Action Failed", {
                    description: "Something went wrong. Please check your internet connection or try again later.",
                    indicator: true,
                        });

        }

    }


    return (
      <AlertDialog> 
    <Button className="w-full bg-white/5 hover:bg-red-600 text-[#FFEFD5] hover:text-white gap-2 font-bold py-1.5 rounded-lg transition-all border border-red-600/30 flex items-center justify-center text-[11px] active:scale-[0.97]"> 
        <FaTrash className="text-red-400 text-sm" /> Delete
    </Button> 

    <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
    >
        <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100 bg-[#FFEFD5] border border-[#3D2516]/10 
            text-[#3D2516] shadow-2xl rounded-2xl">
                <AlertDialog.CloseTrigger className="text-[#3D2516]/60 hover:text-[#3D2516]" />
                
                <AlertDialog.Header>
                    <AlertDialog.Icon status="danger" />
                    <AlertDialog.Heading className="text-[#3D2516]">Confirm Deletion</AlertDialog.Heading>
                </AlertDialog.Header>
                
                <AlertDialog.Body>

                    <div className="text-center p-2">
                        <p className="font-semibold text-[#3D2516]/90">
                            Are you sure you want to delete <span className="text-red-600 font-black uppercase">{petName}</span>?
                        </p>
                        
                        <p className="text-xs text-red-700 mt-3 font-medium bg-red-500/10 border border-red-500/20 py-2 px-3 rounded-xl max-w-sm mx-auto">
              This action is permanent and will completely remove all information related to this pet.
                        </p>
                    </div>
                    
                </AlertDialog.Body>
                
                <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary" className="text-[#3D2516]/70 hover:bg-[#3D2516]/5">
                        Keep My Listings
                    </Button>
                    <Button slot="close" onClick={handleDelete} variant="danger" className="bg-red-600 text-white font-bold">
                        Yes, Delete
                    </Button>
                </AlertDialog.Footer>
            </AlertDialog.Dialog>
        </AlertDialog.Container>
    </AlertDialog.Backdrop>
</AlertDialog>
    );
};

export default DeletePetModal;