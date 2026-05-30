

import RequestCard from '@/components/adopttion/RequestCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { FaPaw } from 'react-icons/fa';

const MyRequestsPage = async () => {

    const tokenObj = await auth.api.getToken({
        headers: await headers()
    })
    const token = tokenObj?.token;

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const userId = session?.user?.id


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-requests/${userId}`, {
        cache: 'no-store',
        headers: {
            'authorization': `Bearer ${token}`
        }
    });
    const myRequests = await res.json();

    const totalRequests = myRequests.length;
    const pendingRequests = myRequests.filter(req => req.status === 'Pending').length;
    const approvedRequests = myRequests.filter(req => req.status === 'Approved').length;
    const rejectedRequests = myRequests.filter(req => req.status === 'Rejected').length;

    return (
        <div className="min-h-screen bg-[#110D05] text-[#F3EFE0] p-6 md:p-13">
            <div className="mb-8">
                <span className="bg-[#EAB308]/10 text-[#EAB308] text-xs px-3 py-1 rounded-full font-semibold  inline-flex gap-2 items-center
                 tracking-wider border border-[#463a1e]">
                    <FaPaw></FaPaw> MY REQUESTS
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold mt-3 tracking-tight text-white">
                    My <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FACC15] via-[#EAB308] to-[#CA8A04]">Adoption Requests</span>
                </h1>
                <p className="text-[#D4C3A3] text-sm mt-1">Track the status of all your adoption requests here.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-[#1C160C] border border-[#3A2E1A] p-5 rounded-2xl text-center shadow-lg transition-all hover:border-[#635120]">
                    <span className="text-3xl font-black block text-[#FACC15]">{totalRequests}</span>
                    <span className="text-xs font-semibold text-[#D4C3A3] tracking-wider mt-1 block">TOTAL</span>
                </div>
                <div className="bg-[#1C160C] border border-[#3A2E1A] p-5 rounded-2xl text-center shadow-lg transition-all hover:border-[#635120]">
                    <span className="text-3xl font-black block text-[#EAB308]">{pendingRequests}</span>
                    <span className="text-xs font-semibold text-[#D4C3A3] uppercase tracking-wider mt-1 block">PENDING</span>
                </div>
                <div className="bg-[#1C160C] border border-[#3A2E1A] p-5 rounded-2xl text-center shadow-lg transition-all hover:border-[#635120]">
                    <span className="text-3xl font-black block text-green-500">{approvedRequests}</span>
                    <span className="text-xs font-semibold text-[#D4C3A3] uppercase tracking-wider mt-1 block">APPROVED</span>
                </div>
                <div className="bg-[#1C160C] border border-[#3A2E1A] p-5 rounded-2xl text-center shadow-lg transition-all hover:border-[#635120]">
                    <span className="text-3xl font-black block text-rose-500">{rejectedRequests}</span>
                    <span className="text-xs font-semibold text-[#D4C3A3] uppercase tracking-wider mt-1 block">Rejected</span>
                </div>
            </div>

            <div className="bg-[#1C160C] border border-[#3A2E1A] rounded-2xl overflow-hidden shadow-xl">

                {
                    totalRequests === 0 ? <>  <div className="p-10  flex items-center justify-center gap-3 text-[#D4C3A3]/60 text-xl">
                        You haven't submitted any adoption requests yet.<FaPaw></FaPaw>
                    </div></>
                        :
                        <><div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 bg-[#271E10]
                 border-b border-[#3A2E1A] text-xs font-bold  tracking-wider text-[#F59E0B]">
                            <div>PET NAME</div>
                            <div>REQUEST DATE</div>
                            <div>PICKUP DATE</div>
                            <div className="text-center">Status</div>
                            <div className="text-center">Actions</div>

                        </div>

                            <div className="divide-y divide-[#3A2E1A]/60">
                                {
                                    myRequests.map(request => (
                                        <RequestCard key={request._id} request={request} />))

                                }
                            </div></>
                }

            </div>
        </div>
    );
};

export default MyRequestsPage;