'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField, toast } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPaw } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {

    const signIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { email, password } = userData;
        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
        });



        if (error) {
            toast.danger("Error: " + (error.message || "Something went wrong!"));
        } else {
            toast.success("Login successful! Welcome back to Pawsy.", {
                actionProps: {
                    className: "bg-success text-success-foreground",

                },
                description: "You have logged in successfully.",
            });

            router.push("/");
        }

    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-[#e9d5b3] p-4 font-sans'>
            <Card className="w-full max-w-md p-8 bg-[#3a2d17] backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl">

                <div className='flex flex-col items-center gap-2 mb-4'>
                    <div className="relative w-20 h-20 bg-[#FFEFD5] p-2 rounded-full shadow-inner flex items-center justify-center">
                        <Image
                            src="/paw.png"
                            alt="Pawsy Logo"
                            width={64}
                            height={64}
                            className="object-contain"
                            priority
                        />
                    </div>
                    <p className="font-extrabold text-3xl text-[#FFEFD5] tracking-tight flex items-center gap-2">
                        Pawsy <FaPaw className="text-sm text-[#FFEFD5]/80" />
                    </p>
                    <p className='text-xs sm:text-sm text-[#FFEFD5]/70 font-medium tracking-tight'>
                        Sign in your account to get started</p>
                </div>

                <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>


                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='font-bold text-[#FFEFD5]'>Email</Label>
                        <Input placeholder="Enter Your Email Address" />
                        <FieldError className="text-red-400 text-xs mt-1" />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className='font-bold text-[#FFEFD5]'>Password</Label>
                        <Input type="password" placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>


                    <div className="flex gap-2 mt-2">
                        <Button type="submit" className='w-full bg-[#FFEFD5] text-[#3a2d17] font-bold hover:bg-[#ffe6b3] transition-all'>
                            Sign In
                        </Button>
                    </div>
                </Form>

                <div className="my-6 flex items-center gap-4 text-white/10">
                    <div className="flex-1 h-px bg-white/10" />
                    <p className="text-xs font-bold text-[#FFEFD5]/40 uppercase">or</p>
                    <div className="flex-1 h-px bg-white/10" />
                </div>

                <div className='flex items-center gap-4'>
                    <Button onClick={signIn}
                        className="w-full h-11 bg-white/5 text-[#FFEFD5] border border-white/10 hover:bg-white/10 font-bold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm shadow-sm flex items-center justify-center gap-2"
                    >
                        <FcGoogle className="text-lg" /> Google
                    </Button>
                </div>

                <p className="text-center text-xs sm:text-sm font-medium text-[#FFEFD5]/60 mt-6">
                    Don't have an account? Sign Up <Link href="/auth/signup"
                        className="text-[#FFEFD5] font-extrabold underline hover:text-[#ffe6b3] pl-1">Sign UP</Link>
                </p>
            </Card>
        </div>
    );
};

export default SignInPage;