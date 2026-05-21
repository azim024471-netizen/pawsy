"use client";
import React from "react";
import { Button, FieldError, Form, Input, Label, Modal, TextArea, TextField, toast} from "@heroui/react";
import {MdOutlineCategory, MdOutlineVaccines, MdOutlineWc} from "react-icons/md";
import { FaEdit, FaPaw } from "react-icons/fa";
import { CgEditContrast } from "react-icons/cg";
import { useRouter } from "next/navigation";


const EditPetModal =  ({pet}) => { 
  const router = useRouter();

          const {_id,petName, description, species,breed,age, gender, image,
            healthStatus,vaccinationStatus, location, adoptionFee } = pet;
        
            // console.log(pet, 'from updatae modal page')

  const onSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateData = Object.fromEntries(formData);
    console.log(updateData, 'from  edit modal form');
    


  try {
           
    const res = await fetch(`http://localhost:1234/allpets/${_id}`, {
      method : "PATCH",
       headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
    }) ;
    
 const data = await res.json();
 console.log(data, 'data after upateeeeeeeeeeeeeeeeee')

            if (data.modifiedCount > 0) {
                toast.success("Pet Updated", {
                   description: `You have successfully update ${petName}'s info.`,
                    actionProps: {
                        children: "Close",
                        // onPress: noop,
                        variant: "flat",
                    },
                });
                
                router.push('/dashboard/listings');
                router.refresh();
            } else {
                toast.warning("Could No Update", {
                    description: "You have to change al last one thing to update.",
                });
            }

        } catch(error){
            toast.danger("Action Failed", {
                    description: "Something went wrong. Please check your internet connection or try again later.",
                    indicator: true,
                        });

                        }
  };





  const selectStyle = "w-full bg-transparent text-black rounded-xl text-sm outline-none border-none cursor-pointer pr-2";
  const selectContainerStyle =
    "flex items-center gap-2 px-3 bg-[#eecbb3] border border-white/10 rounded-xl h-11 focus-within:border-[#FFEFD5]/40 transition-all w-full";


  return (
    <Modal>

             <Button className="w-full bg-white/5 hover:bg-[#FFEFD5] 
          text-[#FFEFD5] hover:text-[#3D2516] 
            border-[#2e1e14] font-bold py-1.5 rounded-lg transition-all border flex items-center
           justify-center
                   gap-1 text-[11px] active:scale-[0.97]">
        <FaEdit className="text-[#FFEFD5]/70 hover:text-[#3D2516] text-xs" />  Edit Pet
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
                <CgEditContrast className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-[#FFEFD5]">
                Edit Pet Information
              </Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-[#FFEFD5]/70">
                Update your pet details for adoption listing.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6 max-h-[75vh] overflow-y-auto">

              <Form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 w-full"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                  <TextField
                    isRequired
                    defaultValue={petName}
                    name="petName"
                    validate={(value) => {
                      if (value.length < 3)
                        return "Name must be at least 3 characters";
                      return null;
                    }}
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5]/90 tracking-wider pl-1 mb-1.5 block">
                      PET NAME
                    </Label>

                    <Input
                      placeholder="Enter Your Pet Name"
                      className="text-[#1b150b]"
                    />

                    <FieldError className="text-red-500 text-xs mt-1" />
                  </TextField>

                  <div className="w-full">
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      SPECIES
                    </Label>

                    <div className={selectContainerStyle}>
                      <MdOutlineCategory className="text-[#1b150b]/60 text-base shrink-0" />

                      <select
                        required
                        name="species"
                        defaultValue={species}
                        className={selectStyle}
                      >
                        <option value="" disabled hidden>
                          Select Species
                        </option>

                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                  <TextField
                  defaultValue={breed}
                    isRequired
                    name="breed"
                    className="w-full"
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      BREED
                    </Label>

                    <Input placeholder="e.g., Golden Retriever" />
                  </TextField>

                  <TextField
                    isRequired
                    name="age"
                    className="w-full"
                    defaultValue={age}
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      AGE
                    </Label>

                    <Input placeholder="e.g., 2 Years or 5 Months" />
                  </TextField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                  <div className="w-full">
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      GENDER
                    </Label>

                    <div className={selectContainerStyle}>
                      <MdOutlineWc className="text-[#1b150b]/60 text-base shrink-0" />

                      <select
                        required
                        name="gender"
                        defaultValue={gender}
                        className={selectStyle}
                      >
                        <option value="" disabled hidden>
                          Select Gender
                        </option>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <TextField
                  defaultValue={image}
                    isRequired
                    name="image"
                    className="w-full"
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      IMAGE URL
                    </Label>

                    <Input placeholder="https://your-pet-image-link" />
                  </TextField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                  <TextField
                    isRequired
                    defaultValue={healthStatus}
                    name="healthStatus"
                    className="w-full"
                    validate={(value) => {
                      if (!value || value.trim() === "")
                        return "Health status is required";

                      if (!/^[a-zA-Z\s,.-]+$/.test(value))
                        return "Only text allowed";

                      return null;
                    }}
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      HEALTH STATUS
                    </Label>

                    <Input placeholder="Healthy / Needs attention" />

                    <FieldError className="text-red-400 text-xs pl-1 mt-1" />
                  </TextField>

                  <div className="w-full">
                    <Label className="text-xs font-bold text-[#FFEFD5]/90 uppercase tracking-wider pl-1 mb-1.5 block">
                      Vaccination Status
                    </Label>

                    <div className={selectContainerStyle}>
                      <MdOutlineVaccines className="text-[#1b150b]/60 text-base shrink-0" />

                      <select
                        required
                        name="vaccinationStatus"
                        defaultValue={vaccinationStatus}
                        className={selectStyle}
                      >
                        <option value="" disabled hidden>
                          Select Status
                        </option>

                        <option value="Fully Vaccinated">
                          Fully Vaccinated
                        </option>

                        <option value="Partially Vaccinated">
                          Partially Vaccinated
                        </option>

                        <option value="Not Vaccinated">
                          Not Vaccinated
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                  <TextField
                  defaultValue={location}
                    isRequired
                    name="location"
                    className="w-full"
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                      LOCATION
                    </Label>

                    <Input placeholder="Dhaka, Bangladesh" />
                  </TextField>

                  <TextField
                  defaultValue={adoptionFee}
                    isRequired
                    type="number"
                    name="adoptionFee"
                    className="w-full"
                  >
                    <Label className="text-xs font-bold text-[#FFEFD5]/90 uppercase tracking-wider pl-1 mb-1.5 block">
                      Adoption Fee ($)
                    </Label>

                    <Input placeholder="Free Adoption" />
                  </TextField>
                </div>

                <div className="w-full">

                  <Label className="text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block">
                    DESCRIPTION
                  </Label>

                  <div className="p-3 bg-[#eecbb3] border border-white/10 rounded-xl focus-within:border-white transition-all">

                    <TextArea
                    defaultValue={description}
                      required
                      name="description"
                      placeholder="Write details about the pet's behavior, history, etc..."
                      rows={4}
                      className="w-full text-[#1b150b] bg-transparent outline-none border-none placeholder:text-[#1b150b]/50 placeholder:font-semibold text-sm resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#FFEFD5] text-[#3D2516] font-extrabold text-sm rounded-xl shadow-md hover:bg-[#ffe6b3] transition-all duration-300 mt-4 flex items-center justify-center gap-2"
                >
                  SAVE CHANGES <FaPaw />
                </Button>

              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditPetModal;



