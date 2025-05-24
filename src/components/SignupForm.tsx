'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignupForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', { email });
  };

  return (
    <div className="min-h-screen bg-white flex justify-start items-center overflow-hidden">
      {/* Left Image Section - Only visible on large screens */}
      <div className="hidden lg:flex flex-1 h-screen relative">
        <div className="absolute inset-0 bg-indigo-300/25" />
        <Image
          src="/images/signup.jpg"
          alt="Signup background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-indigo-300/25" />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:flex-1 self-stretch px-10 py-12 inline-flex flex-col justify-start items-center gap-12 overflow-hidden">
        {/* Header Navigation */}
        <div className="self-stretch px-2.5 py-1 inline-flex justify-between items-start overflow-hidden">
          <Link href="/" className="rounded-lg flex justify-center items-center gap-1 overflow-hidden hover:gap-2 transition-all duration-200">
            <div className="w-5 h-5 relative overflow-hidden">
              <svg className="w-full h-full text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="justify-start text-neutral-600 text-sm font-medium font-['Manrope']">Back</div>
          </Link>
          <Link href="/login" className="text-center justify-start text-teal-500 text-sm font-semibold font-['Manrope'] leading-tight hover:text-teal-600 transition-colors duration-200">
            Login
          </Link>
        </div>

        {/* Main Form Container */}
        <div className="w-full max-w-[500px] p-6 flex flex-col justify-start items-start gap-14 overflow-hidden">
          {/* Header Section */}
          <div className="self-stretch flex flex-col justify-start items-center gap-6 overflow-hidden">
            {/* Logo */}
            <div className="inline-flex justify-center items-center gap-2.5 overflow-hidden">
              <Image
                src="/logoBlack.svg"
                alt="Penthry Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-2">
              <div className="w-full max-w-[452px] text-center justify-start text-zinc-800 text-3xl font-semibold font-['Manrope'] leading-10">
                Welcome to Penthry
              </div>
              <div className="w-full max-w-[452px] text-center justify-start text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
                Streamline your business operations.
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="self-stretch flex flex-col justify-start items-center gap-8">
            <div className="w-full max-w-[452px] flex flex-col justify-start items-center gap-6">
              {/* Email Input */}
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-start items-center gap-2 overflow-hidden focus-within:outline-teal-500 focus-within:outline-2 transition-all duration-200">
                    <div className="flex-1 flex justify-start items-center gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email"
                        required
                        className="flex-1 text-zinc-800 text-base font-normal font-['Manrope'] leading-normal bg-transparent border-none outline-none placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="self-stretch px-6 py-3 bg-teal-400 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-teal-500 transition-colors duration-200"
              >
                <div className="justify-start text-zinc-800 text-sm font-medium font-['Manrope']">Continue with Email</div>
              </button>
            </div>

            {/* Divider */}
            <div className="self-stretch inline-flex justify-center items-center gap-3">
              <div className="flex-1 h-px relative bg-zinc-300" />
              <div className="text-center justify-start text-zinc-500 text-xs font-medium font-['Manrope'] leading-none">OR</div>
              <div className="flex-1 h-px relative bg-zinc-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="self-stretch flex flex-col justify-start items-start gap-6 overflow-hidden">
              {/* Google Login */}
              <button
                type="button"
                className="self-stretch px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-center items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-6 h-6 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="justify-start text-neutral-600 text-base font-medium font-['Manrope'] leading-normal">Continue with Google</div>
              </button>

             {/* Microsoft Login */}
             <button
                type="button"
                className="self-stretch px-4 py-2.5 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-offset-[-1px] outline-gray-400 inline-flex justify-center items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-5 h-5 relative">
                  <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#f25022" d="M1 1h10v10H1z"/>
                    <path fill="#00a4ef" d="M1 12h10v10H1z"/>
                    <path fill="#7fba00" d="M12 1h10v10H12z"/>
                    <path fill="#ffb900" d="M12 12h10v10H12z"/>
                  </svg>
                </div>
                <div className="justify-start text-neutral-600 text-base font-medium font-['Manrope'] leading-normal">Continue with Microsoft</div>
              </button>
            </div>

            {/* Login Link */}
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="text-center justify-start text-neutral-600 text-sm font-medium font-['Manrope'] leading-tight">Already have an account?</div>
              <Link href="/login" className="text-center justify-start text-teal-500 text-sm font-semibold font-['Manrope'] leading-tight hover:text-teal-600 transition-colors duration-200">
                Login
              </Link>
            </div>
          </form>

          {/* Security Notice */}
          <div className="self-stretch py-2 bg-zinc-100 rounded-lg inline-flex justify-center items-center gap-2.5">
            <div className="w-full max-w-[452px] text-center justify-start text-zinc-600 text-xs font-medium font-['Manrope'] leading-none">
              We&apos;ll never spam you. Your data stays safe.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 