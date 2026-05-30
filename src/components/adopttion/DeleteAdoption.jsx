'use client'
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button,  toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteAdoption = ({request}) => {
    const {_id,petName} = request

    console.log(request)
    const router = useRouter();
 
    const handleDelete = async ()=>{

          try {
             const {data:tokenData} = await authClient.token();
       const token = tokenData?.token;
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json',
                    'authorization' : `Bearer ${token}`

                }
            });

            const data = await res.json();

            if (data.deletedCount > 0) {
               toast.success("Adoption Request Removed", {
                    description: `${petName} has been successfully removed from your requests.`,
                    actionProps: {
                        children: "Close",
                        
                        variant: "flat",
                    },
                });
                router.refresh();
                router.push('/dashboard/my-requests');
            } else {
               toast.warning("Not Found", {
                    description: "We couldn't find this request to delete.",
                });
            }

        } catch (error){
            to.danger("Cancel Failed", {
                   description: "Something went wrong. Please check your internet connection or try again later.",
                    indicator: true,
                        });

        }

    }

    return (
      <AlertDialog> 

    <Button className="px-3 py-1.5 text-xs font-semibold bg-rose-500/10 hover:bg-rose-600 text-rose-400
                     hover:text-white border border-rose-500/20 rounded-lg transition-all shadow-sm active:scale-95"
                > 
         Cancel 
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
                    <AlertDialog.Heading className="text-[#3D2516]">Confirm Cancellation</AlertDialog.Heading>
                </AlertDialog.Header>
                
                <AlertDialog.Body>

                    <div className="text-center p-2">
                        <p className="font-semibold text-[#3D2516]/90">
                            Are you sure you want to canel <span className="text-red-600 font-black uppercase">{petName}</span> requests?
                        </p>
                        
                        <p className="text-xs text-red-700 mt-3 font-medium bg-red-500/10 border border-red-500/20 py-2 px-3 rounded-xl max-w-sm mx-auto">
              This action is permanent and will remove this adoption request completely.
                            
        
                        </p>
                    </div>
                    
                </AlertDialog.Body>
                
                <AlertDialog.Footer>
                    <Button slot="close" variant="tertiary" className="text-[#3D2516]/70 hover:bg-[#3D2516]/5">
                        Keep My Requests
                    </Button>
                    <Button slot="close" onClick={handleDelete} variant="danger" className="bg-red-600 text-white font-bold">
                        Yes, Cancel
                    </Button>
                </AlertDialog.Footer>
            </AlertDialog.Dialog>
        </AlertDialog.Container>
    </AlertDialog.Backdrop>
</AlertDialog>
    );
};

export default DeleteAdoption;