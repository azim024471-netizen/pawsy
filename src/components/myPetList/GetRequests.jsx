import { Button, Modal } from "@heroui/react";
import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import ApprovAndRejectButton from "./ApprovAndRejectButton";
import { authClient } from "@/lib/auth-client";

const GetRequests = ({ pet }) => {
    
    
    const { _id, petName } = pet;

    const [requests, setRequests] = useState([]);
    
    const onClickFetch = async () => {
         const {data:tokenData} = await authClient.token();
               const token = tokenData?.token;

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/pet/${_id}`, {
                headers : {
                     'authorization' : `Bearer ${token}`
                }
            }
        );
        const data = await res.json();
        setRequests(data);
    };

    return (
        <Modal>
            <Button
                onClick={onClickFetch}
                className="w-full bg-white/5 hover:bg-emerald-600/20 text-[#FFEFD5] font-bold py-1.5 
                rounded-lg transition-all border border-emerald-600/30 flex items-center justify-center 
                gap-2 text-[11px] uppercase tracking-wider active:scale-[0.97]"
            >
                <FaClipboardList className="text-emerald-400 text-xs" /> Requests
            </Button>

            <Modal.Backdrop
                className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                variant="blur"
            >
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-160 bg-[#1A120B] border border-[#3A2E1A] text-[#FFEFD5]">

                        <Modal.Header className="items-center text-center border-b border-[#3A2E1A] pb-4">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-xl bg-[#2A190E] border border-[#3A2E1A] 
                                    flex items-center justify-center text-emerald-400 text-lg">
                                    <FaClipboardList />
                                </div>
                                <Modal.Heading className="text-lg font-black uppercase tracking-wider text-[#FFEFD5]">
                                    {petName} Requests
                                </Modal.Heading>
                                <p className="text-xs text-[#FFEFD5]/40 uppercase tracking-widest">
                                   Adoption request list
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="py-4">
                            {requests.length === 0 ? (
                                <div className="text-center py-12 text-[#FFEFD5]/40 text-sm uppercase tracking-widest">
                                    No Requests Found
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {requests.map(request => (
                                        <div
                                            key={request._id}
                                            className="bg-[#24180F] border border-[#3A2E1A] rounded-2xl p-4"
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-3">
                                                <div className="flex items-center gap-3">
                                                   
                                                    <div>
                                                     <h3 className="text-sm font-black uppercase tracking-wide text-[#FFEFD5]">
                                                      {request.applicantName}
                                                        </h3>
                                                        <p className="text-xs text-[#FFEFD5]/50 mt-0.5">
                                                            {request.applicantEmail}
                                                        </p>
                                                    </div>
                                                </div>

                                                <span className={`px-3 py-1 rounded-full border text-[10px] font-bold 
                                                    uppercase tracking-wider whitespace-nowrap shrink-0
                                                    ${request.status === 'Approved'
                                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                                        : request.status === 'Rejected'
                                                        ? 'bg-red-500/10 text-red-400 border-red-500/30'
                                                        : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                                                    }`}>
                                                    {request.status}
                                                </span>
                                            </div>

                                            <div className="bg-[#1A120B] border border-[#3A2E1A] rounded-xl p-3 mb-3">
                                                <p className="text-[10px] uppercase tracking-widest text-[#FFEFD5]/40
                                                 font-bold mb-1">
                                                    Pickup Date
                                                </p>
                                                <p className="text-sm font-bold text-[#FFEFD5]">
                                                    {request.pickup_date}
                                                </p>
                                            </div>

                                           
                       <ApprovAndRejectButton request ={request} pet={pet}></ApprovAndRejectButton>
                    
                                            {/* </div> */}

                                        </div>
                                    ))}
                                </div>
                            )}
                        </Modal.Body>

                        <Modal.Footer className="border-t border-[#3A2E1A] pt-4">
                            <Button
                                className="w-full bg-[#2A190E] hover:bg-[#f0dccf] text-[#e7ddcf] 
                                hover:text-[#080603] border border-[#3A2E1A] rounded-xl text-xs 
                                uppercase tracking-widest font-bold transition-all"
                                slot="close"
                            >
                                Close
                            </Button>
                        </Modal.Footer>

                        <Modal.CloseTrigger />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default GetRequests;