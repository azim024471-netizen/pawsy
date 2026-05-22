
"use client";
import React from "react";
import { Button, FieldError, Form, Input, Label, Modal, TextArea, TextField, toast} from "@heroui/react";
import {  FaPaw } from "react-icons/fa";
// import { CgEditContrast } from "react-icons/cg";
import { useRouter } from "next/navigation";


const AdoptionForm =  ({pet, user}) => {
    // console.log(user) 
    const {name, id, email} = user;
    

  const router = useRouter();

          const {_id,petName,   } = pet;
        
            // console.log(pet, 'from updatae modal page')

  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const requestData = Object.fromEntries(formData);
    console.log(requestData, 'from  edit modal form');
    
    const adoptionRequest = {
        ...requestData, 
        applicantId : id,
        petId : _id,
        status: "Pending", 
    requestedAt: new Date(),
    }

    // console.log(adoptionRequest)

  try {
           
    const res = await fetch('http://localhost:1234/adoption-requests', {
      method : "POST",
       headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adoptionRequest)
    }) ;
    
 const data = await res.json();
 console.log(data, 'data after upateeeeeeeeeeeeeeeeee')

            if (data.insertedId) {
                toast.success("Pet Updated", {
      description: `You have successfully sent an adoption request for ${petName}.`,           
         actionProps: {
                        children: "Close",
                        // onPress: noop,
                        variant: "flat",
                    },
                });
                
                router.push('/all-pets');
                router.refresh();
            } else {
                toast.warning("Submission Failed", {
                    description: "Something went wrong. Please try again later.",
                });
            }

        } catch(error){
            toast.danger("Submission Failed", {
                    description: "Something went wrong. Please try again later.",
                    indicator: true,
                        });

                        };
  

}




  return (
    <Modal>
             <Button  className="flex items-center 
        justify-center gap-2 bg-[#FFEFD5] hover:bg-[#FFEFD5]/90
         text-[#3D2516] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-md active:scale-[0.9]
          w-full sm:w-auto shrink-0">
         <FaPaw className="text-xs" />Request to Adopt
           </Button> 

      <Modal.Backdrop
        variant="blur"
        className="bg-linear-to-b from-[#857f79] via-[#3B2215]/70 to-[#080707] backdrop-blur-md"
      >
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-4xl border border-[#FFEFD5]/15 bg-[#2A190E]/95 text-[#FFEFD5] shadow-2xl">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-[#FFEFD5]/10 text-[#FFEFD5] border border-[#FFEFD5]/20">
                <FaPaw className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-[#FFEFD5]">
               Request to Adopt {petName?.toUpperCase()}
              </Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-[#FFEFD5]/70">
Please fill out the form to send an adoption request.       </p>
            </Modal.Header>

            <Modal.Body className="p-6 max-h-[75vh] overflow-y-auto">

              <Form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 w-full"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                  <TextField      isReadOnly   defaultValue={petName?.toUpperCase()} name="petName" >
                    <Label className="text-xs font-bold text-[#FFEFD5]/90 tracking-wider pl-1 mb-1.5 block">
                      PET NAME
                    </Label>
                     <Input className="bg-[#584131] text-[#FFEFD5] font-semibold"/>
                    <FieldError className="text-red-500 text-xs mt-1" />
                  </TextField>

                  

                    <TextField
                    isReadOnly
                       defaultValue={name?.toUpperCase()}   
                    name="applicantName"
                    className="w-full">
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                        USER NAME  </Label>
                    <Input className="bg-[#584131] text-[#FFEFD5]"/>
                  </TextField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                

                  <TextField
                    isReadOnly
                    name="applicantEmail"
                    className="w-full"
                    defaultValue={email}
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      USER EMAIL
                    </Label>

                 <Input className="bg-[#584131] text-[#FFEFD5] font-semibold"/>

                  </TextField>


                   <TextField
                    isRequired
                    type="date"
                    name="pickup_date"
                    className="w-full"
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5]/90 uppercase tracking-wider pl-1 mb-1.5 block">
                       PICKUP DATE
                    </Label>

                    <Input  />
                  </TextField>



                </div>

              


                <div className="w-full">

                  <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                    MESSAGE
                  </Label>

                  <div className="p-3 bg-[#eecbb3] border border-white/10 rounded-xl focus-within:border-white transition-all">

                    <TextArea
                      required
                      name="message"
                      placeholder="Write a messge to pet owner"
                      rows={3}
                      className="w-full text-[#1b150b] bg-transparent outline-none border-none placeholder:text-[#1b150b]/50 placeholder:font-semibold text-sm resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#FFEFD5] text-[#3D2516] font-extrabold text-sm rounded-xl shadow-md hover:bg-[#ffe6b3] transition-all duration-300 mt-4 flex items-center justify-center gap-2"
                >
                  REQUEST <FaPaw />
                </Button>

              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AdoptionForm;



