import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaTiktok, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaPaw 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-[#FFEFD5] pt-16 pb-8 px-4 sm:px-8 md:px-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-[#FFEFD5]/10 pb-12">
        
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="text-[#FFEFD5] bg-[#FFEFD5]/10 p-2 rounded-xl border border-[#FFEFD5]/20">
             
             
              
              

               <FaPaw size={20}></FaPaw>

            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-wide text-[#FFEFD5]">Pawsy</h2>
              <p className="text-xs text-[#FFEFD5]/60 italic">Adopt. Love. Forever.</p>
            </div>
          </div>
          <p className="text-sm text-[#FFEFD5]/80 leading-relaxed">
            Pawsy is where compassion meets playful hearts. We rescue and care for animals with love and dedication, giving every little paw the safety they deserve.
          </p>
          <Link href="/about">
            <button className="flex items-center gap-2 mt-3 bg-transparent text-[#FFEFD5] border-2 border-[#FFEFD5] hover:bg-[#FFEFD5] hover:text-[#1E1E1E] font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
              <FaPaw className="text-xs" /> Learn More
            </button>
          </Link>
        </div>

        <div className="md:pl-8">
          <h3 className="text-xl font-bold mb-5 text-[#FFEFD5]">Company Link</h3>
          <ul className="space-y-3 text-sm text-[#FFEFD5]/70">
            <li><Link href="/" className="hover:underline hover:text-white transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:underline hover:text-white transition-all">About</Link></li>
            <li><Link href="/all-pets" className="hover:underline hover:text-white transition-all">Adoption</Link></li>
            <li><Link href="/faqs" className="hover:underline hover:text-white transition-all">FAQS</Link></li>
            <li><Link href="/blog" className="hover:underline hover:text-white transition-all">Blog / News</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-[#FFEFD5]">Follow Us</h3>
          <ul className="space-y-3 text-sm text-[#FFEFD5]/70">
            <li><a  className="flex items-center gap-3 hover:text-white transition-all"><FaFacebookF /> Facebook</a></li>
            <li><a className="flex items-center gap-3 hover:text-white transition-all"><FaInstagram /> Instagram</a></li>
            <li><a className="flex items-center gap-3 hover:text-white transition-all"><FaYoutube /> Youtube</a></li>
            <li><a  className="flex items-center gap-3 hover:text-white transition-all"><FaLinkedinIn /> LinkedIn</a></li>
          </ul>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#FFEFD5]">Email</h3>
            <a href="mailto:pawsy@care.com" className="text-sm text-[#FFEFD5]/70 hover:text-white transition-all flex items-center gap-2">
              <FaEnvelope /> pawsy@care.com
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-[#FFEFD5]">Contact Us</h3>
            <p className="text-sm text-[#FFEFD5]/70 mb-1">79 Harley Street, UK</p>
            <a href="tel:+18907653" className="text-sm text-[#FFEFD5]/70 hover:text-white transition-all flex items-center gap-2">
              <FaPhoneAlt /> +1 (890) 7653
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        <div>
          <h4 className="text-lg font-bold mb-3 text-[#FFEFD5]">Our Newsletter</h4>
          <button className="flex items-center justify-center gap-2 bg-[#FFEFD5] text-[#1E1E1E] font-bold px-8 py-3.5 rounded-xl hover:bg-white transition-all duration-300 text-sm shadow-md">
            <FaPaw className="text-xs" /> Subscribe Now
          </button>
        </div>

        <div className="md:pl-10">
          <h4 className="text-lg font-bold mb-2 text-[#FFEFD5]">Open Hour</h4>
          <p className="text-sm text-[#FFEFD5]/60">Monday – Friday: 7:00 AM – 9:00 PM</p>
          <p className="text-sm text-[#FFEFD5]/60">Saturday – Sunday: 8:00 AM – 10:00 PM</p>
        </div>

        <div
         className="text-right hidden md:flex justify-end ">
          <div>
            
            <Image 
              src="/biglogo.png"
              alt="Pawsy Watermark" 
              height={1000} width={1000}
              className="object-contain "
            />
          </div>
        </div>
        
      </div>

      <div className="max-w-7xl mx-auto text-center mt-12 pt-6 border-t border-[#FFEFD5]/5 text-xs text-[#FFEFD5]/40">
        &copy; {new Date().getFullYear()} Pawsy Platform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;