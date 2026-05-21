import { AlertDialog, Button,  toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

const DeletePetModal = ({pet}) => {
    const {_id, petName} = pet;
    const router = useRouter();
 
    const handleDelete = async ()=>{

          try {
            const res = await fetch(`http://localhost:1234/allpets/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            });

            const data = await res.json();

            if (data.deletedCount > 0) {
                toast.success("Pet Removed", {
                    description: `${petName} has been successfully removed from your  Pet listings.`,
                    actionProps: {
                        children: "Close",
                        // onPress: noop,
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

            
    <Button  className="w-full bg-white/5 hover:bg-red-600 text-[#FFEFD5]
     hover:text-white gap-2
          font-bold py-1.5 rounded-lg transition-all border border-red-600/30 flex items-center
         justify-center  text-[11px] active:scale-[0.97]"
    
    > <FaTrash className="text-red-400 text-sm" />
                Delete
            </Button> 


            <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm Deletion</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to remove <strong>stinationName</strong>? 
                                This action is permanent and will remove all booking info related to this trip.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Keep My Listings
                            </Button>
                            <Button slot="close"  onClick={handleDelete} variant="danger">
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