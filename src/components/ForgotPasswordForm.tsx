'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden">
      {/* Main Container */}
      <div className="self-stretch p-12 flex flex-col w-full  gap-12 overflow-hidden">
        {/* Header Navigation */}
        <div className="self-stretch py-1 flex justify-between  overflow-hidden">
          <Link href="/login" className="rounded-lg flex justify-center items-center gap-1 overflow-hidden hover:gap-2 transition-all duration-200">
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
        <div className="w-full max-w-[500px] p-6 flex self-center flex-col justify-start items-start gap-14 overflow-hidden">
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
                Forgot Your Password?
              </div>
              <div className="w-full max-w-[452px] text-center justify-start text-zinc-500 text-base font-normal font-['Manrope'] leading-normal">
                No worries. Enter your email and we&apos;ll send you a reset link.
              </div>
            </div>
          </div>

          {/* Success Alert */}
          {showAlert && (
            <div className="self-stretch p-4 bg-green-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-green-300 inline-flex justify-start items-start gap-3">
              <div className="w-5 h-5 relative overflow-hidden">
                <svg className="w-full h-full text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch justify-start text-green-700 text-sm font-medium font-['Manrope'] leading-tight">
                    We&apos;ve sent a password reset link to your email.
                  </div>
                  <div className="self-stretch justify-start text-green-700 text-sm font-normal font-['Manrope'] leading-tight">
                    Follow the instructions there to create a new password. Didn&apos;t get the email? Check your spam folder or resend it.
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseAlert}
                className="w-5 h-5 relative p-2 rounded-lg flex justify-center items-center gap-2 overflow-hidden hover:bg-green-100 transition-colors duration-200"
              >
                <div className="w-5 h-5 relative overflow-hidden">
                  <svg className="w-full h-full text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>
            </div>
          )}

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
                disabled={isSubmitted}
                className="self-stretch px-6 py-3 bg-teal-400 rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-teal-500 disabled:bg-teal-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <div className="justify-start text-zinc-800 text-sm font-medium font-['Manrope']">
                  {isSubmitted ? 'Reset Link Sent' : 'Send Reset Link'}
                </div>
              </button>
            </div>

            {/* Info Notice */}
            <div className="self-stretch p-2 bg-zinc-100 rounded-lg inline-flex justify-center items-center gap-2.5">
              <div className="w-full max-w-[452px] text-center justify-start">
                <span className="text-zinc-600 text-xs font-medium font-['Manrope'] leading-none">
                  Check your inbox and spam folder. The reset link will expire in{' '}
                </span>
                <span className="text-zinc-800 text-xs font-semibold font-['Manrope'] leading-none">
                  15 minutes
                </span>
                <span className="text-zinc-600 text-xs font-medium font-['Manrope'] leading-none">
                  .
                </span>
              </div>
            </div>

            {/* Additional Help */}
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="text-center justify-start text-neutral-600 text-sm font-medium font-['Manrope'] leading-tight">
                Remember your password?
              </div>
              <Link href="/login" className="text-center justify-start text-teal-500 text-sm font-semibold font-['Manrope'] leading-tight hover:text-teal-600 transition-colors duration-200">
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 