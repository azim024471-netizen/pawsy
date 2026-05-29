'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Form, Input, Label, TextField, TextArea, FieldError, Toast, toast } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { MdOutlineCategory, MdOutlineWc, MdOutlineVaccines } from 'react-icons/md';

const AddPetPage = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    const { email, userId } = { email: user?.email, userId: user?.id }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const petData = {
            ...data,
            ownerId: userId,
            ownerEmail: email,
        }

        // console.log(petData, 'sending to server')

        try {
               const {data:tokenObj} = await authClient.token();
               const token = tokenObj?.token;
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets`, {
                method: 'POST',
                
                headers: { 'Content-Type': 'application/json' ,
                    "authorization" : `Bearer ${token}`
                 },
                body: JSON.stringify(petData)
            })

            const data = await res.json()
            // console.log(data, 'after post')

            if (data.insertedId) {
             toast.success("Pet added successfully!");

             router.push('/all-pets')
               
            }

        } catch (error) {
            console.log(error, 'post error')
        }
    };

    const selectContainerStyle = "flex items-center gap-2 px-3 bg-[#2A190E] border border-white/10 rounded-xl h-11 focus-within:border-[#FFEFD5]/40 transition-all w-full";
    const selectStyle = "w-full bg-transparent text-white text-sm outline-none border-none cursor-pointer pr-2 [&>option]:bg-[#2A190E] [&>option]:text-white";

    return (
        <div className='min-h-screen flex items-center justify-center bg-[#64573f] p-4 sm:p-6 font-sans'>
            <Card className="w-full max-w-2xl p-6 sm:p-8 bg-[#3a2d17] backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl">

                {/* header */}
                <div className='flex flex-col items-center gap-2 mb-8 text-center'>
                    <div className="w-20 h-20 bg-[#FFEFD5] rounded-full flex items-center justify-center shadow-md">
                        <Image
                            src="/paw.png"
                            alt="Pawsy Logo"
                            width={44}
                            height={44}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <h2 className="font-extrabold text-2xl sm:text-3xl text-[#FFEFD5] tracking-tight mt-2">
                        Add New Pet Listing
                    </h2>
                    <p className='text-xs sm:text-sm text-[#FFEFD5]/70 font-medium'>
                        Fill up the details to list a pet for adoption
                    </p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <TextField
                            isRequired
                            name="petName"
                            validate={(value) => {
                                if (value.length < 3) return "Name must be at least 3 characters";
                                return null;
                            }}
                        >
                            <Label className='text-xs font-bold text-[#FFEFD5]/90 tracking-wider pl-1 mb-1.5 block'>PET NAME</Label>
                            <Input placeholder="Enter Your Pet Name" />
                            <FieldError className="text-red-500 text-xs mt-1" />
                        </TextField>

                        <div className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>SPECIES</Label>
                            <div className={selectContainerStyle}>
                                <MdOutlineCategory className="text-[#FFEFD5]/40 text-base shrink-0" />
                                <select required name="species" defaultValue="" className={selectStyle}>
                                    <option value="" disabled hidden>Select Species</option>
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
                        <TextField isRequired name="breed" className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>BREED</Label>
                            <Input placeholder="e.g., Golden Retriever" />
                        </TextField>

                        <TextField isRequired name="age" className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>AGE</Label>
                            <Input placeholder="e.g., 2 Years or 5 Months" />
                        </TextField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>GENDER</Label>
                            <div className={selectContainerStyle}>
                                <MdOutlineWc className="text-[#FFEFD5]/40 text-base shrink-0" />
                                <select required name="gender" defaultValue="" className={selectStyle}>
                                    <option value="" disabled hidden>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <TextField isRequired name="image" className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>IMAGE URL</Label>
                            <Input placeholder="https:// your-pet-imagelink" />
                        </TextField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <TextField
                            isRequired
                            name="healthStatus"
                            className="w-full"
                            validate={(value) => {
                                if (!value || value.trim() === "") return "Health status is required";
                                if (!/^[a-zA-Z\s,.-]+$/.test(value)) return "Only text allowed";
                                return null;
                            }}
                        >
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>HEALTH STATUS</Label>
                            <Input placeholder="e.g., Healthy / Needs attention" />
                            <FieldError className="text-red-400 text-xs pl-1 mt-1" />
                        </TextField>

                        <div className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5]/90 uppercase tracking-wider pl-1 mb-1.5 block'>Vaccination Status</Label>
                            <div className={selectContainerStyle}>
                                <MdOutlineVaccines className="text-[#FFEFD5]/40 text-base shrink-0" />
                                <select required name="vaccinationStatus" defaultValue="" className={selectStyle}>
                                    <option value="" disabled hidden>Select Status</option>
                                    <option value="Fully Vaccinated">Fully Vaccinated</option>
                                    <option value="Partially Vaccinated">Partially Vaccinated</option>
                                    <option value="Not Vaccinated">Not Vaccinated</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <TextField
                            isRequired
                            name="location"
                            className="w-full"
                            validate={(value) => {
                                if (!value || value.trim() === "") return "Location is required";
                                if (!/^[a-zA-Z\s,.-]+$/.test(value)) return "Only text allowed";
                                return null;
                            }}
                        >
                            <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>LOCATION</Label>
                            <Input placeholder="e.g., Dhaka, Bangladesh" />
                            <FieldError className="text-red-400 text-xs pl-1 mt-1" />
                        </TextField>

                        <TextField isRequired type="number" name="adoptionFee" className="w-full">
                            <Label className='text-xs font-bold text-[#FFEFD5]/90 uppercase tracking-wider pl-1 mb-1.5 block'>Adoption Fee ($)</Label>
                            <Input placeholder="Free Adoption" />
                        </TextField>
                    </div>

                    <TextField
                        isRequired
                        type="email"
                        name="ownerEmail"
                        className="w-full"
                        value={isPending ? "Loading..." : (email ?? "")}
                        isReadOnly
                    >
                        <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>
                            OWNER EMAIL
                        </Label>
                        <Input placeholder="user email" />
                    </TextField>

                    <div className="w-full">
                        <Label className='text-xs font-bold text-[#FFEFD5] tracking-wider pl-1 mb-1.5 block'>DESCRIPTION</Label>
                        <div className="p-3 bg-[#eecbb3] border border-white/10 rounded-xl focus-within:border-white transition-all">
                            <TextArea
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
                        LIST PET FOR ADOPTION <FaPaw />
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default AddPetPage;